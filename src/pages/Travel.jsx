import { motion } from "framer-motion";
import { Bus, Plane, Car, MapPin, Navigation, Check } from "lucide-react";
import Reveal from "../components/Reveal";
import Aurora from "../components/Aurora";
import { SectionHeading, BookButton, Eyebrow } from "../components/ui";
import { TRAVEL, CONTACT } from "../data/content";

const PINS = [
  { x: 95, y: 318, label: "Bangkok", delay: 1.0 },
  { x: 720, y: 232, label: "Pattaya", delay: 1.5 },
  { x: 1130, y: 150, label: "Drop Zone", star: true, delay: 2.0 },
];

function TravelHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-24">
      <Aurora />

      {/* animated map route */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#0284c7" />
            <stop offset="1" stopColor="#38bdf8" />
          </linearGradient>
        </defs>

        {/* dotted marching route */}
        <motion.path
          id="route"
          d="M95 318 C 320 150 520 360 720 232 C 900 118 1050 190 1130 150"
          stroke="url(#routeGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="1 16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ duration: 1 }}
          style={{ animation: "routedash 1.1s linear infinite" }}
        />

        {/* plane flying along the route */}
        <g opacity="0.85">
          <path d="M-14 -8 L16 0 L-14 8 L-7 0 Z" fill="#0284c7" />
          <animateMotion dur="7s" repeatCount="indefinite" rotate="auto" begin="0.3s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
            <mpath href="#route" />
          </animateMotion>
        </g>

        {/* pins */}
        {PINS.map((p) => (
          <motion.g
            key={p.label}
            initial={{ opacity: 0, y: -22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: p.delay, type: "spring", stiffness: 240, damping: 16 }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          >
            <g transform={`translate(${p.x} ${p.y})`}>
              <path
                d="M0 2 C -11 2 -17 -8 -10 -17 C -6 -22 6 -22 10 -17 C 17 -8 11 2 0 2 Z"
                transform="translate(0 -6)"
                fill={p.star ? "#ff7a59" : "#ffffff"}
                stroke="#0284c7"
                strokeWidth="2.5"
              />
              <circle cx="0" cy="-17" r="4" fill="#0284c7" />
              <text x="0" y="16" textAnchor="middle" fontSize="19" fontWeight="700" fill="#0b2545" fontFamily="Sora, sans-serif">
                {p.star ? "★ " : ""}{p.label}
              </text>
            </g>
          </motion.g>
        ))}
      </svg>

      {/* readability wash on the left */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#e9f5ff]/85 via-[#e9f5ff]/20 to-transparent" />

      {/* content */}
      <div className="container-x relative z-10">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
            <Eyebrow>Travel Information</Eyebrow>
          </motion.div>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.02] sm:text-5xl md:text-6xl">
            <span className="block overflow-hidden pb-[0.12em]">
              <motion.span className="block" initial={{ y: "115%" }} animate={{ y: 0 }} transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}>
                Getting to the
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.12em]">
              <motion.span className="block text-gradient-sun" initial={{ y: "115%" }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}>
                drop zone
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-cloud"
          >
            Near Nong Khor Reservoir in Si Racha, Chon Buri — roughly 20 minutes from Pattaya and about an hour from Bangkok. Here's how to reach us however you're travelling.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }} className="mt-8">
            <BookButton>Book Your Jump</BookButton>
          </motion.div>
        </div>
      </div>

      <div className="hairline container-x mt-14" />
    </section>
  );
}

export default function Travel() {
  return (
    <>
      <TravelHero />

      {/* Shuttles */}
      <section className="container-x py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {[TRAVEL.bangkok, TRAVEL.pattaya].map((s, idx) => (
            <Reveal key={s.title} delay={idx * 0.1}>
              <div className="glass h-full rounded-3xl p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-coral/20 to-sun/20 text-sun ring-1 ring-sun/20">
                  {idx === 0 ? <Plane size={22} /> : <Bus size={22} />}
                </span>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <ul className="mt-5 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-cloud">
                      <Check size={16} className="mt-0.5 shrink-0 text-sun" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Airports */}
      <section className="container-x py-12">
        <SectionHeading eyebrow="Flying In" title="Nearest" accent="airports" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TRAVEL.airports.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.08}>
              <div className="lift glass h-full rounded-3xl p-7">
                <div className="flex items-center justify-between">
                  <Plane className="text-sun" size={22} />
                  <span className="font-display text-sm font-bold text-sun">{a.dist}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold">{a.name}</h3>
                <p className="mt-2 text-sm text-mist">{a.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-6 text-sm text-mist">{TRAVEL.taxi}</p>
        </Reveal>
      </section>

      {/* Driving */}
      <section className="container-x py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="By Car" title="Driving" accent="directions" />
            <ol className="mt-8 space-y-4">
              {TRAVEL.driving.map((d, i) => (
                <Reveal key={d} delay={i * 0.06}>
                  <li className="flex items-start gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-coral to-sun font-display text-sm font-bold text-[#140a04]">{i + 1}</span>
                    <span className="pt-1 text-sm text-cloud">{d}</span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal delay={0.1}>
            <div className="glass flex h-full flex-col justify-center rounded-3xl p-8">
              <Navigation className="text-sun" size={26} />
              <h3 className="mt-4 text-xl font-bold">Find us on the map</h3>
              <div className="mt-3 flex items-start gap-3 text-sm text-mist">
                <MapPin size={16} className="mt-0.5 shrink-0 text-sun" />
                <span>{CONTACT.address}</span>
              </div>
              <a
                href={CONTACT.maps}
                target="_blank"
                rel="noreferrer"
                className="btn-sun mt-6 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm"
              >
                <Car size={16} /> Open in Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
