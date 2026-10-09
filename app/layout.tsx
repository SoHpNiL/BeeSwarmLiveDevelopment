import React from "react";
import "./globals.css";
import { Nabla } from 'next/font/google'
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/next"


const nabla = Nabla({
  subsets: ['latin'],
  variable: '--font-nabla',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${nabla.variable} antialiased`}>
        <Providers>{children}</Providers>
        < Analytics />
      </body>
    </html>
  );
}
