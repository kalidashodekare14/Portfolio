import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppings = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Kalidash",
  description:
    "Portfolio website of Kalidash, a software developer specializing in web development and open-source projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppings.className} antialiased`}>{children}</body>
    </html>
  );
}
