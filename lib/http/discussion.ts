import { httpClient } from "./base";

export type discussion = {
    "id": 0,
    "topic": "string",
    "degree_of_importance": "1",
    "is_terminated": true,
    "is_answered": true,
    "department": "S"
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
