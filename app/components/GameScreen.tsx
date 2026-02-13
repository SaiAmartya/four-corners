"use client";

import { useState, useEffect, useCallback } from "react";
import { prompts } from "../data/prompts";
import CornerCard from "./CornerCard";
import ProgressBar from "./ProgressBar";
import Confetti from "./Confetti";
import Bubbles from "./Bubbles";

type GamePhase = "countdown" | "prompt" | "corners" | "finished";

const CORNER_CONFIG = [
  {
    label: "A",
    color: "#FF6B6B",
    lightColor: "var(--corner-a-light)",
    animClass: "animate-corner-tl",
    delay: "200ms",
    emoji: "🔴",
    position: "top-left" as const,
  },
  {
    label: "B",
    color: "#4ECDC4",
    lightColor: "var(--corner-b-light)",
    animClass: "animate-corner-tr",
    delay: "350ms",
    emoji: "🟢",
    position: "top-right" as const,
  },
  {
    label: "C",
    color: "#FFD93D",
    lightColor: "var(--corner-c-light)",
    animClass: "animate-corner-bl",
    delay: "500ms",
    emoji: "🟡",
    position: "bottom-left" as const,
  },
  {
    label: "D",
    color: "#6C5CE7",
    lightColor: "var(--corner-d-light)",
    animClass: "animate-corner-br",
    delay: "650ms",
    emoji: "🟣",
    position: "bottom-right" as const,
  },
];

interface GameScreenProps {
  onExit: () => void;
}

export default function GameScreen({ onExit }: GameScreenProps) {
  const [roundIndex, setRoundIndex] = useState(0);
  const [phase, setPhase] = useState<GamePhase>("countdown");
  const [countdownValue, setCountdownValue] = useState(3);
  const [cornersVisible, setCornersVisible] = useState(false);

  const currentPrompt = prompts[roundIndex];

  // Countdown timer
  useEffect(() => {
    if (phase !== "countdown") return;
    if (countdownValue === 0) {
      setPhase("prompt");
      return;
    }
    const timer = setTimeout(() => setCountdownValue((v) => v - 1), 800);
    return () => clearTimeout(timer);
  }, [phase, countdownValue]);

  // Auto-transition from prompt to corners
  useEffect(() => {
    if (phase !== "prompt") return;
    const timer = setTimeout(() => {
      setPhase("corners");
      setCornersVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [phase]);

  const handleNext = useCallback(() => {
    if (roundIndex < prompts.length - 1) {
      setCornersVisible(false);
      setRoundIndex((i) => i + 1);
      setCountdownValue(3);
      setPhase("countdown");
    } else {
      setPhase("finished");
    }
  }, [roundIndex]);

  const handlePrev = useCallback(() => {
    if (roundIndex > 0) {
      setCornersVisible(false);
      setRoundIndex((i) => i - 1);
      setPhase("corners");
      setTimeout(() => setCornersVisible(true), 100);
    }
  }, [roundIndex]);

  const handleRestart = useCallback(() => {
    setRoundIndex(0);
    setCornersVisible(false);
    setCountdownValue(3);
    setPhase("countdown");
  }, []);

  const handleSkipToCorners = useCallback(() => {
    if (phase === "countdown" || phase === "prompt") {
      setPhase("corners");
      setCornersVisible(true);
    }
  }, [phase]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        if (phase === "corners") handleNext();
        else handleSkipToCorners();
      }
      if (e.key === "ArrowLeft" && phase === "corners") {
        e.preventDefault();
        handlePrev();
      }
      if (e.key === "Escape") onExit();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [phase, handleNext, handlePrev, handleSkipToCorners, onExit]);

  // --- FINISHED SCREEN ---
  if (phase === "finished") {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden p-6 text-center">
        <Bubbles count={10} />
        <Confetti duration={5000} />
        <div className="animate-bounce-in relative z-10">
          <span className="text-7xl">🎉</span>
        </div>
        <h1
          className="animate-pop-in relative z-10 text-4xl font-extrabold sm:text-5xl"
          style={{ animationDelay: "200ms" }}
        >
          <span className="gradient-text">Game Over!</span>
        </h1>
        <p
          className="animate-slide-up relative z-10 max-w-md text-lg text-zinc-600"
          style={{ animationDelay: "500ms", opacity: 0 }}
        >
          Thanks for playing Four Corners — Situation Edition! Hope everyone had
          a great time choosing their corners! 🏃‍♂️
        </p>
        <div
          className="animate-slide-up relative z-10 flex gap-4"
          style={{ animationDelay: "700ms", opacity: 0 }}
        >
          <button
            onClick={handleRestart}
            className="group rounded-full bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#6C5CE7] p-1 shadow-xl transition-transform hover:scale-110 active:scale-95"
          >
            <span className="flex items-center gap-2 rounded-full bg-white px-8 py-3 text-lg font-bold text-zinc-800">
              🔄 Play Again
            </span>
          </button>
          <button
            onClick={onExit}
            className="rounded-full border-2 border-zinc-300 px-8 py-3 text-lg font-bold text-zinc-600 transition-transform hover:scale-105 active:scale-95"
          >
            🏠 Home
          </button>
        </div>
      </div>
    );
  }

  // --- COUNTDOWN SCREEN ---
  if (phase === "countdown") {
    return (
      <div
        className="relative flex min-h-screen flex-col items-center justify-center gap-6 overflow-hidden p-6"
        onClick={handleSkipToCorners}
        role="button"
        tabIndex={0}
        aria-label="Skip countdown"
      >
        <Bubbles count={10} />
        <p className="animate-fade-in relative z-10 text-sm font-semibold uppercase tracking-widest text-zinc-400">
          Round {roundIndex + 1} of {prompts.length}
        </p>
        <div
          className="animate-bounce-in relative z-10"
          key={`cd-${countdownValue}-${roundIndex}`}
        >
          <span className="gradient-text text-9xl font-black">
            {countdownValue || "GO!"}
          </span>
        </div>
        <p className="animate-fade-in relative z-10 mt-4 text-sm text-zinc-400">
          Tap or press Space to skip
        </p>
      </div>
    );
  }

  // --- PROMPT + CORNERS PHASE (true four-corners layout) ---
  return (
    <div className="relative flex h-screen flex-col overflow-hidden">
      <Bubbles count={8} />

      {/* Top bar */}
      <div className="relative z-20 flex items-center justify-between px-5 pt-4 sm:px-8 sm:pt-5">
        <button
          onClick={onExit}
          className="rounded-xl border border-zinc-200 bg-white/80 px-3 py-1.5 text-sm font-semibold text-zinc-500 backdrop-blur transition-colors hover:bg-zinc-100"
        >
          ✕ Exit
        </button>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
            Round {roundIndex + 1}/{prompts.length}
          </span>
          <ProgressBar current={roundIndex + 1} total={prompts.length} />
        </div>
        <button
          onClick={handlePrev}
          disabled={roundIndex === 0}
          className="rounded-xl border border-zinc-200 bg-white/80 px-3 py-1.5 text-sm font-semibold text-zinc-500 backdrop-blur transition-all hover:bg-zinc-100 disabled:opacity-0"
        >
          ← Back
        </button>
      </div>

      {/* Four corners + center prompt layout */}
      <div className="relative z-10 flex flex-1 flex-col">
        {/* TOP ROW: Corner A (left) + Corner B (right) */}
        <div className="flex flex-1 items-start justify-between px-6 pt-4 sm:px-8 sm:pt-6 md:px-10 md:pt-8">
          <CornerCard
            label={CORNER_CONFIG[0].label}
            text={currentPrompt.options.A}
            color={CORNER_CONFIG[0].color}
            lightColor={CORNER_CONFIG[0].lightColor}
            animationClass={CORNER_CONFIG[0].animClass}
            delay={CORNER_CONFIG[0].delay}
            visible={cornersVisible}
            emoji={CORNER_CONFIG[0].emoji}
            position="top-left"
          />
          <CornerCard
            label={CORNER_CONFIG[1].label}
            text={currentPrompt.options.B}
            color={CORNER_CONFIG[1].color}
            lightColor={CORNER_CONFIG[1].lightColor}
            animationClass={CORNER_CONFIG[1].animClass}
            delay={CORNER_CONFIG[1].delay}
            visible={cornersVisible}
            emoji={CORNER_CONFIG[1].emoji}
            position="top-right"
          />
        </div>

        {/* CENTER: Prompt + navigation */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6">
          <div
            className="animate-pop-in pointer-events-auto max-w-3xl text-center px-6"
            onClick={phase === "prompt" ? handleSkipToCorners : undefined}
            role={phase === "prompt" ? "button" : undefined}
            tabIndex={phase === "prompt" ? 0 : undefined}
          >
            <span className="mb-3 inline-block text-5xl">🤔</span>
            <h2 className="text-xl font-extrabold leading-relaxed text-zinc-800 sm:text-2xl md:text-3xl lg:text-4xl">
              {currentPrompt.prompt}
            </h2>
            {phase === "prompt" && (
              <p className="animate-fade-in mt-4 text-base text-zinc-400">
                Tap or press Space to reveal corners...
              </p>
            )}
          </div>

          {phase === "corners" && (
            <div className="pointer-events-auto mt-6 flex flex-col items-center gap-3">
              <button
                onClick={handleNext}
                className="group rounded-full bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#6C5CE7] p-1 shadow-xl transition-transform hover:scale-110 active:scale-95"
              >
                <span className="flex items-center gap-2 rounded-full bg-white px-10 py-4 text-lg font-extrabold text-zinc-800">
                  {roundIndex < prompts.length - 1
                    ? "Next Round →"
                    : "Finish 🎉"}
                </span>
                </button>
            </div>
          )}
        </div>

        {/* BOTTOM ROW: Corner C (left) + Corner D (right) */}
        <div className="flex flex-1 items-end justify-between px-6 pb-6 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
          <CornerCard
            label={CORNER_CONFIG[2].label}
            text={currentPrompt.options.C}
            color={CORNER_CONFIG[2].color}
            lightColor={CORNER_CONFIG[2].lightColor}
            animationClass={CORNER_CONFIG[2].animClass}
            delay={CORNER_CONFIG[2].delay}
            visible={cornersVisible}
            emoji={CORNER_CONFIG[2].emoji}
            position="bottom-left"
          />
          <CornerCard
            label={CORNER_CONFIG[3].label}
            text={currentPrompt.options.D}
            color={CORNER_CONFIG[3].color}
            lightColor={CORNER_CONFIG[3].lightColor}
            animationClass={CORNER_CONFIG[3].animClass}
            delay={CORNER_CONFIG[3].delay}
            visible={cornersVisible}
            emoji={CORNER_CONFIG[3].emoji}
            position="bottom-right"
          />
        </div>
      </div>
    </div>
  );
}
