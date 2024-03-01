import Joi from 'joi';
import { EnvValidationErrorHandler, EnvValidationHandler } from '../types/env-validator.types';

export class EnvValidator {
  private readonly errorHandlers: EnvValidationErrorHandler[] = [];
  private readonly successHandlers: EnvValidationHandler[] = [];

  constructor(private readonly schema: object) {}

  onError(handler: EnvValidationErrorHandler) {
    this.errorHandlers.push(handler);
    return this;
  }

  onSuccess(handler: EnvValidationHandler) {
    this.successHandlers.push(handler);
    return this;
  }

  validate() {
    const result = Joi.object(this.schema).validate(process.env, { allowUnknown: true });

    if (!result.error) {
      this.successHandlers.forEach((handler) => handler());
      return;
    }

    const errorsList = (result.error.details ?? []).reduce(
      (acc: string, { message }) => acc + ' ' + message,
      '',
    );

    const errorMessage = `environment validation failed: ${errorsList}`;

    this.errorHandlers.forEach((handler) => handler(errorMessage));
  }

  toJoiValidator(): Joi.ObjectSchema {
    return Joi.object(this.schema);
  }

  toSchema() {
    return this.schema;
  }
}
