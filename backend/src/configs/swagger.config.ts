// import { resolve } from 'path';
// import { writeFileSync, createWriteStream } from 'fs';
// import { get } from 'http';
import {
  DocumentBuilder,
  OpenAPIObject,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
// import { SwaggerExplorer } from '@nestjs/swagger/dist/swagger-explorer';
// import { static } from 'express';

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
    // jsonDocumentUrl: '/swagger.json',
  };

  SwaggerModule.setup('/', app, swaggerDocument, options);

  // if (process.env.NODE_ENV === 'production') {
  //   app.use(static());
  // }

  // if (process.env.NODE_ENV !== 'production') {
  //   // write swagger ui files
  //   get(`${serverUrl}/swagger/swagger-ui-bundle.js`, function (response) {
  //     response.pipe(createWriteStream('swagger-static/swagger-ui-bundle.js'));
  //     console.log(`Swagger UI bundle file written to: '/swagger-static/swagger-ui-bundle.js'`);
  //   });
  //
  //   get(`${serverUrl}/swagger/swagger-ui-init.js`, function (response) {
  //     response.pipe(createWriteStream('swagger-static/swagger-ui-init.js'));
  //     console.log(`Swagger UI init file written to: '/swagger-static/swagger-ui-init.js'`);
  //   });
  //
  //   get(`${serverUrl}/swagger/swagger-ui-standalone-preset.js`, function (response) {
  //     response.pipe(createWriteStream('swagger-static/swagger-ui-standalone-preset.js'));
  //     console.log(
  //       `Swagger UI standalone preset file written to: '/swagger-static/swagger-ui-standalone-preset.js'`,
  //     );
  //   });
  //
  //   get(`${serverUrl}/swagger/swagger-ui.css`, function (response) {
  //     response.pipe(createWriteStream('swagger-static/swagger-ui.css'));
  //     console.log(`Swagger UI css file written to: '/swagger-static/swagger-ui.css'`);
  //   });
  // }
};
