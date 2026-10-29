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

/** Campos que o usuário preenche no formulário de contato (o cliente valida com as mesmas regras). */
export const contactFields = ["name", "email", "message"] as const;
export type ContactField = (typeof contactFields)[number];

/** Nomes dos campos inválidos, sem as mensagens nem os valores enviados. */
export function invalidContactFields(input: unknown): ContactField[] {
  const result = contactMessageSchema.safeParse(input);
  if (result.success) return [];
  const flagged = new Set(result.error.issues.map((issue) => issue.path[0]));
  return contactFields.filter((field) => flagged.has(field));
}

export const adminLoginSchema = z.object({
  email: z.string().trim().email().max(180).toLowerCase(),
  password: z.string().min(1).max(300),
});

export const messageStatusSchema = z.object({
  status: z.enum(["unread", "read", "archived"]),
});
