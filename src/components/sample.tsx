"use client";
import { useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useMotionValueEvent,
  useTransform,
  useScroll,
  useSpring,
  useInView,
  AnimatePresence,
  stagger,
  useAnimate,
} from "motion/react";

// ─── Shared helpers ───────────────────────────────────────────────────────────
const Section = ({ title, tag, color, children }: any) => (
  <div className="mb-12">
    <div className="mb-5 flex items-center gap-3">
      <span
        className={`rounded-full px-3 py-1 text-xs font-bold tracking-widest uppercase ${color}`}
      >
        {tag}
      </span>
      <h2 className="text-xl font-bold text-white">{title}</h2>
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  </div>
);

const Card = ({ title, desc, children, code }: any) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-1 text-xs text-zinc-500">{desc}</p>
      </div>
      <div className="flex min-h-[100px] items-center justify-center rounded-xl bg-zinc-950">
        {children}
      </div>
      <button
        onClick={() => setShow((s) => !s)}
        className="text-left text-xs text-zinc-500 transition-colors hover:text-zinc-300"
      >
        {show ? "▲ hide code" : "▼ show code"}
      </button>
      {show && (
        <pre className="overflow-x-auto rounded-lg bg-black p-3 text-xs whitespace-pre-wrap text-emerald-400">
          {code}
        </pre>
      )}
    </div>
  );
};

// ─── 1. Basic animate ─────────────────────────────────────────────────────────
const BasicAnimate = () => {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      animate={{ rotate: flipped ? 180 : 0, scale: flipped ? 1.2 : 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      onClick={() => setFlipped((f) => !f)}
      className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-xl bg-violet-500 text-2xl"
    >
      🎲
    </motion.div>
  );
};

// ─── 2. initial / animate / exit ─────────────────────────────────────────────
const MountExit = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div className="flex flex-col items-center gap-3">
      <AnimatePresence>
        {visible && (
          <motion.div
            key="box"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.35 }}
            className="h-14 w-14 rounded-xl bg-pink-500"
          />
        )}
      </AnimatePresence>
      <button
        onClick={() => setVisible((v) => !v)}
        className="rounded-lg bg-zinc-800 px-3 py-1.5 text-xs text-white transition-colors hover:bg-zinc-700"
      >
        {visible ? "unmount" : "mount"}
      </button>
    </div>
  );
};

// ─── 3. Hover & Tap ──────────────────────────────────────────────────────────
const HoverTap = () => (
  <motion.button
    whileHover={{ scale: 1.08, backgroundColor: "#7c3aed" }}
    whileTap={{ scale: 0.93 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    className="cursor-pointer rounded-xl bg-violet-700 px-6 py-3 text-sm font-semibold text-white"
  >
    Hover · Tap me
  </motion.button>
);

// ─── 4. Variants & stagger ───────────────────────────────────────────────────
const list = ["🍎", "🍊", "🍋", "🍇", "🍓"];
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
const Variants = () => {
  const [key, setKey] = useState(0);
  return (
    <div className="flex flex-col items-center gap-3">
      <motion.ul
        key={key}
        variants={container}
        initial="hidden"
        animate="show"
        className="flex gap-2"
      >
        {list.map((e, i) => (
          <motion.li key={i} variants={item} className="text-2xl">
            {e}
          </motion.li>
        ))}
      </motion.ul>
      <button
        onClick={() => setKey((k) => k + 1)}
        className="rounded-lg bg-zinc-800 px-3 py-1.5 text-xs text-white transition-colors hover:bg-zinc-700"
      >
        replay
      </button>
    </div>
  );
};

// ─── 5. useMotionValue + useTransform ────────────────────────────────────────
const MotionValueDemo = () => {
  const x = useMotionValue(0);
  const bg = useTransform(x, [-80, 80], ["#f43f5e", "#6366f1"]);
  const rotate = useTransform(x, [-80, 80], [-20, 20]);
  return (
    <motion.div
      style={{ x, backgroundColor: bg, rotate }}
      drag="x"
      dragConstraints={{ left: -80, right: 80 }}
      dragElastic={0.1}
      className="flex h-14 w-14 cursor-grab items-center justify-center rounded-xl text-2xl select-none active:cursor-grabbing"
    >
      🎯
    </motion.div>
  );
};

// ─── 6. useMotionTemplate (cursor glow) ──────────────────────────────────────
const CursorGlow = () => {
  const mouseX = useMotionValue(200);
  const mouseY = useMotionValue(200);
  const bg = useMotionTemplate`radial-gradient(120px circle at ${mouseX}px ${mouseY}px, rgba(139,92,246,0.25), transparent 80%)`;
  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      style={{ background: bg }}
      className="flex h-24 w-full items-center justify-center rounded-xl border border-zinc-700 text-xs text-zinc-400"
    >
      move mouse here ✨
    </motion.div>
  );
};

// ─── 7. useMotionValueEvent ───────────────────────────────────────────────────
const MotionValueEvent = () => {
  const x = useMotionValue(0);
  const [dir, setDir] = useState("center");
  useMotionValueEvent(x, "change", (v) => {
    if (v > 20) setDir("→ right");
    else if (v < -20) setDir("← left");
    else setDir("center");
  });
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <motion.div
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -60, right: 60 }}
        className="flex h-12 w-12 cursor-grab items-center justify-center rounded-xl bg-amber-500 text-xl"
      >
        📡
      </motion.div>
      <span className="font-mono text-xs text-zinc-400">{dir}</span>
    </div>
  );
};

// ─── 8. useScroll + useTransform ─────────────────────────────────────────────
const ScrollProgress = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div ref={ref} className="flex w-full flex-col gap-2">
      <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
        <motion.div
          style={{ scaleX }}
          className="h-full origin-left bg-gradient-to-r from-violet-500 to-pink-500"
        />
      </div>
      <p className="text-center text-xs text-zinc-500">scroll progress bar</p>
    </div>
  );
};

// ─── 9. useInView ────────────────────────────────────────────────────────────
const InViewBox = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      animate={{
        opacity: inView ? 1 : 0.1,
        scale: inView ? 1 : 0.8,
        y: inView ? 0 : 30,
      }}
      transition={{ duration: 0.5 }}
      className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-2xl"
    >
      👁️
    </motion.div>
  );
};

// ─── 10. layout animation ────────────────────────────────────────────────────
const LayoutAnim = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      layout
      onClick={() => setExpanded((e) => !e)}
      className={`cursor-pointer rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 ${
        expanded ? "h-32 w-48" : "h-16 w-16"
      } flex items-center justify-center text-sm font-semibold text-white`}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {expanded ? "layout!" : "click"}
    </motion.div>
  );
};

// ─── 11. AnimatePresence (list add/remove) ───────────────────────────────────
const AnimList = () => {
  const [items, setItems] = useState([1, 2, 3]);
  const add = () => setItems((i) => [...i, Math.max(...i) + 1]);
  const remove = (id) => setItems((i) => i.filter((x) => x !== id));
  return (
    <div className="flex w-full flex-col gap-2">
      <AnimatePresence>
        {items.map((id) => (
          <motion.div
            key={id}
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20, height: 0 }}
            className="flex items-center justify-between rounded-lg bg-zinc-800 px-3 py-2"
          >
            <span className="font-mono text-xs text-white">item {id}</span>
            <button
              onClick={() => remove(id)}
              className="text-xs text-red-400 hover:text-red-300"
            >
              ✕
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
      <button
        onClick={add}
        className="text-left text-xs text-zinc-400 transition-colors hover:text-white"
      >
        + add item
      </button>
    </div>
  );
};

// ─── 12. Keyframes ───────────────────────────────────────────────────────────
const Keyframes = () => {
  const [key, setKey] = useState(0);
  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div
        key={key}
        animate={{
          scale: [1, 1.4, 0.9, 1.1, 1],
          borderRadius: ["12px", "50%", "12px", "50%", "12px"],
          backgroundColor: [
            "#7c3aed",
            "#f43f5e",
            "#f59e0b",
            "#10b981",
            "#7c3aed",
          ],
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-14 w-14 bg-violet-600"
      />
      <button
        onClick={() => setKey((k) => k + 1)}
        className="rounded-lg bg-zinc-800 px-3 py-1.5 text-xs text-white transition-colors hover:bg-zinc-700"
      >
        replay
      </button>
    </div>
  );
};

// ─── useAnimate (imperative) ─────────────────────────────────────────────────
const UseAnimateDemo = () => {
  const [scope, animate] = useAnimate();
  const run = async () => {
    await animate(scope.current, { scale: 1.3, rotate: 15 }, { duration: 0.2 });
    await animate(
      scope.current,
      { scale: 0.8, rotate: -15 },
      { duration: 0.2 },
    );
    await animate(scope.current, { scale: 1, rotate: 0 }, { type: "spring" });
  };
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        ref={scope}
        className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500 text-2xl"
      >
        🔥
      </div>
      <button
        onClick={run}
        className="rounded-lg bg-zinc-800 px-3 py-1.5 text-xs text-white transition-colors hover:bg-zinc-700"
      >
        animate!
      </button>
    </div>
  );
};

// ─── App ──────────────────────────────────────────────────────────────────────
export default function Sample() {
  return (
    <div className="mx-auto min-h-screen max-w-6xl bg-black px-4 py-12 font-sans text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="mb-2 text-sm tracking-widest text-zinc-500 uppercase">
          interactive cheatsheet
        </p>
        <h1 className="bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-4xl font-black text-transparent">
          Motion for React
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-500">
          Every major hook & pattern — click the demos, tap "show code" to see
          how it's done.
        </p>
      </motion.div>

      {/* Hook Reference */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-14 grid grid-cols-2 gap-3 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 md:grid-cols-4"
      >
        {[
          ["useMotionValue", "raw value, no re-render"],
          ["useTransform", "map one value → another"],
          ["useMotionTemplate", "value → CSS string"],
          ["useMotionValueEvent", "subscribe to changes"],
          ["useScroll", "scroll position"],
          ["useSpring", "physics-based smoothing"],
          ["useInView", "viewport detection"],
          ["useAnimate", "imperative API"],
        ].map(([name, desc]) => (
          <div key={name}>
            <p className="font-mono text-xs font-bold text-violet-400">
              {name}
            </p>
            <p className="text-xs text-zinc-500">{desc}</p>
          </div>
        ))}
      </motion.div>

      <Section
        title="Core Animations"
        tag="basics"
        color="bg-violet-500/20 text-violet-300"
      >
        <Card
          title="animate prop"
          desc="Declaratively drive any CSS property"
          code={`<motion.div
  animate={{ rotate: 180, scale: 1.2 }}
  transition={{ type: "spring", stiffness: 200 }}
/>`}
        >
          <BasicAnimate />
        </Card>
        <Card
          title="initial / animate / exit"
          desc="Mount & unmount with AnimatePresence"
          code={`<AnimatePresence>
  {visible && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5 }}
    />
  )}
</AnimatePresence>`}
        >
          <MountExit />
        </Card>
        <Card
          title="whileHover / whileTap"
          desc="Interactive gesture states"
          code={`<motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.93 }}
  transition={{ type: "spring", stiffness: 400 }}
/>`}
        >
          <HoverTap />
        </Card>
      </Section>

      <Section
        title="Variants & Orchestration"
        tag="stagger"
        color="bg-pink-500/20 text-pink-300"
      >
        <Card
          title="variants + staggerChildren"
          desc="Cascade animations across a list"
          code={`const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0 }
};
<motion.ul variants={container} initial="hidden" animate="show">
  {items.map(i => <motion.li variants={item} />)}
</motion.ul>`}
        >
          <Variants />
        </Card>
        <Card
          title="Keyframes array"
          desc="Multi-step animations in one go"
          code={`<motion.div
  animate={{
    scale: [1, 1.4, 0.9, 1.1, 1],
    borderRadius: ["12px","50%","12px"],
    backgroundColor: ["#7c3aed","#f43f5e","#10b981"],
  }}
  transition={{ duration: 1.5 }}
/>`}
        >
          <Keyframes />
        </Card>
        <Card
          title="AnimatePresence list"
          desc="Add & remove with smooth transitions"
          code={`<AnimatePresence>
  {items.map(id => (
    <motion.div
      key={id} layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
    />
  ))}
</AnimatePresence>`}
        >
          <AnimList />
        </Card>
      </Section>

      <Section
        title="Motion Values & Hooks"
        tag="hooks"
        color="bg-amber-500/20 text-amber-300"
      >
        <Card
          title="useMotionValue + useTransform"
          desc="Drag to map position → color + rotation"
          code={`const x = useMotionValue(0);
const bg = useTransform(x, [-80,80], ["#f43f5e","#6366f1"]);
const rotate = useTransform(x, [-80,80], [-20,20]);

<motion.div style={{ x, backgroundColor: bg, rotate }}
  drag="x" dragConstraints={{ left:-80, right:80 }}
/>`}
        >
          <MotionValueDemo />
        </Card>
        <Card
          title="useMotionTemplate"
          desc="Compose CSS strings from motion values"
          code={`const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);
const bg = useMotionTemplate\`
  radial-gradient(120px at \${mouseX}px \${mouseY}px,
    rgba(139,92,246,0.3), transparent)
\`;
<motion.div style={{ background: bg }}
  onMouseMove={e => { mouseX.set(e.x); mouseY.set(e.y); }}
/>`}
        >
          <CursorGlow />
        </Card>
        <Card
          title="useMotionValueEvent"
          desc="Subscribe to value changes without re-renders"
          code={`const x = useMotionValue(0);
useMotionValueEvent(x, "change", (v) => {
  if (v > 20) setDir("→ right");
  else if (v < -20) setDir("← left");
  else setDir("center");
});`}
        >
          <MotionValueEvent />
        </Card>
      </Section>

      <Section
        title="Scroll & Viewport"
        tag="scroll"
        color="bg-cyan-500/20 text-cyan-300"
      >
        <Card
          title="useScroll + useSpring"
          desc="Smooth scroll progress indicator"
          code={`const { scrollYProgress } = useScroll();
const scaleX = useSpring(scrollYProgress, {
  stiffness: 100, damping: 30
});
<motion.div style={{ scaleX }}
  className="h-1 bg-violet-500 origin-left fixed top-0"
/>`}
        >
          <ScrollProgress />
        </Card>
        <Card
          title="useInView"
          desc="Animate when element enters viewport"
          code={`const ref = useRef(null);
const inView = useInView(ref, { once: false });

<motion.div ref={ref}
  animate={{
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 30
  }}
/>`}
        >
          <InViewBox />
        </Card>
        <Card
          title="layout prop"
          desc="Smooth size/position changes automatically"
          code={`// Just add layout prop — Motion handles
// all intermediate states automatically!
<motion.div
  layout
  transition={{ type: "spring", stiffness: 300 }}
  className={expanded ? "w-48 h-32" : "w-16 h-16"}
/>`}
        >
          <LayoutAnim />
        </Card>
      </Section>

      <Section
        title="Imperative"
        tag="advanced"
        color="bg-emerald-500/20 text-emerald-300"
      >
        <Card
          title="useAnimate"
          desc="Sequence animations imperatively with async/await"
          code={`const [scope, animate] = useAnimate();

const run = async () => {
  await animate(scope.current,
    { scale: 1.3, rotate: 15 }, { duration: 0.2 });
  await animate(scope.current,
    { scale: 0.8, rotate: -15 }, { duration: 0.2 });
  await animate(scope.current,
    { scale: 1, rotate: 0 }, { type: "spring" });
};`}
        >
          <UseAnimateDemo />
        </Card>
      </Section>

      {/* Quick reference table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
      >
        <h3 className="mb-4 font-bold text-white">🗺️ When to use what</h3>
        <div className="grid grid-cols-1 gap-3 text-xs md:grid-cols-2">
          {[
            ["Fade in on mount", "initial + animate (opacity)"],
            ["Slide in from side", "initial={{ x: -100 }} animate={{ x: 0 }}"],
            ["Remove with animation", "AnimatePresence + exit"],
            ["Hover button glow", "whileHover"],
            ["List stagger", "variants + staggerChildren"],
            ["Scroll progress bar", "useScroll + useSpring"],
            ["Parallax on scroll", "useScroll + useTransform"],
            ["Cursor gradient effect", "useMotionTemplate"],
            ["Drag with color change", "useMotionValue + useTransform"],
            ["Trigger side effect", "useMotionValueEvent"],
            ["Fade in when visible", "useInView"],
            ["Smooth resize", "layout prop"],
            ["Complex sequence", "useAnimate (async/await)"],
            ["Page transitions", "AnimatePresence (route level)"],
          ].map(([scenario, solution]) => (
            <div key={scenario} className="flex gap-2">
              <span className="shrink-0 text-zinc-500">•</span>
              <div>
                <span className="text-zinc-300">{scenario}</span>
                <span className="text-zinc-600"> → </span>
                <span className="font-mono text-violet-400">{solution}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
