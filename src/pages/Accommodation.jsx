import { motion } from "framer-motion";
import { BedDouble, Info, Bike, Bus, MapPin, Heart } from "lucide-react";
import Reveal from "../components/Reveal";
import Aurora from "../components/Aurora";
import SmartImage from "../components/SmartImage";
import { SectionHeading, BookButton, Eyebrow } from "../components/ui";
import { IMG } from "../data/images";
import { ACCOMMODATION, ACCOMMODATION_NOTES } from "../data/content";

function Sticker({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -12 }}
      animate={{ scale: 1, rotate: -8 }}
      transition={{ delay, type: "spring", stiffness: 260, damping: 14 }}
      className={className}
    >
      <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Accommodation() {
  return (
    <>
      {/* ---------- Hero: intro (left) + travel info (right) ---------- */}
      <section className="relative overflow-hidden pt-36 pb-12 sm:pt-40">
        <Aurora />
        <div className="container-x relative z-10">
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT — intro */}
            <div className="lg:pt-6">
              <Eyebrow>Accommodation</Eyebrow>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
                Where to stay <span className="text-gradient-sun">near the drop zone</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-cloud">
                We recommend staying in North Pattaya (Naklua) for ease of transport. Here are the options best suited to fun jumpers and course students.
              </p>
              <div className="mt-8">
                <BookButton>Plan Your Stay</BookButton>
              </div>
            </div>

            {/* RIGHT — good to know + getting around */}
            <div className="relative space-y-6">
              <Sticker delay={0.3} className="absolute -right-1 -top-7 z-20 hidden sm:block">
                <div className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-coral to-sun px-3 py-1.5 text-[11px] font-bold text-white shadow-lg">
                  <Heart size={12} fill="currentColor" /> We'll pick you up!
                </div>
              </Sticker>

              <Reveal>
                <div className="rounded-[1.75rem] border border-[#0b2545]/[0.08] bg-white/80 p-7 backdrop-blur">
                  <div className="flex items-center gap-2 text-sun">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-sun/12"><Info size={17} /></span>
                    <h3 className="font-display text-base font-bold text-[#0b2545]">Good to know</h3>
                  </div>
                  <ul className="mt-5 space-y-3.5">
                    {ACCOMMODATION_NOTES.map((n) => (
                      <li key={n} className="flex items-start gap-3 text-sm text-cloud">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-coral to-sun" /> {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative overflow-hidden rounded-[1.75rem] p-7 text-white" style={{ background: "linear-gradient(135deg,#07233f,#0b4f86 55%,#0ea5e9)" }}>
                  <svg className="pointer-events-none absolute -bottom-4 -right-3 h-28 w-28 text-white/15" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="14" cy="34" r="6" /><circle cx="36" cy="34" r="6" />
                    <path d="M14 34 L22 34 L28 24 L34 24 M20 34 L26 24" /><path d="M28 24 L32 18 L38 18" />
                  </svg>
                  <div className="relative">
                    <h3 className="text-lg font-bold">Getting around</h3>
                    <div className="mt-5 space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/15"><Bike size={17} /></span>
                        <p className="text-sm leading-relaxed text-sky-50/90">Motorbike rental from the drop zone for <span className="font-semibold text-white">฿300 per day</span>.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/15"><Bus size={17} /></span>
                        <p className="text-sm leading-relaxed text-sky-50/90">Our morning bus serves hotels within easy range — confirm your pickup in advance so you don't miss a jump.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/15"><MapPin size={17} /></span>
                        <p className="text-sm leading-relaxed text-sky-50/90">Stay in <span className="font-semibold text-white">North Pattaya (Naklua)</span> for the easiest transfers.</p>
                      </div>
                    </div>
                    <BookButton className="mt-6 w-full justify-center">Arrange Transfers</BookButton>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="hairline container-x mt-14" />
      </section>

      {/* ---------- Stay options ---------- */}
      <section className="container-x py-12">
        <SectionHeading eyebrow="Our Picks" title="Recommended" accent="places to stay" />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {ACCOMMODATION.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.1}>
              <div className="group lift overflow-hidden rounded-3xl border border-[#0b2545]/[0.08] bg-ink-3">
                <div className="relative h-44 overflow-hidden">
                  <SmartImage src={IMG.gallery[(i + 5) % IMG.gallery.length]} alt={a.name} className="h-full w-full" imgClass="transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute left-4 top-4 -rotate-6 rounded-xl bg-white px-3 py-1 text-xs font-extrabold text-sky-deep shadow-lg ring-1 ring-sky-deep/10">{a.price}</span>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 text-sun"><BedDouble size={18} /></div>
                  <h3 className="mt-2 text-lg font-bold">{a.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{a.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
