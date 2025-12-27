import React from "react";
import {
  Search,
  Users,
  BarChart2,
  Trophy,
  Crown,
  Eye,
  Globe,
  Twitter,
  Send,
} from "lucide-react";

interface ActionBarProps {
  time: string;
  holders: number;
  txCount: number;
}

export const ActionBar = React.memo(
  ({ time, holders, txCount }: ActionBarProps) => {
    return (
      <div className="flex items-center gap-2.5 text-text-dim">
        <span className="text-axiom-green text-[12px] font-medium">{time}</span>

        {/* Social/Utility Icons cluster */}
        <div className="flex items-center gap-2 border-l border-border pl-2.5">
          <Globe size={13} className="hover:text-white cursor-pointer" />
          <Twitter size={13} className="hover:text-white cursor-pointer" />
          <Search size={13} className="hover:text-white cursor-pointer" />
        </div>

        {/* Metric Icons cluster */}
        <div className="flex items-center gap-2.5 border-l border-border pl-2.5">
          <div className="flex items-center gap-1">
            <Users size={12} />
            <span className="text-[11px] font-bold">{holders}</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart2 size={12} />
            <span className="text-[11px] font-bold">0</span>
          </div>
          <Trophy size={12} />
          <Crown size={12} className="text-axiom-yellow" />
        </div>
      </div>
    );
  }
);

ActionBar.displayName = "ActionBar";
