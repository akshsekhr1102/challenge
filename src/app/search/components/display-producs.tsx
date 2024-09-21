import { Card, CardContent } from "@/components/ui/card";
import prisma from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

export default async function DisplayProducts({ searchParams }: any) {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchParams.q,
      },
    },
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-20 py-10">
      {products.map((product) => (
        <Link
          href={`/products/${product.slug}`}
          key={product.id}
          className="flex flex-col items-center"
        >
          <Card className="flex flex-col items-center aspect-square justify-center">
            <CardContent className="p-2 flex flex-col items-center justify-between">
              <Image
                src={product.image}
                alt={product.name}
                height={400}
                width={400}
                className="object-contain object-center"
              />
            </CardContent>
          </Card>
          <div className="text-center mt-2">
            <p className="text-sm md:text-base font-medium">{product.name}</p>
            <p className="font-bold text-lg md:text-xl text-gray-800">
              $ {product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
