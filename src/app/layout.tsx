import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const sophia = localFont({
  src: [
    {
      path: "../assets/fonts/sophiaSoftPro/sophia-300.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/sophiaSoftPro/sophia-400.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/sophiaSoftPro/sophia-500.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/sophiaSoftPro/sophia-700.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/sophiaSoftPro/sophiaItalic-300.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/sophiaSoftPro/sophiaItalic-400.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/sophiaSoftPro/sophiaItalic-500.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/sophiaSoftPro/sophiaItalic-700.woff",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-sophiaPro",
});
export const metadata: Metadata = {
  title: "Tacho | Pagina Principal",
  description: "Ecommerce para juguetes de bebes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${raleway.variable} ${sophia.variable}`}>
      <body>{children}</body>
    </html>
  );
}
