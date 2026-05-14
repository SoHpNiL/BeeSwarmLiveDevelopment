import React from "react";
import "./globals.css";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="coffee"> 
      <body className="antialiased">{children}</body>
    </html>
  );
}