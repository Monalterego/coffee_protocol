"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { config } from "@/lib/config";
import { ScreenShell, FadeLine, EASE } from "./motion";

const LINE_GAP = 0.65; // saniye — satırlar arası ritim
const HOLD = 1.1; // "Hazır." göründükten sonra bekleme

export default function BootScreen({ onDone }: { onDone: () => void }) {
  const { title, lines } = config.boot;
  const total = (lines.length + 1) * LINE_GAP + HOLD;

  useEffect(() => {
    const t = setTimeout(onDone, total * 1000);
    return () => clearTimeout(t);
  }, [onDone, total]);

  return (
    <ScreenShell className="max-w-sm">
      <div className="flex flex-col items-center gap-8 text-center font-mono">
        <FadeLine>
          <h1 className="text-sm tracking-[0.35em] text-cream uppercase">
            {title}
          </h1>
        </FadeLine>

        <div
          className="flex flex-col gap-2 text-sm text-muted"
          role="status"
          aria-live="polite"
        >
          {lines.map((line, i) => (
            <FadeLine
              key={line}
              delay={(i + 1) * LINE_GAP}
              className={i === lines.length - 1 ? "text-fg" : ""}
            >
              {line}
            </FadeLine>
          ))}
        </div>

        <div
          className="h-px w-48 overflow-hidden rounded-full bg-line"
          aria-hidden="true"
        >
          <motion.div
            className="h-full bg-coffee"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: total - 0.4, ease: EASE }}
          />
        </div>
      </div>
    </ScreenShell>
  );
}
