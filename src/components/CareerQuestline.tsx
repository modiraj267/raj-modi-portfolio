"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SpawnPoint from "./sections/SpawnPoint";
import SkillInventory from "./sections/SkillInventory";
import MissionsCompleted from "./sections/MissionsCompleted";
import AchievementsUnlocked from "./sections/AchievementsUnlocked";
import FinalQuest from "./sections/FinalQuest";

export default function CareerQuestline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={ref} className="relative w-full">
      {/* Journey Progress Bar */}
      <div className="absolute left-4 md:left-12 top-0 bottom-0 w-[2px] bg-white/5 hidden md:block">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyber-cyan via-cyber-purple to-cyber-cyan origin-top"
          style={{ scaleY }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyber-primary border-2 border-cyber-cyan" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyber-primary border-2 border-cyber-cyan" />
      </div>

      <div className="pl-0 md:pl-24">
        <SpawnPoint />
        <SkillInventory />
        <MissionsCompleted />
        <AchievementsUnlocked />
        <FinalQuest />
      </div>
    </div>
  );
}
