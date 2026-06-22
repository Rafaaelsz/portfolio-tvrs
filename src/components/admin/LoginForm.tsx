"use client";

import { Lock, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";

export function LoginForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;

    const formData = new FormData(event.currentTarget);
    setStatus("loading");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    }).catch(() => null);

    if (!response?.ok) {
      setStatus("error");
      return;
    }

    window.location.href = "/admin/inbox";
  };

  return (
    <main className="min-h-screen bg-[#050507] px-6 py-10 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md items-center">
        <form
          onSubmit={onSubmit}
          className="w-full rounded-3xl border border-white/10 bg-neutral-950/72 p-6 shadow-2xl shadow-black/30 backdrop-blur-md"
        >
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase text-cyan-300/80">Admin</p>
            <h1 className="mt-3 text-3xl font-semibold">Inbox privado</h1>
            <p className="mt-3 text-sm leading-7 text-neutral-400">
              Acesse para visualizar as mensagens recebidas pelo formulário do portfólio.
            </p>
          </div>

          <div className="grid gap-4">
            <label className="grid gap-2 text-xs font-semibold uppercase text-neutral-500">
              Email
              <span className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-500" />
                <input
                  name="email"
                  type="email"
                  required
                  className="h-12 w-full rounded-xl border border-white/10 bg-black/24 pl-10 pr-3 text-sm font-normal normal-case text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-cyan-300/45"
                  placeholder="admin@email.com"
                />
              </span>
            </label>

            <label className="grid gap-2 text-xs font-semibold uppercase text-neutral-500">
              Senha
              <span className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-500" />
                <input
                  name="password"
                  type="password"
                  required
                  className="h-12 w-full rounded-xl border border-white/10 bg-black/24 pl-10 pr-3 text-sm font-normal normal-case text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-cyan-300/45"
                  placeholder="Sua senha"
                />
              </span>
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-white px-4 text-sm font-medium text-neutral-950 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-70"
            >
              {status === "loading" ? "Entrando..." : "Entrar"}
            </button>

            {status === "error" && (
              <p className="text-sm leading-6 text-rose-300" role="alert">
                Credenciais inválidas. Verifique os dados e tente novamente.
              </p>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
