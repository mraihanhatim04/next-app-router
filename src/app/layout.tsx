import "./globals.css";
import MyNavbar from "./navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MyNavbar />
        {children}
      </body>
    </html>
  );
}
