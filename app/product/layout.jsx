import "@/styles/globals.css";

export const metadata = {
  title: "RockYouPie Records",
  description: "RYP Merchandise",
};

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return <div className="flex-1 dark:bg-black dark:text-white">{children}</div>;
}
