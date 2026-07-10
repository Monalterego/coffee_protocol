"use client";

import { motion } from "framer-motion";
import { config } from "@/lib/config";
import { ScreenShell, FadeLine } from "./motion";

export default function EndingNo() {
  const e = config.endingNo;
  const lastLine = e.lines.length * 0.9 + 0.4;

  return (
    <ScreenShell className="max-w-md">
      {/* Yumuşakça karanlığa döner — sitem yok, sadece zarafet. */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: lastLine + 4.5, duration: 3, ease: "easeInOut" }}
        className="flex flex-col items-center gap-5 text-center text-[17px] leading-relaxed sm:text-lg"
      >
        {e.lines.map((line, i) => (
          <FadeLine key={i} delay={0.4 + i * 0.9}>
            <p className={i === 0 ? "text-fg" : "text-muted"}>{line}</p>
          </FadeLine>
        ))}
      </motion.div>
    </ScreenShell>
  );
}
