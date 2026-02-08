"use client";

interface ProgressBarProps {
  current: number;
  total: number;
}

const COLORS = ["#FF6B6B", "#4ECDC4", "#FFD93D", "#6C5CE7"];

export default function ProgressBar({ current, total }: ProgressBarProps) {
  return (
    <div className="flex w-full max-w-md items-center gap-1.5">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className="progress-segment h-2 flex-1 rounded-full"
          style={{
            backgroundColor:
              i < current
                ? COLORS[i % COLORS.length]
                : i === current
                  ? COLORS[i % COLORS.length] + "80"
                  : "#e0e0e0",
            transform: i === current ? "scaleY(1.4)" : "scaleY(1)",
          }}
        />
      ))}
    </div>
  );
}
