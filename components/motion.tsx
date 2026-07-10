"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Ortak easing — Apple hissi: yumuşak, sıçramasız. */
export const EASE = [0.22, 1, 0.36, 1] as const;
export const DUR = 0.45;

/** Ekranlar arası geçiş sarmalayıcısı. */
export function ScreenShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.99 }}
      transition={{ duration: DUR, ease: EASE }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
}

/** Sırayla beliren satır. `delay` saniye cinsinden. */
export function FadeLine({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DUR, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
