"use client";

import { useState } from "react";
import Bubbles from "./components/Bubbles";
import GameScreen from "./components/GameScreen";

export default function Home() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return <GameScreen onExit={() => setPlaying(false)} />;
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-12">
      <Bubbles count={14} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8 text-center">
        {/* Emoji header */}
        <div className="animate-float flex gap-3 text-5xl">
          <span>🔴</span>
          <span style={{ animationDelay: "200ms" }}>🟢</span>
          <span style={{ animationDelay: "400ms" }}>🟡</span>
          <span style={{ animationDelay: "600ms" }}>🟣</span>
        </div>

        {/* Title */}
        <div className="animate-pop-in">
          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl">
            <span className="gradient-text">Four Corners - Trolley Problems</span>
          </h1>
        </div>

        {/* How it works */}
        <div
          className="animate-slide-up flex flex-col gap-3 rounded-2xl border border-zinc-200/80 bg-white/70 p-6 text-left shadow-sm backdrop-blur-sm sm:flex-row sm:gap-6"
          style={{ animationDelay: "500ms", opacity: 0 }}
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">📖</span>
            <div>
              <p className="text-sm font-bold text-zinc-700">
                Read the prompt
              </p>
              <p className="text-xs text-zinc-500">
                A situation appears on screen
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🗣️</span>
            <div>
              <p className="text-sm font-bold text-zinc-700">
                Persuade your group
              </p>
              <p className="text-xs text-zinc-500">
                Be quick! Time is ticking...
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🤔</span>
            <div>
              <p className="text-sm font-bold text-zinc-700">
                Pick your answer
              </p>
              <p className="text-xs text-zinc-500">
                Four options, one per corner
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🏃</span>
            <div>
              <p className="text-sm font-bold text-zinc-700">
                Run to your corner!
              </p>
              <p className="text-xs text-zinc-500">
                Move to the matching corner
              </p>
            </div>
          </div>
        </div>

        {/* Play button */}
        <button
          onClick={() => setPlaying(true)}
          className="animate-slide-up group relative mt-2 rounded-full bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#6C5CE7] p-1 shadow-xl transition-transform hover:scale-110 active:scale-95"
          style={{ animationDelay: "700ms", opacity: 0 }}
        >
          <span className="flex items-center gap-3 rounded-full bg-white px-10 py-4 text-xl font-extrabold text-zinc-800">
            <span className="text-2xl">🎮</span>
            Let&apos;s Play!
          </span>
        </button>
      </div>
      <div className="mt-12">
        <p className="text-xs text-zinc-500">
          Developed by Sai Amartya &amp; Aamir.
        </p>
      </div>
    </div>
  );
}
