import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/custom/Footer/Footer";
import Header from "@/components/custom/Header/Header";
import { Toaster } from "@/components/ui/toaster";
import { ScrollProgress } from "@/components/custom/Header/ScrollProgress";
import { Assistant } from 'next/font/google'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

 
const assistant = Assistant({
  subsets: ['latin'],
  display: 'swap',
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={assistant.className}>
      <head>
        <link rel="icon" href="/assets/seo/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/assets/seo/apple-touch-icon.png"
        />

        <meta name="author" content="Kuldeep Sharma" />
        <meta name="robots" content="index, follow" />

      </head>
      <body className="tracking-tight" >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-7xl mx-auto">
            <header className="px-2 pt-2.5 " >
              <Header />
            </header>
            <ScrollProgress />
            <main className="min-h-screen ">
              {children}
            </main>
            <Toaster />
            <footer>
              <Footer />
            </footer>
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}

