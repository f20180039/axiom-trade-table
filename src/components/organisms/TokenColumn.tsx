"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { SlidersHorizontal, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { TokenCard } from "./TokenCard";

interface TokenColumnProps {
  title: string;
  category: "new-pairs" | "final-stretch" | "migrated";
  className?: string;
}

export const TokenColumn = React.memo(
  ({ title, category, className }: TokenColumnProps) => {
    // Performance: We only select IDs for this specific category
    const tokenIds = useSelector((state: RootState) =>
      state.tokens.ids.filter(
        (id) => state?.tokens?.items?.[id]?.category === category
      )
    );

    return (
      <div
        className={cn(
          "flex flex-col h-full border-r border-border last:border-r-0",
          className
        )}
      >
        {/* Column Header */}
        <div className="flex items-center justify-between p-4 sticky top-0 bg-background z-40">
          <div className="flex items-center gap-2">
            <h2 className="text-[18px] font-bold font-sans tracking-tight">
              {title}
            </h2>
          </div>

          {/* Column Actions (P1, P2, P3 Toggle) */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-background-secondary rounded-md p-1 border border-border">
              <Zap size={14} className="mx-1 text-text-dim" />
              <span className="text-[12px] font-bold mr-2">0.0</span>
              <div className="flex gap-1 text-[11px] font-bold border-l border-border pl-2">
                <span className="text-axiom-blue">P1</span>
                <span className="text-text-dim">P2</span>
                <span className="text-text-dim">P3</span>
              </div>
            </div>
            <SlidersHorizontal
              size={16}
              className="text-text-dim hover:text-white cursor-pointer"
            />
          </div>
        </div>

        {/* Token List */}
        <div className="flex-1 overflow-y-auto px-3 space-y-2 pb-10 custom-scrollbar">
          {tokenIds.map((id) => (
            <TokenCard key={id} tokenId={id} />
          ))}
        </div>
      </div>
    );
  }
);

TokenColumn.displayName = "TokenColumn";
