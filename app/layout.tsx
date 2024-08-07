import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Jost } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Loader from "@/components/Loader";
import Header from "@/components/layouts/header";
import "./globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio de Arnaud",
  description: "Développeur Full-Stack",
  applicationName: "Portfolio",
  openGraph: {
    type: "website",
    url: "https://arnaudbenede.com/",
    title: "Arnaud BENEDE",
    description:
      "Portfolio développé avec NextJS, TypeScript, ShadcnUI & GSAP.",
    siteName: "Portfolio",
  },
  authors: {
    name: "Arnaud BENEDE",
  },
  generator: "NextJs",
  keywords: ["NextJS", "Portfolio", "GSAP", "ShadcnUI"],
  creator: "Arnaud BENEDE",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={jost.className}>
        <Loader />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
