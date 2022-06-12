import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation.error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email')
      .isEmail()
      .withMessage('The email that you have provided must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ],
  async (req: Request, res: Response) => {
    // validationResult will pull out everything that was appended to the request by body middleware
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // if there are errors
      // automatically caught up by express error handling middleware
      // if it is async function, this will also be caught in global error handling middleware
      throw new RequestValidationError(errors.array());
    }

    const { email, password } = req.body;
    console.log('Creating a user...');
    throw new DatabaseConnectionError();

    res.send('Hi there!');
  }
);

export { router as signupRouter };
