import { Check, X, Clock, Scale } from "lucide-react";
import Reveal from "../components/Reveal";
import { PageHero, SectionHeading, BookButton, GhostButton } from "../components/ui";
import { COURSES, COURSE_EXTRAS, COURSE_INCLUDED, COURSE_EXCLUDED } from "../data/content";

export default function Courses() {
  return (
    <>
      <PageHero
        eyebrow="Skydive Courses"
        title="Take the first step towards"
        accent="skydiving mastery"
        sub="One progression in three parts — from your very first AFF level to a full USPA 'A' License over 25 jumps. All equipment provided, taught by USPA-certified instructors."
      >
        <BookButton>Choose a Package</BookButton>
        <GhostButton to="/faqs">Course FAQs</GhostButton>
      </PageHero>

      <section className="container-x py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {COURSES.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.1}>
              <div className={`lift relative flex h-full flex-col rounded-3xl p-8 ${c.featured ? "bg-gradient-to-b from-coral/15 to-ink-3 ring-2 ring-sun/40" : "glass"}`}>
                {c.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-coral to-sun px-3 py-1 text-xs font-bold text-[#140a04]">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold">{c.name}</h3>
                <p className="mt-1 text-sm text-sun">{c.tagline}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-sm text-mist">฿</span>
                  <span className="font-display text-4xl font-extrabold text-gradient-sun">{c.price}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-mist">{c.desc}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs text-cloud">
                  <span className="flex items-center gap-1.5 rounded-full bg-[#0b2545]/[0.04] px-3 py-1"><Clock size={13} className="text-sun" /> {c.duration}</span>
                  <span className="flex items-center gap-1.5 rounded-full bg-[#0b2545]/[0.04] px-3 py-1"><Scale size={13} className="text-sun" /> {c.weight}</span>
                </div>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {c.includes.map((f) => (
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
      </section>

      {/* Included / excluded */}
      <section className="container-x py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-3xl p-8">
              <h3 className="text-lg font-bold">What's included</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {COURSE_INCLUDED.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-cloud">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sun/15 text-sun"><Check size={12} /></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass h-full rounded-3xl p-8">
              <h3 className="text-lg font-bold">Not included</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {COURSE_EXCLUDED.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-mist">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#0b2545]/[0.05] text-mist"><X size={12} /></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Extras price list */}
      <section className="container-x py-12">
        <SectionHeading eyebrow="Price List" title="Additional" accent="jump prices" sub="Day 1 is all-day classes; after that you jump when the weather allows. Budget for at least one re-jump on levels 4–7." />
        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-3xl glass">
            {COURSE_EXTRAS.map((e, i) => (
              <div
                key={e.item}
                className={`flex items-center justify-between gap-4 px-6 py-4 text-sm ${i % 2 ? "bg-[#0b2545]/[0.025]" : ""}`}
              >
                <span className="text-cloud">{e.item}</span>
                <span className="font-display font-bold text-sun">฿{e.price}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 text-sm text-mist">
            Contact our team on WhatsApp to confirm instructor availability and language support before booking the AFF or 'A' License course.
          </p>
        </Reveal>
      </section>
    </>
  );
}
