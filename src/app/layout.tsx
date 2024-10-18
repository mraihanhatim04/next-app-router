"use client";
import "./globals.css";
import MyNavbar from "./navbar";

import { usePathname } from "next/navigation";
const disableNavbar = ["/login", "/register"];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        {!disableNavbar.includes(pathname) && <MyNavbar />}

        {children}
      </body>
    </html>
  );
}
