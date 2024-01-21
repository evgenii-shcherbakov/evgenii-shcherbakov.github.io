import {
  DocumentBuilder,
  OpenAPIObject,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

const swaggerConfig = new DocumentBuilder()
  .setTitle('evgenii-shcherbakov.github.io')
  .setDescription('evgenii-shcherbakov.github.io API description')
  .setVersion('1.0')
  .build();

export const configureSwagger = (app: INestApplication) => {
  const swaggerDocument: OpenAPIObject = SwaggerModule.createDocument(app, swaggerConfig);

  const options: SwaggerCustomOptions = {
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui-bundle.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui-standalone-preset.min.js',
    ],
    customCssUrl: ['https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui.min.css'],
  };

  SwaggerModule.setup('/', app, swaggerDocument, options);
};
