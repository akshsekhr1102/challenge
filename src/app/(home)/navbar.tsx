import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CarTaxiFrontIcon,
  HeartIcon,
  MenuIcon,
  Search,
  ShoppingBag,
  User2Icon,
} from "lucide-react";

import Link from "next/link";
import React from "react";
import Searching from "./search";
import SearchProducts from "../search/SearchProducts";

function Navbar() {
  return (
    <section className="flex  items-center justify-center  shadow-lg">
      <nav className="bg-white w-96 h-14 fixed bottom-5 z-20 shadow-xl rounded-[30px] border flex items-center  justify-around md:hidden">
        <Drawer>
          <DrawerTrigger>
            <MenuIcon className="font-thin" />
          </DrawerTrigger>
          <DrawerContent translate="yes">
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button>Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Link href={"/profile"}>
          <User2Icon />
        </Link>
        <Link
          href={"/search"}
          className=" aspect-square rounded-full h-16 grid place-content-center bg-blue-900 shadow-lg"
        >
          <Search className=" text-white" />
        </Link>
        <Link href={"/cart"}>
          <ShoppingBag />
        </Link>
        <Link href={"/wishlist"}>
          <HeartIcon />
        </Link>
      </nav>
      <header className="hidden md:flex justify-between py-4 items-center px-10 fixed top-0 z-20 w-full bg-white shadow-lg">
        <Link href={"/"} className="text-3xl font-semibold tracking-tighter">
          wethenew
        </Link>

        <nav className="tracking-tight text-gray-500 text-md space-x-8">
          <Link
            href="/"
            className="hover:text-black transition-colors duration-200"
          >
            Sneakers
          </Link>
          <Link
            href="/"
            className="hover:text-black transition-colors duration-200"
          >
            Shoes
          </Link>
          <Link
            href="/"
            className="hover:text-black transition-colors duration-200"
          >
            Streetwear
          </Link>
        </nav>

        {/*  */}
        <Link href={"/search"}>
          <SearchProducts />
        </Link>
        <div className="flex space-x-6 items-center">
          <Link
            href="/"
            className="hover:text-black transition-colors duration-200"
          >
            <User2Icon className="text-gray-500" />
          </Link>
          <Link
            href="/wishlist"
            className="hover:text-black transition-colors duration-200"
          >
            <HeartIcon className="text-gray-500" />
          </Link>
          <Link
            href="/"
            className="hover:text-black transition-colors duration-200"
          >
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/179683623?v=4" />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </header>
    </section>
  );
}

export default Navbar;
