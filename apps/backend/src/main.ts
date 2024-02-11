import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { BackendEnvironment } from '@shared/environment';
import { AppModule } from '@/app.module';
import { corsOptions } from '@/configs/cors.config';
import { configureSwagger } from '@/configs/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService<BackendEnvironment>);
  const port = configService.get<string | number>('PORT') ?? 5555;
  const logger = new Logger();

  app.enableCors(corsOptions);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  configureSwagger(app);

  await app.listen(port, () => logger.log(`Backend started at port ${port}...`));
}

bootstrap();
