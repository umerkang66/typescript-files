import { CommonErrorsArr, CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  public statusCode = 500;
  private reason: string;

  constructor() {
    const reason = 'Error connecting to database';
    // for logging purposes
    super(reason);
    this.reason = reason;

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  public serializeErrors(): CommonErrorsArr {
    // always return object that contains errors, that is a array of message, or field property
    return [{ message: this.reason }];
  }
}
