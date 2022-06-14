import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@ticketing-umer/common';
import { Ticket } from '../models/ticket';

const router = express.Router();

const validator = [
  body('title').not().isEmpty().withMessage('Title is required'),
  body('price').isFloat({ gt: 0 }).withMessage('Price must be greater than 0'),
];

// requireAuth requires currentUser, currentUser is defined in app.ts
router.post(
  '/api/tickets',
  requireAuth,
  validator,
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, price } = req.body;
    const ticket = Ticket.build({ title, price, userId: req.currentUser!.id });

    await ticket.save();
    res.status(201).send(ticket);
  }
);

export { router as createTicketRouter };
