import { PandemicChart } from "@/components/charts/PandemicChart";
import { Button } from "@/components/ui/button";

export default function ChartVirusCases() {
  return (
    <div className="flex flex-col gap-20 justify-center items-center my-24 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-fit">
        <PandemicChart />
        <div className="flex flex-col gap-y-5 max-w-sm justify-center">
          <p className="text-sm font-semibold text-primary uppercase">
            lorem ipsum dolor is amet
          </p>
          <p className="text-3xl font-bold text-primary">Mengenali Virus</p>
          <p className="text-base text-primary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s
          </p>
          <Button className="rounded-full font-bold w-fit">lorem ipsum</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-fit">
        <div className="md:order-last">
          <PandemicChart />
        </div>
        <div className="flex flex-col gap-y-5 max-w-sm justify-center">
          <p className="text-sm font-semibold text-primary uppercase">
            lorem ipsum dolor is amet
          </p>
          <p className="text-3xl font-bold text-primary">Mengenali Virus</p>
          <p className="text-base text-primary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s
          </p>
          <Button className="rounded-full font-bold w-fit">lorem ipsum</Button>
        </div>
      </div>
    </div>
  );
}
