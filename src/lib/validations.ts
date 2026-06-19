import { z } from "zod";

const textField = (min: number, max: number) =>
  z
    .string()
    .trim()
    .min(min)
    .max(max)
    .transform((value) => value.replace(/\s+/g, " "));

export const contactMessageSchema = z.object({
  name: textField(2, 120),
  email: z.string().trim().email().max(180).toLowerCase(),
  subject: z.string().trim().max(160).optional().nullable(),
  message: z.string().trim().min(10).max(3000),
  company: z.string().optional(),
});

export const adminLoginSchema = z.object({
  email: z.string().trim().email().max(180).toLowerCase(),
  password: z.string().min(1).max(300),
});

export const messageStatusSchema = z.object({
  status: z.enum(["unread", "read", "archived"]),
});

export type ContactMessageInput = z.infer<typeof contactMessageSchema>;
export type AdminLoginInput = z.infer<typeof adminLoginSchema>;
