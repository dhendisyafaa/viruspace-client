import Image from "next/image";
import listViruses from "../../constans/daftar-virus.json";
import Link from "next/link";

export default function ListOfViruses() {
  return (
    <div className="w-[90vw] pb-10 mx-auto">
      <div className="text-center pb-10 space-y-3">
        <p className="text-xl md:text-3xl font-bold text-primary uppercase">
          Pelajari virus-virus di sekitar kita
        </p>
        <p className="text-base mx-auto md:text-xl md:w-[60vw] text-primary">
          Lihat{" "}
          <span className="font-bold">
            penjelasan lengkap, cara pencegahan, dan penyebaran
          </span>{" "}
          tentang virus di sekitar
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 lg:gap-8">
        {listViruses.map((virus) => {
          return (
            // http://localhost:3000/daftar-virus/2?name=sars-cov-2
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
    </div>
  );
}
