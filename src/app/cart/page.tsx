"use client";
import { Button } from "@/components/ui/button";
import { create } from "zustand";
import CartCard from "./cart-components/cart-card";

const useStore = create<{
  count: number;
  inc: () => void;
  dec: () => void;
}>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

export default function Cart() {
  const store = useStore();
  return (
    <div>
      <Button onClick={store.inc}>+</Button>
      <Count />
      <Button onClick={store.dec}>-</Button>
    </div>
  );
}

function Count() {
  const store = useStore();
  return <>{store.count}</>;
}
