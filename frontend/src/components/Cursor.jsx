import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [enabled] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches
  );
  const [label, setLabel] = useState(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 320, damping: 28, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 320, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target.closest?.("[data-cursor]");
      setLabel(t ? t.getAttribute("data-cursor") : null);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y }} />
      <motion.div className="cursor-ring" style={{ x: rx, y: ry }} data-hover={!!label}>
        {label && <span>{label}</span>}
      </motion.div>
    </>
  );
}
