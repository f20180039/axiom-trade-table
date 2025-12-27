import React from "react";
import { PriceDisplay } from "@/components/atoms/PriceDisplay";
import { cn } from "@/lib/utils";

export const StatGroup = React.memo(
  ({
    label,
    value,
    variant,
  }: {
    label: string;
    value: number;
    variant?: string;
  }) => (
    <div className="flex items-baseline justify-end gap-1.5">
      <span className="text-[10px] font-bold text-text-dim uppercase font-ibm">
        {label}
      </span>
      <PriceDisplay
        value={value}
        className={cn(
          "text-[14px] font-bold font-mono tracking-tight",
          variant === "blue" ? "text-axiom-blue" : "text-axiom-yellow"
        )}
      />
    </div>
  )
);

StatGroup.displayName = "StatGroup";
