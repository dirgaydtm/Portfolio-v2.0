import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SplashScreen } from "@/components/layout/splash-screen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dirga Yuditama | Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SplashScreen />
          <div className="relative flex min-h-screen flex-col bg-white dark:bg-zinc-950">
            {/* Theme Toggle - Fixed Top Right */}
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggle />
            </div>

            <main className="flex-1 pb-24">{children}</main>
            <Footer />
            <Navbar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
