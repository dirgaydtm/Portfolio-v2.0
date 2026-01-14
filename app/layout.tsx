import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/style/globals.css";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/features/layout/components/theme-toggle";
import SplashScreen from "@/features/layout/components/splash-screen";
import { profile } from "@/shared/data/profile";

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
            <ThemeToggle className="fixed top-4 right-4 z-50" />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
