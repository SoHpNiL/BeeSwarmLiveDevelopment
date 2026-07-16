import React from "react";
import "./globals.css";
import { Nabla } from 'next/font/google'
import Providers from "./providers";

const nabla = Nabla({
  subsets: ['latin'],
  variable: '--font-nabla',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="coffee">
      <body className={`${nabla.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
