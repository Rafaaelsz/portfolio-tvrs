import { AdminInbox } from "@/components/admin/AdminInbox";
import type { AdminMessageStatus } from "@/components/admin/types";
import { requireAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

function normalizeStatus(status: string): AdminMessageStatus {
  if (status === "read" || status === "archived") {
    return status;
  }

  return "unread";
}

export default async function AdminInboxPage() {
  await requireAdminSession();

  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      email: true,
      subject: true,
      message: true,
      status: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return (
    <AdminInbox
      initialMessages={messages.map((message) => ({
        ...message,
        status: normalizeStatus(message.status),
        createdAt: message.createdAt.toISOString(),
        updatedAt: message.updatedAt.toISOString(),
      }))}
    />
  );
}
