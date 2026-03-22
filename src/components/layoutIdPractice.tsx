// Tabs.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const TodoList = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Design the landing page" },
    { id: 2, text: "Write unit tests" },
    { id: 3, text: "Deploy to staging" },
  ]);

  const remove = (id: number) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <AnimatePresence>
        {items.map((item) => (
          <motion.li
            key={item.id}
            layout // ← slides when siblings leave
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }} // ← AnimatePresence runs this
            transition={{ duration: 0.25 }}
            onClick={() => remove(item.id)}
          >
            {item.text}
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

const items = [
  {
    id: 1,
    q: "What is layout in Framer Motion?",
    a: "It animates size/position changes caused by DOM reflows.",
  },
  {
    id: 2,
    q: "When should I use layoutId?",
    a: "When the same element appears in two places and should morph between them.",
  },
  {
    id: 3,
    q: "Does layout work with CSS Grid?",
    a: "Yes — layout works with any CSS layout system.",
  },
];

export const Accordion = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
      }}
    >
      {items.map((item) => (
        // layout on the card — it grows/shrinks as content appears
        <motion.div key={item.id} layout style={{ overflow: "hidden" }}>
          <button onClick={() => setOpen(open === item.id ? null : item.id)}>
            {item.q}
          </button>

          <AnimatePresence>
            {open === item.id && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {item.a}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

const tabs = ["Home", "About", "Work", "Contact"];

export const Tabs = () => {
  const [active, setActive] = useState("Home");

  return (
    <div
      style={{
        display: "flex",
        gap: 4,
        padding: 4,
        background: "#f0f0f0",
        borderRadius: 10,
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          style={{ position: "relative", padding: "6px 16px", borderRadius: 8 }}
        >
          {/* The pill lives INSIDE the active tab's button */}
          {active === tab && (
            <motion.div
              layoutId="tab-pill" // ← same id = same element to Framer
              style={{
                position: "absolute",
                inset: 0,
                background: "white",
                borderRadius: 8,
                zIndex: 0,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          {/* // text sits above the pill */}
          <span style={{ position: "relative", zIndex: 1 }}>{tab}</span>
        </button>
      ))}
    </div>
  );
};

const cards = [
  { id: "a", title: "Design system", color: "#E6F1FB" },
  { id: "b", title: "API docs", color: "#E1F5EE" },
  { id: "c", title: "Onboarding", color: "#FAEEDA" },
];

export const CardGrid = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      {/* // --- the grid of small cards --- */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
        }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layoutId={`card-${card.id}`} // ← unique per card
            onClick={() => setSelected(card.id)}
            style={{
              background: card.color,
              borderRadius: 12,
              padding: 16,
              cursor: "pointer",
              height: 80,
            }}
          >
            <p>{card.title}</p>
          </motion.div>
        ))}
      </div>

      {/* // --- the expanded overlay --- */}
      <AnimatePresence>
        {selected &&
          (() => {
            const card = cards.find((c) => c.id === selected)!;
            return (
              <div
                style={{
                  position: "fixed",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => setSelected(null)}
              >
                <motion.div
                  layoutId={`card-${selected}`} // ← same id as the small card
                  style={{
                    background: card.color,
                    borderRadius: 20,
                    padding: 32,
                    width: 320,
                    height: 280,
                  }}
                >
                  <h2>{card.title}</h2>
                  <motion.p
                    initial={{ opacity: 0 }} // fade in extra content
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                  >
                    Full detail view...
                  </motion.p>
                </motion.div>
              </div>
            );
          })()}
      </AnimatePresence>
    </>
  );
};
