// Add ReactNode to your imports
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface LightRaysProps {
  children?: ReactNode; 
  className?: string;
}

export const LightRaysBackground = ({ children, className }: LightRaysProps) => {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className="absolute inset-0 z-0">
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};