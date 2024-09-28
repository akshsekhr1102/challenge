import {
  User,
  ShoppingBag,
  Info,
  Package,
  Star,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Wethenew from "@/app/resuables/navbar";
import Logo from "@/components/logo";

export default function Component() {
  return (
    <div className="w-64 p-6 bg-white shadow-lg min-h-screen">
      <div className="mb-8 flex flex-col">
        <Logo />
        <div>
          <h2 className="text-2xl font-mono">Welcome</h2>
          <p className="text-xl">AKSH</p>
        </div>
      </div>
      <nav className="space-y-4 flex flex-col gap-5">
        <Link href={"my-orders"}>
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-gray-300"
          >
            <ShoppingBag className="mr-2 h-8 w-8" />
            My orders
          </Button>
        </Link>
        <Link href={"my-informations"}>
          <Button variant="ghost" className="w-full justify-start">
            <Info className="mr-2 h-8 w-8" />
            My informations
          </Button>
        </Link>
        <Link href={"my-delivery"}>
          <Button variant="ghost" className="w-full justify-start">
            <Package className="mr-2 h-8 w-8" />
            My delivery address
          </Button>
        </Link>
      </nav>
    </div>
  );
}
