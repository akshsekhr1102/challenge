import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function CartCard() {
  return (
    <Card className="grid grid-cols-3 place-content-center">
      <CardContent className="col-span-1">
        <Image
          src={
            "https://cdn.shopify.com/s/files/1/2358/2817/products/dunk-low-black-white-822113.png?v=1638813882&width=1440"
          }
          alt=""
          height={400}
          width={400}
        />
      </CardContent>
      <CardFooter className="col-span-2 flex flex-col items-start w-full">
        <h3>Nike Dunk low B/W</h3>
        <div className="flex justify-between w-full">
          <h2>Size</h2>
          <span>35.5 EU</span>
        </div>
        <div className="w-full">
          <h1>$130</h1>
          <div className="flex justify-between w-full items-center">
            Quantity
            <div className="flex justify-center items-center gap-4">
              <Button>+</Button>
              <h3>1</h3>
              <Button>-</Button>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
