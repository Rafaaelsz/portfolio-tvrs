"use client";

import { Archive, Check, LogOut, Mail, RefreshCw, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { StatusBadge } from "./StatusBadge";
import type { AdminMessage, AdminMessageStatus } from "./types";

const filters: Array<AdminMessageStatus | "all"> = ["all", "unread", "read", "archived"];

const filterLabels: Record<AdminMessageStatus | "all", string> = {
  all: "Todas",
  unread: "Não lidas",
  read: "Lidas",
  archived: "Arquivadas",
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(value));
}

export function AdminInbox({ initialMessages }: { initialMessages: AdminMessage[] }) {
  const [messages, setMessages] = useState(initialMessages);
  const [selectedId, setSelectedId] = useState<string | null>(initialMessages[0]?.id ?? null);
  const [filter, setFilter] = useState<AdminMessageStatus | "all">("all");
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const filteredMessages = useMemo(
    () => messages.filter((message) => filter === "all" || message.status === filter),
    [filter, messages],
  );

  const selectedMessage =
    filteredMessages.find((message) => message.id === selectedId) ?? filteredMessages[0] ?? null;

  const updateStatus = async (id: string, status: AdminMessageStatus) => {
    setLoadingId(id);
    const response = await fetch(`/api/admin/messages/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    if (response.status === 401) window.location.href = "/admin/login";

    if (response.ok) {
      setMessages((current) =>
        current.map((message) => (message.id === id ? { ...message, status } : message)),
      );
    }

    setLoadingId(null);
  };

  const deleteMessage = async (id: string) => {
    setLoadingId(id);
    const response = await fetch(`/api/admin/messages/${id}`, {
      method: "DELETE",
    });

    if (response.status === 401) window.location.href = "/admin/login";

    if (response.ok) {
      setMessages((current) => current.filter((message) => message.id !== id));
      setSelectedId((current) => (current === id ? null : current));
    }

    setLoadingId(null);
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  };

  return (
    <main className="min-h-screen bg-[#050507] px-4 py-6 text-white sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <header className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-neutral-950/72 p-5 shadow-2xl shadow-black/20 backdrop-blur-md md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-cyan-300/80">Admin</p>
            <h1 className="mt-2 text-3xl font-semibold">Inbox</h1>
            <p className="mt-2 text-sm text-neutral-400">
              {messages.length} mensagem{messages.length === 1 ? "" : "s"} recebida
              {messages.length === 1 ? "" : "s"}
            </p>
          </div>

          <button
            type="button"
            onClick={logout}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-4 text-sm font-medium text-neutral-200 transition-colors hover:border-white/22 hover:bg-white/[0.07] hover:text-white"
          >
            <LogOut className="size-4" />
            Sair
          </button>
        </header>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-3xl border border-white/10 bg-neutral-950/62 p-4 shadow-2xl shadow-black/20 backdrop-blur-md">
            <div className="mb-4 flex flex-wrap gap-2">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={`rounded-xl border px-3 py-2 text-xs font-medium transition-colors ${
                    filter === item
                      ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-100"
                      : "border-white/10 bg-white/[0.03] text-neutral-400 hover:text-white"
                  }`}
                >
                  {filterLabels[item]}
                </button>
              ))}
            </div>

            <div className="grid gap-3">
              {filteredMessages.length === 0 && (
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-sm text-neutral-400">
                  Nenhuma mensagem encontrada para este filtro.
                </div>
              )}

              {filteredMessages.map((message) => (
                <button
                  key={message.id}
                  type="button"
                  onClick={() => setSelectedId(message.id)}
                  className={`rounded-2xl border p-4 text-left transition-colors ${
                    selectedMessage?.id === message.id
                      ? "border-cyan-300/40 bg-cyan-300/10"
                      : "border-white/10 bg-black/20 hover:border-white/18 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium text-white">{message.name}</p>
                      <p className="mt-1 text-xs text-neutral-500">{message.email}</p>
                    </div>
                    <StatusBadge status={message.status} />
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-neutral-400">
                    {message.subject || message.message}
                  </p>
                  <p className="mt-3 text-xs text-neutral-500">{formatDate(message.createdAt)}</p>
                </button>
              ))}
            </div>
          </aside>

          <article className="min-h-[520px] rounded-3xl border border-white/10 bg-neutral-950/72 p-5 shadow-2xl shadow-black/20 backdrop-blur-md">
            {!selectedMessage && (
              <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                <span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-neutral-300">
                  <Mail className="size-5" />
                </span>
                <p className="mt-4 text-lg font-medium">Selecione uma mensagem</p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-500">
                  As mensagens enviadas pelo formulário aparecerão aqui.
                </p>
              </div>
            )}

            {selectedMessage && (
              <div>
                <div className="flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="mb-3">
                      <StatusBadge status={selectedMessage.status} />
                    </div>
                    <h2 className="text-2xl font-semibold">{selectedMessage.name}</h2>
                    <p className="mt-2 text-sm text-neutral-400">{selectedMessage.email}</p>
                    <p className="mt-2 text-xs text-neutral-500">
                      Recebida em {formatDate(selectedMessage.createdAt)}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      disabled={loadingId === selectedMessage.id}
                      onClick={() => updateStatus(selectedMessage.id, "read")}
                      className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-3 text-sm text-neutral-200 transition-colors hover:border-white/22 hover:bg-white/[0.07] disabled:opacity-60"
                    >
                      <Check className="size-4" />
                      Marcar como lida
                    </button>
                    <button
                      type="button"
                      disabled={loadingId === selectedMessage.id}
                      onClick={() => updateStatus(selectedMessage.id, "archived")}
                      className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-3 text-sm text-neutral-200 transition-colors hover:border-white/22 hover:bg-white/[0.07] disabled:opacity-60"
                    >
                      <Archive className="size-4" />
                      Arquivar
                    </button>
                    <button
                      type="button"
                      disabled={loadingId === selectedMessage.id}
                      onClick={() => deleteMessage(selectedMessage.id)}
                      className="inline-flex h-10 items-center gap-2 rounded-xl border border-rose-300/20 bg-rose-300/10 px-3 text-sm text-rose-200 transition-colors hover:border-rose-300/40 hover:bg-rose-300/15 disabled:opacity-60"
                    >
                      {loadingId === selectedMessage.id ? (
                        <RefreshCw className="size-4 animate-spin" />
                      ) : (
                        <Trash2 className="size-4" />
                      )}
                      Excluir
                    </button>
                  </div>
                </div>

                <div className="grid gap-5 py-6">
                  <div>
                    <p className="text-xs font-semibold uppercase text-neutral-500">Assunto</p>
                    <p className="mt-2 text-neutral-200">
                      {selectedMessage.subject || "Contato pelo portfólio"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase text-neutral-500">Mensagem</p>
                    <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-neutral-300">
                      {selectedMessage.message}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </article>
        </section>
      </div>
    </main>
  );
}
