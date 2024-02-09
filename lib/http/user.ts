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
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  email: string;
};
export const httpGetUser = ({ userId }: { userId: number }) => {
  return httpClient.get("accounts/user/" + userId).then((res) => res.data);
};

export type GetCurrentUserResponse = {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  date_joined: Date;
};
export const httpGetCurrentUser = () => {
  return httpClient.get("accounts/user/current").then((res) => res.data);
};
