import Image from "next/image";
import NavigationMenuNavbar from "./NavigationMenu";
import Link from "next/link";

export default function NavbarComponent() {
  return (
    <div className="w-full mb-8 z-50" data-aos="fade-down">
      <div className="bg-white flex mx-auto mt-5 items-center max-w-[95vw] md:max-w-[80vw] min-w-72 justify-between border p-2 sm:p-4 rounded-full shadow-md">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
            <Image
              src={"/images/viruspace-logo.jpg"}
              fill
              objectFit="cover"
              alt="viruspace-logo"
              className="rounded-full"
            />
          </div>
          <p className="uppercase text-sm sm:text-base lg:text-xl font-bold text-primary">
            viruspace
          </p>
        </Link>
        <NavigationMenuNavbar />
      </div>
    </div>
  );
}
