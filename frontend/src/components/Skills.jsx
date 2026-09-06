import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { meters, skillGroups, marqueeItems } from "@/data/portfolioData";

function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative py-10 overflow-hidden border-y border-white/10" data-testid="skills-marquee-container">
      <div className="marquee-track flex whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className={`font-display font-extrabold text-4xl sm:text-6xl tracking-tighter px-6 ${i % 2 === 0 ? "text-outline" : "text-white"}`}>
              {item}
            </span>
            <span className="text-neon text-2xl sm:text-4xl px-2">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <Marquee />
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mt-24">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-neon mb-4">The Arsenal</p>
          <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl max-w-2xl leading-tight">
            Weapons of <span className="text-slate-500">mass production.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-12 gap-6">
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="card-glass rounded-2xl p-8 h-full">
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-slate-500 mb-8">Proficiency Meters</p>
              <div className="space-y-8">
                {meters.map((m, i) => (
                  <div key={m.label} data-testid={m.testid}>
                    <div className="flex justify-between items-baseline mb-3">
                      <span className="font-display font-semibold text-base sm:text-lg">{m.label}</span>
                      <span className="font-mono text-sm text-neon tabular-nums">{m.value}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${m.value}%` }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 1.4, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-neon/60 to-neon shadow-[0_0_12px_rgba(0,255,102,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-sm text-slate-500 font-light leading-relaxed">
                Numbers are vanity — shipping is sanity. These meters reflect production experience, not tutorial hours.
              </p>
            </div>
          </Reveal>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {skillGroups.map((g, i) => (
              <Reveal key={g.name} delay={0.12 + i * 0.07}>
                <div className="card-glass rounded-2xl p-7 h-full group" data-cursor="STACK">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-display font-bold text-lg">{g.name}</h3>
                    <span className="font-mono text-[10px] tracking-widest text-neon">0{i + 1}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-300 hover:border-neon/60 hover:text-neon"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
