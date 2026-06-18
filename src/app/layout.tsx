import type { Metadata } from "next";
import "../styles.css";

export const metadata: Metadata = {
  title: "Rafael Tavares - Desenvolvedor Full Stack",
  description:
    "Portfólio de Rafael Tavares, Desenvolvedor Full Stack focado em arquitetura backend, APIs, bancos de dados, automação e interfaces modernas.",
  openGraph: {
    title: "Rafael Tavares - Desenvolvedor Full Stack",
    description:
      "Construindo produtos digitais completos do design de APIs à experiência do usuário.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
