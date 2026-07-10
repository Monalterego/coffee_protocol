"use client";

import { useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import BootScreen from "@/components/BootScreen";
import AnalysisCard from "@/components/AnalysisCard";
import Invitation from "@/components/Invitation";
import EndingYes from "@/components/EndingYes";
import EndingNo from "@/components/EndingNo";

export type Screen = "boot" | "analysis" | "letter" | "yes" | "no";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("boot");

  return (
    <MotionConfig reducedMotion="user">
      <main className="flex min-h-dvh items-center justify-center px-6 py-12">
        <AnimatePresence mode="wait">
          {screen === "boot" && (
            <BootScreen key="boot" onDone={() => setScreen("analysis")} />
          )}
          {screen === "analysis" && (
            <AnalysisCard key="analysis" onDone={() => setScreen("letter")} />
          )}
          {screen === "letter" && (
            <Invitation
              key="letter"
              onYes={() => setScreen("yes")}
              onNo={() => setScreen("no")}
            />
          )}
          {screen === "yes" && <EndingYes key="yes" />}
          {screen === "no" && <EndingNo key="no" />}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
