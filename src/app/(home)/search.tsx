"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Searching() {
  const [searchProduct, setSearchProduct] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchProduct) return;

    router.push(`/products/${searchProduct}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center space-x-2 w-96 relative "
    >
      <Input
        type="text"
        placeholder="Search for a brand, a model..."
        spellCheck="false"
        value={searchProduct}
        onChange={(e) => setSearchProduct(e.target.value)}
        className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-black transition-colors duration-200"
      />
      <Search className="text-gray-500 hover:text-black cursor-pointer absolute right-[10%]" />
    </form>
  );
}
