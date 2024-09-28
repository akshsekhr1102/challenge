import React, { ReactNode } from "react";
import Sidebar from "../account-components/sidebar";
import MyOrders from "./my-informations/page";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen gap-2">
      <Sidebar />
      {children}
    </div>
  );
}
