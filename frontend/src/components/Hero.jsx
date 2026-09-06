import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolioData";

const EASE = [0.22, 1, 0.36, 1];

function MaskedLine({ children, delay }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className="block"
        initial={{ y: "115%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onTilt = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      rx: -py * 14,
      ry: px * 16,
    });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (el && window.__lenis) {
      window.__lenis.scrollTo(el, {
        offset: -60,
      });
    } else {
      el?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6 sm:px-10 lg:px-16"
    >
      {/* ================= LOGO ================= */}
      <motion.button
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        onClick={() => scrollTo("hero")}
        aria-label="Go to home"
        className="
          fixed
          top-5
          left-6
          sm:left-8
          lg:left-10
          z-50
          group
        "
      >
        <div
          className="
            w-12 h-12
            rounded-xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            flex items-center justify-center
            transition-all duration-300
            group-hover:border-neon/60
            group-hover:bg-neon/10
            group-hover:shadow-[0_0_25px_rgba(0,255,102,0.3)]
          "
        >
          <span
            className="
              font-display
              font-extrabold
              text-lg
              text-neon
              transition-transform
              duration-300
              group-hover:scale-110
            "
          >
            IP
          </span>
        </div>
      </motion.button>

      {/* ================= HERO CONTENT ================= */}
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-7">
          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: EASE,
            }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-neon/30
              bg-neon/5
              px-4
              py-1.5
              mb-8
            "
            data-testid="hero-status-badge"
          >
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-neon" />

            <span
              className="
                font-mono
                text-[11px]
                tracking-[0.2em]
                uppercase
                text-neon
              "
            >
              {profile.availability}
            </span>
          </motion.div>

          {/* Heading */}
          <h1
            className="
              font-display
              font-extrabold
              tracking-tighter
              leading-[0.92]
              text-5xl
              sm:text-7xl
              lg:text-8xl
            "
            data-testid="hero-title"
          >
            <MaskedLine delay={0.3}>
              CREATIVE
            </MaskedLine>

            <MaskedLine delay={0.42}>
              <span className="text-outline-neon">
                DEVELOPER
              </span>
            </MaskedLine>

            <MaskedLine delay={0.54}>
              <span className="text-slate-500">
                &
              </span>{" "}
              ENGINEER
            </MaskedLine>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: EASE,
            }}
            className="
              mt-8
              max-w-xl
              text-base
              sm:text-lg
              text-slate-400
              font-light
              leading-relaxed
            "
          >
            {profile.tagline}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.95,
              ease: EASE,
            }}
            className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-4
            "
          >
            {/* Projects */}
            <button
              onClick={() => scrollTo("projects")}
              data-testid="hero-cta-primary"
              data-cursor="VIEW"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-neon
                px-7
                py-3.5
                font-semibold
                text-[#070709]
                transition-shadow
                duration-300
                hover:shadow-[0_0_30px_rgba(0,255,102,0.55)]
              "
            >
              View Selected Work

              <ArrowDownRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:translate-y-1
                "
              />
            </button>

            {/* Contact */}
            <button
              onClick={() => scrollTo("contact")}
              data-testid="hero-cta-secondary"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white/5
                border
                border-white/15
                px-7
                py-3.5
                font-semibold
                text-white
                transition-colors
                duration-300
                hover:bg-white/10
                hover:border-neon/50
              "
            >
              <Sparkles
                size={16}
                className="text-neon"
              />

              Get in Touch
            </button>
          </motion.div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.1,
            delay: 0.6,
            ease: EASE,
          }}
          className="lg:col-span-5 hidden lg:block"
          style={{
            perspective: 1000,
          }}
        >
          <div
            ref={cardRef}
            onMouseMove={onTilt}
            onMouseLeave={() =>
              setTilt({
                rx: 0,
                ry: 0,
              })
            }
            className="float-y relative"
            data-testid="hero-tilt-card"
            data-cursor="PLAY"
            style={{
              transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              transformStyle: "preserve-3d",
              transition: "transform 0.15s ease-out",
            }}
          >
            {/* Main Card */}
            <div className="card-glass rounded-3xl p-3">
              <div
                className="
                  relative
                  rounded-2xl
                  overflow-hidden
                  aspect-[4/5]
                "
              >
                <img
                  src={profile.heroImage}
                  alt="Abstract 3D artwork"
                  className="
                    w-full
                    h-full
                    object-cover
                    object-[50%_15%]
                  "
                />

                {/* Gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#070709]/90
                    via-transparent
                    to-transparent
                  "
                />

                {/* Grid */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-30
                    mix-blend-overlay
                  "
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,255,102,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,102,.35) 1px, transparent 1px)",
                    backgroundSize: "40px 34px",
                  }}
                />

                {/* Bottom Text */}
                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    right-4
                    flex
                    items-end
                    justify-between
                  "
                >
                  <div>
                    <p
                      className="
                        font-mono
                        text-[10px]
                        tracking-[0.25em]
                        text-neon
                        uppercase
                      "
                    >
                      Signal / 001
                    </p>

                    <p
                      className="
                        font-display
                        font-bold
                        text-lg
                        leading-tight
                      "
                    >
                      Dimensional
                      <br />
                      Interfaces
                    </p>
                  </div>

                  <span
                    className="
                      font-mono
                      text-[10px]
                      text-slate-400
                    "
                  >
                    EST. 2019
                  </span>
                </div>
              </div>
            </div>

            {/* Frame Budget */}
            <div
              className="
                absolute
                -top-4
                -right-4
                card-glass
                rounded-xl
                px-4
                py-3
                backdrop-blur-xl
              "
              style={{
                transform: "translateZ(50px)",
              }}
            >
              <p
                className="
                  font-mono
                  text-[10px]
                  tracking-widest
                  text-slate-400
                  uppercase
                "
              >
                Frame budget
              </p>

              <p
                className="
                  font-display
                  font-extrabold
                  text-2xl
                  text-neon
                  leading-none
                  mt-1
                "
              >
                16.6ms
              </p>
            </div>

            {/* Render */}
            <div
              className="
                absolute
                -bottom-5
                -left-5
                card-glass
                rounded-xl
                px-4
                py-3
                backdrop-blur-xl
              "
              style={{
                transform: "translateZ(40px)",
              }}
            >
              <p
                className="
                  font-mono
                  text-[10px]
                  tracking-widest
                  text-slate-400
                  uppercase
                "
              >
                Render
              </p>

              <p
                className="
                  font-display
                  font-extrabold
                  text-2xl
                  leading-none
                  mt-1
                "
              >
                60
                <span className="text-neon text-base">
                  fps
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.6,
          duration: 1,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          gap-2
        "
      >
        <span
          className="
            font-mono
            text-[10px]
            tracking-[0.3em]
            text-slate-500
            uppercase
          "
        >
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            w-px
            h-10
            bg-gradient-to-b
            from-neon
            to-transparent
          "
        />
      </motion.div>
    </section>
  );
}