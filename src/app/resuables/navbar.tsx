import { HeartIcon, MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Wethenew() {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center py-3 px-3 bg-white  z-10">
      <Link href={""}>
        <MoveRight />
      </Link>
      <Link href={"/"} className="tracking-tight text-2xl">
        wethenew
      </Link>
      <Link href={""}>
        <HeartIcon />
      </Link>
    </div>
  );
}
