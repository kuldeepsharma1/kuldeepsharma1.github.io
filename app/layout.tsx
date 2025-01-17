import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/custom/Footer/Footer";
import Header from "@/components/custom/Header/Header";
import { Toaster } from "@/components/ui/toaster";
import { ScrollProgress } from "@/components/custom/Header/ScrollProgress";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/seo/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/assets/seo/apple-touch-icon.png"
        />
        <meta name="keywords" content="{{ $keywords ?? 'default, keywords' }}"/>
        <meta name="author" content="Kuldeep Sharma" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="{{ $ogtitle }}" />
        <meta property="og:description" content="{{ $ogdesc }}" />
        <meta property="og:image" content="/public/assets/images/my.png" />
        <meta property="og:url" content="{{ $ogurl }}" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="{{ $twtTitle }}" />
        <meta name="twitter:description" content="{{ $twtDesc }}" />
        <meta name="twitter:image" content="/public/assets/images/my.png" />
        <meta name="twitter:site" content="@HYTEK21" />
        <link rel="canonical" href="https://kuldeepsharma1.github.io"></link>
      </head>
      <body className="font-roboto ">
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
            <ScrollProgress/>
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

