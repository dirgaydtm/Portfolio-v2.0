import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/style/globals.css";
import { ThemeProvider } from "@/shared/components/layout/theme-provider";
import { ThemeToggle } from "@/shared/components/layout/theme-toggle";
import { Navbar } from "@/shared/components/layout/navbar";
import { Footer } from "@/shared/components/layout/footer";
import { SplashScreen } from "@/shared/components/layout/splash-screen";
import { profile } from "@/features/hero/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SplashScreen />
          <div className="relative bg-background">
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggle />
            </div>
            <main>{children}</main>
            <Footer />
            <Navbar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
