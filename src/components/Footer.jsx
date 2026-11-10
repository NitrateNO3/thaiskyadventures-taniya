import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, MessageCircle, ArrowRight } from "lucide-react";
import { CONTACT } from "../data/content";

const COLS = [
  {
    title: "Experiences",
    links: [
      { label: "Tandem Skydiving", to: "/tandem-skydiving" },
      { label: "Skydive Courses", to: "/courses" },
      { label: "Licensed Skydivers", to: "/licensed-skydivers" },
      { label: "Gallery", to: "/gallery" },
    ],
  },
  {
    title: "Plan Your Visit",
    links: [
      { label: "Travel Information", to: "/travel" },
      { label: "Accommodation", to: "/accommodation" },
      { label: "FAQs", to: "/faqs" },
      { label: "Articles", to: "/articles" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Terms & Conditions", to: "/contact" },
      { label: "Privacy Policy", to: "/contact" },
    ],
  },
];

const SOCIAL = [
  { icon: Facebook, href: CONTACT.facebook, label: "Facebook" },
  { icon: Instagram, href: CONTACT.instagram, label: "Instagram" },
  { icon: Youtube, href: CONTACT.youtube, label: "YouTube" },
  { icon: MessageCircle, href: CONTACT.whatsapp, label: "WhatsApp" },
];

function CtaCard() {
  const ref = useRef(null);
  // pointer position (px) for the spotlight
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  // normalized -0.5..0.5 for the 3D tilt
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const rotX = useSpring(useTransform(ny, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 16 });
  const rotY = useSpring(useTransform(nx, [-0.5, 0.5], [-9, 9]), { stiffness: 150, damping: 16 });
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgba(255,255,255,0.28), transparent 60%)`;

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
    nx.set((e.clientX - r.left) / r.width - 0.5);
    ny.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    nx.set(0);
    ny.set(0);
  };

  return (
    <div className="container-x relative z-10 -mt-16" style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
        className="group relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] p-[1.5px]"
      >
        {/* rotating gradient halo border */}
        <motion.div
          aria-hidden
          className="absolute inset-[-40%] -z-0"
          style={{ background: "conic-gradient(from 0deg, #0ea5e9, #22d3ee, #38bdf8, #0284c7, #0ea5e9)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />

        {/* inner card */}
        <div
          className="relative overflow-hidden rounded-[1.9rem] px-8 py-12 text-center sm:px-14 sm:py-14"
          style={{ background: "linear-gradient(135deg, #07233f 0%, #0b4f86 48%, #0ea5e9 120%)" }}
        >
          {/* floating ambient blobs */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-cyan-400/30 blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl"
            animate={{ x: [0, -24, 0], y: [0, -18, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* cursor spotlight */}
          <motion.div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: spotlight }} />
          {/* sparkles */}
          {[
            ["12%", "22%", 0], ["84%", "30%", 0.6], ["22%", "76%", 1.1], ["72%", "70%", 1.6], ["50%", "16%", 0.9],
          ].map(([l, t, d], i) => (
            <motion.span
              key={i}
              aria-hidden
              className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-white"
              style={{ left: l, top: t }}
              animate={{ opacity: [0, 1, 0], scale: [0.6, 1.3, 0.6] }}
              transition={{ duration: 2.6, delay: d, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          <div className="relative" style={{ transform: "translateZ(22px)" }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1 text-[11px] font-semibold tracking-[0.2em] text-white/90 backdrop-blur">
              ONLINE-ONLY RATES
            </span>
            <h3 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              Ready to{" "}
              <span className="bg-gradient-to-r from-white via-sky-100 to-cyan-200 bg-clip-text text-transparent">leap?</span>
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sky-50/80">
              Book online and save with our exclusive online-only rates. Your adventure of a lifetime is one jump away.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {/* primary — white pill with shine sweep */}
              <Link to="/contact" className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#07233f] shadow-xl shadow-sky-950/30 transition-transform duration-300 hover:scale-[1.04]">
                <span className="relative z-10">Book With Us Today</span>
                <ArrowRight size={17} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-sky-200/70 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
              </Link>
              {/* secondary — glass */}
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:scale-[1.04] hover:border-white/70 hover:bg-white/15"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-[#0b2545]/[0.06] bg-ink-2">
      <CtaCard />

      <div className="container-x relative z-10 grid gap-10 pt-16 pb-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-coral to-sun">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path d="M4 14C4 9.6 7.6 6 12 6s8 3.6 8 8" stroke="#140a04" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M12 6v10" stroke="#140a04" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M8 16l4 2.5L16 16" stroke="#140a04" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="leading-none">
              <div className="font-display text-[15px] font-extrabold">THAI SKY</div>
              <div className="text-[10px] font-semibold tracking-[0.3em] text-sun">ADVENTURES</div>
            </div>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
            Thailand's premier skydiving center near Pattaya — the highest tandem jumps in the country with scenic ocean views. Let's fly together.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-[#0b2545]/[0.08] bg-[#0b2545]/[0.04] text-cloud transition-all hover:border-sun/50 hover:text-sun hover:-translate-y-0.5"
              >
                <s.icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {COLS.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-semibold tracking-wide text-[#0b2545]">{col.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-mist transition-colors hover:text-sun">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="hairline container-x" />

      <div className="container-x relative z-10 grid gap-5 py-8 text-sm text-mist md:grid-cols-4">
        <div className="flex items-start gap-3">
          <MapPin size={17} className="mt-0.5 shrink-0 text-sun" />
          <span>{CONTACT.address}</span>
        </div>
        <div className="flex items-start gap-3">
          <Phone size={17} className="mt-0.5 shrink-0 text-sun" />
          <span>
            <a href={`tel:${CONTACT.phone1Raw}`} className="block hover:text-[#0b2545]">{CONTACT.phone1}</a>
            <a href="tel:+66826935198" className="block hover:text-[#0b2545]">{CONTACT.phone2}</a>
          </span>
        </div>
        <div className="flex items-start gap-3">
          <Mail size={17} className="mt-0.5 shrink-0 text-sun" />
          <a href={`mailto:${CONTACT.email}`} className="hover:text-[#0b2545]">{CONTACT.email}</a>
        </div>
        <div className="flex items-start gap-3">
          <Clock size={17} className="mt-0.5 shrink-0 text-sun" />
          <span>{CONTACT.hours}</span>
        </div>
      </div>

      <div className="border-t border-[#0b2545]/[0.06]">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-mist/70 sm:flex-row">
          <span>© {new Date().getFullYear()} Thai Sky Adventures. All rights reserved.</span>
          <span>USPA-certified · Open 7 days a week · Si Racha, Thailand</span>
        </div>
      </div>
    </footer>
  );
}
