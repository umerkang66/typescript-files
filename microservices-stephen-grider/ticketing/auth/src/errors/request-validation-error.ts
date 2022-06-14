import type { ValidationError } from 'express-validator';
import { CommonErrorsArr, CustomError } from './custom-error';

// it is a type that describes the error properties coming from express-validator
export class RequestValidationError extends CustomError {
  public statusCode = 400;

  constructor(private errors: ValidationError[]) {
    // for logging purposes
    super('Invalid request parameters');
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  public serializeErrors(): CommonErrorsArr {
    // always return object that contains errors, that is a array of message, or field property
    return this.errors.map(err => {
      // these errors are coming from express-request validation library
      return { message: err.msg, field: err.param };
    });
  }
}
