"use client";
import { AnimationSequence } from "motion";
import { motion, useAnimate } from "motion/react";
import React from "react";

// purple ->green (bg-green to backGroundColor works fine)
// if using gradient
// gradient to gradient works fine
// or gradient to background also works

export const AnimationSequences = () => {
  const [scope, animate] = useAnimate();

  // const startAnimating = async () => {
  //   // animate("span", { opacity: 0 }, { duration: 0.25, ease: "easeInOut" });
  //   animate(
  //     ".loader",
  //     { width: "2rem", opacity: 1 },
  //     { duration: 0.3, ease: "easeInOut" },
  //   );
  //   animate(".loader", { rotate: 360 * 4 }, { duration: 2 });
  //   animate(
  //     ".loader",
  //     { opacity: 0, scale: 0 },
  //     { duration: 0.3, ease: "easeInOut" },
  //   );
  //   animate(".text", { display: "none" }, { duration: 0.1 });
  //   await animate(
  //     "button",
  //     { width: "5rem", borderRadius: "1000px" },
  //     { duration: 0.5, ease: "easeInOut" },
  //   );
  //   await animate(
  //     "button",
  //     {
  //       opacity: 1,
  //       scale: [1, 1.2, 0.8, 1],
  //       // background: "var(--color-green-500)",
  //       backgroundImage: "linear-gradient(to right, #00ff99, #00ccff)",
  //     },
  //     { duration: 0.5, ease: "easeInOut" },
  //   );
  //   animate(".check-icon", { opacity: 1 }, { duration: 0.3 });
  //   animate(
  //     ".check-icon path",
  //     { pathLength: 1 },
  //     { duration: 0.3, ease: "easeInOut" },
  //   );
  // };

  const sequence: AnimationSequence = [
    [
      ".loader",
      { width: "2rem", opacity: [0, 1] },
      { duration: 0.3, ease: "easeInOut" },
    ],
    [".loader", { rotate: 360 * 4 }, { duration: 2 }],
    [
      ".loader",
      { opacity: [1, 0], scale: 0 },
      { duration: 0.3, ease: "easeInOut" },
    ],
    [".text", { display: "none" }, { duration: 0.1, at: "-0.2" }],
    [
      "button",
      { width: "5rem", borderRadius: "1000px" },
      { duration: 0.3, ease: "easeInOut" },
    ],
    [
      "button",
      {
        opacity: 1,
        scale: [1, 1.2, 0.8, 1],
        backgroundImage: "linear-gradient(to right, #00ff99, #00ccff)",
      },
      { duration: 0.3, ease: "easeInOut" },
    ],
    [".check-icon", { opacity: [0, 1] }, { duration: 0.3, at: "-0.5" }],
    [
      ".check-icon path",
      { pathLength: 1 },
      { duration: 0.3, ease: "easeInOut" },
    ],
  ];

  const startAnimating = () => {
    animate(sequence);
  };

  return (
    <div
      ref={scope}
      className="relative flex h-20 w-[30rem] items-center justify-center"
    >
      <motion.button
        initial={{
          width: "100%",
        }}
        onClick={startAnimating}
        className="flex h-20 cursor-pointer items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 font-medium text-white"
      >
        {/* <motion.span
          initial={{
            opacity: 1,
          }}
        >
          Purchase Now ($169)
        </motion.span> */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="loader h-5 w-5 text-white"
          initial={{
            width: "0rem",
          }}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3a9 9 0 1 0 9 9" />
        </motion.svg>

        <span className="text">Purchase Now ($169)</span>
      </motion.button>
      {/* <motion.div
        initial={{ scale: 0, opacity: 0 }}
        className="spinning-circle absolute inset-0 m-auto h-20 w-20 rounded-full bg-green-500"
      /> */}

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="check-icon pointer-events-none absolute inset-0 z-50 m-auto h-8 w-8"
        style={{
          opacity: 0,
        }}
      >
        {/* <path stroke="none" d="M0 0h24v24H0z" fill="none" /> */}
        <motion.path
          initial={{
            pathLength: 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          d="M5 12l5 5l10 -10"
        />
      </motion.svg>
    </div>
  );
};
