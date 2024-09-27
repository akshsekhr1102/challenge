import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Sidebar from "./sidebar";
import { ReactNode } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="p-4 flex gap-3   min-h-screen">
      <Sidebar />
      {children}
    </section>
  );
}
