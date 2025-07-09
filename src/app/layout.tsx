import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/components/auth/AuthProvider";

export const metadata: Metadata = {
  title: "Template Manager",
  description: "Project management dashboard with template builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
