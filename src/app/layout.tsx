import NavbarComponent from "@/components/NavbarComponent";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AOSInit } from "./aos";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Viruspace",
  description:
    "Viruspace adalah website untuk mempelajari berbagai macam virus, penjelasan karakteristik setiap virus, gejala awal/sejarahnya, gambar virusnya, dan cara mencegahan agar manusia lebih waspada kepada penyebaran suatu virus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id-ID">
      <AOSInit />
      <body className={`${plusJakartaSans.className} antialiased`}>
        <NavbarComponent />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
