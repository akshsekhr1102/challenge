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
  User2Icon,
} from "lucide-react";

import Link from "next/link";
import React from "react";

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
        <User2Icon />
        <Link
          href={"/search"}
          className=" aspect-square rounded-full h-16 grid place-content-center bg-blue-900 shadow-lg"
        >
          <Search className=" text-white" />
        </Link>
        <CarTaxiFrontIcon />
        <HeartIcon />
      </nav>
      <header className="hidden md:flex justify-between py-4 items-center px-10 fixed top-0 z-20 w-full bg-white shadow-lg">
        <h1 className="text-3xl font-semibold tracking-tighter">wethenew</h1>

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

        <div className="flex items-center space-x-2 w-96 relative ">
          <Input
            type="text"
            placeholder="Search for a brand, a model..."
            className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-black transition-colors duration-200"
          />
          <Search className="text-gray-500 hover:text-black cursor-pointer absolute right-[10%]" />
        </div>

        <div className="flex space-x-6 items-center">
          <Link
            href="/"
            className="hover:text-black transition-colors duration-200"
          >
            <User2Icon className="text-gray-500" />
          </Link>
          <Link
            href="/"
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
