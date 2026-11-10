import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import Aurora from "./Aurora";

export function BookButton({ children = "Book With Us", className = "", icon = true }) {
  return (
    <Link
      to="/contact"
      className={`btn-sun inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm ${className}`}
    >
      {children}
      {icon && <ArrowRight size={17} strokeWidth={2.4} />}
    </Link>
  );
}

export function GhostButton({ to = "/", children, className = "" }) {
  return (
    <Link
      to={to}
      className={`btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold ${className}`}
    >
      {children}
    </Link>
  );
}

export function Eyebrow({ children }) {
  return (
    <span className="eyebrow">
      <span className="h-px w-6 bg-sun/70" />
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, accent, sub, center = false, light = false }) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-[2.75rem]">
          {title} {accent && <span className="text-gradient-sun">{accent}</span>}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.1}>
          <p className={`mt-4 text-base leading-relaxed ${light ? "text-cloud" : "text-mist"}`}>
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

// Interior page hero (used by every non-home page).
export function PageHero({ eyebrow, title, accent, sub, children, scrollCue = false }) {
  const ref = useRef(null);
  const scrollDown = () => {
    const el = ref.current;
    if (!el) return;
    const bottom = el.getBoundingClientRect().bottom + window.scrollY - 16;
    window.scrollTo({ top: bottom, behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-24">
      <Aurora />
      <div className="container-x relative z-10">
        <div className="max-w-3xl">
          {eyebrow && (
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.02] sm:text-5xl md:text-6xl">
              {title} {accent && <span className="text-gradient-sun">{accent}</span>}
            </h1>
          </Reveal>
          {sub && (
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cloud">{sub}</p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-4">{children}</div>
            </Reveal>
          )}
        </div>
      </div>

      {scrollCue && (
        <motion.button
          onClick={scrollDown}
          aria-label="Scroll down"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="group absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-mist"
        >
          <span className="text-[10px] font-semibold tracking-[0.3em]">SCROLL</span>
          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="grid h-10 w-10 place-items-center rounded-full border border-[#0b2545]/15 bg-white/70 text-sky-deep shadow-md shadow-sky-deep/15 backdrop-blur transition-colors group-hover:border-sun/60 group-hover:text-sun"
          >
            <ChevronDown size={18} />
          </motion.span>
        </motion.button>
      )}

      <div className="hairline container-x mt-14" />
    </section>
  );
}
