import React from "react";
import { Badge } from "@/components/atoms/Badge";
import { MousePointer2, Box, Ghost, Target } from "lucide-react";

export const MetricRow = React.memo(() => (
  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
    <Badge label="18%" variant="danger" icon={<MousePointer2 size={10} />} />
    <Badge label="8% 19d" variant="success" icon={<Box size={10} />} />
    <Badge label="17%" variant="danger" icon={<Target size={10} />} />
    <Badge label="0%" variant="success" icon={<Ghost size={10} />} />
  </div>
));

MetricRow.displayName = "MetricRow";
