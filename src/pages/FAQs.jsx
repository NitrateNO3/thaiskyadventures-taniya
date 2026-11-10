import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircle, LifeBuoy, Phone } from "lucide-react";
import Reveal from "../components/Reveal";
import { PageHero, BookButton } from "../components/ui";
import { FAQS, CONTACT } from "../data/content";

function Item({ n, q, a, open, onClick }) {
  return (
    <div
      className={`group overflow-hidden rounded-2xl border transition-colors duration-300 ${
        open ? "border-sun/40 bg-white shadow-lg shadow-sky-deep/10" : "border-[#0b2545]/[0.08] bg-white/70 hover:border-sun/30"
      }`}
    >
      <button onClick={onClick} className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6 sm:py-5">
        {/* number badge */}
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl font-display text-sm font-extrabold transition-all duration-300 ${
            open ? "bg-gradient-to-br from-coral to-sun text-white shadow-md shadow-sky-deep/30" : "bg-sun/12 text-sun"
          }`}
        >
          {String(n + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 font-display text-base font-semibold">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${open ? "bg-sun/15 text-sun" : "bg-[#0b2545]/[0.05] text-sky-deep"}`}
        >
          <Plus size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-4 px-5 pb-5 sm:px-6">
              <span className="ml-0 w-9 shrink-0" />
              <p className="border-l-2 border-sun/40 pl-4 text-sm leading-relaxed text-mist">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQs() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions?"
        accent="We've got answers"
        sub="Everything you need to know before you jump — from age and weight limits to weather, refunds and what to wear."
      />

      <section className="container-x pb-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.6fr]">
          {/* sticky help panel */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="relative overflow-hidden rounded-[1.75rem] p-8 text-white" style={{ background: "linear-gradient(150deg,#07233f,#0b4f86 55%,#0ea5e9)" }}>
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-300/20 blur-2xl" />
                <div className="relative">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15"><LifeBuoy size={22} /></span>
                  <h3 className="mt-5 text-xl font-bold">Still have a question?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sky-50/85">
                    Our team is happy to help — reach out and we'll get right back to you, 7 days a week.
                  </p>

                  <div className="mt-6 space-y-3">
                    <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold transition-colors hover:bg-white/20">
                      <MessageCircle size={16} /> Chat on WhatsApp
                    </a>
                    <a href={`tel:${CONTACT.phone1Raw}`} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold transition-colors hover:bg-white/20">
                      <Phone size={16} /> {CONTACT.phone1}
                    </a>
                  </div>

                  <div className="mt-6">
                    <BookButton className="w-full justify-center">Send an Enquiry</BookButton>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-5 flex items-center justify-between rounded-2xl border border-[#0b2545]/[0.08] bg-white/70 px-6 py-5">
                <span className="text-sm text-mist">Answers available</span>
                <span className="font-display text-2xl font-extrabold text-gradient-sun">{FAQS.length}+</span>
              </div>
            </Reveal>
          </div>

          {/* accordion list */}
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i, 8) * 0.03}>
                <Item n={i} q={f.q} a={f.a} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
