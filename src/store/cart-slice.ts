import prisma from "@/lib/db";
import { CartProduct } from "@/types/cart-product";
import { Product } from "@prisma/client";
import { StateCreator } from "zustand";

export type CartState = {
   products: CartProduct[];
   total: number;

}

export type CartActions = {
   addProduct: (product : Product) => void
   removeProduct: (product : Product) => void
   incQty: (productId: string) => void
   decQty: (productId: string) => void
   getProductById:(productId: string) =>CartProduct | undefined
   setTotal: (total: number) => void
   reset: () => void
}

export type CartSlice = CartState & CartActions

const initialState:CartState= {
    products:[],
    total:0
}


// export const createCartSlice: StateCreator<CartSlice, [['zustand/immer', never]], [], CartSlice> = (set) => ({
//     ...initialState,
//     incQty: (productId) => set((state)=>{
//         const foundProduct  = state.products.find((product) => product.id === productId)
//         if(foundProduct){
//             foundProduct.qty + 1
//         }
//     }),
//     decQty: (prodctId) => set((state)=>{
//         const foundProduct  = state.products.find((product) => product.id === productId)
//         if(foundProduct){
//             foundProduct.qty - 1
//         }
//     }),
//     addProduct:(prodctId) => set((state)=>{
//         const foundProduct  = state.products.find((product) => product.id === productId)
//         if(foundProduct){
            
//         }
//     }),
//     getProductById:() => void,
//     removeProduct:() => void,
//     reset:() => void,
// })