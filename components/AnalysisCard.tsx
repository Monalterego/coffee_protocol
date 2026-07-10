"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
import { config } from "@/lib/config";
import { ScreenShell, FadeLine, EASE, DUR } from "./motion";

const ROW_GAP = 0.55;

export default function AnalysisCard({ onDone }: { onDone: () => void }) {
  const a = config.analysis;
  const rows = a.items.length;

  // Cesaret sayacı: satır göründükten sonra adım adım yükselir.
  const courageStart = (rows + 1) * ROW_GAP;
  const [courageIdx, setCourageIdx] = useState(-1);
  const courageDone = courageIdx >= a.courageSteps.length - 1;

  useEffect(() => {
    const start = setTimeout(() => setCourageIdx(0), courageStart * 1000);
    return () => clearTimeout(start);
  }, [courageStart]);

  useEffect(() => {
    if (courageIdx < 0 || courageDone) return;
    const t = setTimeout(() => setCourageIdx((i) => i + 1), 420);
    return () => clearTimeout(t);
  }, [courageIdx, courageDone]);

  const recDelay = 0.5; // öneri satırı, sayaç bittikten sonra

  return (
    <ScreenShell className="max-w-md">
      <div className="rounded-2xl border border-line bg-card p-6 sm:p-8 font-mono">
        <FadeLine className="mb-6 flex items-baseline justify-between">
          <h2 className="text-base text-fg">{a.title}</h2>
          <span className="text-[11px] text-faint">{a.subtitle}</span>
        </FadeLine>

        <ul className="flex flex-col gap-3 text-sm">
          {a.items.map((item, i) => (
            <FadeLine key={item.label} delay={(i + 1) * ROW_GAP}>
              <li className="flex items-center justify-between gap-4">
                <span className="text-muted">{item.label}</span>
                <span
                  className={
                    item.tone === "ok" ? "text-cream" : "text-coffee-soft"
                  }
                >
                  {item.value}
                </span>
              </li>
            </FadeLine>
          ))}

          <FadeLine delay={courageStart}>
            <li className="flex items-center justify-between gap-4">
              <span className="text-muted">{a.courageLabel}</span>
              <span
                className="tabular-nums text-cream"
                aria-live="polite"
                aria-label={
                  courageDone
                    ? `${a.courageLabel}: ${a.courageSteps.at(-1)}`
                    : undefined
                }
              >
                {courageIdx >= 0 ? a.courageSteps[courageIdx] : "—"}
              </span>
            </li>
          </FadeLine>
        </ul>

        {courageDone && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: DUR, ease: EASE, delay: recDelay }}
              className="mt-6 border-t border-line pt-5"
            >
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-muted">{a.recommendationLabel}</span>
                <span className="flex items-center gap-2 text-coffee-soft">
                  {a.recommendation}
                  <Coffee size={15} strokeWidth={1.75} aria-hidden="true" />
                </span>
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-faint">
                {a.disclaimer}
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DUR, ease: EASE, delay: recDelay + 0.6 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onDone}
              className="mt-6 w-full rounded-xl border border-line bg-bg px-4 py-3 font-sans text-sm text-fg transition-shadow hover:shadow-[0_8px_30px_rgba(139,94,60,0.15)]"
            >
              {a.continueLabel}
            </motion.button>
          </>
        )}
      </div>
    </ScreenShell>
  );
}
