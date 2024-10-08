import { ValidationPipe } from "@nestjs/common";
import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { OpenAPIObject, SwaggerModule } from "@nestjs/swagger";
import { HttpExceptionFilter } from "./filters/HttpExceptions.filter";
import { AppModule } from "./app.module";
import { connectMicroservices } from "./connectMicroservices";
import {
  swaggerPath,
  swaggerDocumentOptions,
  swaggerSetupOptions,
} from "./swagger";
import bodyParser from "body-parser";
import { UserService } from "./user/user.service";
import { JwtService } from "@nestjs/jwt";
import { Request, Response, NextFunction } from "express";
const { PORT = 3000 } = process.env;

async function main() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(async (req: Request, res: Response, next: NextFunction) => {
    if (req.path === "/graphql" && req.method === "POST") {
      try {
        const parser = bodyParser.json();
        await new Promise((resolve) => parser(req, res, resolve));

        if (req.body.operationName === "login") {
          return next();
        }

        const token = req.headers["authorization"]?.split("Bearer ")[1];
        const jwtService = app.get(JwtService);

        const data = jwtService.verify(token ?? "");
        const userService = app.get(UserService);
        const user = await userService.user({
          where: { id: data.sub as string },
          select: {
            roles: true,
          },
        });

        if ((user?.roles as string).includes("admin")) {
          return next();
        } else {
          res.status(401).send({ message: "Unauthorized" });
        }
      } catch (error) {
        res.status(401).send({ message: "Unauthorized" });
      }
    } else {
      next();
    }
  });

  app.setGlobalPrefix("api");
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: false,
    })
  );

  const document = SwaggerModule.createDocument(app, swaggerDocumentOptions);

  /** check if there is Public decorator for each path (action) and its method (findMany / findOne) on each controller */
  Object.values((document as OpenAPIObject).paths).forEach((path: any) => {
    Object.values(path).forEach((method: any) => {
      if (
        Array.isArray(method.security) &&
        method.security.includes("isPublic")
      ) {
        method.security = [];
      }
    });
  });

  await connectMicroservices(app);
  await app.startAllMicroservices();

  SwaggerModule.setup(swaggerPath, app, document, swaggerSetupOptions);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new HttpExceptionFilter(httpAdapter));

  void app.listen(PORT);

  return app;
}

module.exports = main();
