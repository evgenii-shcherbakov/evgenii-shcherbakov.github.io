import { HttpExceptionFilter } from '@apps/api-gateway/lib/filters/http-exception.filter';
import { RpcExceptionFilter } from '@apps/api-gateway/lib/filters/rpc-exception.filter';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { BackendEnvironment } from '@packages/environment';
import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule, { cors: true });
  const configService = app.get(ConfigService<BackendEnvironment>);
  const port = configService.get('PORT');
  const logger = new Logger();

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new RpcExceptionFilter(), new HttpExceptionFilter());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Platform')
    .setDescription('Platform API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const swaggerDocument: OpenAPIObject = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('/', app, swaggerDocument, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(port, () => logger.log(`ApiGateway running on http://localhost:${port}`));
}
bootstrap();
