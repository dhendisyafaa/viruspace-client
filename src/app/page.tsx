import FooterComponent from "@/components/FooterComponent";
import AnimationViruses from "@/components/homepage/AnimationViruses";
import CardsSection from "@/components/homepage/CardsSection";
import FunFactVirus from "@/components/homepage/FunFactVirus";
import HeroSection from "@/components/homepage/HeroSection";
import homepageContent from "../constans/homepage-content.json";

export default function Home() {
  return (
    <div>
      <HeroSection content={homepageContent.heroSection} />
      <AnimationViruses />
      <CardsSection content={homepageContent.cardsSection} />
      <FunFactVirus />
      <FooterComponent />
    </div>
  );
}
