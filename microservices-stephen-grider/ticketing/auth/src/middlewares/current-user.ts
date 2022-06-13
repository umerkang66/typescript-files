import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email: string;
}

// reach into existing type definition and make modification
declare global {
  namespace Express {
    // we didn't have to extend the Request
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session || !req.session.jwt) {
    return next();
  }
  // if token is messed with, verify will throw an error
  try {
    // return all of the information that is in the payload
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;

    req.currentUser = payload;
  } catch (err) {}

  next();
};
