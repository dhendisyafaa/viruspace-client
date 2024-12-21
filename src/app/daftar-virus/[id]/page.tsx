import DetailVirusImage from "@/components/DetailVirusImage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import dataDetailVirus from "../../../constans/detail-virus.json";
import Image from "next/image";
import FunFactData from "../../../constans/fun-fact.json";
import Link from "next/link";

export default async function DetailVirus({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const virusById = dataDetailVirus.find((virus) => virus.id === Number(id));

  if (!virusById) {
    return (
      <div className="container mx-auto text-center py-10">
        <h1 className="text-3xl font-bold text-red-500">
          Virus tidak ditemukan
        </h1>
        <p>Periksa URL Anda dan coba lagi.</p>
      </div>
    );
  }

  const funFact = FunFactData.find((fun) => fun.id === Number(id)) || {
    funFact: "Fun fact tidak tersedia untuk virus ini.",
  };

  return (
    <div className="container px-4 mx-auto gap-5 grid grid-cols-1 md:grid-cols-2">
      <DetailVirusImage images={virusById?.images} />
      <div className="pb-10 space-y-5">
        <div className="p-4 w-full space-y-1 sticky top-0 bg-[#fff8f3]">
          <p className="text-primary uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            {virusById?.name}
          </p>
          <p className="text-primary uppercase text-xs sm:text-sm md:text-lg lg:text-xl font-medium">
            {virusById?.penyebab}
          </p>
        </div>
        <div className="space-y-5 bg-primary text-primary-foreground p-4 rounded-3xl">
          <Accordion
            type="multiple"
            defaultValue={["item-1", "item-2", "item-3", "item-4", "item-5"]}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>PENGERTIAN</AccordionTrigger>
              <AccordionContent>{virusById?.pengertian}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>BENTUK</AccordionTrigger>
              <AccordionContent>{virusById?.bentuk}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>PENYEBARAN DAN GEJALA AWAL</AccordionTrigger>
              <AccordionContent>
                {virusById?.penyebaranGejalaAwal}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>BIASA DITEMUKAN</AccordionTrigger>
              <AccordionContent>{virusById?.tempatDitemukan}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>CARA MENGATASI/MENCEGAH</AccordionTrigger>
              <AccordionContent>{virusById?.caraPencegahan}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="space-y-3 bg-primary text-primary-foreground p-4 rounded-3xl">
          <p className="font-bold font-xl">
            Tonton video ini agar lebih mudah memahaminya!
          </p>
          <div className="iframe-container">
            <iframe
              className="rounded-3xl"
              src={virusById?.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="space-y-3">
          <Image
            src={"/images/fun-fact.png"}
            width={150}
            height={100}
            alt="fun-fact logo"
          />
          <div className="relative p-4 bg-primary text-primary-foreground rounded-3xl">
            <Image
              src={"/images/idea.png"}
              width={50}
              height={50}
              alt="fun-fact logo"
              className="-top-8 -right-3 absolute"
            />
            <p className="font-medium text-base md:text-lg">
              {funFact.funFact}
            </p>
          </div>
        </div>
        <div className="p-4">
          <p className="text-primary font-extrabold text-lg">
            SIAP UNTUK BERMAIN DAN BELAJAR?
          </p>
          <p className="text-primary font-medium text-base md:text-lg">
            Ayo mainkan quiz dan mini games untuk menguji sejauh mana kamu paham
            tentang virus!
          </p>
          <div className="mt-5 space-x-2">
            <Link
              href={"/quiz"}
              className="px-4 py-2 md:px-8 md:py-3 text-sm md:text-base bg-primary border-2 text-primary-foreground rounded-xl duration-300 font-bold hover:bg-background hover:text-primary border-transparent hover:border-2 hover:border-primary"
            >
              Quiz
            </Link>
            <Link
              href={"/mini-game"}
              className="px-4 py-2 md:px-8 md:py-3 text-sm md:text-base bg-primary border-2 text-primary-foreground rounded-xl duration-300 font-bold hover:bg-background hover:text-primary border-transparent hover:border-2 hover:border-primary"
            >
              Mainkan Mini Game
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
