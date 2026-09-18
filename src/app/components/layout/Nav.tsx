"use client";
import {
  DrawerClose,
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const Nav = () => {
  const pathname = usePathname();
  const { totalQuantity, openCart } = useCart();
  const routes = [
    { id: "1", name: "Home", path: "/home" },
    { id: "2", name: "About", path: "/about" },
    { id: "3", name: "Events", path: "/events" },
    { id: "4", name: "Shop", path: "/shop" },
    { id: "40", name: "Blog", path: "/blogs" },
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
    { id: "7", name: "Support", path: "/support" },
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
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative cursor-pointer p-2 text-foreground hover:text-primary transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalQuantity > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[11px] font-semibold rounded-full min-w-[18px] h-[18px] px-1 flex items-center justify-center">
                {totalQuantity > 99 ? "99+" : totalQuantity}
              </span>
            )}
          </button>
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
                    <DrawerClose asChild>
                      <Link href={"/"}>
                        <Image src={logo} alt="" className="-20" />
                      </Link>
                    </DrawerClose>
                  </div>
                </DrawerHeader>
                <div className="menu flex flex-col p-4 gap-4">
                  {routes.map((route) =>
                    route.subRoutes ? (
                      <Accordion
                        key={route.id}
                        type="single"
                        collapsible
                        className="w-full"
                      >
                        <AccordionItem value={route.id} className="border-none">
                          <AccordionTrigger className="py-2 text-base font-regular hover:no-underline">
                            {route.name}
                          </AccordionTrigger>
                          <AccordionContent className="flex flex-col gap-4 pl-4">
                            {route.subRoutes.map((subRoute) => (
                              <DrawerClose asChild key={subRoute.id}>
                                <Link
                                  href={subRoute.path}
                                  className={`${
                                    pathname === subRoute.path
                                      ? "text-primary font-medium"
                                      : "font-regular"
                                  }`}
                                >
                                  {subRoute.name}
                                </Link>
                              </DrawerClose>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <DrawerClose asChild key={route.id}>
                        <Link
                          href={route.path}
                          className={`${
                            pathname === route.path
                              ? "text-primary font-medium"
                              : "font-regular"
                          }`}
                        >
                          {route.name}
                        </Link>
                      </DrawerClose>
                    ),
                  )}
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
