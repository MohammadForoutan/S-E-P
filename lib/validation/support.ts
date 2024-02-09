import { ZodType, z } from "zod";

export type SupportData = {
  discussion: {
    topic: string;
    degree_of_importance: string;
    department: string;
  };
  ticket: {
    text: string;
  };
};

export const supportSchema: ZodType<SupportData> = z.object({
  discussion: z.object({
    topic: z.string().min(1),
    degree_of_importance: z.string(),
    department: z.string(),
  }),
  ticket: z.object({
    text: z.string(),
  }),
});
