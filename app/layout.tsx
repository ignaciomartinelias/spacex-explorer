import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SpaceX Data Explorer",
  description:
    "Embark on a journey through space and time. Discover the revolutionary world of SpaceX, from groundbreaking launches to futuristic technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={cn(inter.className, "antialiase")}>{children}</body>
    </html>
  );
}
