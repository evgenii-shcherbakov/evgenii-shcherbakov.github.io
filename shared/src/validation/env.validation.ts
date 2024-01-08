import joi from 'joi';

export const validateEnv = (schema: object, onError: (message: string) => void) => {
  const result = joi.object(schema).validate(process.env, { allowUnknown: true });

  if (result.error) {
    onError(
      `Environment validation failed: ${result.error.details.reduce(
        (acc: string, { message }) => acc + ' ' + message,
        '',
      )}`,
    );
  }
};
