import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../css/main.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Shaurya Bhatnagar",
  description: "Welcome to Shaurya Bhatnagar Personal portfolio home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
