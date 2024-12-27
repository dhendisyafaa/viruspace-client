import NavbarComponent from "@/components/NavbarComponent";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AOSInit } from "./aos";
import Pwa from "@/components/pwa";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://viruspace.vercel.app/"),
  title: {
    template: "%s | Viruspace",
    default: "Viruspace",
  },
  authors: {
    name: "Viruspace",
  },
  description:
    "Viruspace adalah website untuk mempelajari berbagai macam virus, penjelasan karakteristik setiap virus, gejala awal/sejarahnya, gambar virusnya, dan cara mencegahan agar manusia lebih waspada kepada penyebaran suatu virus.",
  openGraph: {
    title: "Viruspace",
    description:
      "Viruspace adalah website untuk mempelajari berbagai macam virus, penjelasan karakteristik setiap virus, gejala awal/sejarahnya, gambar virusnya, dan cara mencegahan agar manusia lebih waspada kepada penyebaran suatu virus.",
    url: "https://viruspace.vercel.app/",
    siteName: "Viruspace",
    images: "/web-app-manifest-512x512.png",
    type: "website",
  },
  keywords: [
    "viruspace",
    "virus",
    "space",
    "viruses",
    "UPI",
    "Universitas Pendidikan Indonesia",
  ],
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
        <Pwa />
      </body>
    </html>
  );
}
