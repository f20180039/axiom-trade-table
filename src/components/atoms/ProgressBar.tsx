import React from "react";

export const ProgressBar = React.memo(({ progress }: { progress: number }) => {
  return (
    <div className="w-full h-1 bg-border rounded-full overflow-hidden flex">
      <div
        className="h-full bg-axiom-green transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
      <div
        className="h-full bg-axiom-red transition-all duration-500"
        style={{ width: `${100 - progress}%` }}
      />
    </div>
  );
});

ProgressBar.displayName = "ProgressBar";
