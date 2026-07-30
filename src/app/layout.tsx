import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const title = "Guilherme Amorim — Desenvolvedor full-stack";
const description =
  "Desenvolvedor full-stack com fundamento em arquitetura de software. APIs e produtos web em TypeScript (NestJS, Next.js) e Go, com DDD, Clean Architecture, testes automatizados e entrega contínua.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.guilhermeamorim.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://www.guilhermeamorim.com",
    siteName: "Guilherme Amorim",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}
