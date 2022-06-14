interface CommonError {
  message: string;
  field?: string;
}
export type CommonErrorsArr = CommonError[];

export abstract class CustomError extends Error {
  public abstract statusCode: number;
  // always return object that contains errors, that is a array of message, or field property
  public abstract serializeErrors(): CommonErrorsArr;

  constructor(message: string) {
    super(message);
    // Only because we are extending a built in class
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
