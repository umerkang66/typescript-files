import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  validateRequest,
  requireAuth,
  NotFoundError,
  NotAuthorizedError,
} from '@ticketing-umer/common';
import { Ticket } from '../models/ticket';

const router = express.Router();

const validator = [
  body('title').not().isEmpty().withMessage('Title is required'),
  body('price')
    .isFloat({ gt: 0 })
    .withMessage('price must be provided and must be valid'),
];

router.put(
  '/api/tickets/:id',
  requireAuth,
  validator,
  validateRequest,
  async (req: Request, res: Response) => {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      throw new NotFoundError('The ticket you want to update does not exist');
    }
    if (ticket.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    ticket.set({
      title: req.body.title,
      price: req.body.price,
    });
    await ticket.save();

    res.send(ticket);
  }
);

export { router as updateTicketRouter };
