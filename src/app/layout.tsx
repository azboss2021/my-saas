import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import AuthProvider from "@/components/auth-provider";
import { Toaster } from "@/components/ui/toaster";
import { SAAS_NAME, SAAS_SLOGAN } from "@/lib/constants";
import PageLoadProgressBar from "@/components/PageLoadProgressBar";

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
        <PageLoadProgressBar>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider>{children}</AuthProvider>
          </ThemeProvider>
        </PageLoadProgressBar>
      </body>
    </html>
  );
}
