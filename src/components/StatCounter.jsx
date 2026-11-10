import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function format(n, value) {
  // keep one decimal only when the target itself is fractional
  if (!Number.isInteger(value)) return n.toFixed(1);
  return Math.round(n).toLocaleString();
}

export default function StatCounter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const dur = 1600;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-extrabold sm:text-5xl">
        <span className="text-gradient-sun">{format(n, value)}</span>
        <span className="text-gradient-sun">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-mist">{label}</div>
    </div>
  );
}
