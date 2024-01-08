import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { BackendEnvironment } from '@shared/types/env-validation';
import { configureSwagger } from '@backend/configs/swagger.config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService<BackendEnvironment>);
  const port = configService.get<string | number>('PORT');
  const logger = new Logger();

  configureSwagger(app);

  await app.listen(port, () => logger.log(`Backend started at port ${port}...`));
}
bootstrap();
