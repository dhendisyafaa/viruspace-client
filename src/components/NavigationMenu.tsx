import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NavigationMenuNavbar() {
  const navigation: { title: string; href: string; description: string }[] = [
    {
      title: "Belajar tentang virus",
      href: "/daftar-virus",
      description:
        "Lihat penjelasan lengkap dan cara pencegahan tentang virus disekitar kita",
    },
    {
      title: "Quiz",
      href: "/quiz",
      description: "Tantang dirimu sekarang dan mainkan kuisnya",
    },
    {
      title: "Video pembelajaran",
      href: "/video-belajar",
      description:
        "Belajar virus akan lebih mudah memahaminya dengan video pembelajaran",
    },
    {
      title: "Mini game",
      href: "/mini-game",
      description:
        "Mainkan mini game untuk menguji sejauh mana kamu paham tentang virus!",
    },
  ];

  return (
    <NavigationMenu className="">
      <NavigationMenuList>
        {navigation.map((nav, i) => {
          return (
            <NavigationMenuItem key={i} className="hidden md:block">
              <Link href={nav.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {nav.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
        <div className="block md:hidden">
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <MenuIcon />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] sm:w-[400px] gap-3 p-2 sm:grid-cols-2 grid-cols-1">
                {navigation.map((nav) => (
                  <ListItem key={nav.title} title={nav.title} href={nav.href}>
                    {nav.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href = "#", ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href as string}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground shadow-md",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
