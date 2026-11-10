import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck, Mountain, Award, Infinity as InfinityIcon, ArrowRight,
  Plane, Timer, Gauge, Star, ChevronDown, MapPin,
  ClipboardCheck, Ticket, Headphones, Wind, Flag, Umbrella, MousePointer2,
} from "lucide-react";
import Reveal from "../components/Reveal";
import StatCounter from "../components/StatCounter";
import SmartImage from "../components/SmartImage";
import { BookButton, GhostButton, Eyebrow, SectionHeading } from "../components/ui";
import { IMG } from "../data/images";
import {
  HERO, STATS, WHY_US, JUMP_STEPS, TESTIMONIALS, ARTICLES,
} from "../data/content";

const ICONS = { ShieldCheck, Mountain, Award, Infinity: InfinityIcon };

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden">
      {/* Layered CSS sky — always beautiful */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 700px at 78% 6%, rgba(255,255,255,0.85), transparent 55%)," +
            "radial-gradient(1000px 800px at 15% 18%, rgba(125,211,252,0.55), transparent 58%)," +
            "linear-gradient(180deg, #8fd4ff 0%, #bfe6ff 42%, #eff9ff 100%)",
        }}
      />
      {/* Parallax photo layer */}
      <motion.div style={{ y: yImg }} className="absolute inset-0">
        <SmartImage src={IMG.pattayaBeach} alt="Aerial view over the Gulf of Thailand" className="h-full w-full" imgClass="opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink" />
      </motion.div>

      {/* floating clouds */}
      <motion.div
        aria-hidden
        className="absolute left-[8%] top-[28%] h-24 w-56 rounded-full bg-white/70 blur-2xl"
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[12%] top-[46%] h-20 w-48 rounded-full bg-white/70 blur-2xl"
        animate={{ x: [0, -50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div style={{ y: yText, opacity }} className="container-x relative z-10 flex min-h-[100svh] flex-col justify-center pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-[#0b2545]/[0.12] bg-[#0b2545]/[0.04] px-4 py-1.5 text-xs font-semibold tracking-wide backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sun opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-sun" />
          </span>
          {HERO.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-4xl text-5xl font-extrabold leading-[0.98] sm:text-7xl md:text-[5.5rem]"
        >
          {HERO.title} <br />
          <span className="text-gradient-sun">{HERO.titleAccent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-cloud"
        >
          {HERO.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <BookButton>Book Your Jump</BookButton>
          <GhostButton to="/tandem-skydiving">See Tandem Packages</GhostButton>
          <span className="ml-1 text-sm text-mist">
            <span className="font-semibold text-[#0b2545]">{HERO.priceNote}</span>
          </span>
        </motion.div>

        {/* quick facts */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-14 grid max-w-2xl grid-cols-3 gap-4"
        >
          {[
            { icon: Plane, big: "13,000 ft", small: "Exit altitude" },
            { icon: Timer, big: "~60 sec", small: "Freefall" },
            { icon: Gauge, big: "200 kph", small: "Top speed" },
          ].map((f) => (
            <div key={f.small} className="glass rounded-2xl p-4">
              <f.icon className="text-sun" size={20} />
              <div className="mt-3 font-display text-xl font-bold">{f.big}</div>
              <div className="text-xs text-mist">{f.small}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute inset-x-0 bottom-7 z-10 flex flex-col items-center gap-2 text-mist"
      >
        <span className="text-[11px] tracking-[0.3em]">SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const items = [
    "USPA-Certified Instructors", "Highest Jump in Thailand", "Scenic Ocean Views",
    "2.7M+ Skydives", "Open 7 Days a Week", "40+ Years of Expertise", "Let's Fly Together",
  ];
  return (
    <div className="relative border-y border-[#0b2545]/[0.06] bg-ink-2 py-5">
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="mx-8 flex items-center gap-8 font-display text-sm font-semibold uppercase tracking-widest text-cloud/60">
            {t} <Star size={13} className="text-sun" fill="currentColor" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="container-x py-14">
      <div className="glass-strong grid grid-cols-2 gap-8 rounded-3xl p-10 md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <StatCounter {...s} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ---------- Scrollytelling: "The Jump" ----------
const STORY = [
  {
    icon: Plane,
    tag: "The Climb",
    altLabel: "13,000 ft",
    text: "For twenty minutes the aircraft spirals upward. Pattaya shrinks to a toy coastline below. Then the door rolls open — and the wind howls in.",
    range: [0, 0.24],
  },
  {
    icon: Wind,
    tag: "Freefall",
    altLabel: "200 kph",
    text: "You tip forward into nothing. For sixty seconds there is no up, no down — only the roar of two hundred kilometres an hour of pure air.",
    range: [0.24, 0.55],
  },
  {
    icon: Umbrella,
    tag: "Canopy Opens",
    altLabel: "5,000 ft",
    text: "A firm tug at five thousand feet. The canopy blooms open and the world falls silent. The Gulf of Thailand stretches gold to the horizon.",
    range: [0.55, 0.8],
  },
  {
    icon: Flag,
    tag: "Touchdown",
    altLabel: "Ground",
    text: "You steer the final turns yourself and flare for the last few feet. Your toes brush the grass. You're down — already asking to go again.",
    range: [0.8, 1],
  },
];

// % position on the altimeter for a given altitude (0 ft at bottom, 13,000 at top)
const altTop = (alt) => 92 - (alt / 13000) * 84;

function StoryScene({ progress, range, first, last, children }) {
  const [start, end] = range;
  const opacity = useTransform(
    progress,
    [first ? -1 : start - 0.07, start + 0.03, end - 0.03, last ? 2 : end + 0.07],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [start - 0.1, start + 0.05], [26, 0]);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0">
      {children}
    </motion.div>
  );
}

// speed-streak definitions for the freefall scene
const STREAKS = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 5.6 + 2) % 100,
  delay: ((i % 9) * 0.11).toFixed(2),
  dur: (0.42 + (i % 5) * 0.09).toFixed(2),
  h: 80 + (i % 4) * 34,
}));

// Scene-reactive background for the scrollytelling jump.
function JumpBackdrop({ progress }) {
  const highSky = useTransform(progress, [0, 0.4], [1, 0]);          // deep sky up high
  const lowSky = useTransform(progress, [0.35, 0.85], [0, 1]);        // bright sky near ground
  const cloudsOpacity = useTransform(progress, [0, 0.12, 0.72, 0.9], [0, 0.95, 0.95, 0.15]);
  const cloud1Y = useTransform(progress, [0, 1], ["-15%", "70%"]);
  const cloud2Y = useTransform(progress, [0, 1], ["5%", "95%"]);
  const cloud3Y = useTransform(progress, [0, 1], ["-45%", "40%"]);
  const sunY = useTransform(progress, [0, 1], ["-6%", "14%"]);
  const streaksOpacity = useTransform(progress, [0.24, 0.33, 0.5, 0.58], [0, 1, 1, 0]);
  const seaHeight = useTransform(progress, [0.5, 1], ["0%", "44%"]);
  const seaOpacity = useTransform(progress, [0.45, 0.72], [0, 1]);

  const Cloud = ({ left, top, w, h, o }) => (
    <div className="absolute rounded-full bg-white blur-2xl" style={{ left, top, width: w, height: h, opacity: o }} />
  );

  return (
    <div className="pointer-events-none absolute inset-0">
      {/* sky gradient crossfade */}
      <motion.div style={{ opacity: highSky, background: "linear-gradient(180deg,#7cc5f5 0%,#a9dcff 55%,#d7f0ff 100%)" }} className="absolute inset-0" />
      <motion.div style={{ opacity: lowSky, background: "linear-gradient(180deg,#d8f1ff 0%,#eefaff 55%,#ffffff 100%)" }} className="absolute inset-0" />

      {/* sun glow */}
      <motion.div style={{ y: sunY }} className="absolute right-[6%] top-[-6%] h-80 w-80 rounded-full blur-3xl" >
        <div className="h-full w-full rounded-full" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.95), rgba(255,236,170,0.35) 45%, transparent 70%)" }} />
      </motion.div>

      {/* parallax cloud layers */}
      <motion.div style={{ y: cloud1Y, opacity: cloudsOpacity }} className="absolute inset-0">
        <Cloud left="6%" top="22%" w="260px" h="70px" o={0.8} />
        <Cloud left="62%" top="16%" w="320px" h="90px" o={0.7} />
      </motion.div>
      <motion.div style={{ y: cloud2Y, opacity: cloudsOpacity }} className="absolute inset-0">
        <Cloud left="38%" top="40%" w="220px" h="60px" o={0.65} />
        <Cloud left="78%" top="52%" w="200px" h="60px" o={0.55} />
      </motion.div>
      <motion.div style={{ y: cloud3Y, opacity: cloudsOpacity }} className="absolute inset-0">
        <Cloud left="14%" top="62%" w="300px" h="80px" o={0.6} />
        <Cloud left="50%" top="76%" w="240px" h="70px" o={0.5} />
      </motion.div>

      {/* freefall speed streaks */}
      <motion.div style={{ opacity: streaksOpacity }} className="absolute inset-0 overflow-hidden">
        {STREAKS.map((s, i) => (
          <span
            key={i}
            className="absolute top-0 w-px rounded-full bg-gradient-to-b from-transparent via-white to-transparent"
            style={{ left: `${s.left}%`, height: `${s.h}px`, animation: `streakfall ${s.dur}s linear ${s.delay}s infinite` }}
          />
        ))}
      </motion.div>

      {/* the Gulf rising into view */}
      <motion.div style={{ height: seaHeight, opacity: seaOpacity }} className="absolute inset-x-0 bottom-0 overflow-hidden rounded-t-[48%]">
        <div className="h-full w-full bg-gradient-to-t from-sky-deep/55 via-sky-glow/25 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/40" />
      </motion.div>
    </div>
  );
}

// Animated skydiver that climbs, falls, floats under canopy, then lands.
// Big hand-drawn doodle scenes that fill the background and crossfade with scroll.
function DoodleScenes({ progress }) {
  const climbO = useTransform(progress, [0, 0.2, 0.27], [1, 1, 0]);
  const climbY = useTransform(progress, [0, 0.27], ["4%", "-6%"]);
  const fallO = useTransform(progress, [0.2, 0.3, 0.52, 0.6], [0, 1, 1, 0]);
  const fallY = useTransform(progress, [0.2, 0.6], ["-9%", "9%"]);
  const canopyO = useTransform(progress, [0.54, 0.63, 0.78, 0.85], [0, 1, 1, 0]);
  const canopyY = useTransform(progress, [0.54, 0.85], ["-5%", "5%"]);
  const touchO = useTransform(progress, [0.82, 0.9, 1], [0, 1, 1]);
  const touchY = useTransform(progress, [0.82, 1], ["-4%", "0%"]);

  const svg = "absolute inset-0 h-full w-full text-[#0e3a63]";
  const common = {
    viewBox: "0 0 120 80",
    preserveAspectRatio: "xMidYMid slice",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 0.85,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-[1]">
      {/* ---------- CLIMB: aircraft spiralling upward ---------- */}
      <motion.svg {...common} style={{ opacity: climbO, y: climbY }} className={svg}>
        <g>
          <circle cx="20" cy="16" r="6" />
          <path d="M20 4v4M20 24v4M8 16h4M28 16h4M11 7l3 3M29 7l-3 3M11 25l3-3M29 25l-3-3" />
        </g>
        <path d="M30 60 q-3 -8 6 -7 q2 -6 9 -3 q6 -5 10 2 q7 0 3 8 z" />
        <path d="M74 68 q-2 -6 5 -5 q2 -5 7 -2 q5 -3 7 2 q6 0 2 6 z" />
        <path d="M44 24 q2 -2 4 0 M49 24 q2 -2 4 0" />
        {/* spiral climb path */}
        <path d="M58 78 C 44 66 96 64 86 50 C 78 40 54 46 66 32 C 74 22 98 26 88 16" strokeDasharray="2.5 3.5" />
        {/* aircraft */}
        <g transform="translate(90 15) rotate(-20)">
          <path d="M-14 0 C -6 -4 8 -4 14 0 C 8 3 -6 3 -14 0 Z" />
          <path d="M7 -2 Q12 -2 13 0" />
          <path d="M-3 1 l-9 7 l12 -3 Z" />
          <path d="M-12 -0.5 l-4 -5 l4 2 Z" />
          <circle cx="3" cy="-1" r="1.1" fill="currentColor" stroke="none" />
        </g>
      </motion.svg>

      {/* ---------- FREEFALL: a man jumps off ---------- */}
      <motion.svg {...common} style={{ opacity: fallO, y: fallY }} className={svg}>
        {/* small plane he just left */}
        <g transform="translate(26 14) rotate(-8) scale(0.7)">
          <path d="M-14 0 C -6 -4 8 -4 14 0 C 8 3 -6 3 -14 0 Z" />
          <path d="M-3 1 l-9 7 l12 -3 Z" />
          <path d="M-12 -0.5 l-4 -5 l4 2 Z" />
        </g>
        <path d="M30 18 Q52 20 72 30" strokeDasharray="2 3" />
        {/* speed lines */}
        <path d="M86 5 v11 M94 3 v13 M78 8 v8 M101 7 v10 M70 12 v6" />
        {/* BIG freefall man */}
        <g>
          <circle cx="88" cy="28" r="4.2" fill="currentColor" stroke="none" />
          <path d="M88 32 L88 50" />
          <path d="M88 36 L72 27 M88 36 L104 27" />
          <path d="M72 27 l-3 -2 M104 27 l3 -2" />
          <path d="M88 50 L77 64 M88 50 L99 64" />
          <path d="M77 64 l-1 3 M99 64 l1 3" />
        </g>
        <path d="M40 72 q-2 -6 5 -5 q2 -5 7 -2 q5 -3 7 2 q6 0 2 6 z" />
      </motion.svg>

      {/* ---------- CANOPY: parachute opens ---------- */}
      <motion.svg {...common} style={{ opacity: canopyO, y: canopyY }} className={svg}>
        <g>
          <circle cx="22" cy="20" r="5" />
          <path d="M22 10v3M22 27v3M12 20h3M28 20h3M15 13l2 2M29 13l-2 2" />
        </g>
        {/* big canopy */}
        <path d="M62 36 Q88 4 114 36" />
        <path d="M62 36 Q88 20 114 36" />
        <path d="M74 31 L78 36 M88 27 L88 36 M102 31 L98 36" />
        {/* suspension lines */}
        <path d="M62 36 L85 54 M114 36 L91 54 M77 34 L86 54 M99 34 L90 54" />
        {/* hanging man */}
        <g>
          <circle cx="88" cy="57" r="3.4" fill="currentColor" stroke="none" />
          <path d="M88 60 L88 70" />
          <path d="M88 63 L82 66 M88 63 L94 66" />
          <path d="M88 70 L83 77 M88 70 L93 77" />
        </g>
        <path d="M30 66 q-2 -6 5 -5 q2 -5 7 -2 q5 -3 7 2 q6 0 2 6 z" />
      </motion.svg>

      {/* ---------- TOUCHDOWN: man lands ---------- */}
      <motion.svg {...common} style={{ opacity: touchO, y: touchY }} className={svg}>
        <g>
          <circle cx="22" cy="18" r="5" />
          <path d="M22 8v3M22 25v3M12 18h3M28 18h3M15 11l2 2M29 11l-2 2" />
        </g>
        {/* ground + grass */}
        <path d="M0 70 H120" />
        <path d="M12 70 l-1 -4 M15 70 l1 -4 M40 70 l-1 -4 M44 70 l1 -4 M66 70 l-1 -4 M103 70 l-1 -4 M107 70 l1 -4" />
        {/* folded parachute mound */}
        <path d="M60 70 q7 -12 17 0 Z" />
        <path d="M65 66 l-1 4 M71 64 l0 6 M77 66 l1 4" />
        {/* landing man (flare) */}
        <g>
          <circle cx="92" cy="47" r="4" fill="currentColor" stroke="none" />
          <path d="M92 51 L92 62" />
          <path d="M92 54 L82 49 M92 54 L102 49" />
          <path d="M92 62 L86 70 M92 62 L98 70" />
        </g>
        {/* windsock flag */}
        <g transform="translate(110 52)">
          <path d="M0 0 V18" />
          <path d="M0 1 L9 3 L0 6 Z" />
        </g>
      </motion.svg>
    </div>
  );
}

function Experience() {
  const wrap = useRef(null);
  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start start", "end end"] });

  const altRaw = useTransform(scrollYProgress, [0, 0.24, 0.55, 0.82, 1], [0, 13000, 5000, 900, 0]);
  const altStr = useTransform(altRaw, (v) => Math.max(0, Math.round(v / 10) * 10).toLocaleString());

  return (
    <section ref={wrap} className="relative" style={{ height: "360vh" }}>
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden py-20">
        <JumpBackdrop progress={scrollYProgress} />
        <DoodleScenes progress={scrollYProgress} />

        {/* legibility scrim — keeps the left text readable over the doodles */}
        <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-white/90 via-white/35 to-transparent" />

        {/* altitude HUD */}
        <div className="absolute right-5 top-24 z-10 text-right sm:right-10">
          <div className="text-[10px] font-semibold tracking-[0.25em] text-mist">ALTITUDE</div>
          <div className="font-display text-3xl font-extrabold leading-none sm:text-4xl">
            <motion.span className="text-gradient-sun tabular-nums">{altStr}</motion.span>
            <span className="ml-1 text-lg text-mist">ft</span>
          </div>
        </div>

        {/* story */}
        <div className="container-x relative z-10 w-full">
          <div className="max-w-xl">
            <Eyebrow>The Jump</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">
              60 seconds that <span className="text-gradient-sun">change everything</span>
            </h2>

            <div className="relative mt-8 h-56 sm:h-48">
              {STORY.map((s, i) => (
                <StoryScene
                  key={s.tag}
                  progress={scrollYProgress}
                  range={s.range}
                  first={i === 0}
                  last={i === STORY.length - 1}
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-coral to-sun text-white shadow-lg shadow-sky-deep/30">
                      <s.icon size={22} />
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-display text-lg font-extrabold">{s.tag}</span>
                        <span className="rounded-full bg-sun/12 px-3 py-0.5 text-xs font-semibold text-sun">{s.altLabel}</span>
                      </div>
                      <p className="mt-3 max-w-md text-base leading-relaxed text-cloud">{s.text}</p>
                    </div>
                  </div>
                </StoryScene>
              ))}
            </div>

            <div className="mt-6 h-1 w-full max-w-md overflow-hidden rounded-full bg-[#0b2545]/[0.08]">
              <motion.div
                style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                className="h-full w-full rounded-full bg-gradient-to-r from-coral to-sky-glow"
              />
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-mist">
              <MousePointer2 size={13} className="text-sun" /> Scroll to ride the jump — from takeoff to touchdown
            </div>

            <div className="mt-7">
              <BookButton>Book Your Jump</BookButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="container-x py-14">
      <SectionHeading center eyebrow="Why Thai Sky" title="Why jump" accent="with us" sub="Founded by international experts, built on safety, and set against some of the most beautiful skies in Southeast Asia." />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_US.map((w, i) => {
          const Icon = ICONS[w.icon] || ShieldCheck;
          return (
            <Reveal key={w.title} delay={i * 0.08}>
              <div className="lift glass h-full rounded-3xl p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-coral/20 to-sun/20 text-sun ring-1 ring-sun/20">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{w.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

const EXPERIENCES = [
  { title: "Tandem Skydiving", desc: "Jump from 13,000 ft strapped to a certified pro. No experience needed.", tag: "Most popular", price: "฿9,700", img: IMG.tandem, to: "/tandem-skydiving" },
  { title: "AFF Courses", desc: "Learn to fly solo — ground school to your first freefall jumps.", tag: "Learn to fly", price: "฿25,950", img: IMG.course, to: "/courses" },
  { title: "USPA 'A' License", desc: "The full path to a licensed skydiver over 25 progressive jumps.", tag: "Go all the way", price: "฿149,550", img: IMG.formation, to: "/courses" },
  { title: "Licensed Fun Jumps", desc: "Hop & pops and fun jumps for qualified flyers. Bring your logbook.", tag: "Experienced", price: "฿1,100", img: IMG.gallery[4], to: "/licensed-skydivers" },
  { title: "Video & Photos", desc: "An air-to-air camera flyer captures every second of your jump.", tag: "Relive it", price: "Add-on", img: IMG.gallery[3], to: "/tandem-skydiving" },
  { title: "Groups & Events", desc: "Birthdays, stag dos, corporate days — celebrate in the sky.", tag: "Celebrate", price: "Enquire", img: IMG.gallery[5], to: "/contact" },
  { title: "Gift Vouchers", desc: "Give someone the adventure of a lifetime. Flexible and easy.", tag: "Perfect gift", price: "Flexible", img: IMG.gallery[6], to: "/contact" },
];

function ExperienceCard({ e }) {
  return (
    <Link
      to={e.to}
      className="group/card relative block h-[400px] w-[310px] shrink-0 overflow-hidden rounded-[1.75rem] border border-white/50 shadow-xl shadow-sky-deep/20 sm:w-[340px]"
    >
      <SmartImage src={e.img} alt={e.title} className="absolute inset-0 h-full w-full" imgClass="transition-transform duration-[900ms] group-hover/card:scale-110" />
      {/* legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#061a30] via-[#061a30]/45 to-[#061a30]/5" />
      {/* hover sheen */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-[1100ms] group-hover/card:translate-x-full" />

      {/* top chips */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
        <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur">{e.tag}</span>
        <span className="rounded-full bg-gradient-to-r from-coral to-sun px-3 py-1 text-[11px] font-bold text-white shadow-lg shadow-sky-deep/40">{e.price}</span>
      </div>

      {/* bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="text-xl font-extrabold drop-shadow">{e.title}</h3>
        <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/85 opacity-0 transition-all duration-500 group-hover/card:max-h-24 group-hover/card:opacity-100">
          {e.desc}
        </p>
        <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-sky-200">
          Discover <ArrowRight size={15} className="transition-transform duration-300 group-hover/card:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}

function Experiences() {
  const loop = [...EXPERIENCES, ...EXPERIENCES];
  return (
    <section className="overflow-hidden py-16">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center"><Eyebrow>Choose Your Sky</Eyebrow></div>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-[2.75rem]">
            Experiences for <span className="text-gradient-sun">every level</span>
          </h2>
          <p className="mt-4 text-base text-mist">
            From a first tandem leap to a full licence — hover any card to explore. <span className="text-sky-deep/60">(hover to pause)</span>
          </p>
        </div>
      </div>

      {/* running carousel */}
      <div className="group relative mt-12">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#e7f4ff] to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#e7f4ff] to-transparent sm:w-28" />

        <div
          className="flex w-max gap-6 px-6 group-hover:[animation-play-state:paused]"
          style={{ animation: "marquee 48s linear infinite" }}
        >
          {loop.map((e, i) => (
            <ExperienceCard key={i} e={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

const STEP_META = [
  { icon: ClipboardCheck, alt: "On the ground" },
  { icon: Ticket, alt: "On the ground" },
  { icon: Headphones, alt: "Pre-flight" },
  { icon: Plane, alt: "13,000 ft" },
  { icon: Wind, alt: "5,000 ft" },
  { icon: Flag, alt: "Touchdown" },
];

function Steps() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* soft ambient wash */}
      <div className="pointer-events-none absolute inset-0 -z-0" style={{ background: "radial-gradient(1100px 420px at 50% -10%, rgba(56,189,248,0.12), transparent 60%)" }} />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center"><Eyebrow>How It Works</Eyebrow></div>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-[2.75rem]">
            Your jump day, <span className="text-gradient-sun">step by step</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist">
            Six simple stages — from hotel pickup and the climb to 13,000 ft, all the way back to a safe landing.
          </p>

          {/* dashed flight-path motif */}
          <div className="mx-auto mt-7 flex max-w-md items-center gap-3 text-sun">
            <span className="h-px flex-1 bg-[#0b2545]/10" />
            <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em]">
              <Plane size={14} /> CLIMB · FREEFALL · CANOPY · LAND
            </span>
            <span className="h-px flex-1 bg-[#0b2545]/10" />
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {JUMP_STEPS.map((s, i) => {
            const Icon = STEP_META[i].icon;
            return (
              <Reveal key={s.n} delay={(i % 3) * 0.09}>
                <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-[#0b2545]/[0.08] bg-white/80 p-7 shadow-[0_14px_40px_-24px_rgba(3,76,150,0.4)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-sun/40 hover:shadow-[0_30px_60px_-28px_rgba(3,76,150,0.55)]">
                  {/* big ghost number */}
                  <span className="pointer-events-none absolute -right-1 -top-5 select-none font-display text-[6.5rem] font-extrabold leading-none text-sky-deep/[0.06]">
                    {s.n}
                  </span>
                  {/* corner glow on hover */}
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-coral/0 to-sun/0 blur-2xl transition-all duration-500 group-hover:from-coral/25 group-hover:to-sun/20" />
                  {/* top accent line */}
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-coral to-sun transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-coral to-sun text-white shadow-lg shadow-sky-deep/30 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-6">
                        <Icon size={19} />
                      </span>
                      <span className="rounded-full border border-sun/25 bg-sun/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-sun">
                        {STEP_META[i].alt}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{s.text}</p>

                    <div className="mt-5 flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-sky-deep/35">
                      <span className="h-px w-6 bg-sky-deep/20" /> STEP {s.n}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* drifting blurred backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="mesh-blob animate-float" style={{ width: 460, height: 460, top: "-10%", left: "8%", background: "radial-gradient(circle,#7dd3fc,transparent 60%)", opacity: 0.5 }} />
        <div className="mesh-blob animate-float-2" style={{ width: 540, height: 540, top: "15%", right: "4%", background: "radial-gradient(circle,#38bdf8,transparent 62%)", opacity: 0.4 }} />
        <div className="mesh-blob animate-float" style={{ width: 400, height: 400, bottom: "-14%", left: "38%", background: "radial-gradient(circle,#a5b4fc,transparent 60%)", opacity: 0.35 }} />
      </div>

      <div className="container-x relative z-10">
      <SectionHeading center eyebrow="Guest Stories" title="Loved by" accent="adventurers worldwide" />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <div className="lift glass flex h-full flex-col rounded-3xl p-7">
              <div className="flex gap-1 text-sun">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} size={15} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-cloud">"{t.text}"</p>
              <div className="mt-5 border-t border-[#0b2545]/[0.08] pt-4">
                <div className="font-semibold">{t.name}</div>
                <div className="flex items-center gap-1 text-xs text-mist">
                  <MapPin size={11} /> {t.from}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  );
}

function BlogPreview() {
  const posts = ARTICLES.slice(0, 3);
  return (
    <section className="container-x py-14">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="From the Blog" title="Latest" accent="dispatches" />
        <GhostButton to="/articles">All Articles</GhostButton>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <Link to="/articles" className="group block h-full rounded-3xl border border-[#0b2545]/[0.08] bg-ink-3 p-7 lift">
              <span className="inline-block rounded-full bg-sun/12 px-3 py-1 text-xs font-semibold text-sun">{p.tag}</span>
              <h3 className="mt-4 text-lg font-bold leading-snug group-hover:text-sun">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{p.excerpt}</p>
              <div className="mt-5 text-xs text-mist/70">{p.date}</div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <Experience />
      <WhyUs />
      <Experiences />
      <Steps />
      <Testimonials />
      <BlogPreview />
    </>
  );
}
