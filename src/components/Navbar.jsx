import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { CONTACT } from "../data/content";
import { BookButton } from "./ui";

const PRIMARY = [
  { label: "About", to: "/about" },
  { label: "Tandem", to: "/tandem-skydiving" },
  { label: "Courses", to: "/courses" },
  { label: "Licensed", to: "/licensed-skydivers" },
  { label: "Gallery", to: "/gallery" },
];
const MORE = [
  { label: "Travel Information", to: "/travel" },
  { label: "Accommodation", to: "/accommodation" },
  { label: "FAQs", to: "/faqs" },
  { label: "Articles", to: "/articles" },
];
const ALL = [{ label: "Home", to: "/" }, ...PRIMARY, ...MORE, { label: "Contact", to: "/contact" }];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-coral to-sun shadow-lg shadow-coral/30">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path d="M4 14C4 9.6 7.6 6 12 6s8 3.6 8 8" stroke="#140a04" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M12 6v10" stroke="#140a04" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M8 16l4 2.5L16 16" stroke="#140a04" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <div className="leading-none">
        <div className="font-display text-[15px] font-extrabold tracking-tight">THAI SKY</div>
        <div className="text-[10px] font-semibold tracking-[0.3em] text-sun">ADVENTURES</div>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors hover:text-[#0b2545] ${
      isActive ? "text-[#0b2545]" : "text-cloud/80"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong border-b border-[#0b2545]/[0.06] py-3" : "py-5"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
            <NavLink to="/" end className={linkClass}>
    {({ isActive }) => (
      <>
        Home
        {isActive && (
          <motion.span
            layoutId="nav-underline"
            className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-coral to-sun"
          />
        )}
      </>
    )}
  </NavLink>


          {PRIMARY.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-coral to-sun"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-cloud/80 transition-colors hover:text-[#0b2545]">
              More <ChevronDown size={15} className={`transition-transform ${moreOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="glass-strong absolute right-0 top-full mt-3 w-52 overflow-hidden rounded-2xl p-2"
                >
                  {MORE.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className="block rounded-xl px-4 py-2.5 text-sm text-cloud/90 transition-colors hover:bg-[#0b2545]/[0.04] hover:text-[#0b2545]"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${CONTACT.phone1Raw}`}
            className="flex items-center gap-2 text-sm font-medium text-cloud/80 transition-colors hover:text-[#0b2545]"
          >
            <Phone size={15} className="text-sun" />
            {CONTACT.phone1}
          </a>
          <BookButton className="px-5 py-2.5">Book Now</BookButton>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-[#0b2545]/[0.08] bg-[#0b2545]/[0.04] lg:hidden"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-strong overflow-hidden lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-5">
              {ALL.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-base font-medium ${
                        isActive ? "bg-[#0b2545]/[0.04] text-[#0b2545]" : "text-cloud/80"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <div className="mt-3 flex flex-col gap-3 px-1">
                <a href={`tel:${CONTACT.phone1Raw}`} className="flex items-center gap-2 px-4 text-sm text-cloud/80">
                  <Phone size={15} className="text-sun" /> {CONTACT.phone1}
                </a>
                <BookButton>Book With Us</BookButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
