import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { DarkModeToggler } from "./DarkModeToggler";

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
  let darkMode = false
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <header className="bg-white dark:bg-slate-600">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </header>
        <main className="bg-white dark:bg-slate-800 dark:text-white flex-1" >
          {children}
        </main>
      </body>
    </html>
  );
}
