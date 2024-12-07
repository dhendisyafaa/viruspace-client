import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroSection({ content }) {
  return (
    <div className="py-10 px-4 text-center flex flex-col gap-y-5 justify-center items-center">
      <p className="text-sm font-semibold text-primary uppercase">
        {content.preTitle}
      </p>
      <p className="text-4xl md:text-5xl font-bold text-primary">
        {content.title}
      </p>
      <p className="text-base md:text-xl md:w-[60vw] text-primary">
        {content.subTitle.map((text, index) => (
          <span key={index} dangerouslySetInnerHTML={{ __html: text }} />
        ))}
      </p>
      <Link href="/daftar-virus">
        <Button className="rounded-full font-bold" size={"lg"}>
          {content.buttonText}
        </Button>
      </Link>
    </div>
  );
}
