"use client";

import Image from "next/image";

interface CornerCardProps {
  label: string;
  text: string;
  color: string;
  lightColor: string;
  animationClass: string;
  delay: string;
  visible: boolean;
  emoji: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  imageUrl?: string;
}

export default function CornerCard({
  label,
  text,
  color,
  lightColor,
  animationClass,
  delay,
  visible,
  imageUrl,
}: CornerCardProps) {
  return (
    <div
      className={`corner-card rounded-3xl border-3 p-4 sm:p-5 md:p-6 opacity-0 ${
        visible ? animationClass : ""
      }`}
      style={{
        borderColor: color,
        backgroundColor: lightColor,
        animationDelay: visible ? delay : "0ms",
        width: "min(420px, 45vw)",
      }}
    >
      {imageUrl && (
        <div
          className="relative mb-3 w-full overflow-hidden rounded-2xl bg-white"
          style={{ aspectRatio: "16 / 9" }}
        >
          <Image
            src={imageUrl}
            alt={text}
            fill
            className="object-contain p-1"
            unoptimized
          />
        </div>
      )}
      <div className="flex items-center gap-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold text-white shadow-lg"
          style={{ backgroundColor: color }}
        >
          {label}
        </span>
        <p
          className="text-base font-bold leading-snug sm:text-lg"
          style={{ color: "#2d2d2d" }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
