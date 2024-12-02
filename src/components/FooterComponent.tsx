import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FooterComponent() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="w-[90%] mx-auto py-6 space-y-5">
        <div className="min-h-[50vh] grid lg:grid-cols-2 space-y-5">
          <div className="flex flex-col gap-3 w-full justify-center">
            <Link href={"/"} className="w-fit">
              <Image
                src="/images/viruspace-logo.jpg"
                height={60}
                width={60}
                alt="nomyly-logo"
                className="rounded-full"
              />
            </Link>
            <p className="text-lg font-semibold">VIRUSPACE</p>
            <p className="text-sm lg:text-base leading-relaxed">
              Viruspace menyediakan materi untuk mempelajari berbagai macam
              virus, penjelasan karakteristik setiap virus, gejala
              awal/sejarahnya, gambar virusnya, dan cara mencegahan agar manusia
              lebih waspada kepada penyebaran suatu virus.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3 justify-center md:items-end">
            <Link
              href={"/developer-page"}
              className="text-lg font-semibold underline group inline-flex"
            >
              Kunjungi halaman pengembang{" "}
              <ArrowUpRight className="group-hover:rotate-45 duration-300 w-4 h-4" />
            </Link>
            <p className="text-sm lg:text-base leading-relaxed md:text-right">
              Viruspace dikembangkan sebagai bagian dari tugas mata kuliah
              Multimedia - Universitas Pendidikan Indonesia
            </p>
            <Link
              href={"https://www.upi.edu/"}
              className="text-lg font-semibold underline group"
              target="_blank"
            >
              <Image
                src={"/images/logo-upi.png"}
                alt="upi-logo"
                width={120}
                height={120}
              />
            </Link>
          </div>
        </div>
        <div className="text-xs uppercase text-center">
          copyright &copy; 2024 by avenir tech
        </div>
      </div>
    </div>
  );
}
