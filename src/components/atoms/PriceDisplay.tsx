"use client";
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface PriceDisplayProps {
  value: number;
  className?: string;
}

export const PriceDisplay = React.memo(({ value, className }: PriceDisplayProps) => {
  const [flash, setFlash] = useState<"up" | "down" | null>(null);
  const prevValue = useRef(value);

  useEffect(() => {
    if (value > prevValue.current) setFlash("up");
    else if (value < prevValue.current) setFlash("down");
    
    prevValue.current = value;
    const timer = setTimeout(() => setFlash(null), 1000);
    return () => clearTimeout(timer);
  }, [value]);

  const formatValue = (val: number) => {
    if (val >= 1000000) return `$${(val / 1000000).toFixed(2)}M`;
    if (val >= 1000) return `$${(val / 1000).toFixed(1)}K`;
    return `$${val.toFixed(2)}`;
  };

  return (
    <span className={cn(
      "font-mono transition-all duration-500 rounded px-0.5",
      flash === "up" && "text-axiom-green animate-flash-green",
      flash === "down" && "text-axiom-red animate-flash-red",
      !flash && className
    )}>
      {formatValue(value)}
    </span>
  );
});

PriceDisplay.displayName = "PriceDisplay";