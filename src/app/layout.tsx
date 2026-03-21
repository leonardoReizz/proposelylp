import type { Metadata } from "next";
import { Geist, Lobster_Two } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lobsterTwo = Lobster_Two({
  variable: "--font-lobster-two",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://proposely.com.br"),
  title: "Proposely — Crie propostas comerciais profissionais em minutos",
  description:
    "Plataforma SaaS para criação e gestão de propostas comerciais com inteligência artificial. Templates prontos, múltiplos estilos de visualização, analytics e geração com IA.",
  keywords: [
    "propostas comerciais",
    "proposta online",
    "criar proposta",
    "SaaS propostas",
    "proposta com IA",
    "gerador de propostas",
    "proposal software",
    "proposely",
    "freelancer proposta",
    "agência proposta",
  ],
  authors: [{ name: "Proposely" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://proposely.com.br",
    siteName: "Proposely",
    title: "Proposely — Propostas comerciais profissionais em minutos",
    description:
      "Crie, envie e acompanhe propostas comerciais com templates prontos e inteligência artificial.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Proposely — Propostas comerciais profissionais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proposely — Propostas comerciais profissionais em minutos",
    description:
      "Crie, envie e acompanhe propostas comerciais com templates prontos e IA.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${lobsterTwo.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href="https://proposely.com.br" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
