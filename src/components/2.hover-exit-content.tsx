import React from "react";
import { Card } from "./card";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";

export const Content = () => {
  return (
    <div
      className={cn(
        GeistSans.className,
        "flex h-screen items-center justify-center bg-gray-200",
      )}
    >
      <Card />
    </div>
  );
};
