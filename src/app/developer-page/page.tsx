import Image from "next/image";
import developerData from ".././../constans/developer-data.json";

export default function DeveloperPage() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-primary flex justify-between gap-8 bg-[#fff8f3] rounded-2xl shadow-lg p-6 border">
        <div className="text-primary w-fit space-y-2">
          <p className="text-2xl font-bold">Sekilas Tentang Viruspace</p>
          <p className="text-base font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className="relative aspect-square w-24 h-24 sm:w-40 sm:h-40 hidden md:block">
          <Image
            src={"/images/viruspace-logo.jpg"}
            fill
            objectFit="cover"
            alt="viruspace-logo"
            className="rounded-full"
          />
        </div>
      </div>

      <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 py-10">
        {developerData.images.map((dev, idx) => {
          return (
            <div key={idx}>
              <div className="relative aspect-square">
                <Image src={dev.image} alt={dev.name} fill objectFit="cover" />
              </div>
              <div className="mt-3 text-primary">
                <p className="font-bold text-sm sm:text-base lg:text-3xl">
                  {dev.name}
                </p>
                <p className="font-medium text-xs sm:text-sm lg:text-xl">
                  {dev.nim}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
