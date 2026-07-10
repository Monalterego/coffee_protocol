"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { config } from "@/lib/config";
import { ScreenShell, FadeLine, EASE, DUR } from "./motion";

export default function EndingYes() {
  const e = config.endingYes;

  useEffect(() => {
    // Hareket azaltma tercihi varsa konfeti atlanır.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    import("canvas-confetti").then(({ default: confetti }) => {
      if (cancelled) return;
      // Yumuşak, kahve tonlarında — patlama değil, serpinti.
      const colors = ["#8B5E3C", "#A9805F", "#E8DCC8", "#5C4030"];
      confetti({
        particleCount: 60,
        spread: 75,
        startVelocity: 22,
        gravity: 0.65,
        scalar: 0.9,
        ticks: 220,
        origin: { y: 0.35 },
        colors,
        disableForReducedMotion: true,
      });
      setTimeout(() => {
        if (!cancelled)
          confetti({
            particleCount: 35,
            spread: 100,
            startVelocity: 16,
            gravity: 0.6,
            scalar: 0.8,
            ticks: 200,
            origin: { y: 0.4 },
            colors,
            disableForReducedMotion: true,
          });
      }, 500);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <ScreenShell className="max-w-md">
      <div className="flex flex-col items-center gap-8 text-center">
        <FadeLine delay={0.2}>
          <p className="font-mono text-xs tracking-[0.3em] text-coffee-soft uppercase">
            {e.title}
          </p>
        </FadeLine>

        <div className="flex flex-col gap-4 text-[17px] leading-relaxed sm:text-lg">
          {e.lines.map((line, i) => (
            <FadeLine key={i} delay={0.8 + i * 0.9}>
              <p>{line}</p>
            </FadeLine>
          ))}
        </div>

        <motion.a
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: DUR,
            ease: EASE,
            delay: 0.8 + e.lines.length * 0.9 + 0.4,
          }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          href={config.contactUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-line bg-card px-6 py-3.5 text-sm text-fg transition-shadow hover:shadow-[0_8px_30px_rgba(139,94,60,0.18)]"
        >
          {config.contactLabel}
        </motion.a>

        <FadeLine
          delay={0.8 + e.lines.length * 0.9 + 1.2}
          className="text-sm text-muted"
        >
          {e.closing}
        </FadeLine>
      </div>
    </ScreenShell>
  );
}
