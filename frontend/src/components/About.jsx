import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, animate, useInView } from "framer-motion";
import Reveal from "@/components/Reveal";
import { chapters, metrics, profile } from "@/data/portfolioData";

function Counter({ to, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });

    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {val}
      <span className="text-neon">{suffix}</span>
    </span>
  );
}

export default function About() {
  const [active, setActive] = useState(0);
  const chapter = chapters[active];

  return (
    <section
      id="about"
      className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-neon mb-4">
            The Manifesto
          </p>

          <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl max-w-2xl leading-tight">
            Four chapters.{" "}
            <span className="text-slate-500">One obsession.</span>
          </h2>
        </Reveal>

        {/* Chapters */}
        <div className="mt-16 grid lg:grid-cols-12 gap-10">

          {/* Chapter Navigation */}
          <Reveal className="lg:col-span-4" delay={0.1}>
            <div className="lg:sticky lg:top-28 flex lg:flex-col gap-2 overflow-x-auto pb-2">
              {chapters.map((c, i) => (
                <button
                  key={c.id}
                  data-testid={c.testid}
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-4 rounded-xl border px-5 py-4 text-left transition-colors duration-300 whitespace-nowrap lg:whitespace-normal ${
                    active === i
                      ? "border-neon/50 bg-neon/5"
                      : "border-white/10 bg-white/[0.02] hover:border-white/25"
                  }`}
                >
                  <span
                    className={`font-display font-extrabold text-2xl transition-colors duration-300 ${
                      active === i
                        ? "text-neon"
                        : "text-slate-600 group-hover:text-slate-400"
                    }`}
                  >
                    {c.id}
                  </span>

                  <span
                    className={`font-mono text-xs tracking-[0.25em] uppercase transition-colors duration-300 ${
                      active === i ? "text-white" : "text-slate-500"
                    }`}
                  >
                    {c.title}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Chapter Content */}
          <div className="lg:col-span-8">

            <Reveal delay={0.15}>
              <div className="card-glass rounded-2xl min-h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={chapter.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="p-8 sm:p-12"
                  >
                    <div className="flex items-baseline gap-4 mb-6">
                      <span className="font-display font-extrabold text-6xl text-outline-neon leading-none">
                        {chapter.id}
                      </span>

                      <span className="font-mono text-xs tracking-[0.3em] uppercase text-slate-500">
                        / {chapter.title}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-6">
                      {chapter.heading}
                    </h3>

                    <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed max-w-2xl">
                      {chapter.body}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>

            {/* Metrics */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {metrics.map((m, i) => (
                <Reveal key={m.label} delay={0.1 + i * 0.08}>
                  <div
                    className="card-glass rounded-2xl p-5 text-center"
                    data-testid={`metric-${i}`}
                  >
                    <p className="font-display font-extrabold text-3xl sm:text-4xl">
                      <Counter to={m.value} suffix={m.suffix} />
                    </p>

                    <p className="mt-2 font-mono text-[10px] tracking-[0.2em] uppercase text-slate-500">
                      {m.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* LeetCode Section */}
        <Reveal delay={0.1} className="mt-16">
  <div className="card-glass rounded-2xl overflow-hidden grid md:grid-cols-5">

    {/* Previous Image */}
    <div className="md:col-span-2 relative h-64 md:h-auto">
      <img
        src={profile.portrait}
        alt="Developer at work"
        className="w-full h-full object-contain scale-120"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F0F14]/70 hidden md:block" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F14] to-transparent md:hidden" />
    </div>

    {/* LeetCode Content */}
    <div className="md:col-span-3 p-8 sm:p-12 flex flex-col justify-center">

      <p className="font-mono text-xs tracking-[0.3em] uppercase text-neon mb-4">
        LeetCode
      </p>

      <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
        Passionate about problem-solving and continuously improving my
        Data Structures and Algorithms skills through LeetCode. I enjoy
        solving challenging problems, exploring efficient approaches,
        and learning something new with every problem.
      </p>

      {/* Button */}
      <div className="mt-8">
        <a
          href="https://leetcode.com/u/Ishantpathak01/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-slate-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-yellow-500/10 hover:text-yellow-400"
        >
          <span className="text-lg">⚡</span>

          <span>Check My LeetCode</span>

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

    </div>
  </div>
</Reveal>

      </div>
    </section>
  );
}