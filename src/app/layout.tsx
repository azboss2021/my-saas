import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import AuthProvider from "@/components/auth-provider";
import { SAAS_NAME, SAAS_SLOGAN } from "@/lib/constants";
import PageLoadProgressBar from "@/components/PageLoadProgressBar";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["devanagari", "latin", "latin-ext"],
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
        <PageLoadProgressBar>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <AuthProvider>{children}</AuthProvider>
          </ThemeProvider>
        </PageLoadProgressBar>
      </body>
    </html>
  );
}
