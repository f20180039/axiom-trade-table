"use client";
import React from "react";
import { MainHeader } from "../molecules/MainHeader";
import { TokenColumn } from "../organisms/TokenColumn";

export const DiscoveryGrid = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      <MainHeader />
      
      {/* Grid container: 1 col on mobile, 3 cols at 1024px (lg) */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
        <TokenColumn title="New Pairs" category="new-pairs" />
        <TokenColumn title="Final Stretch" category="final-stretch" className="hidden lg:flex" />
        <TokenColumn title="Migrated" category="migrated" className="hidden lg:flex" />
      </main>
    </div>
  );
};