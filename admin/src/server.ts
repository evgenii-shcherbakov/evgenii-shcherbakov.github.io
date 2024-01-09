import express from 'express';
import payload from 'payload';
import { PORT, PAYLOAD_SECRET } from '@admin/constants/environment';
import { validateEnv } from '@shared/validation/env.validation';
import { ADMIN_ENV_VALIDATION_SCHEMA } from '@shared/constants/env-validation';
import { resolve } from 'path';

const start = async () => {
  const app = express();

  validateEnv(ADMIN_ENV_VALIDATION_SCHEMA, (errorMessage: string) => {
    console.error(errorMessage);
    process.exit(1);
  });

  app.use(express.json());
  app.use(express.static(resolve(__dirname, '../build')));

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
