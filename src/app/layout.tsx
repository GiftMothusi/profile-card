import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Profile Card",
  description: "Profile card component showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
