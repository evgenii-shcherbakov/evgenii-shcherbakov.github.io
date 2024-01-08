import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

const swaggerConfig = new DocumentBuilder()
  .setTitle('evgenii-shcherbakov.github.io')
  .setDescription('evgenii-shcherbakov.github.io API description')
  .setVersion('1.0')
  .build();

export const configureSwagger = (app: INestApplication) => {
  const swaggerDocument: OpenAPIObject = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('', app, swaggerDocument);
};
