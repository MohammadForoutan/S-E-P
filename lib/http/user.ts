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

export type GetUserResponse = {
  username: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  id : number;
  email : string
};
export const httpGetUser = ({ userId }: { userId: number }) => {
  return httpClient.get("accounts/user/" + userId).then((res) => res.data);
};
