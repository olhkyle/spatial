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
      <body className={`antialiased`}>
        <Header />
        <main className="w-full h-[calc(100dvh-60px)]">{children}</main>
      </body>
    </html>
  );
}
