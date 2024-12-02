import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="py-10 px-4 text-center flex flex-col gap-y-5 justify-center items-center">
      <p className="text-sm font-semibold text-primary">
        EKSPORASI DUNIA VIRUS
      </p>
      <p className="text-4xl md:text-5xl font-bold text-primary">
        Mengenal Virus. Lebih Dekat.
      </p>
      <p className="text-base md:text-xl md:w-[60vw] text-primary">
        Memahami cara{" "}
        <span className="font-bold">pencegahan, penyebaran, dan dampak</span>{" "}
        dari berbagai jenis virus serta menemukan{" "}
        <span className="font-bold">cara melindungi diri</span>
        berdasarkan pengetahuanmu tentang virus.
      </p>
      <Link href="/daftar-virus">
        <Button className="rounded-full font-bold" size={"lg"}>
          Tes Pengetahuan Virus
        </Button>
      </Link>
    </div>
  );
}
