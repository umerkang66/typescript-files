import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { BadRequestError } from '../errors/bad-request-error';
import { RequestValidationError } from '../errors/request-validation.error';
import { User } from '../models/user';

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
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // this will automatically be caught by global express error-handling middleware
      throw new BadRequestError('Email in use');
    }

    const user = User.build({ email, password });
    await user.save();

    res.status(201).send(user);
  }
);

export { router as signupRouter };
