import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, Clock, Send, CheckCircle2,
  Facebook, Instagram, Youtube, MessageCircle,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { PageHero } from "../components/ui";
import { CONTACT } from "../data/content";

const DETAILS = [
  { icon: Phone, label: "Call us", value: `${CONTACT.phone1} · ${CONTACT.phone2}`, href: `tel:${CONTACT.phone1Raw}` },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: MapPin, label: "Visit", value: CONTACT.address, href: CONTACT.maps },
  { icon: Clock, label: "Hours", value: CONTACT.hours },
];

const MESSAGING = [
  { icon: MessageCircle, label: "WhatsApp", href: CONTACT.whatsapp },
  { icon: MessageCircle, label: "Line", href: CONTACT.line },
  { icon: MessageCircle, label: "WeChat", href: CONTACT.wechat },
];

const SOCIAL = [
  { icon: Facebook, href: CONTACT.facebook, label: "Facebook" },
  { icon: Instagram, href: CONTACT.instagram, label: "Instagram" },
  { icon: Youtube, href: CONTACT.youtube, label: "YouTube" },
];

function Field({ label, type = "text", name, textarea, value, onChange }) {
  const base = "w-full rounded-2xl border border-[#0b2545]/[0.08] bg-[#0b2545]/[0.04] px-4 py-3 text-sm text-[#0b2545] placeholder-mist/50 outline-none transition-colors focus:border-sun/60 focus:bg-[#0b2545]/[0.05]";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold tracking-wide text-mist">{label}</span>
      {textarea ? (
        <textarea name={name} rows={5} value={value} onChange={onChange} className={base} placeholder="Tell us about your dream jump…" />
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} className={base} placeholder={label} />
      )}
    </label>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's fly"
        accent="together"
        sub="Start your adventure today. Send us an enquiry, give us a call, or message us on WhatsApp, Line or WeChat — we're here 7 days a week."
      />

      <section className="container-x pb-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <Reveal>
            <div className="glass-strong rounded-3xl p-8">
              <h2 className="text-xl font-bold">Message us today</h2>
              <p className="mt-1 text-sm text-mist">We'll get back to you as soon as possible.</p>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-gradient-to-b from-sun/15 to-transparent p-10 text-center ring-1 ring-sun/25"
                >
                  <CheckCircle2 className="text-sun" size={44} />
                  <h3 className="text-lg font-bold">Enquiry sent!</h3>
                  <p className="max-w-sm text-sm text-mist">
                    Thanks {form.name || "there"} — we've received your message and will be in touch shortly. Blue skies!
                  </p>
                  <button onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }); }} className="mt-2 text-sm font-semibold text-sun">
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name" name="name" value={form.name} onChange={onChange} />
                    <Field label="Phone" name="phone" value={form.phone} onChange={onChange} />
                  </div>
                  <Field label="Email" type="email" name="email" value={form.email} onChange={onChange} />
                  <Field label="Message" name="message" textarea value={form.message} onChange={onChange} />
                  <button type="submit" className="btn-sun inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm">
                    Send Enquiry <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Details */}
          <div className="space-y-4">
            {DETAILS.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.06}>
                <a
                  href={d.href}
                  target={d.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`lift glass flex items-start gap-4 rounded-2xl p-5 ${d.href ? "" : "pointer-events-none"}`}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-coral/20 to-sun/20 text-sun ring-1 ring-sun/20">
                    <d.icon size={19} />
                  </span>
                  <div>
                    <div className="text-xs font-semibold tracking-wide text-mist">{d.label}</div>
                    <div className="mt-0.5 text-sm text-cloud">{d.value}</div>
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="glass rounded-2xl p-5">
                <div className="text-xs font-semibold tracking-wide text-mist">Message us on</div>
                <div className="mt-3 flex flex-wrap gap-3">
                  {MESSAGING.map((m) => (
                    <a key={m.label} href={m.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-[#0b2545]/[0.08] bg-[#0b2545]/[0.04] px-4 py-2 text-sm transition-colors hover:border-sun/50 hover:text-sun">
                      <m.icon size={15} /> {m.label}
                    </a>
                  ))}
                </div>
                <div className="mt-5 text-xs font-semibold tracking-wide text-mist">Follow us</div>
                <div className="mt-3 flex gap-3">
                  {SOCIAL.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="grid h-10 w-10 place-items-center rounded-xl border border-[#0b2545]/[0.08] bg-[#0b2545]/[0.04] text-cloud transition-all hover:border-sun/50 hover:text-sun hover:-translate-y-0.5">
                      <s.icon size={17} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Map */}
        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-3xl border border-[#0b2545]/[0.08]">
            <iframe
              title="Thai Sky Adventures location"
              src="https://www.google.com/maps?q=Nong+Khor+Reservoir+Si+Racha+Chon+Buri&output=embed"
              className="h-[380px] w-full grayscale-[0.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
