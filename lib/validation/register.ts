import { ZodType, z } from "zod";

export type RegisterData = {
  username: string;
  first_name: string;
  last_name: string;
  password: string;
  password_confirmation: string;
  email: string;
};

export const registerSchema: ZodType<RegisterData> = z
  .object({
    username: z.string().min(1,"اجباری"),
    first_name: z.string(),
    last_name: z.string(),
    password: z.string().min(6),
    password_confirmation: z.string().min(6),
    email: z.string().email(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Password do not match",
    path: ["password_confirmation"],
  });
