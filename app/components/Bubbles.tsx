"use client";

import { useMemo } from "react";

const BUBBLE_COLORS = [
  "#FF6B6B",
  "#4ECDC4",
  "#FFD93D",
  "#6C5CE7",
  "#FF8A5C",
  "#A8E6CF",
];

export default function Bubbles({ count = 12 }: { count?: number }) {
  const bubbles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: 40 + Math.random() * 160,
        left: Math.random() * 100,
        top: Math.random() * 100,
        color: BUBBLE_COLORS[i % BUBBLE_COLORS.length],
        delay: Math.random() * 4,
        duration: 3 + Math.random() * 4,
      })),
    [count]
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="bubble animate-float"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            top: `${b.top}%`,
            backgroundColor: b.color,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
