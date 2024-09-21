import Wethenew from "@/app/resuables/navbar";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className=" flex flex-col mx-auto ">
      <Wethenew />
      {children}
    </div>
  );
}
