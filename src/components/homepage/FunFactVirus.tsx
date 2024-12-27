"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import FunFactData from "../../constans/fun-fact.json";
import Link from "next/link";

export default function FunFactVirus() {
  return (
    <div className="p-4 pb-10 md:px-10 space-y-4">
      <Image
        src={"/images/fun-fact.png"}
        width={160}
        height={100}
        alt="fun-fact logo"
      />
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {FunFactData.map((funFact) => {
            return (
              <CarouselItem
                key={funFact.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Link href={funFact.link}>
                  <div className="p-4 border border-primary rounded-lg h-full">
                    <p className="text-primary uppercase font-extrabold text-xl">
                      {funFact.namaVirus}
                    </p>
                    <p className="text-primary font-medium text-base mt-2">
                      {funFact.funFact}
                    </p>
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
