import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  icon?: React.ReactNode;
  variant?: "success" | "danger" | "warning" | "neutral";
  className?: string;
}

export const Badge = React.memo(
  ({ label, icon, variant = "neutral", className }: BadgeProps) => {
    const variants = {
      success: "text-axiom-green bg-axiom-green/10",
      danger: "text-axiom-red bg-axiom-red/10",
      warning: "text-axiom-yellow bg-axiom-yellow/10",
      neutral: "text-text-muted bg-border/40",
    };

    return (
      <div
        className={cn(
          "flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border border-transparent",
          variants[variant],
          className
        )}
      >
        {icon && <span className="opacity-80">{icon}</span>}
        {label}
      </div>
    );
  }
);

Badge.displayName = "Badge";
