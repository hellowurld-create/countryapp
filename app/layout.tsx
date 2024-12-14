import Header from "@/components/atoms/Header";
import Loader from "@/components/atoms/Loader";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const font = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "All Countries",
  description: "Worldwide Country Database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body
        className={` antialiased`}
      >
        <Header/>
        <main className="flex-1">
          <Suspense fallback={<Loader />}>
          {children}
          </Suspense>
        </main>
      </body>
    </html>
  );
}
