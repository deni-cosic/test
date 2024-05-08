import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { LeadController } from "../lead.controller";
import { LeadService } from "../lead.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  contacted: "true",
  convertedClientId: "exampleConvertedClientId",
  createdAt: new Date(),
  dateOfBirth: new Date(),
  email: "exampleEmail",
  emailConsented: "true",
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  marketingConsented: "true",
  meetingDate: new Date(),
  mobileNumber: "exampleMobileNumber",
  onlyInterestsConsented: "true",
  platformSource: "examplePlatformSource",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  contacted: "true",
  convertedClientId: "exampleConvertedClientId",
  createdAt: new Date(),
  dateOfBirth: new Date(),
  email: "exampleEmail",
  emailConsented: "true",
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  marketingConsented: "true",
  meetingDate: new Date(),
  mobileNumber: "exampleMobileNumber",
  onlyInterestsConsented: "true",
  platformSource: "examplePlatformSource",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    contacted: "true",
    convertedClientId: "exampleConvertedClientId",
    createdAt: new Date(),
    dateOfBirth: new Date(),
    email: "exampleEmail",
    emailConsented: "true",
    firstName: "exampleFirstName",
    id: "exampleId",
    lastName: "exampleLastName",
    marketingConsented: "true",
    meetingDate: new Date(),
    mobileNumber: "exampleMobileNumber",
    onlyInterestsConsented: "true",
    platformSource: "examplePlatformSource",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  contacted: "true",
  convertedClientId: "exampleConvertedClientId",
  createdAt: new Date(),
  dateOfBirth: new Date(),
  email: "exampleEmail",
  emailConsented: "true",
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  marketingConsented: "true",
  meetingDate: new Date(),
  mobileNumber: "exampleMobileNumber",
  onlyInterestsConsented: "true",
  platformSource: "examplePlatformSource",
  updatedAt: new Date(),
};

const service = {
  createLead() {
    return CREATE_RESULT;
  },
  leads: () => FIND_MANY_RESULT,
  lead: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Lead", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LeadService,
          useValue: service,
        },
      ],
      controllers: [LeadController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /leads", async () => {
    await request(app.getHttpServer())
      .post("/leads")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateOfBirth: CREATE_RESULT.dateOfBirth.toISOString(),
        meetingDate: CREATE_RESULT.meetingDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /leads", async () => {
    await request(app.getHttpServer())
      .get("/leads")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateOfBirth: FIND_MANY_RESULT[0].dateOfBirth.toISOString(),
          meetingDate: FIND_MANY_RESULT[0].meetingDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /leads/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/leads"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /leads/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/leads"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateOfBirth: FIND_ONE_RESULT.dateOfBirth.toISOString(),
        meetingDate: FIND_ONE_RESULT.meetingDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /leads existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/leads")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateOfBirth: CREATE_RESULT.dateOfBirth.toISOString(),
        meetingDate: CREATE_RESULT.meetingDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/leads")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
