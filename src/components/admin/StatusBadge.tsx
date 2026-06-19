import type { AdminMessageStatus } from "./types";

const statusStyles: Record<AdminMessageStatus, string> = {
  unread: "border-cyan-300/30 bg-cyan-300/10 text-cyan-200",
  read: "border-emerald-300/25 bg-emerald-300/10 text-emerald-200",
  archived: "border-neutral-500/30 bg-white/[0.04] text-neutral-300",
};

const statusLabels: Record<AdminMessageStatus, string> = {
  unread: "Não lida",
  read: "Lida",
  archived: "Arquivada",
};

export function StatusBadge({ status }: { status: AdminMessageStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}
    >
      {statusLabels[status]}
    </span>
  );
}
