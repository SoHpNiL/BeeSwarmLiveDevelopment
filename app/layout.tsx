import React from "react";
import "./globals.css";
import { Nabla } from 'next/font/google'

const nabla = Nabla({
  subsets: ['latin'],
  variable: '--font-nabla',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="coffee"> 
      <body className={`${nabla.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}