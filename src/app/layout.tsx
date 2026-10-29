import type { Metadata } from "next";
import { Archivo, Onest } from "next/font/google";
import "../styles.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

const title = "Rafael Tavares · Eu construo e coloco no ar";
const description =
  "Sistemas web, landing pages e automações. Portfólio de Rafael Tavares, de Palhoça, SC, com a Lume, um CRM para quem vende sites.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${onest.variable}`} suppressHydrationWarning>
      <body>
        {children}
        <noscript>
          <style>{`.rv{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
