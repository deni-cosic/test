import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LeadService } from "./lead.service";
import { LeadControllerBase } from "./base/lead.controller.base";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import { Lead } from "./base/Lead";
import { LeadCreateInput } from "./base/LeadCreateInput";
import * as errors from "../errors";
import _ from "lodash";
import { Practice } from "src/practice/base/Practice";

@swagger.ApiTags("leads")
@common.Controller("leads")
export class LeadController extends LeadControllerBase {
  constructor(
    protected readonly service: LeadService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Lead })
  @nestAccessControl.UseRoles({
    resource: "Lead",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: LeadCreateInput,
  })
  async createLead(@common.Body() data: LeadCreateInput): Promise<Lead> {
    const body = data;
    const rawRequest = JSON.parse(body.rawRequest);

    const payload: any = {
      contacted: false,
      meetingDate: null,
      convertedClientId: null,
    };

    const practiceIdKey = Object.keys(rawRequest).find((key) =>
      key.endsWith("_p")
    );
    const nameKey = Object.keys(rawRequest).find((key) =>
      key.endsWith("_name")
    );
    const dateOfBirthKey = Object.keys(rawRequest).find((key) =>
      key.endsWith("_dateOfBirth")
    );
    const mobileNumberKey = Object.keys(rawRequest).find((key) =>
      key.endsWith("_mobileNumber")
    );
    const emailKey = Object.keys(rawRequest).find((key) =>
      key.endsWith("_email")
    );
    const interestsKey = Object.keys(rawRequest).find((key) =>
      key.endsWith("_interests")
    );
    const platformSourceKey = Object.keys(rawRequest).find((key) =>
      key.endsWith("_platformSource")
    );
    const marketingConsentKey = Object.keys(rawRequest).find((key) =>
      key.endsWith("_marketingConsent")
    );

    if (practiceIdKey) {
      payload.practice = { id: rawRequest[practiceIdKey] } as Practice;
    }
    if (nameKey) {
      payload.firstName = rawRequest[nameKey].first;
      payload.lastName = rawRequest[nameKey].last;
    }
    if (dateOfBirthKey) {
      const rawValue = rawRequest[dateOfBirthKey];
      payload.dateOfBirth = new Date(
        `${rawValue.year}-${rawValue.month}-${rawValue.day}`
      );
    }
    if (mobileNumberKey) {
      const rawValue = rawRequest[mobileNumberKey];
      const areaCode = rawValue.area;
      const phoneNumber = rawValue.phone;
      payload.mobileNumber = `${areaCode}${phoneNumber}`;
    }
    if (emailKey) {
      payload.email = rawRequest[emailKey];
    }
    if (interestsKey) {
      const rawValue = rawRequest[interestsKey];
      let interests = rawValue;
      // When "Other" option is selected on JotForm, "interests" field becomes object
      // and it's format is: {"0": "Teeth Alignment", "1": "Botox", "2": "Crowns", "other": "Something else"}
      // That is why we check if value is an array. If it is, than we don't have to parse that object.
      if (!Array.isArray(rawValue)) {
        interests = Object.keys(rawValue).map((k) => {
          return k === "other" ? `other:${rawValue[k]}` : rawValue[k];
        });
      }
      payload.interests = interests;
    }
    if (platformSourceKey) {
      payload.platformSource = rawRequest[platformSourceKey];
    }
    if (marketingConsentKey) {
      const rawValue = rawRequest[marketingConsentKey];
      payload.marketingConsented = rawValue.startsWith("Yes");
    }

    const otherFields = _.pickBy(rawRequest, (__, key) => {
      return ![
        "_p",
        "_name",
        "_dateOfBirth",
        "_mobileNumber",
        "_email",
        "_interests",
        "_platformSource",
        "_marketingConsent",
      ].some((fieldName) => key.endsWith(fieldName));
    });
    payload.otherFields = otherFields;

    const leadsResult = await this.service.leads({
      where: {
        practice: { id: payload.practice?.id },
        email: payload.email,
      },
    });
    const existingLead = leadsResult[0];

    if (existingLead) {
      const { practice, ...payloadWithoutPractice } = payload;
      return this.service.updateLead({
        where: { id: existingLead.id },
        data: { ...existingLead, ...payloadWithoutPractice },
      });
    }

    return this.service.createLead({ data: payload });
  }
}
