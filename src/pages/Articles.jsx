import { ArrowRight, Calendar, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import { Eyebrow } from "../components/ui";
import { IMG } from "../data/images";
import { ARTICLES } from "../data/content";

export default function Articles() {
  const [feature, ...rest] = ARTICLES;

  return (
    <>
      {/* ---------- Masthead ---------- */}
      <section className="container-x pt-36 pb-10 sm:pt-40">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>The Journal</Eyebrow>
            <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              Stories from <br />
              <span className="text-gradient-sun">the sky</span>
            </h1>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-mist sm:text-right">
            Guides, safety tips and community news — everything you need to plan the skydive of a lifetime in Thailand.
          </p>
        </div>
        <div className="hairline mt-10" />
      </section>

      {/* ---------- Featured cover ---------- */}
      <section className="container-x pb-12">
        <Reveal>
          <article className="group relative overflow-hidden rounded-[2rem]">
            <div className="relative h-[460px] sm:h-[560px]">
              <SmartImage src={IMG.gallery[0]} alt={feature.title} className="h-full w-full" imgClass="transition-transform duration-[1100ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04101f] via-[#04101f]/55 to-[#04101f]/10" />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-12">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-gradient-to-r from-coral to-sun px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">Featured</span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">{feature.tag}</span>
              </div>
              <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-[1.05] text-white sm:text-5xl">
                {feature.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">{feature.excerpt}</p>
              <div className="mt-6 flex items-center gap-5 text-sm text-white/80">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {feature.date}</span>
                <span className="inline-flex items-center gap-2 font-bold text-white">
                  Read story
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#04101f] transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight size={15} />
                  </span>
                </span>
              </div>
            </div>
          </article>
        </Reveal>
      </section>

      {/* ---------- Editorial grid ---------- */}
      <section className="container-x pb-10">
        <div className="mb-8 flex items-center gap-4">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.3em] text-sky-deep/70">Latest</h3>
          <span className="h-px flex-1 bg-[#0b2545]/10" />
        </div>

        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <article className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl">
                  <SmartImage src={IMG.gallery[(i + 1) % IMG.gallery.length]} alt={p.title} className="aspect-[4/3] w-full" imgClass="transition-transform duration-[900ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04101f]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {/* index number */}
                  <span className="absolute left-4 top-3 font-display text-5xl font-extrabold text-white/80 drop-shadow-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* hover arrow */}
                  <span className="absolute right-4 top-4 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-white text-[#04101f] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                <div className="mt-4">
                  <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-sun">
                    {p.tag}
                    <span className="font-normal normal-case tracking-normal text-mist/70">· {p.date}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold leading-snug transition-colors group-hover:text-sky-deep">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{p.excerpt}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
