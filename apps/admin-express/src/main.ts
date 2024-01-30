import express from 'express';
import payload from 'payload';
import { resolve } from 'path';
import { ADMIN_ENV_VALIDATION_SCHEMA, validateEnv } from '@shared/environment';
import { PAYLOAD_SECRET, PORT } from '@admin/constants/environment';

const start = async () => {
  const app = express();

  validateEnv(ADMIN_ENV_VALIDATION_SCHEMA, (errorMessage: string) => {
    console.error(errorMessage);
    process.exit(1);
  });

  app.use(express.json());
  app.use(express.static(resolve(__dirname, '../public')));

  app.get('/', (_, res) => {
    res.redirect('/admin');
  });

  await payload.init({
    secret: PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  app.listen(PORT, () => payload.logger.info(`Admin app started...`));
};

start();
