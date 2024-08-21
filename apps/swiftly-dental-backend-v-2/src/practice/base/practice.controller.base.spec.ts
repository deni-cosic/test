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
import { PracticeController } from "../practice.controller";
import { PracticeService } from "../practice.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  addressLine1: "exampleAddressLine1",
  addressLine2: "exampleAddressLine2",
  addressLine3: "exampleAddressLine3",
  createdAt: new Date(),
  googlePlaceId: "exampleGooglePlaceId",
  id: "exampleId",
  name: "exampleName",
  nhsReviewUrl: "exampleNhsReviewUrl",
  odsCode: "exampleOdsCode",
  phoneNumber: "examplePhoneNumber",
  postcode: "examplePostcode",
  remindAfter: 42,
  remindEvery: 42,
  remindedAt: new Date(),
  senderId: "exampleSenderId",
  stripeConnectedAccountId: "exampleStripeConnectedAccountId",
  updatedAt: new Date(),
  website: "exampleWebsite",
};
const CREATE_RESULT = {
  addressLine1: "exampleAddressLine1",
  addressLine2: "exampleAddressLine2",
  addressLine3: "exampleAddressLine3",
  createdAt: new Date(),
  googlePlaceId: "exampleGooglePlaceId",
  id: "exampleId",
  name: "exampleName",
  nhsReviewUrl: "exampleNhsReviewUrl",
  odsCode: "exampleOdsCode",
  phoneNumber: "examplePhoneNumber",
  postcode: "examplePostcode",
  remindAfter: 42,
  remindEvery: 42,
  remindedAt: new Date(),
  senderId: "exampleSenderId",
  stripeConnectedAccountId: "exampleStripeConnectedAccountId",
  updatedAt: new Date(),
  website: "exampleWebsite",
};
const FIND_MANY_RESULT = [
  {
    addressLine1: "exampleAddressLine1",
    addressLine2: "exampleAddressLine2",
    addressLine3: "exampleAddressLine3",
    createdAt: new Date(),
    googlePlaceId: "exampleGooglePlaceId",
    id: "exampleId",
    name: "exampleName",
    nhsReviewUrl: "exampleNhsReviewUrl",
    odsCode: "exampleOdsCode",
    phoneNumber: "examplePhoneNumber",
    postcode: "examplePostcode",
    remindAfter: 42,
    remindEvery: 42,
    remindedAt: new Date(),
    senderId: "exampleSenderId",
    stripeConnectedAccountId: "exampleStripeConnectedAccountId",
    updatedAt: new Date(),
    website: "exampleWebsite",
  },
];
const FIND_ONE_RESULT = {
  addressLine1: "exampleAddressLine1",
  addressLine2: "exampleAddressLine2",
  addressLine3: "exampleAddressLine3",
  createdAt: new Date(),
  googlePlaceId: "exampleGooglePlaceId",
  id: "exampleId",
  name: "exampleName",
  nhsReviewUrl: "exampleNhsReviewUrl",
  odsCode: "exampleOdsCode",
  phoneNumber: "examplePhoneNumber",
  postcode: "examplePostcode",
  remindAfter: 42,
  remindEvery: 42,
  remindedAt: new Date(),
  senderId: "exampleSenderId",
  stripeConnectedAccountId: "exampleStripeConnectedAccountId",
  updatedAt: new Date(),
  website: "exampleWebsite",
};

const service = {
  createPractice() {
    return CREATE_RESULT;
  },
  practices: () => FIND_MANY_RESULT,
  practice: ({ where }: { where: { id: string } }) => {
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

describe("Practice", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PracticeService,
          useValue: service,
        },
      ],
      controllers: [PracticeController],
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

  test("POST /practices", async () => {
    await request(app.getHttpServer())
      .post("/practices")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        remindedAt: CREATE_RESULT.remindedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /practices", async () => {
    await request(app.getHttpServer())
      .get("/practices")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          remindedAt: FIND_MANY_RESULT[0].remindedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /practices/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/practices"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /practices/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/practices"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        remindedAt: FIND_ONE_RESULT.remindedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /practices existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/practices")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        remindedAt: CREATE_RESULT.remindedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/practices")
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
