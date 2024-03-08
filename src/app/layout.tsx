import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import AuthProvider from "@/components/auth-provider";
import { Toaster } from "@/components/ui/toaster";
import { SAAS_NAME, SAAS_SLOGAN } from "@/lib/constants";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: SAAS_NAME,
  description: SAAS_SLOGAN,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <Toaster />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
