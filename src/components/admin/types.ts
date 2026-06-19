export type AdminMessageStatus = "unread" | "read" | "archived";

export type AdminMessage = {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  status: AdminMessageStatus;
  createdAt: string;
  updatedAt: string;
};
