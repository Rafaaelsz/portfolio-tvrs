import type { Metadata } from "next";

// Título próprio e fora dos buscadores para /admin, /admin/login e /admin/inbox.
export const metadata: Metadata = {
  title: "Admin · Inbox",
  description: "Área restrita do portfólio.",
  robots: { index: false, follow: false },
  alternates: null,
  openGraph: null,
  twitter: null,
};

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
