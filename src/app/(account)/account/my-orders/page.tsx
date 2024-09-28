import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import Link from "next/link";

export default function page() {
  return (
    <div className="p-10">
      <div className="min-h-full flex flex-col justify-center items-start gap-4">
        <h1 className="text-xl">My orders</h1>
        <h3 className="text-lg">You do not have an order yet</h3>
        <Link href={"/home"}>
          <Button className="text-xl px-10 py-7 "> Start Shopping</Button>
        </Link>
      </div>
    </div>
  );
}
