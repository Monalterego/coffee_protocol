"use client";

import { motion } from "framer-motion";
import { config } from "@/lib/config";
import { ScreenShell, FadeLine, EASE, DUR } from "./motion";

const LINE_GAP = 1.05; // mektup ritmi: yavaş, nefes alan

export default function Invitation({
  onYes,
  onNo,
}: {
  onYes: () => void;
  onNo: () => void;
}) {
  const l = config.letter;
  const psDelay = (l.lines.length + 1) * LINE_GAP;
  const buttonsDelay = psDelay + 1.4;

  return (
    <ScreenShell className="max-w-xl">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 text-[17px] leading-relaxed text-fg sm:text-lg">
          {l.lines.map((line, i) => (
            <FadeLine key={i} delay={(i + 1) * LINE_GAP}>
              <p>{line}</p>
            </FadeLine>
          ))}
          <FadeLine delay={l.lines.length * LINE_GAP + 0.6}>
            <p className="text-muted">— {config.name}</p>
          </FadeLine>
        </div>

        <FadeLine delay={psDelay} className="text-sm italic text-muted">
          {l.ps}
        </FadeLine>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DUR, ease: EASE, delay: buttonsDelay }}
          className="flex flex-col gap-4"
        >
          {/* Eşit boyutlu, eşit görünümlü iki seçenek. Hile yok. */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ChoiceButton onClick={onYes}>{l.yesLabel}</ChoiceButton>
            <ChoiceButton onClick={onNo}>{l.noLabel}</ChoiceButton>
          </div>
          <p className="text-center text-xs text-faint">{l.privacyNote}</p>
        </motion.div>
      </div>
    </ScreenShell>
  );
}

function ChoiceButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="rounded-xl border border-line bg-card px-5 py-4 text-sm text-fg transition-shadow hover:shadow-[0_8px_30px_rgba(139,94,60,0.18)]"
    >
      {children}
    </motion.button>
  );
}
