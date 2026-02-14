"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Flowers from "@/components/Flowers";
import Seating from "@/components/Seating";
import Ticket from "@/components/Ticket";

type Stage = "hero" | "flowers" | "tickets" | "seating";

const transition = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Home() {
  const [stage, setStage] = useState<Stage>("hero");

  const goNext = () => {
    if (stage === "hero") setStage("flowers");
    else if (stage === "flowers") setStage("tickets");
    else if (stage === "tickets") setStage("seating");
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-6 relative">
      {stage !== "hero" && (
        <button
          onClick={() => setStage("hero")}
          className="absolute top-4 left-4 text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
        >
          ← Home
        </button>
      )}
      <div className="w-full max-w-lg min-h-[320px] flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {stage === "hero" && (
            <motion.div
              key="hero"
              className="flex flex-col items-center gap-8 text-center"
              initial={transition.initial}
              animate={transition.animate}
              exit={transition.exit}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-zinc-100 text-2xl font-medium">
                Happy Valentine&apos;s Day
              </h1>
              <button
                onClick={goNext}
                className="px-6 py-3 rounded-lg bg-amber-500 text-black font-medium hover:bg-amber-400 transition-colors"
              >
                Open Your Gift
              </button>
            </motion.div>
          )}

          {stage === "flowers" && (
            <motion.div
              key="flowers"
              className="flex flex-col items-center gap-8"
              initial={transition.initial}
              animate={transition.animate}
              exit={transition.exit}
              transition={{ duration: 0.3 }}
            >
              <Flowers />
              <button
                onClick={goNext}
                className="px-6 py-3 rounded-lg bg-amber-500 text-black font-medium hover:bg-amber-400 transition-colors"
              >
                Keep Opening Your Gift
              </button>
            </motion.div>
          )}

          {stage === "tickets" && (
            <motion.div
              key="tickets"
              className="flex flex-col items-center gap-8"
              initial={transition.initial}
              animate={transition.animate}
              exit={transition.exit}
              transition={{ duration: 0.3 }}
            >
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
              className="flex flex-col items-center gap-6 w-full"
              initial={transition.initial}
              animate={transition.animate}
              exit={transition.exit}
              transition={{ duration: 0.3 }}
            >
              <Seating />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
