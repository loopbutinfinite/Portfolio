// Add ReactNode to your imports
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

// Update the props interface/type
interface LightRaysProps {
  children?: ReactNode; // This allows the component to take nested elements
  className?: string;
  // ... keep any other existing props like 'intensity' or 'color'
}

export const LightRaysBackground = ({ children, className }: LightRaysProps) => {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* 1. This is the background effect (the rays) */}
      <div className="absolute inset-0 z-0">
        {/* ... existing light rays logic/canvas/svg code ... */}
      </div>

      {/* 2. This renders your Projects section on top of the rays */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};