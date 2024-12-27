import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function CardsSection({ content }) {
  return (
    <div className="bg-primary text-center py-20 text-primary-foreground rounded-3xl lg:rounded-[100px]">
      <div className="px-4 md:w-[70vw] mx-auto">
        <p className="text-xl md:text-4xl font-bold" data-aos="fade-in">
          {content.title}
        </p>
        <p
          className="text-sm lg:text-lg mt-5"
          data-aos="fade-in"
          data-aos-delay="500"
        >
          {content.subTitle}
        </p>
        <div className="gap-10 mt-10 grid grid-cols-1 md:grid-cols-2">
          {content.cards.map((content) => {
            return (
              <Card
                key={content.id}
                className="max-w-md rounded-[50px] mx-auto text-left overflow-hidden border-none"
                data-aos={content.id % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <div className="relative h-72">
                  <Image
                    alt={content.title}
                    src={content.image}
                    fill
                    objectFit="cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-primary">
                    {content.title}
                  </CardTitle>
                  <CardDescription className="font-medium">
                    {content.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={content.href}>
                    <Button
                      variant={"outline"}
                      size={"lg"}
                      className="font-semibold border-2 rounded-xl"
                    >
                      {content.buttonText}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
