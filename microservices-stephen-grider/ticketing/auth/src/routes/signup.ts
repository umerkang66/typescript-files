import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

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
  (req: Request, res: Response) => {
    // validationResult will pull out everything that was appended to the request by body middleware
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // if there are errors
      return res.status(400).send(errors.array());
    }

    const { email, password } = req.body;
    res.send('Hi there!');
  }
);

export { router as signupRouter };
