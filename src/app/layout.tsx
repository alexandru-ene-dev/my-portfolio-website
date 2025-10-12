import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Script from 'next/script';
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alexandru Ene - Fullstack Web Developer",
  description: "A single-page Portfolio Page created with Next.js and styled with Tailwindcss by Alexandru Ene",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script strategy="beforeInteractive">
          {`
            (function () {
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();
          `}
        </Script>      
      </head>

      <body className="bg-gray-300 dark:bg-[hsl(220,43%,4%)]">
        <div className="space-y-30 max-w-[1100px] bg-gray-200 dark:dark:bg-[hsl(220,43%,9%)] dark:shadow-[hsl(220,43%,25%)] mx-auto shadow-xl shadow-gray-400 dark:shadow-lg">
          <div className="px-[clamp(1em,4vw,5em)] pb-[clamp(1em,3vw,3em)]">
            <Header />
            {children}
          </div>

          <div className="text-center text-black dark:text-gray-400 text-lg bg-gray-300 py-15 dark:bg-[hsl(220,43%,4%)]"> 
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
