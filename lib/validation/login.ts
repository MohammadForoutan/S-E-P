import { ZodType, z } from "zod";

export type LoginData = {
  username: string;
  password: string;
};

export const LoginSchema: ZodType<LoginData> = z.object({
  username: z.string(),
  password: z.string().min(6),
});
