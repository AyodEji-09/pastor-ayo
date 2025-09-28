"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrMenu } from "react-icons/gr";
import logo from "@/assets/images/logo/logo.png";
import { Menubar } from "@radix-ui/react-menubar";
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ChevronDown } from "lucide-react";

const Nav = () => {
  const pathname = usePathname();
  const routes = [
    { id: "1", name: "Home", path: "/home" },
    { id: "2", name: "About", path: "/about" },
    { id: "3", name: "Events", path: "/events" },
    { id: "4", name: "Shop", path: "/shop" },
    { id: "4", name: "Blog", path: "/blogs" },
    { id: "5", name: "Bookings", path: "/bookings" },
    {
      id: "6",
      name: "Ministry",
      path: "/ministry",
      subRoutes: [
        { id: "61", name: "Music", path: "/ministry/music" },
        { id: "62", name: "Marriage", path: "/ministry/marriage" },
      ],
    },
  ];
  return (
    <header className="bg-secondary">
      <Menubar className="container mx-auto px-4 flex justify-between items-center font-regular py-2">
        <div className="logo">
          <Link href={"/"}>
            <Image src={logo} alt="" className="w-40" />
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <div className="menu md:flex items-center gap-8 hidden">
            {routes.map((route) =>
              route.subRoutes ? (
                <MenubarMenu key={route.id}>
                  <MenubarTrigger className="flex items-center gap">
                    {route.name} <ChevronDown size={12} />
                  </MenubarTrigger>
                  <MenubarContent>
                    {route.subRoutes.map((subRoute) => (
                      <Link key={subRoute.id} href={subRoute.path}>
                        <MenubarItem>{subRoute.name}</MenubarItem>
                      </Link>
                    ))}
                  </MenubarContent>
                </MenubarMenu>
              ) : (
                <Link
                  key={route.id}
                  href={route.path}
                  className={`${
                    pathname === route.path
                      ? "text-primary font-medium"
                      : "font-regular"
                  }`}
                >
                  {route.name}
                </Link>
              ),
            )}
          </div>
          <div className={`action block md:hidden`}>
            <Drawer direction="left">
              <DrawerTrigger className="cursor-pointer">
                <GrMenu />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <div className="logo">
                    <Link href={"/"}>
                      <Image src={logo} alt="" className="-20" />
                    </Link>
                  </div>
                </DrawerHeader>
                <div className="menu flex flex-col p-4 gap-8">
                  {routes.map((route) => (
                    <Link
                      key={route.id}
                      href={route.path}
                      className={`${
                        pathname === route.path
                          ? "text-primary font-medium"
                          : "font-regular"
                      }`}
                    >
                      {route.name}
                    </Link>
                  ))}
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </Menubar>
    </header>
  );
};

export default Nav;
