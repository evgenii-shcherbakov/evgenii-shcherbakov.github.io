import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { BackendEnvironment } from '@packages/environment';
import { AppModule } from '@/app.module';
import { corsOptions } from '@/configs/cors.config';
import { configureSwagger } from '@/configs/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService<BackendEnvironment>);
  const isDevelopment = configService.get('NODE_ENV') !== 'production';
  const port = configService.get<string | number>('PORT') ?? 5555;
  const logger = new Logger(bootstrap.name);

  app.enableCors(corsOptions);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  configureSwagger(app);

  await app.listen(port, async () => {
    if (isDevelopment) {
      return logger.log(`Backend started at http://localhost:${port}`);
    }

    const url = await app.getUrl();
    logger.log(`Backend started at ${url}`);
  });
}

bootstrap();
