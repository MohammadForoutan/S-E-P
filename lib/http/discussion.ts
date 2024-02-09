import { httpClient } from "./base";

export type discussion = {
  id: 0;
  topic: "string";
  degree_of_importance: "1";
  is_terminated: true;
  is_answered: true;
  department: "F" | "T";
  start_time: Date;
};

export type GetDiscussionResponse = {
  count: number;
  next: string;
  pervious: null;
  results: discussion[];
};

export type getDiscussion = {
  id: number;
  ticket: discussion[];
};

export const httpGetDiscussion = () => {
  return httpClient.get("/support/discussion/").then((res) => res.data);
};

export const httpGetDiscussionId = (id: number) => {
  return httpClient.get(`/support/discussion/${id}`).then((res) => res.data);
};
