import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Montserrat } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: "--font-montserrat",
})

const impact = localFont({
  src: "./fonts/impact.ttf",
  variable: "--font-impact",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Cafe Menu App",
  description: "Multilanguage Next React App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${impact.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
