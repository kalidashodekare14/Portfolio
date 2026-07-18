import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppings.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" storageKey="theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
