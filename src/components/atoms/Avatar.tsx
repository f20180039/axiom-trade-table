"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Camera } from "lucide-react";

export type Platform = "pump" | "moonshot" | "virtual" | "none";

interface AvatarProps {
  src: string;
  alt: string;
  platform?: Platform;
  progress?: number;
  className?: string;
}

export const Avatar = React.memo(
  ({ src, alt, platform = "none", progress = 100, className }: AvatarProps) => {
    // theme.bg MUST point to the full grad- utilities you liked earlier
    const theme = {
      virtual: {
        grad: "grad-purple",
        text: "text-purple-500",
        icon: "https://axiom.trade/images/virtual-curve.svg",
      },
      pump: {
        grad: "grad-green",
        text: "text-axiom-green",
        icon: "https://axiom.trade/images/pump-v1.svg",
      },
      moonshot: {
        grad: "grad-yellow",
        text: "text-axiom-yellow",
        icon: "https://axiom.trade/images/moonshot.svg",
      },
      none: { grad: "bg-border", text: "text-text-dim", icon: "" },
    }[platform];

    const pathD =
      "M 76 76 L 6 76 Q 2 76 2 72 L 2 6 Q 2 2 6 2 L 72 2 Q 76 2 76 6 L 76 72 Q 76 76 76 76";
    const dashArray = 296;
    const dashOffset = dashArray - dashArray * (progress / 100);

    return (
      <div
        className={cn(
          "relative w-[74px] h-[74px] flex items-center justify-center shrink-0",
          className
        )}
      >
        {/* 1. Status Icon Layer (z-30) */}
        {theme.icon && (
          <div className="absolute -bottom-[4px] -right-[4px] w-[16px] h-[16px] z-30 flex items-center justify-center">
            <div
              className={cn(
                "absolute w-full h-full rounded-full p-[1px]",
                theme.grad
              )}
            >
              <div className="bg-[#060606] w-full h-full rounded-full flex items-center justify-center">
                <div className="relative w-[10px] h-[10px]">
                  <Image
                    src={theme.icon}
                    alt={platform}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Main Glowing Border & Image (z-20) */}
        {/* This is the container you liked: p-[1px] + Full Gradient */}
        <div
          className={cn(
            "absolute flex p-[1px] justify-start items-center rounded-[4px] z-20",
            theme.grad
          )}
        >
          {/* Inner dark padding border */}
          <div className="bg-[#111111] flex p-[2px] justify-start items-center rounded-[3px]">
            <div className="w-[68px] h-[68px] shrink-0 group relative">
              
              {/* Subtle Inner Border Overlay (matches Axiom's border-textPrimary/10) */}
              <div className="pointer-events-none border-white/10 border-[1px] absolute inset-0 z-10 rounded-[1px]" />

              {/* The Actual Token Image */}
              <div className="relative w-full h-full rounded-[1px] overflow-hidden">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  loading="eager"
                  className="object-cover"
                  sizes="68px"
                />
                <button className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-20">
                  <Camera size={22} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. SVG Progress Border (z-10) */}
        {/* We keep this but set it behind (z-10) or on top (z-40) for the bonding curve effect */}
        <div className="absolute top-0 left-0 w-[74px] h-[74px] flex items-center justify-center z-10">
          <svg width="78" height="78" viewBox="0 0 78 78">
            <path
              className={cn(theme.text, "opacity-40")}
              stroke="currentColor"
              fill="transparent"
              strokeWidth="1"
              d={pathD}
            />
            <path
              className={cn(theme.text, "transition-all duration-500")}
              stroke="currentColor"
              fill="transparent"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              d={pathD}
            />
          </svg>
        </div>

        {/* 4. Extra Backdrop Glow Layer (from your HTML) */}
        <div
          className={cn(
            "absolute inset-0 rounded-[4px] z-0 opacity-10",
            theme.grad
          )}
        />
      </div>
    );
  }
);

Avatar.displayName = "Avatar";
