import DetailVirusImage from "@/components/DetailVirusImage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import dataDetailVirus from "../../../constans/detail-virus.json";

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

  return (
    <div className="container px-4 mx-auto gap-5 grid grid-cols-1 md:grid-cols-2">
      <DetailVirusImage images={virusById?.images} />
      <div className="pb-10">
        <div className="p-4 w-full space-y-1 sticky top-0 bg-[#fff8f3]">
          <p className="text-primary uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            {virusById?.name}
          </p>
          <p className="text-primary uppercase text-xs sm:text-sm md:text-lg lg:text-xl font-medium">
            {virusById?.penyebab}
          </p>
        </div>
        {/* If you want to write it to the DOM, pass a string instead: collapsible="true" or collapsible={value.toString()} */}
        <div className="space-y-5 bg-primary text-primary-foreground p-4 rounded-3xl">
          <Accordion type="multiple" defaultValue={["item-1"]}>
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
      </div>
    </div>
  );
}
