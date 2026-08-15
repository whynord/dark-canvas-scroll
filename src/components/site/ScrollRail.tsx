import { motion, useScroll, useSpring } from "motion/react";

export function ScrollRail() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX: width }}
      className="fixed left-0 top-0 z-50 h-1 w-full origin-left riot-bg"
    />
  );
}
