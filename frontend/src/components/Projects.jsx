import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";
import { projects, projectFilters } from "@/data/portfolioData";

function ProjectCard({ p, index, onOpen }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();

    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;

    setTilt({
      rx: -py * 7,
      ry: px * 8,
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      data-testid={p.testid}
      className={`group ${
        index % 2 === 1 ? "lg:mt-16" : ""
      }`}
      style={{ perspective: 900 }}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
        onClick={() => onOpen(p)}
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transition: "transform 0.2s ease-out",
        }}
        className="card-glass rounded-2xl overflow-hidden cursor-pointer"
        data-cursor="VIEW"
      >
        {/* ================= IMAGE ================= */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#0F0F14]">
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F14] via-transparent to-transparent pointer-events-none" />

          {/* Category */}
          <span className="absolute top-4 left-4 rounded-full border border-white/15 bg-black/50 backdrop-blur-md px-3 py-1 font-mono text-[10px] tracking-[0.2em] uppercase text-slate-300">
            {p.category}
          </span>

          {/* Year */}
          <span className="absolute top-4 right-4 font-mono text-[10px] tracking-widest text-slate-400">
            {p.year}
          </span>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-5">
            
            {/* LEFT SIDE */}
            <div className="min-w-0 flex-1">
              <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight group-hover:text-neon transition-colors duration-300">
                {p.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500 font-light line-clamp-2">
                {p.description}
              </p>
            </div>

            {/* RIGHT SIDE BUTTONS */}
            <div
              className="shrink-0 flex items-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* LIVE BUTTON */}
              {p.link && p.link !== "#" && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-neon/40 bg-neon/10 px-4 py-2 text-xs font-semibold text-neon transition-all duration-300 hover:bg-neon hover:text-[#070709] hover:border-neon hover:shadow-[0_0_20px_rgba(0,255,102,0.35)]"
                >
                  Live
                  <ExternalLink size={13} />
                </a>
              )}

              {/* ARROW BUTTON */}
              <button
                onClick={() => onOpen(p)}
                aria-label={`View ${p.title}`}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-slate-400 transition-all duration-300 hover:bg-neon hover:text-[#070709] hover:border-neon"
              >
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(null);

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-neon mb-4">
            Selected Work
          </p>

          <div className="flex flex-wrap items-end justify-between gap-8">
            <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl max-w-xl leading-tight">
              Proof, not{" "}
              <span className="text-slate-500">promises.</span>
            </h2>

            {/* ================= FILTERS ================= */}
            <div
              className="flex flex-wrap gap-2"
              data-testid="project-filters"
            >
              {projectFilters.map((f) => (
                <button
                  key={f}
                  data-testid={`skills-filter-${
                    f === "All"
                      ? "all"
                      : f.toLowerCase().replace(/[^a-z]/g, "-")
                  }`}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-4 py-2 font-mono text-xs tracking-widest uppercase transition-colors duration-300 border ${
                    filter === f
                      ? "bg-neon text-[#070709] border-neon font-bold"
                      : "border-white/15 text-slate-400 hover:border-neon/50 hover:text-neon"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ================= PROJECT GRID ================= */}
        <motion.div
          layout
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <ProjectCard
                key={p.id}
                p={p}
                index={i}
                onOpen={setOpen}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ================================================= */}
      {/* ================= PROJECT MODAL ================= */}
      {/* ================================================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 bg-black/70 backdrop-blur-md"
            onClick={() => setOpen(null)}
            data-testid="project-modal"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 40,
                scale: 0.97,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="card-glass rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
            >
              {/* MODAL IMAGE */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#0F0F14]">
                <img
                  src={open.image}
                  alt={open.title}
                  className="w-full h-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F14] via-transparent to-transparent pointer-events-none" />

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setOpen(null)}
                  data-testid="project-modal-close"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-white hover:text-neon hover:border-neon transition-colors duration-300"
                >
                  <X size={18} />
                </button>
              </div>

              {/* MODAL CONTENT */}
              <div className="p-8 sm:p-10">

                {/* CATEGORY + YEAR */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="rounded-full border border-neon/40 bg-neon/10 px-3 py-1 font-mono text-[10px] tracking-[0.2em] uppercase text-neon">
                    {open.category}
                  </span>

                  <span className="font-mono text-xs text-slate-500">
                    {open.year}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
                  {open.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-5 text-base text-slate-400 font-light leading-relaxed">
                  {open.description}
                </p>

                {/* TAGS */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {open.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* MODAL LIVE BUTTON */}
                {open.link && open.link !== "#" && (
                  <a
                    href={open.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="project-modal-live-link"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 font-semibold text-[#070709] transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(0,255,102,0.55)]"
                  >
                    Visit Live Project
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}