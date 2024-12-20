import Image from "next/image";
import Link from "next/link";
import listViruses from "../constans/daftar-virus.json";

export default function ListOfViruses() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 lg:gap-8">
      {listViruses.map((virus) => {
        return (
          <Link
            href={`/daftar-virus/${virus.id}?name=${virus.name}`}
            key={virus.id}
          >
            <div
              className="relative aspect-square rounded-3xl overflow-hidden"
              style={{ backgroundColor: virus.bgColor }}
            >
              <p className="relative top-5 md:top-8 z-40 text-xs sm:text-lg md:text-xl lg:text-2xl uppercase text-white font-bold text-center">
                {virus.name}
              </p>
              <Image
                src={virus.image}
                alt={virus.name}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-fit bottom-3 absolute"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
