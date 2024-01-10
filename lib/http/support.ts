import { User } from ".";
import { SupportData } from "../validation";
import { httpClient } from "./base";

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
  return httpClient.post("/support/discussion/", data).then((res) => res.data);
};
