"use client";

import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";
import { isRole, type Role } from "@/data/projects";

type RoleContextValue = {
  role: Role;
  setRole: (role: Role) => void;
};

const RoleContext = createContext<RoleContextValue | null>(null);

const param = "area";

/**
 * Guarda a área escolhida no seletor Dev / QA / Cloud e espelha em `?area=`,
 * para dar para mandar um link já filtrado (ex.: `/?area=qa`).
 */
export function RoleProvider({ children }: PropsWithChildren) {
  const [role, setRoleState] = useState<Role>("all");

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get(param);
    // Lê a URL só no cliente para o HTML do servidor sair sempre na ordem padrão.
    if (isRole(fromUrl)) setRoleState(fromUrl);
  }, []);

  const setRole = (next: Role) => {
    setRoleState(next);
    const url = new URL(window.location.href);
    if (next === "all") url.searchParams.delete(param);
    else url.searchParams.set(param, next);
    window.history.replaceState(window.history.state, "", url);
  };

  return <RoleContext.Provider value={{ role, setRole }}>{children}</RoleContext.Provider>;
}

export function useRole() {
  const context = useContext(RoleContext);
  if (!context) throw new Error("useRole must be used inside RoleProvider");
  return context;
}
