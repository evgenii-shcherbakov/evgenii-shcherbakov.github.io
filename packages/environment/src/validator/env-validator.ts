import { EnvValidationErrorHandler, EnvValidationHandler } from './types';
import * as joi from 'joi';

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
    const result = joi.object(this.schema).validate(process.env, { allowUnknown: true });

    if (!result.error) {
      this.successHandlers.forEach((handler) => handler());
      return;
    }

    const errorsList = (result.error.details ?? []).reduce(
      (acc: string, { message }) => acc + ' ' + message,
      '',
    );

    const errorMessage = `Environment validation failed: ${errorsList}`;

    this.errorHandlers.forEach((handler) => handler(errorMessage));
  }

  get nest(): joi.ObjectSchema {
    return joi.object(this.schema);
  }
}
