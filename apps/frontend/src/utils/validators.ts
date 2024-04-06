import { FieldValidator } from 'types/form.types';

export class Validators {
  static required(fieldName: string): FieldValidator {
    return (value: any) => {
      if (!value && typeof value !== 'boolean') {
        return `${fieldName} is required`;
      }

      return true as const;
    };
  }

  static email(): FieldValidator {
    return (value: string) => {
      if (!value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)) {
        return `Please enter a valid email`;
      }

      return true as const;
    };
  }

  static regexp(expression: RegExp, message: string): FieldValidator {
    return (value: string) => {
      if (!expression.test(value)) {
        return message;
      }

      return true as const;
    };
  }

  static maxLength(input: number, fieldName: string): FieldValidator {
    return (value: string) => {
      if (value.length > input) {
        return `${fieldName} should be at least ${input} characters long`;
      }

      return true as const;
    };
  }
}
