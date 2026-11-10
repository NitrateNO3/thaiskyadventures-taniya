import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "../data/images";

export default function Gallery() {
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => setActive((i) => (i === null ? i : (i + 1) % GALLERY.length)), []);
  const prev = useCallback(() => setActive((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length)), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <>
      <section className="container-x relative pb-8 pt-28 sm:pt-32">
        {/* faint title watermark centered over the grid */}
        <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center text-center mix-blend-overlay">
          <span className="font-display text-xs font-bold tracking-[0.35em] text-white/80 sm:text-sm">
            GALLERY
          </span>
          <h1 className="mt-3 text-5xl font-extrabold leading-none text-white/80 sm:text-7xl md:text-8xl">
            Moments<br className="sm:hidden" /> from the sky
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setActive(i)}
              className="img-fallback aspect-square overflow-hidden rounded-xl border border-[#0b2545]/[0.08]"
            >
              <img
                src={item.src}
                alt="Thai Sky Adventures"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      {/* simple lightbox */}
      {active !== null && (
        <div
          onClick={close}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#04101f]/92 p-4 sm:p-8"
        >
          <button onClick={close} aria-label="Close" className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white">
            <X size={20} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous" className="absolute left-3 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white sm:left-6">
            <ChevronLeft size={24} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next" className="absolute right-3 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white sm:right-6">
            <ChevronRight size={24} />
          </button>
          <img
            src={GALLERY[active].src}
            alt="Thai Sky Adventures"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-5xl rounded-xl object-contain"
          />
        </div>
      )}
    </>
  );
}
