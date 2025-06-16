import { Play } from "lucide-react";

export default function VideoExplanation() {
  return (
    <div className="border rounded-xl border-border-secondary aspect-video flex items-center justify-center my-20 group/item cursor-pointer">
      <Play className="text-accent-purple size-16 group-hover/item:scale-110" />
    </div>
  );
}