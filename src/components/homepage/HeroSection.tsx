import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroSection({ content }) {
  return (
    <div className="py-10 px-4 text-center flex flex-col gap-y-5 justify-center items-center">
      <p
        className="text-sm font-semibold text-primary uppercase"
        data-aos="fade-in"
        data-aos-delay="1000"
      >
        {content.preTitle}
      </p>
      <p
        className="text-4xl md:text-5xl font-bold text-primary"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {content.title}
      </p>
      <p
        className="text-base md:text-xl md:w-[60vw] text-primary"
        data-aos="fade-in"
        data-aos-delay="1000"
      >
        {content.subTitle.map((text, index) => (
          <span key={index} dangerouslySetInnerHTML={{ __html: text }} />
        ))}
      </p>
      <Link href="/daftar-virus" data-aos="fade-in" data-aos-delay="1200">
        <Button className="rounded-full font-bold" size={"lg"}>
          {content.buttonText}
        </Button>
      </Link>
    </div>
  );
}
