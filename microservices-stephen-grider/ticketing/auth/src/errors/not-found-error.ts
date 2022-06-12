import { CommonErrorsArr, CustomError } from './custom-error';

export class NotFoundError extends CustomError {
  public statusCode: number = 404;
  private reason: string;

  constructor(message: string) {
    super(message);
    this.reason = message;

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  public serializeErrors(): CommonErrorsArr {
    // this.message is coming from
    return [{ message: this.reason }];
  }
}
