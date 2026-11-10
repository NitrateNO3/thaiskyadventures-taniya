import { motion } from "framer-motion";

// Scroll-triggered reveal wrapper used across the site.
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  once = true,
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </MotionTag>
  );
}
