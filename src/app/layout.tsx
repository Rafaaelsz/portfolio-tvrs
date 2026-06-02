import type { Metadata } from "next";
import "../styles.css";

export const metadata: Metadata = {
  title: "Rafael Tavares - Desenvolvedor FullStack",
  description:
    "Portfolio de Rafael Tavares, Desenvolvedor FullStack: APIs robustas em Python e Java, interfaces dinamicas em JavaScript.",
  openGraph: {
    title: "Rafael Tavares - Desenvolvedor FullStack",
    description: "Construindo aplicacoes robustas e escalaveis de ponta a ponta.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
