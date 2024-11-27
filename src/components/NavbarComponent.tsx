import Image from "next/image";
import NavigationMenuNavbar from "./NavigationMenu";
import Link from "next/link";

export default function NavbarComponent() {
  return (
    <div className="fixed w-full top-0 z-50">
      <div className="bg-white flex mx-auto sm:mt-5 items-center sm:max-w-[80vw] min-w-72 justify-between border p-4 sm:rounded-full shadow-md">
        <Link href="/">
          <Image
            src={"/images/viruspace-logo.jpg"}
            width={50}
            height={50}
            alt="viruspace-logo"
            className="rounded-full"
          />
        </Link>
        <NavigationMenuNavbar />
        {/* <Link href="/daftar-virus">
          <Button variant={"outline"} className="rounded-full">
            Belajar virus
          </Button>
        </Link> */}
      </div>
    </div>
  );
}
