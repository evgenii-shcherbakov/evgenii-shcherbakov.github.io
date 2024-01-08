import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export const startBackend = async () => {
  const nest = await NestFactory.create(AppModule);
  await nest.init();
  return nest
}