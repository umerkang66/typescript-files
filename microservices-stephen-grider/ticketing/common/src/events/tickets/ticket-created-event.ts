import { Subjects } from '../base/subjects';

interface TicketCreatedEventData {
  id: string;
  title: string;
  price: number;
  userId: string;
}

export interface TicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: TicketCreatedEventData;
}
