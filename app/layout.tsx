import "./globals.css";

import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";

import Nav from "@components/Nav";
import Footer from "@/components/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sawyer Culberson Project",
  description: "Empowering and protecting vulnerable youth and families in Washington State",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} font-sans`}>
        <main className={`${montserrat.className} font-heading`}>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
