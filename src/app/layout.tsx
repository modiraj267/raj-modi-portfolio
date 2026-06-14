import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import CursorPet from "@/components/CursorPet";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Raj Modi | Python Developer | Data Analyst | AI/ML Enthusiast",
  description: "Portfolio website of Raj Modi, showcasing projects in Python, Data Analytics, AI/ML, React, FastAPI, and modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.variable, "font-sans antialiased bg-cyber-primary text-cyber-text")}>
        {children}
        <CursorPet />
      </body>
    </html>
  );
}
