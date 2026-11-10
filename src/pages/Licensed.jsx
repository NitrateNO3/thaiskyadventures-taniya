import { Check, ShieldCheck, MapPin, Wrench, FileText } from "lucide-react";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import { PageHero, SectionHeading, BookButton, GhostButton } from "../components/ui";
import { IMG } from "../data/images";
import { LICENSED_PRICES, LICENSED_RULES } from "../data/content";

export default function Licensed() {
  return (
    <>
      <PageHero
        eyebrow="Licensed Skydivers"
        title="Fun jumps for"
        accent="qualified flyers"
        sub="No reservations needed — just arrive with your license, logbook and equipment. Hop & pops, fun jumps and gear rental at a world-class drop zone near Pattaya."
      >
        <BookButton>Book With Us Today</BookButton>
        <GhostButton to="/contact">Get In Touch</GhostButton>
      </PageHero>

      {/* Prices */}
      <section className="container-x py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Pricelist" title="Experienced skydiver" accent="prices" />
            <Reveal delay={0.1}>
              <div className="mt-8 overflow-hidden rounded-3xl glass">
                {LICENSED_PRICES.map((e, i) => (
                  <div key={e.item} className={`flex items-center justify-between gap-4 px-6 py-3.5 text-sm ${i % 2 ? "bg-[#0b2545]/[0.025]" : ""}`}>
                    <span className="text-cloud">{e.item}</span>
                    <span className="font-display font-bold text-sun">฿{e.price}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-[#0b2545]/[0.08]">
                <SmartImage src={IMG.formation} alt="Formation skydiving" className="aspect-[4/3] w-full" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 glass rounded-3xl p-6">
                <div className="flex items-center gap-2 text-sun"><Wrench size={18} /><h4 className="font-bold text-[#0b2545]">Equipment & gear rental</h4></div>
                <ul className="mt-4 space-y-2 text-sm text-mist">
                  <li>• Rental rigs from 135 to 280 sq ft (freefly not permitted on rental gear).</li>
                  <li>• Main canopy lines replaced every 250–450 jumps depending on type.</li>
                  <li>• Gear rental priority goes to AFF and 'A' License students.</li>
                  <li>• Reserves must be in date and packed by a certified rigger.</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="container-x py-12">
        <SectionHeading center eyebrow="Drop Zone Rules" title="Requirements &" accent="safety" />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {LICENSED_RULES.map((r, i) => (
            <Reveal key={r} delay={(i % 2) * 0.06}>
              <div className="flex items-start gap-3 rounded-2xl glass p-5">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sun/15 text-sun"><Check size={14} /></span>
                <span className="text-sm text-cloud">{r}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Location + insurance */}
      <section className="container-x py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="glass h-full rounded-3xl p-7">
              <MapPin className="text-sun" size={22} />
              <h4 className="mt-4 font-bold">Location</h4>
              <p className="mt-2 text-sm text-mist">At Nong Khor Reservoir — 96 km south of Suvarnabhumi Airport and 42 km north of Pattaya.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="glass h-full rounded-3xl p-7">
              <ShieldCheck className="text-sun" size={22} />
              <h4 className="mt-4 font-bold">Insurance</h4>
              <p className="mt-2 text-sm text-mist">We carry third-party liability covering all jumpers. Personal accident is not covered.</p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="glass h-full rounded-3xl p-7">
              <FileText className="text-sun" size={22} />
              <h4 className="mt-4 font-bold">Documents</h4>
              <p className="mt-2 text-sm text-mist">Away from home? A friend can send scans of your last three jumps and both sides of your license.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
