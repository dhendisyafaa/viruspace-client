import { PandemicChart } from "@/components/charts/PandemicChart";
import FooterComponent from "@/components/FooterComponent";
import HeroSection from "@/components/HeroSection";
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

export default function Home() {
  const cardContents = [
    {
      image: "/images/viruspace-logo.jpg",
      title: "PELAJARI VIRUS-VIRUS SEKITAR KITA",
      description:
        "Lihat penjelasan lengkap,cara pencegahan,cara mencegah dsb tentang virus disekitar",
      buttonText: "Lihat materi",
      href: "/daftar-virus",
    },
    {
      image: "/images/viruspace-logo.jpg",
      title: "SIAP MENJADI JUARANYA?",
      description:
        "Jangan ragu! Ayo, tantang dirimu sekarang dan mainkan kuisnya. Siapa tahu, kamu akan jadi pemenang dengan skor tertinggi!",
      buttonText: "Mulai quiz",
      href: "/quiz",
    },
    {
      image: "/images/viruspace-logo.jpg",
      title:
        "INGIN TAHU LEBIH BANYAK TENTANG VIRUS? TONTON VIDEO PEMBELAJARAN INI!",
      description:
        "Virus bisa menjadi topik yang rumit, tapi dengan video pembelajaran ini, kamu akan lebih mudah memahaminya!",
      buttonText: "Lihat video pembelajaran",
      href: "/video-belajar",
    },
    {
      image: "/images/viruspace-logo.jpg",
      title: "SIAP UNTUK BERMAIN DAN BELAJAR?",
      description:
        "Bergabunglah sekarang, dan ayo mainkan mini game untuk menguji sejauh mana kamu paham tentang virus!",
      buttonText: "Main mini game",
      href: "/mini-game",
    },
  ];

  return (
    <div className="">
      <HeroSection />
      <div className="relative w-full md:w-[50vw] -z-10 -mb-16 lg:-mb-6 mx-auto h-[30vh]">
        {/* <Image
          src={"/images/animation-virus.png"}
          alt="virus"
          layout="fill"
          objectFit="cover"
        /> */}
        <Image
          src={"/gif/virus-animation.gif"}
          alt="virus"
          layout="fill"
          objectFit="cover"
          unoptimized={true}
        />
      </div>
      <div className="bg-primary text-center py-20 text-primary-foreground rounded-3xl lg:rounded-[100px]">
        <div className="px-4 md:w-[70vw] mx-auto">
          <p className="text-xl md:text-4xl font-bold">
            Sudah mengenal lebih dalam tentang virus?
          </p>
          <p className="text-sm lg:text-lg mt-5">
            Setelah kamu memahami lebih dalam tentang virus, kamu akan memiliki
            kemampuan untuk melakukan lebih banyak hal daripada yang kamu kira.
            Jangan hanya berhenti pada pengetahuan dasar! Lakukan 4 hal ini
            untuk memanfaatkan pengetahuanmu secara maksimal!
          </p>
          <div className="gap-10 mt-10 grid grid-cols-1 md:grid-cols-2">
            {cardContents.map((content, i) => {
              return (
                <Card
                  key={i}
                  className="max-w-md rounded-br-3xl rounded-bl-3xl mx-auto text-left overflow-hidden border-none"
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
                      <Button variant={"outline"} size={"lg"}>
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
      <div className="flex flex-col gap-20 justify-center items-center my-36 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-fit">
          <PandemicChart />
          <div className="flex flex-col gap-y-5 max-w-sm justify-center">
            <p className="text-sm font-semibold text-primary">
              TES KEPRIBADIAN MBTI
            </p>
            <p className="text-3xl font-bold text-primary">Mengenali Virus</p>
            <p className="text-base text-primary">
              Diluar memahami diri sendiri, MBTI pun bisa membantu kamu memahami
              teman, pasangan, dan keluargamu untuk menjalin hubungan yang lebih
              bermakna bersama mereka.
            </p>
            <Button className="rounded-full font-bold w-fit">
              Tes MBTI Gratis
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-fit">
          <div className="md:order-last">
            <PandemicChart />
          </div>
          <div className="flex flex-col gap-y-5 max-w-sm justify-center">
            <p className="text-sm font-semibold text-primary">
              TES KEPRIBADIAN MBTI
            </p>
            <p className="text-3xl font-bold text-primary">Mengenali Virus</p>
            <p className="text-base text-primary">
              Diluar memahami diri sendiri, MBTI pun bisa membantu kamu memahami
              teman, pasangan, dan keluargamu untuk menjalin hubungan yang lebih
              bermakna bersama mereka.
            </p>
            <Button className="rounded-full font-bold w-fit">
              Tes MBTI Gratis
            </Button>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
