"use client";
import { motion, stagger, useAnimate } from "motion/react";
import React, { useEffect } from "react";

export const AnimatedText = () => {
  const [scope, animate] = useAnimate();
  const text =
    "Welcome to F*** C***. The first rule of F*** C*** is that you don't talk about F*** C***. The second rule of F*** C*** is that you don't talk about F*** C***.";

  // useEffect(() => {
  //   startAnimation();
  // }, []);

  const startAnimation = () => {
    animate(
      "span",
      { opacity: 1, filter: "blur(0px)", y: 0 },
      { duration: 0.5, ease: "easeInOut", delay: stagger(0.02) },
    );
  };

  return (
    <div
      ref={scope}
      className="mx-auto max-w-4xl text-4xl font-bold text-white"
    >
      {/* <motion.span style={{ opacity: 0 }} className="inline-block">
        {text}
      </motion.span> */}
      <button
        onClick={startAnimation}
        className="mb-4 cursor-pointer rounded-md bg-neutral-800 px-4 py-2 transition duration-200 active:scale-110"
      >
        what is FC?
      </button>

      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          className="mr-2 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
