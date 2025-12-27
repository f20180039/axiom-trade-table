"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Avatar, Platform } from "@/components/atoms/Avatar";
import { StatGroup } from "@/components/molecules/StatGroup";
import { ProgressBar } from "@/components/atoms/ProgressBar";
import { cn } from "@/lib/utils";
import { MetricRow } from "../molecules/MetricRow";
import { TokenTitle } from "../molecules/TokenTitle";
import { ActionBar } from "../molecules/ActionBar";

export const TokenCard = React.memo(({ tokenId, className }: { tokenId: string; className?: string }) => {
  const token = useSelector((state: RootState) => state.tokens.items[tokenId]);

  if (!token) return null;

  // Map category to Platform type for the Avatar
  const platformMap: Record<string, Platform> = {
    "new-pairs": "pump",
    "final-stretch": "moonshot",
    "migrated": "virtual"
  };

  const platform = platformMap[token.category] || "none";

  return (
    <div className={cn(
      "w-full bg-card border border-border rounded-lg p-3",
      "hover:bg-card-hover transition-all duration-200 cursor-pointer group",
      className
    )}>
      <div className="flex gap-3">
        <Avatar 
          platform={platform}
          src={token.image}
          alt={token.name}
          progress={token.progress}
        />

        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <TokenTitle name={token.name} symbol={token.symbol} />
            <div className="flex flex-col items-end gap-0.5">
              <StatGroup label="MC" value={token.price * 1000000} variant="blue" />
              <StatGroup label="V" value={parseFloat(token.volume.replace(/[^0-9.]/g, '')) * 1000} />
            </div>
          </div>

          <ActionBar time={token.timeAgo} holders={token.holders ?? 0} txCount={token.txCount} />

          <div className="flex justify-between items-end mt-2">
            <MetricRow />
            <div className="w-16">
               <div className="flex justify-between text-[10px] text-text-dim mb-1 font-bold font-ibm">
                  <span>TX</span>
                  <span>{token.txCount}</span>
               </div>
               <ProgressBar progress={token.progress} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

TokenCard.displayName = "TokenCard";