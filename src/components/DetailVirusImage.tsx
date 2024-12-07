"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useState } from "react";

export default function DetailVirusImage({ images }) {
  const [openModal, setOpenModal] = useState(false);
  const autoplayDuration = 5000;
  return (
    <div className="w-full mx-auto">
      <div className="hidden md:block w-full sticky top-4 columns-2 gap-4 space-y-4">
        {images.map((image, idx) => {
          return (
            <div
              key={idx}
              onClick={() => setOpenModal(true)}
              className="cursor-pointer"
            >
              <Image
                className="rounded-xl shadow w-full h-auto"
                src={image}
                width={0}
                height={0}
                sizes="100vw"
                alt={`image virus ${idx + 1}`}
              />
            </div>
          );
        })}
      </div>
      <Carousel
        className="w-full md:hidden"
        plugins={[
          Autoplay({
            delay: autoplayDuration,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, idx) => {
            return (
              <CarouselItem key={idx}>
                <div onClick={() => setOpenModal(true)}>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6 cursor-pointer">
                      <Image
                        className="w-full rounded-xl shadow"
                        src={image}
                        width="232"
                        height="290"
                        alt={`image virus ${idx + 1}`}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent>
          <Carousel
            plugins={[
              Autoplay({
                delay: autoplayDuration,
              }),
            ]}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {images.map((image, idx) => {
                return (
                  <CarouselItem key={idx}>
                    <div className="relative w-full aspect-square mx-auto cursor-grab">
                      <Image
                        className="border"
                        src={image}
                        alt={`image virus ${idx + 1}`}
                        fill
                        objectFit="contain"
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  );
}
