import type { Metadata } from "next";
import { Archivo, Onest } from "next/font/google";
import { defaultLocale, dictionaries } from "@/i18n/dictionaries";
import { siteUrl } from "@/lib/site";
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

// Mesma fonte do título que o LanguageProvider aplica ao trocar de idioma.
const { title, description } = dictionaries[defaultLocale].meta;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
  },
  // A imagem vem de `opengraph-image.png` e `twitter-image.png` nesta pasta (convenção do Next).
  // Não defina `openGraph.images` aqui: isso faz o Next ignorar o arquivo.
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
