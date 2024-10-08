import Image from "next/image";
import BreadSection from "../components/breadcrumbs-section";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/app/(home)/navbar";
import prisma from "@/lib/db";

// Define a type for your product data

type ParamsProps = {
  params: {
    product: string;
  };
};

export default async function Products({ params }: ParamsProps) {
  const { product } = params;
  const productName = await prisma.product.findUnique({
    where: {
      slug: params.product,
    },
  });

  return (
    <main className="md:mt-10 min-w-screen flex flex-col items-center md:grid grid-cols-2">
      <div className="grid grid-row-2 p-2 gap-1">
        <div className="grid place-content-center">
          <Image
            src={productName?.image as string}
            alt=""
            width={700}
            height={700}
            className="aspect-square md:aspect-auto md:object-cover object-contain object-center bg-gradient-to-b from-white to-black/10"
          />
        </div>
        <div className="grid grid-cols-2 place-content-center gap-1">
          <div>
            <Image
              src="https://cdn.shopify.com/s/files/1/2358/2817/products/dunk-low-black-white-207304.png?v=1638813882&width=640"
              alt=""
              height={350}
              width={350}
              className="aspect-square object-contain object-center bg-black/10"
            />
          </div>
          <div>
            <Image
              src="https://cdn.shopify.com/s/files/1/2358/2817/products/dunk-low-black-white-564324.png?v=1638813882&width=640"
              alt=""
              height={350}
              width={350}
              className="aspect-square object-contain object-center bg-black/10"
            />
          </div>
        </div>
      </div>
      <section className="p-4 w-full flex flex-col gap-3">
        <BreadSection />
        <h1 className="text-2xl tracking-wide">
          {productName
            ? productName.name
            : product.charAt(0).toUpperCase() + product.slice(1)}
        </h1>
        <p>
          From <span className="text-blue-400">$125</span>
        </p>
        <Button>Select your size</Button>
        <Card>
          <CardHeader className="flex flex-row gap-4 items-center">
            <CardTitle className="font-bold">Alma</CardTitle>
            <Button>2x</Button>
            <Button>3x</Button>
            <Button>4x</Button>
          </CardHeader>
        </Card>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that match the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <Navbar />
    </main>
  );
}
