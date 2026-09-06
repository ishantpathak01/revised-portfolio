import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Check, Copy, Send } from "lucide-react";
import Reveal from "@/components/Reveal";
import Terminal from "@/components/Terminal";
import { profile, socials } from "@/data/portfolioData";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Copy failed — select the email manually");
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Signal received. I'll reply within 24 hours.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Transmission failed — try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  const inputCls =
    "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-colors duration-300 focus:border-neon focus:ring-1 focus:ring-neon";

  return (
    <section id="contact" className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-neon mb-4">Open Channel</p>
          <h2 className="font-display font-extrabold tracking-tighter text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
            LET'S BUILD<br />
            <span className="text-outline-neon">SOMETHING</span><br />
            UNREASONABLE.
          </h2>
          <p className="mt-8 max-w-md text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            Have a product that deserves more than a template? A wild idea nobody else will touch?
            My inbox is open — briefs, braindumps, and napkin sketches all welcome.
          </p>

          <button
            onClick={copyEmail}
            data-testid="contact-copy-email"
            data-cursor="COPY"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm text-slate-300 transition-colors duration-300 hover:border-neon/60 hover:text-neon"
          >
            {profile.email}
            {copied ? <Check size={15} className="text-neon" /> : <Copy size={15} />}
          </button>

         <div className="mt-10 flex flex-wrap gap-3">
  {socials.map((s) => (
    <a
      key={s.key}
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={`social-${s.key.toLowerCase()}`}
      aria-label={s.label}
      className="inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 px-5 py-3 font-mono text-xs tracking-wider text-slate-300 whitespace-nowrap transition-all duration-300 hover:text-neon hover:border-neon hover:bg-neon/5"
    >
      {s.key}
    </a>
  ))}
</div>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={0.1}>
            <form onSubmit={submit} className="card-glass rounded-2xl p-7 sm:p-8 space-y-4" data-testid="contact-form">
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-slate-500 mb-2">Direct Inquiry</p>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                data-testid="contact-input-name"
                className={inputCls}
              />
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                data-testid="contact-input-email"
                className={inputCls}
              />
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the mission…"
                data-testid="contact-input-message"
                className={`${inputCls} resize-none`}
              />
              <button
                type="submit"
                disabled={sending}
                data-testid="contact-submit-button"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-neon px-6 py-3.5 font-semibold text-[#070709] transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(0,255,102,0.55)] disabled:opacity-60"
              >
                {sending ? "Transmitting…" : "Send Signal"}
                <Send size={16} />
              </button>
            </form>
          </Reveal>
          <Reveal delay={0.18}>
            <Terminal />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
