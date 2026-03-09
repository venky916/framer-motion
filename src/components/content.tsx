"use client";

// bg-[radial-gradient(var(--color-neutral-800)_1px,transparent_1px)] bg-[size:10px_10px] hover:bg-[size:15px_15px]
// transition-all duration-300

//   style={{
//     backgroundImage:
//       "radial-gradient(circle at 10px 10px, black 5px, transparent 0)",
//     backgroundSize: "30px 30px", // This defines the size of the SINGLE gradient
//     backgroundRepeat: "no-repeat", // This is the default. Change to 'repeat' to see a difference.
//     backgroundColor: "yellow", // You will see this color where the gradient isn't covering.
//   }}

//  shadow-[0px_20px_50px_rgba(8,112,184,0.7)]

import React from "react";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Content = () => {
  return (
    <div
      className={cn(
        "flex h-screen w-full items-center justify-center bg-neutral-900",
        "perspective-distant transform-3d",
      )}
      style={{
        backgroundImage:
          "radial-gradient(circle at 10px 10px, rgba(6,182,212,0.9) 1px ,transparent 0)",
        backgroundSize: "30px 30px",
        //   backgroundPosition: "center center", similar to circle at center
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        whileHover={{
          rotateX: 25,
          rotateY: 15,
          boxShadow: "0px 20px 50px rgba(8,112,184,0.7)",
          y: -5,
        }}
        whileTap={{
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={cn(
          "group relative cursor-pointer rounded-lg bg-black px-12 py-4 text-neutral-500 shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]",
          "translate-z-20",
        )}
      >
        <span className="transition-colors duration-300 group-hover:text-cyan-500">
          {" "}
          Subscribe
        </span>
        <span className="absolute inset-x-0 bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
        <span className="absolute inset-x-0 bottom-px mx-auto h-[4px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 blur-md transition duration-300 group-hover:opacity-100"></span>
      </motion.button>
    </div>
  );
};
