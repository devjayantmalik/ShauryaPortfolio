import type { Metadata } from "next";
import "~/css/main.css";
import "~/css/base.css";
import "~/css/plugin.css";
import { Inter as FontSans } from "next/font/google";
import clsx from "clsx";
import { Audio } from "~/components/Audio";
import { Footer } from "../components/Footer";
import { TopHeader } from "../components/TopHeader";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
      <body
        className={clsx(
          "min-h-screen font-sans iknow_tm_all_wrap bg-[#fef5f2]",
          fontSans.variable
        )}
      >
        <div className="iknow_tm_extra_demo">
          {/* Top Navigation */}
          <TopHeader />

          {/* Contents */}
          <main className="iknow_tm_mainpart_new">
            <div className="iknow_tm_animate_section active animated zoomInDown">
              {children}
            </div>
          </main>

          {/* Footer */}
          <Footer />
        </div>
        <Audio />
      </body>
    </html>
  );
}
