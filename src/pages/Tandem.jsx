import {
  Check, Languages, CalendarClock, Scale, Footprints, HeartPulse, Waves, Plane, Bus,
} from "lucide-react";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import { PageHero, SectionHeading, BookButton, GhostButton } from "../components/ui";
import { IMG } from "../data/images";
import { TANDEM_PACKAGES, WEIGHT_SURCHARGES, TANDEM_RULES, JUMP_STEPS } from "../data/content";

const RULE_ICONS = { Languages, CalendarClock, Scale, Footprints, HeartPulse, Waves };

function Packages() {
  return (
    <section className="container-x py-12">
      <SectionHeading center eyebrow="Packages & Prices" title="Choose your" accent="package" sub="All tandem jumps exit at 13,000 ft with ~60 seconds of freefall. Online deposits are preferred to secure your spot." />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {TANDEM_PACKAGES.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <div className={`lift relative flex h-full flex-col rounded-3xl p-7 ${p.featured ? "bg-gradient-to-b from-coral/15 to-ink-3 ring-2 ring-sun/40" : "glass"}`}>
              {p.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-coral to-sun px-3 py-1 text-xs font-bold text-[#140a04]">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-sm text-mist">฿</span>
                <span className="font-display text-4xl font-extrabold text-gradient-sun">{p.price}</span>
              </div>
              <p className="mt-3 text-sm text-mist">{p.desc}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-cloud">
                    <Check size={16} className="mt-0.5 shrink-0 text-sun" /> {f}
                  </li>
                ))}
              </ul>
              <BookButton className="mt-6 w-full justify-center" icon={false}>Book Now</BookButton>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 glass rounded-3xl p-7">
          <h4 className="font-display font-bold">Weight surcharges</h4>
          <p className="mt-1 text-sm text-mist">A small supplement applies over 95 kg for the extra instructor work involved.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-4">
            {WEIGHT_SURCHARGES.map((w) => (
              <div key={w.range} className="rounded-2xl bg-[#0b2545]/[0.04] p-4 text-center">
                <div className="font-display text-lg font-bold text-sun">{w.fee}</div>
                <div className="text-xs text-mist">{w.range}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default function Tandem() {
  return (
    <>
      <PageHero
        eyebrow="Tandem Skydiving"
        title="Experience freefall over"
        accent="Thailand"
        sub="Jump from 13,000 ft (4,000 m) — the highest jump offered by any operator in Thailand. About one minute of freefall at up to 200 kph, no experience required. Experience the thrill of a lifetime!"
      >
        <BookButton>Choose a Package</BookButton>
        <GhostButton to="/faqs">Tandem FAQs</GhostButton>
      </PageHero>

      {/* Getting there */}
      <section className="container-x py-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-[#0b2545]/[0.08]">
              <SmartImage src={IMG.tandem} alt="Tandem skydive over the Gulf of Thailand" className="aspect-[4/3] w-full" />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Getting There Made Easy" title="We'll bring you" accent="to the sky" sub="Shuttle service runs from both Pattaya and Bangkok, so getting to the drop zone is effortless." />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Reveal delay={0.05}>
                <div className="glass rounded-2xl p-5">
                  <Bus className="text-sun" size={20} />
                  <div className="mt-3 font-semibold">Pattaya</div>
                  <p className="mt-1 text-sm text-mist">Free hotel pickup at 07:00–07:30 or 10:00–10:30 — included in the jump price.</p>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="glass rounded-2xl p-5">
                  <Plane className="text-sun" size={20} />
                  <div className="mt-3 font-semibold">Bangkok</div>
                  <p className="mt-1 text-sm text-mist">Shuttle from Novotel at Siam Square, departing 09:00. 500 baht round trip.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Experience steps */}
      <section className="container-x py-12">
        <SectionHeading center eyebrow="The Experience" title="How your jump" accent="unfolds" />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {JUMP_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 0.08}>
              <div className="lift glass relative h-full rounded-3xl p-7">
                <span className="font-display text-5xl font-extrabold text-[#0b2545]/[0.06]">{s.n}</span>
                <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-sm text-mist">
            Total experience: about <span className="font-semibold text-[#0b2545]">5 hours</span> from pickup to drop-off. All you need to bring: high fives, good vibes & big smiles. 🪂
          </p>
        </Reveal>
      </section>

      <Packages />

      {/* Rules */}
      <section className="container-x py-12">
        <SectionHeading center eyebrow="Before You Jump" title="Age, weight &" accent="restrictions" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TANDEM_RULES.map((r, i) => {
            const Icon = RULE_ICONS[r.icon];
            return (
              <Reveal key={r.title} delay={(i % 3) * 0.08}>
                <div className="lift glass h-full rounded-3xl p-7">
                  <Icon className="text-sun" size={22} />
                  <h3 className="mt-4 text-lg font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{r.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
