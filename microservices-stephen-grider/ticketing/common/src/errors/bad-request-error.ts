import { CommonErrorsArr, CustomError } from './custom-error';

export class BadRequestError extends CustomError {
  public statusCode: number = 400;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  public serializeErrors(): CommonErrorsArr {
    // this message is coming from Error constructor
    return [{ message: this.message }];
  }
}
