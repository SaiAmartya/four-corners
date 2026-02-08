"use client";

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
}

export default function CornerCard({
  label,
  text,
  color,
  lightColor,
  animationClass,
  delay,
  visible,
  emoji,
}: CornerCardProps) {
  return (
    <div
      className={`corner-card rounded-3xl border-3 p-6 sm:p-7 md:p-8 opacity-0 ${
        visible ? animationClass : ""
      }`}
      style={{
        borderColor: color,
        backgroundColor: lightColor,
        animationDelay: visible ? delay : "0ms",
        width: "min(420px, 45vw)",
      }}
    >
      <div className="mb-3">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-base font-extrabold text-white shadow-lg"
          style={{ backgroundColor: color }}
        >
          {label}
        </span>
      </div>
      <p
        className="text-base font-semibold leading-relaxed sm:text-lg md:text-xl"
        style={{ color: "#2d2d2d" }}
      >
        {text}
      </p>
    </div>
  );
}
