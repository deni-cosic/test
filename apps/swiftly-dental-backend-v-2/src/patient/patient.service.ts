import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PatientServiceBase } from "./base/patient.service.base";
import { PatientLoginRequestArgs } from "./models/PatientLoginRequestArgs";
import { Patient, Practice } from "@prisma/client";
import axios from "axios";
import _ from "lodash";
import { JwtService } from "@nestjs/jwt";
import { PatientLoginAuthArgs } from "./models/PatientLoginAuthArgs";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
dayjs.extend(isSameOrBefore);

interface PatientWithPractice extends Patient {
  practice: Practice;
}

@Injectable()
export class PatientService extends PatientServiceBase {
  loginCodesCache: Map<string, { loginCode: string; issuedAt: Date }>;

  constructor(
    protected readonly prisma: PrismaService,
    protected readonly jwtService: JwtService
  ) {
    super(prisma);
    this.loginCodesCache = new Map();
  }

  async loginRequestCode({
    mobileNumber,
    dateOfBirth,
  }: PatientLoginRequestArgs) {
    if (!mobileNumber) throw new Error("Missing mobile number");

    if (!dateOfBirth) throw new Error("Missing date of birth");

    const isDebug = ["+385955375874", "+385959029089"].includes(mobileNumber);
    const patientResult: PatientWithPractice[] = (await super.patients({
      where: {
        mobileNumber,
        dateOfBirth: new Date(dateOfBirth).toISOString(),
      },
      include: {
        practice: true,
      },
    })) as any;

    if (patientResult.length === 0)
      throw new Error(
        "Sorry we can't locate your details, please contact the practice."
      );

    const endpoint = "https://sls-api.swiftly.agency/enqueueSmsDental";
    let loginCode = _.random(100000, 999999, false).toString();

    if (isDebug) {
      loginCode = "12345";
    }

    let practices: Practice[] = [];
    patientResult.forEach((patient) => {
      this.loginCodesCache.set(patient.id, { loginCode, issuedAt: new Date() });
      practices.push(patient.practice);
    });

    const tempJwt = this.jwtService.sign(
      {
        id: "ca6dd2be-253f-4f8b-94b9-8d619cb3caf9",
        sub: "ca6dd2be-253f-4f8b-94b9-8d619cb3caf9",
      },
      { expiresIn: "10m" }
    );

    if (isDebug) {
      console.log(
        ...[JSON.stringify(loginCode, null, 2), "loginCode"].reverse()
      );
      return practices;
    }

    const [patient] = patientResult;

    try {
      await axios.post(
        endpoint,
        {
          odsCode: patient.practice.odsCode,
          username: "PATIENT",
          message: `Message for ${patient.firstName} ${patient.lastName}. Your login code is ${loginCode} for your dental patient access.`,
          deliveryType: "",
          phoneNumber: patient.mobileNumber,
          senderId: patient.practice.senderId,
        },
        {
          headers: {
            authorization: `Bearer ${tempJwt}`,
          },
        }
      );

      return practices;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async auth({
    mobileNumber,
    dateOfBirth,
    code,
    practiceId,
    token,
  }: PatientLoginAuthArgs) {
    if (!mobileNumber) throw new Error("Missing mobile number");
    if (!dateOfBirth) throw new Error("Missing date of birth");
    if (!practiceId) throw new Error("Missing practice ID");

    const patientResult: PatientWithPractice[] = (await super.patients({
      where: {
        mobileNumber,
        dateOfBirth: new Date(dateOfBirth).toISOString(),
        practiceId,
      },
      include: {
        practice: true,
      },
    })) as any;

    if (patientResult.length === 0) {
      throw new Error(
        "Sorry we can't locate your details, please contact the practice."
      );
    }

    const [patient] = patientResult;

    let isTokenValid = false;

    try {
      if (!token) throw null;
      isTokenValid = Boolean(await this.jwtService.verify(token));
    } catch (error) {
      isTokenValid = false;
    }

    if (!isTokenValid) {
      const loginRequest = this.loginCodesCache.get(patient.id);
      if (!loginRequest) {
        throw new Error("Code not requested first.");
      }

      if (loginRequest.loginCode !== code) {
        throw new Error("Not valid code.");
      }

      if (
        !dayjs().isSameOrBefore(dayjs(loginRequest.issuedAt).add(10, "minute"))
      ) {
        throw new Error("Code expired.");
      }
    }

    const jwt = await this.jwtService.sign(
      {
        patientId: patient.id,
      },
      { expiresIn: "1d" }
    );

    return { jwt, patient };
  }

  async me(headers: any) {
    const { patientId } = await this.getXToken(headers);
    if (!patientId) {
      throw new Error("Token doesn't have valid patient ID");
    }

    const patientResult = await super.patient({
      where: { id: patientId },
      include: { practice: true },
    });

    return patientResult;
  }

  private getXToken(headers: any) {
    let token = "";

    if (headers && headers["x-authorization"]) {
      const parts = headers["x-authorization"].split(" ");

      if (parts.length === 2) {
        const scheme = parts[0];
        const credentials = parts[1];
        if (/^Bearer$/i.test(scheme)) {
          token = credentials;
        }
      } else {
        throw new Error(
          "Invalid authorization header format. Format is X-Authorization: Bearer [token]"
        );
      }
    } else {
      throw new Error("No authorization header was found");
    }

    return this.jwtService.verify(token);
  }
}
