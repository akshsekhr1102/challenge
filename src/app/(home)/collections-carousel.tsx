import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import { shoePricing } from "./data";
import prisma from "@/lib/db";

export default async function CollectionCaraousels() {
  const shoes = await prisma.product.findMany({});

  return (
    <section className=" py-4">
      <div className="py-3">
        <Carousel>
          <CarouselContent>
            {shoes.map((e, index) => (
              <CarouselItem key={index} className="basis-1/[2.5] md:basis-1/4">
                <div className="flex justify-between items-center px-4 py-2  border rounded-sm max-w-52">
                  <Image src={e.image} alt="" height={40} width={40} />
                  <h4 className="tracking-tighter font-thin">Adidas Campus</h4>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex justify-between items-center px-5">
        <h1 className="text-2xl  font-thin">Back to school</h1>
        <div className="flex gap-3 items-center justify-center">
          <Link href={""} className="underline font-semibold text-sm">
            See More
          </Link>
          <div className="hidden md:flex gap-3">
            <Button>
              <MoveLeft />
            </Button>
            <Button>
              <MoveRight />
            </Button>
          </div>
        </div>
      </div>
      <Carousel className="py-10">
        <CarouselContent className="p-2 max-h-80 ">
          {shoes.map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/[2.5]  items-start gap-2 max-w-52 "
            >
              <Link href={`/products/${_.slug}`}>
                <Card className="rounded-none bg-black/[6%] aspect-square flex items-center">
                  <CardContent>
                    <Image src={_.image} alt="" height={350} width={350} />
                  </CardContent>
                </Card>
                <div className="flex flex-col justify-center items-start">
                  <p className="font-semibold text-lg tracking-tighter">
                    {_.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {" "}
                    from {_.price}
                  </p>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
