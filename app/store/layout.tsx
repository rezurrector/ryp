import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "RockYouPie Records",
  description: "Merchandise, Vinyl, Apparel, Cassettes, Stickers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex-1">{children}</div>
    </>
  );
}
