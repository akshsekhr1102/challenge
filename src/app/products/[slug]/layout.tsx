import Wethenew from "@/app/resuables/navbar";
import React from "react";
import Products from "./page";
import Footer from "../components/footer";

export default function layout() {
  return (
    <div>
      <Wethenew />
      <Products />
      <Footer />
    </div>
  );
}
