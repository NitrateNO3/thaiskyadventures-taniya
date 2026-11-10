import { ShieldCheck, Mountain, Award, Users, Plane, Heart } from "lucide-react";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import StatCounter from "../components/StatCounter";
import { PageHero, SectionHeading, BookButton, GhostButton } from "../components/ui";
import { IMG } from "../data/images";
import { STATS } from "../data/content";

const VALUES = [
  { icon: ShieldCheck, title: "Safety First", text: "We follow USPA guidelines and are regularly inspected by the Thai Aviation Authority. Every jump is backed by rigorous standards." },
  { icon: Mountain, title: "Scenic Views", text: "Jumps offer breathtaking views of Thailand's coastline, landscapes and turquoise waters over the Gulf of Thailand." },
  { icon: Award, title: "Expert Instructors", text: "Certified professionals lead every tandem jump and handle everything from exit to canopy — so you can simply enjoy the ride." },
  { icon: Users, title: "Welcoming to All", text: "A professional but genuinely welcoming atmosphere. No prior skydiving experience required to make your first jump." },
];

export default function About() {
  return (
    <>
      <PageHero
        scrollCue
        eyebrow="About Us"
        title="Your premier skydiving destination in"
        accent="Southeast Asia"
        sub="Based in Si Racha, Thailand, Thai Sky Adventures was founded by international experts with over 40 years of combined skydiving experience — a team of USPA-certified instructors and commercial pilots."
      >
        <BookButton>Book With Us</BookButton>
        <GhostButton to="/tandem-skydiving">See Tandem Jumps</GhostButton>
      </PageHero>

      <section className="container-x py-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-[#0b2545]/[0.08]">
              <SmartImage src={IMG.about} alt="Thai Sky Adventures drop zone" className="aspect-[4/3] w-full" />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Our Story" title="Built by skydivers," accent="for everyone" sub="We bring together decades of international expertise to deliver the highest, most scenic jumps in Thailand. Whether it's your first tandem or your journey to a full license, our mission is simple." />
            <Reveal delay={0.15}>
              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-coral/15 to-sun/10 p-5 ring-1 ring-sun/20">
                <Heart className="text-sun" size={22} />
                <p className="font-display text-xl font-bold">
                  Let's Fly <span className="text-gradient-sun">Together</span>
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-mist">
                <span className="flex items-center gap-2"><Plane size={16} className="text-sun" /> Up to 13,000 ft</span>
                <span className="flex items-center gap-2"><Award size={16} className="text-sun" /> USPA-certified</span>
                <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-sun" /> Aviation-inspected</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x py-12">
        <div className="glass-strong grid grid-cols-2 gap-8 rounded-3xl p-10 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <StatCounter {...s} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-12">
        <SectionHeading center eyebrow="Why Choose Us" title="What sets us" accent="apart" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="lift glass h-full rounded-3xl p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-coral/20 to-sun/20 text-sun ring-1 ring-sun/20">
                  <v.icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
