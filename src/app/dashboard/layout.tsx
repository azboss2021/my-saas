import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MySaaS - Dashboard",
  description: "Build your SaaS with speed never seen before!",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
