import { SupportData } from "../validation/support";
import { httpClient } from "./base";

export type User = {
  username: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
};

export type Ticket = {
  id: number;
  sent_date: Date;
  text: string;
  discussion: number;
  user: User;
};

export type CreateDiscussionResponse = {
  id: number;
  ticket: Ticket[];
};

export const httpCreateDiscussion = (data: SupportData) => {
  return httpClient.post("/support/discussion/", data);
};
