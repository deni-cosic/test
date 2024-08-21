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
import { FeaturePermissionController } from "../featurePermission.controller";
import { FeaturePermissionService } from "../featurePermission.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  analytics: "true",
  createdAt: new Date(),
  dentalAdviceLink: "true",
  dentalSubscriptions: "true",
  form: "true",
  id: "exampleId",
  leads: "true",
  messageTemplate: "true",
  practiceInfoLink: "true",
  requestFeedback: "true",
  requestPayment: "true",
  sendDocument: "true",
  sendMessageToMany: "true",
  updatedAt: new Date(),
  videoCall: "true",
  workflows: "true",
};
const CREATE_RESULT = {
  analytics: "true",
  createdAt: new Date(),
  dentalAdviceLink: "true",
  dentalSubscriptions: "true",
  form: "true",
  id: "exampleId",
  leads: "true",
  messageTemplate: "true",
  practiceInfoLink: "true",
  requestFeedback: "true",
  requestPayment: "true",
  sendDocument: "true",
  sendMessageToMany: "true",
  updatedAt: new Date(),
  videoCall: "true",
  workflows: "true",
};
const FIND_MANY_RESULT = [
  {
    analytics: "true",
    createdAt: new Date(),
    dentalAdviceLink: "true",
    dentalSubscriptions: "true",
    form: "true",
    id: "exampleId",
    leads: "true",
    messageTemplate: "true",
    practiceInfoLink: "true",
    requestFeedback: "true",
    requestPayment: "true",
    sendDocument: "true",
    sendMessageToMany: "true",
    updatedAt: new Date(),
    videoCall: "true",
    workflows: "true",
  },
];
const FIND_ONE_RESULT = {
  analytics: "true",
  createdAt: new Date(),
  dentalAdviceLink: "true",
  dentalSubscriptions: "true",
  form: "true",
  id: "exampleId",
  leads: "true",
  messageTemplate: "true",
  practiceInfoLink: "true",
  requestFeedback: "true",
  requestPayment: "true",
  sendDocument: "true",
  sendMessageToMany: "true",
  updatedAt: new Date(),
  videoCall: "true",
  workflows: "true",
};

const service = {
  createFeaturePermission() {
    return CREATE_RESULT;
  },
  featurePermissions: () => FIND_MANY_RESULT,
  featurePermission: ({ where }: { where: { id: string } }) => {
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

describe("FeaturePermission", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FeaturePermissionService,
          useValue: service,
        },
      ],
      controllers: [FeaturePermissionController],
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

  test("POST /featurePermissions", async () => {
    await request(app.getHttpServer())
      .post("/featurePermissions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /featurePermissions", async () => {
    await request(app.getHttpServer())
      .get("/featurePermissions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /featurePermissions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/featurePermissions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /featurePermissions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/featurePermissions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /featurePermissions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/featurePermissions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/featurePermissions")
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
