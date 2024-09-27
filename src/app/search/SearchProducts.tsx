"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input"; // Adjusted import
import { SearchIcon } from "lucide-react";

export default function SearchProducts({ params, searchParams }: any) {
  const [searchProduct, setSearchProduct] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchProduct) return;

    router.push(`/search/?q=${searchProduct}`);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center space-x-2 w-96 relative "
      >
        <Input
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          placeholder="Search for a brand, a model...."
          className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-black transition-colors duration-200"
        />
        <SearchIcon className="text-gray-500 hover:text-black cursor-pointer absolute right-[10%]" />
      </form>
    </div>
  );
}
