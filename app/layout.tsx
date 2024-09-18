import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RockYouPie Records",
  description: "Music Production & Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark min-h-screen flex flex-col relative bg-black">
        <Header />
        <div className="flex-1 dark:bg-black dark:text-white">{children}</div>
        <Footer />
        <div id="portal"></div>
      </body>
    </html>
  );
}
