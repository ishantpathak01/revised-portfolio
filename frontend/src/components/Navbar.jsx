import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { navLinks, profile } from "@/data/portfolioData";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  // UTC Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "UTC",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Cleanup audio
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.close();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (playing) {
      audioRef.current?.close();
      audioRef.current = null;
      setPlaying(false);
      return;
    }

    const AudioContext =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContext) return;

    const ctx = new AudioContext();

    const gain = ctx.createGain();
    gain.gain.value = 0.035;

    const oscA = ctx.createOscillator();
    oscA.type = "sine";
    oscA.frequency.value = 55;

    const oscB = ctx.createOscillator();
    oscB.type = "sine";
    oscB.frequency.value = 110.3;

    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.12;

    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.02;

    lfo.connect(lfoGain);
    lfoGain.connect(gain.gain);

    oscA.connect(gain);
    oscB.connect(gain);

    gain.connect(ctx.destination);

    oscA.start();
    oscB.start();
    lfo.start();

    audioRef.current = ctx;
    setPlaying(true);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (!el) return;

    if (window.__lenis) {
      window.__lenis.scrollTo(el, {
        offset: -80,
      });
    } else {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        fixed
        top-4
        left-1/2
        -translate-x-1/2
        z-50
        w-[calc(100%-1.5rem)]
        max-w-6xl
      "
      data-testid="navbar"
    >
      <nav
        className="
          flex
          items-center
          justify-between
          gap-4
          rounded-full
          border border-white/10
          bg-black/60
          backdrop-blur-xl
          px-4
          sm:px-6
          lg:px-7
          py-3
          overflow-hidden
        "
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 shrink-0 whitespace-nowrap"
          data-testid="nav-logo"
          data-cursor="TOP"
        >
          <span className="pulse-dot inline-block w-2 h-2 rounded-full bg-neon" />

          <span className="font-display font-bold tracking-tight text-sm sm:text-base">
            {profile.firstName}
            <span className="text-neon">.</span>
          </span>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-0.5 lg:gap-1 flex-1 min-w-0">
          {navLinks.map((l) => (
            <button
              key={l.id}
              data-testid={l.testid}
              onClick={() => scrollTo(l.id)}
              className="
                px-2
                lg:px-3
                py-1.5
                text-[10px]
                lg:text-xs
                font-mono
                uppercase
                tracking-wider
                lg:tracking-widest
                text-slate-400
                hover:text-neon
                transition-colors
                duration-300
                whitespace-nowrap
              "
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 lg:gap-3 shrink-0">
          <span
            className="
              hidden
              sm:block
              font-mono
              text-[10px]
              lg:text-xs
              text-slate-500
              tabular-nums
              whitespace-nowrap
            "
            data-testid="nav-clock"
          >
            {time} UTC
          </span>

          <button
            onClick={toggleAudio}
            data-testid="nav-audio-toggle"
            aria-label="Toggle ambient sound"
            className="
              w-9
              h-9
              shrink-0
              rounded-full
              bg-white/5
              border border-white/10
              flex
              items-center
              justify-center
              text-slate-300
              hover:text-neon
              hover:border-neon
              transition-colors
              duration-300
            "
          >
            {playing ? (
              <Volume2 size={15} />
            ) : (
              <VolumeX size={15} />
            )}
          </button>
        </div>
      </nav>
    </motion.header>
  );
}