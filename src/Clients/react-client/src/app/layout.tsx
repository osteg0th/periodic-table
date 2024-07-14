import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Periodic table",
  description: "Periodic table",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <header>
          <Link href="/about">About</Link>
          <Link href="/">Home</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
