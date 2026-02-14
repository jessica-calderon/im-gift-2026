"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Seating from "@/components/Seating";
import Ticket from "@/components/Ticket";

type Stage = "hero" | "flowers" | "tickets" | "seating";

const transition = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};
const transitionDuration = 0.5;

const idleAnimation = {
  rotate: [0, -8, 8, -6, 6, -3, 3, 0],
  scale: [1, 1.05, 1],
};
const idleTransition = {
  duration: 1.8,
  repeat: Infinity,
  repeatDelay: 2,
  ease: "easeInOut" as const,
};

const tapAnimation = {
  scale: [1, 0.85, 1.1, 0],
  rotate: [0, -10, 10, 0],
  opacity: [1, 0],
};
const tapTransition = { duration: 0.5 };

const flowersEmojiAnimation = {
  initial: { opacity: 0, scale: 0.7, y: 40 },
  animate: { opacity: 1, scale: 1, y: 0 },
};
const flowersEmojiDuration = 0.6;

const emojiAnimation = {
  initial: { opacity: 0, scale: 0.8, y: 40 },
  animate: { opacity: 1, scale: 1, y: 0 },
};
const emojiDuration = 0.5;

const stageWrapperClass =
  "min-h-screen flex flex-col items-center justify-center px-6 text-center bg-black text-zinc-100";

const SPARKLE_POSITIONS = [
  { x: "-50%", y: "-30%", delay: 0 },
  { x: "60%", y: "-20%", delay: 0.05 },
  { x: "-40%", y: "40%", delay: 0.1 },
  { x: "50%", y: "50%", delay: 0.08 },
  { x: "-60%", y: "0%", delay: 0.03 },
  { x: "70%", y: "20%", delay: 0.06 },
  { x: "0%", y: "-50%", delay: 0.02 },
  { x: "-20%", y: "-40%", delay: 0.04 },
];

function Sparkles({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      {SPARKLE_POSITIONS.map((pos, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl sm:text-3xl"
          style={{
            left: "50%",
            top: "50%",
            marginLeft: pos.x,
            marginTop: pos.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1.2, 1.3, 0],
          }}
          transition={{
            duration: 0.5,
            delay: pos.delay,
            ease: "easeOut",
          }}
        >
          ✨
        </motion.span>
      ))}
    </div>
  );
}

export default function Home() {
  const [stage, setStage] = useState<Stage>("hero");
  const [opening, setOpening] = useState(false);
  const [openingSecond, setOpeningSecond] = useState(false);

  const handleOpenGift = useCallback(() => {
    if (opening) return;
    setOpening(true);
    setTimeout(() => {
      setStage("flowers");
      setOpening(false);
    }, 500);
  }, [opening]);

  const handleOpenSecondGift = useCallback(() => {
    if (openingSecond) return;
    setOpeningSecond(true);
    setTimeout(() => {
      setStage("tickets");
      setOpeningSecond(false);
    }, 500);
  }, [openingSecond]);

  const goToHome = useCallback(() => {
    setOpening(false);
    setOpeningSecond(false);
    setStage("hero");
  }, []);

  const goNext = () => {
    if (stage === "tickets") setStage("seating");
  };

  return (
    <main className="min-h-screen bg-black overflow-hidden relative">
      {stage !== "hero" && (
        <button
          onClick={goToHome}
          className="absolute top-4 left-4 z-10 px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-400 font-medium text-sm hover:bg-amber-500/30 hover:border-amber-500/60 transition-colors"
        >
          ← Home
        </button>
      )}
      <footer className="absolute bottom-4 left-0 right-0 text-center text-zinc-500 text-xs">
        From: Jessica, with love. <br/>To: Jordan Rene. <br/>Happy Valentine's Day 2026. I love you.
      </footer>
      <AnimatePresence mode="wait">
        {stage === "hero" && (
          <motion.div
            key="hero"
            className={stageWrapperClass}
            initial={transition.initial}
            animate={transition.animate}
            exit={transition.exit}
            transition={{ duration: transitionDuration }}
          >
            <div className="relative inline-block mb-6">
              <Sparkles show={opening} />
              <motion.div
                className="text-8xl cursor-pointer select-none relative z-10"
                onClick={handleOpenGift}
                animate={opening ? tapAnimation : idleAnimation}
                transition={opening ? tapTransition : idleTransition}
                whileHover={opening ? undefined : { scale: 1.12 }}
              >
                🎁
              </motion.div>
            </div>
            <h1 className="text-2xl font-medium">
              Happy Valentine&apos;s Day
            </h1>
            <p className="text-zinc-400 text-sm mt-2">
              Tap the gift to open it
            </p>
          </motion.div>
        )}

        {stage === "flowers" && (
          <motion.div
            key="flowers"
            className={stageWrapperClass}
            initial={transition.initial}
            animate={transition.animate}
            exit={transition.exit}
            transition={{ duration: transitionDuration }}
          >
            <motion.span
              className="text-7xl mb-4 block"
              initial={flowersEmojiAnimation.initial}
              animate={flowersEmojiAnimation.animate}
              transition={{ duration: flowersEmojiDuration }}
            >
              🌹🌹🌹
            </motion.span>
            <div className="space-y-2 mb-6">
              <p className="text-lg">These are for you.</p>
              <p className="text-zinc-400">Because you deserve flowers too.</p>
            </div>
            <div className="relative inline-block mb-6">
              <Sparkles show={openingSecond} />
              <motion.div
                className="text-8xl cursor-pointer select-none relative z-10"
                onClick={handleOpenSecondGift}
                animate={openingSecond ? tapAnimation : idleAnimation}
                transition={openingSecond ? tapTransition : idleTransition}
                whileHover={openingSecond ? undefined : { scale: 1.12 }}
              >
                🎁
              </motion.div>
            </div>
            <p className="text-zinc-400 text-sm">
              Tap to open your second gift
            </p>
          </motion.div>
        )}

        {stage === "tickets" && (
          <motion.div
            key="tickets"
            className={stageWrapperClass}
            initial={transition.initial}
            animate={transition.animate}
            exit={transition.exit}
            transition={{ duration: transitionDuration }}
          >
            <motion.span
              className="text-5xl mb-4 block"
              initial={emojiAnimation.initial}
              animate={emojiAnimation.animate}
              transition={{ duration: emojiDuration }}
            >
              🎟
            </motion.span>
            <Ticket />
            <p className="text-zinc-100 text-lg">
              We&apos;re going to see Iron Maiden.
            </p>
            <button
              onClick={goNext}
              className="px-6 py-3 rounded-lg bg-amber-500 text-black font-medium hover:bg-amber-400 transition-colors"
            >
              Show Me Where We&apos;re Sitting
            </button>
          </motion.div>
        )}

        {stage === "seating" && (
          <motion.div
            key="seating"
            className={stageWrapperClass}
            initial={transition.initial}
            animate={transition.animate}
            exit={transition.exit}
            transition={{ duration: transitionDuration }}
          >
            <Seating />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
