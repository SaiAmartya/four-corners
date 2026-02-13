"use client";

import { useState, useEffect, useCallback } from "react";

interface DiscussionTimerProps {
  durationSeconds: number;
  running: boolean;
  onComplete: () => void;
}

export default function DiscussionTimer({
  durationSeconds,
  running,
  onComplete,
}: DiscussionTimerProps) {
  const [remaining, setRemaining] = useState(durationSeconds);

  // Reset when duration changes (new round)
  useEffect(() => {
    setRemaining(durationSeconds);
  }, [durationSeconds]);

  // Tick
  useEffect(() => {
    if (!running || remaining <= 0) return;
    const interval = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          onComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [running, remaining, onComplete]);

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const progress = remaining / durationSeconds;
  const isLow = remaining <= 30;
  const isCritical = remaining <= 10;

  // Gradient colors matching the theme
  const getColor = useCallback(() => {
    if (isCritical) return "#FF6B6B";
    if (isLow) return "#FFD93D";
    return "#4ECDC4";
  }, [isLow, isCritical]);

  const circumference = 2 * Math.PI * 40;
  const dashOffset = circumference * (1 - progress);
  const isExpired = remaining === 0;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative flex items-center justify-center">
        {/* Circular progress ring */}
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          className={isCritical && !isExpired ? "animate-pulse-slow" : ""}
        >
          {/* Background ring */}
          <circle
            cx="45"
            cy="45"
            r="40"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="5"
          />
          {/* Progress ring */}
          <circle
            cx="45"
            cy="45"
            r="40"
            fill="none"
            stroke={getColor()}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            transform="rotate(-90 45 45)"
            style={{ transition: "stroke-dashoffset 1s linear, stroke 0.5s ease" }}
          />
        </svg>
        {/* Time display */}
        <span
          className="absolute text-lg font-extrabold tabular-nums"
          style={{ color: getColor() }}
        >
          {isExpired ? "0:00" : `${minutes}:${seconds.toString().padStart(2, "0")}`}
        </span>
      </div>
      <span
        className={`text-sm font-bold uppercase tracking-widest ${
          isExpired ? "animate-pulse-slow text-base text-[#FF6B6B]" : "text-zinc-400"
        }`}
      >
        {isExpired ? "Make your decision!" : "Discuss & Persuade"}
      </span>
    </div>
  );
}
