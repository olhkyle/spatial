import type { Metadata } from "next";
import "./globals.css";
import "./font.css";
import { Header } from "@/components/layout";

export const metadata: Metadata = {
  title: "Spatial",
  description: "Spatial Studio's linkify Website Provider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="mx-auto px-4 w-full h-[calc(100dvh-60px)]">
          {children}
        </main>
        <footer className="flex justify-between py-8 px-4 w-full">
          <span>© Spatial</span>
          <span>2025</span>
        </footer>
      </body>
    </html>
  );
}
