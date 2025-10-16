import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/Header';
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Alexandru Ene - Fullstack Web Developer",
  description: "A single-page portfolio website created with Next.js and styled with Tailwindcss by Alexandru Ene",
};

const themeInitializerScript = `
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
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }}/>     
      </head>

      <body className="bg-gray-300 dark:bg-[hsl(220,43%,4%)]">
        <div className="space-y-20 max-w-[1100px] bg-gray-200 dark:dark:bg-[hsl(220,43%,9%)] dark:shadow-[hsl(220,43%,25%)] mx-auto shadow-xl shadow-gray-400 dark:shadow-lg">
          <div className="px-[clamp(1em,5vw,5em)] pb-[clamp(1em,3vw,3em)]">
            <Header />
            {children}
          </div>

          <div className="text-gray-500 text-lg bg-gray-300 py-10 dark:bg-[hsl(220,43%,4%)] px-5">
            <div className="max-w-180 mx-auto">
              <Footer />
            </div> 
          </div>
        </div>
      </body>
    </html>
  );
}
