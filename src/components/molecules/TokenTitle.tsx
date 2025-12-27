"use client";
import React from "react";
import { Copy } from "lucide-react";

export const TokenTitle = React.memo(({ name, symbol }: { name: string; symbol: string }) => {
  return (
    <div className="flex items-center gap-1.5 overflow-hidden">
      <h3 className="text-[15px] font-bold text-white truncate font-sans">{name}</h3>
      <span className="text-[13px] text-text-dim truncate font-medium">{symbol}</span>
      <button className="text-text-dim hover:text-white transition-colors">
        <Copy size={12} />
      </button>
    </div>
  );
});

TokenTitle.displayName = "TokenTitle";