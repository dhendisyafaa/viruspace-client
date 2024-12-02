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
import cardContents from "../../constans/cardsHomepage.json";

export default function CardsSection() {
  return (
    <div className="bg-primary text-center py-20 text-primary-foreground rounded-3xl lg:rounded-[100px]">
      <div className="px-4 md:w-[70vw] mx-auto">
        <p className="text-xl md:text-4xl font-bold">
          Sudah mengenal lebih dalam tentang virus?
        </p>
        <p className="text-sm lg:text-lg mt-5">
          Setelah kamu memahami lebih dalam tentang virus, kamu akan memiliki
          kemampuan untuk melakukan lebih banyak hal daripada yang kamu kira.
          Jangan hanya berhenti pada pengetahuan dasar! Lakukan 4 hal ini untuk
          memanfaatkan pengetahuanmu secara maksimal!
        </p>
        <div className="gap-10 mt-10 grid grid-cols-1 md:grid-cols-2">
          {cardContents.map((content, i) => {
            return (
              <Card
                key={i}
                className="max-w-md rounded-[50px] mx-auto text-left overflow-hidden border-none"
              >
                <div className="relative h-72">
                  <Image
                    alt={content.title}
                    src={content.image}
                    layout="fill"
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
