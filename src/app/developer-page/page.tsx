import Image from "next/image";
import developerData from ".././../constans/developer-data.json";
import Link from "next/link";

function CardMembers({ members }) {
  return (
    <div className="gap-6 grid grid-cols-2 sm:grid-cols-3">
      {members.map((member, idx) => (
        <Link key={idx} href={member.instagram} target="_blank">
          <div className="hover:border-primary hover:border-2 hover:cursor-pointer duration-100 border border-transparent rounded-xl overflow-hidden shadow-md">
            <div className="relative aspect-square">
              <Image
                src={member.image}
                alt={member.name}
                fill
                objectFit="cover"
              />
            </div>
            <div className="text-primary text-center md:text-left p-3">
              <p className="font-bold text-sm sm:text-base lg:text-2xl">
                {member.name}
              </p>
              <p className="font-medium text-xs sm:text-sm lg:text-xl">
                {member.nim}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function DeveloperPage() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-primary flex justify-between gap-8 bg-[#fff8f3] rounded-2xl shadow-lg p-6 border">
        <div className="text-primary w-fit space-y-2">
          <p className="text-2xl font-bold">Sekilas Tentang Viruspace</p>
          <p className="text-base font-medium">
            {developerData.aboutViruspace}
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
      {Object.keys(developerData.teams).map((teamKey) => (
        <section key={teamKey} className="py-10">
          <h2 className="text-primary text-2xl font-bold mb-6 uppercase border-l-4 border-l-primary pl-2">
            {`Tim ${teamKey.charAt(0).toUpperCase() + teamKey.slice(1)}`}
          </h2>
          <CardMembers members={developerData.teams[teamKey]} />
        </section>
      ))}
    </div>
  );
}
