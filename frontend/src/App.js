import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import "@/App.css";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { profile } from "@/data/portfolioData";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="App relative min-h-screen bg-[#070709] text-slate-100">
      <BackgroundCanvas />
      <div className="grain" />
      <Cursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <footer className="border-t border-white/10 py-10 px-6 text-center">
          <p className="font-mono text-xs text-slate-600 tracking-widest uppercase">
            © 2026 {profile.name} — Built at 60fps, or not at all
          </p>
        </footer>
      </main>
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0F0F14",
            border: "1px solid rgba(0,255,102,0.35)",
            color: "#F1F5F9",
          },
        }}
      />
    </div>
  );
}

export default App;
