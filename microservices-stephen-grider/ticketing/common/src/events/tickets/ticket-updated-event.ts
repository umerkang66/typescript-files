import { Subjects } from '../base/subjects';

interface TicketUpdatedEventData {
  id: string;
  title: string;
  price: number;
  userId: string;
}

export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: TicketUpdatedEventData;
}
