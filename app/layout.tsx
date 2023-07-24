import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FoootFab",
  description: "Магазин люксового взуття",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className + " h-full"}>
        <Header />
        {children}

        <footer className="bg-black mt-6 h-[200px]">
          <div className="container mx-auto px-6 flex items-center justify-center h-full">
            <p className="text-white text-2xl">FoootFab 2023</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
