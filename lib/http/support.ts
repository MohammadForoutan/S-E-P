import { SupportData } from "../validation/support";
import { httpClient } from "./base";

export const httpCreateSupport = (data: SupportData) => {
    return httpClient.post("/support/discussion/",  data );
};
  