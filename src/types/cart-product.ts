import { Product } from "@prisma/client";

export type CartProduct = Product & { qty: number }