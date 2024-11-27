import Image from "next/image";

export default function ListOfViruses() {
  const listViruses = [
    {
      id: 1,
      name: "Corona",
      image: "/images/rabies.png",
      bgColor: "#13525E",
    },
    {
      id: 2,
      name: "rabies",
      image: "/images/rabies.png",
      bgColor: "#46762C",
    },
    {
      id: 3,
      name: "Polio",
      image: "/images/rabies.png",
      bgColor: "#847A0F",
    },
    {
      id: 4,
      name: "hiv",
      image: "/images/rabies.png",
      bgColor: "#7D356D",
    },
    {
      id: 5,
      name: "influenza",
      image: "/images/rabies.png",
      bgColor: "#542718",
    },
  ];
  return (
    <div className="container w-[90vw] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 lg:gap-8">
      {listViruses.map((virus) => {
        return (
          <div
            key={virus.id}
            className="relative aspect-square rounded-3xl overflow-hidden"
            style={{ backgroundColor: virus.bgColor }}
          >
            <Image
              src={virus.image}
              alt={virus.name}
              layout="fill"
              objectFit="contain"
              className="border border-red-900"
            />
            <p className="mt-10 text-4xl uppercase text-white font-bold text-center">
              {virus.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
