"use client";

import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
  shape: "square" | "circle" | "triangle";
}

const COLORS = [
  "#FF6B6B",
  "#4ECDC4",
  "#FFD93D",
  "#6C5CE7",
  "#FF8A5C",
  "#A8E6CF",
  "#DDA0DD",
  "#87CEEB",
];

export default function Confetti({ duration = 4000 }: { duration?: number }) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const generated: ConfettiPiece[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: Math.random() * 1.5,
      duration: 2 + Math.random() * 2,
      size: 6 + Math.random() * 10,
      shape: (["square", "circle", "triangle"] as const)[
        Math.floor(Math.random() * 3)
      ],
    }));
    setPieces(generated);

    const timer = setTimeout(() => setPieces([]), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor:
              p.shape !== "triangle" ? p.color : "transparent",
            borderRadius: p.shape === "circle" ? "50%" : "0",
            borderLeft:
              p.shape === "triangle"
                ? `${p.size / 2}px solid transparent`
                : undefined,
            borderRight:
              p.shape === "triangle"
                ? `${p.size / 2}px solid transparent`
                : undefined,
            borderBottom:
              p.shape === "triangle"
                ? `${p.size}px solid ${p.color}`
                : undefined,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </>
  );
}
