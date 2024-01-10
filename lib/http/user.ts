import { httpClient } from "./base";

export type User = {
  username: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
};

export type GetUsersResponse = {
  count: number;
  next: string;
  pervious: null;
  results: User[];
};
export const httpGetUsers = () => {
  return httpClient.get("accounts/user").then((res) => res.data);
};
