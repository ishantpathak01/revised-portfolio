import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/portfolioData";

const COMMANDS = {
  help: "Available commands: about, skills, projects, contact, email, clear",
  about: `${profile.name} — ${profile.role}. ${profile.tagline}`,
  skills: "React · TypeScript · Three.js · GLSL · Node · FastAPI · Docker · K8s",
  projects: "Nebula Protocol (Web3) · Gridrunner (Creative Tech) · Mono/Chrome (AI/SaaS) · Darkframe Studio",
  contact: `${profile.email} · ${profile.location} · ${profile.availability}`,
  email: profile.email,
};

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: "out", text: "alex@portfolio — interactive shell v2.6.0" },
    { type: "out", text: "Type 'help' to list available commands." },
  ]);
  const [input, setInput] = useState("");
  const bodyRef = useRef(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [history]);

  const submit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") {
      setHistory([]);
    } else {
      const out = COMMANDS[cmd] || `command not found: ${cmd} — try 'help'`;
      setHistory((h) => [...h, { type: "in", text: cmd }, { type: "out", text: out }]);
    }
    setInput("");
  };

  return (
    <div className="card-glass rounded-2xl overflow-hidden" data-testid="terminal-cli-container">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
        <span className="w-3 h-3 rounded-full bg-[#FF0055]/80" />
        <span className="w-3 h-3 rounded-full bg-[#FFB800]/80" />
        <span className="w-3 h-3 rounded-full bg-neon/80" />
        <span className="ml-3 font-mono text-[11px] text-slate-500">alex@portfolio:~</span>
      </div>
      <div ref={bodyRef} className="h-48 overflow-y-auto px-4 py-3 font-mono text-xs leading-relaxed">
        {history.map((line, i) =>
          line.type === "in" ? (
            <p key={i} className="text-slate-300">
              <span className="text-neon">➜</span> <span className="text-cyan2">~</span> {line.text}
            </p>
          ) : (
            <p key={i} className="text-slate-500">{line.text}</p>
          )
        )}
      </div>
      <form onSubmit={submit} className="flex items-center gap-2 px-4 py-3 border-t border-white/10">
        <span className="font-mono text-xs text-neon">➜</span>
        <span className="font-mono text-xs text-cyan2">~</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          data-testid="terminal-input"
          placeholder="type a command…"
          className="flex-1 bg-transparent font-mono text-xs text-white placeholder:text-slate-600 outline-none"
          spellCheck={false}
          autoComplete="off"
        />
      </form>
    </div>
  );
}
