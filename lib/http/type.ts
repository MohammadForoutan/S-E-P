import { AxiosError } from "axios";

export interface ourFailResponse {
  message: string;
}
export type HTTPFailedResponse = AxiosError<ourFailResponse>;
