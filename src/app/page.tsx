import AnimationViruses from "@/components/homepage/AnimationViruses";
import CardsSection from "@/components/homepage/CardsSection";
import ChartVirusCases from "@/components/homepage/ChartVirusCases";
import HeroSection from "@/components/homepage/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AnimationViruses />
      <CardsSection />
      <ChartVirusCases />
    </div>
  );
}
