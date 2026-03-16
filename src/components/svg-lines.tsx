"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export const SVGLines = () => {
  return (
    <motion.div
      whileHover="animate"
      className="relative flex w-full max-w-md items-center justify-between rounded-md"
    >
      <div className="flex flex-col justify-between gap-8">
        <div className="relative">
          <span className="text-xs">Meeting Summarizer</span>
          <TopSVG className="absolute top-3 left-36" />
        </div>
        <div className="relative">
          <span className="text-xs">Code Reviewer</span>
          <MiddleSVG className="absolute top-3 left-32" />
        </div>
        <div className="relative">
          <span className="text-xs">Customer Support</span>
          <BottomSVG className="absolute -top-5 left-32" />
        </div>
      </div>
      <div className="relative z-20 size-10 translate-x-6 overflow-hidden rounded-sm bg-neutral-200 p-[1px]">
        <div className="relative z-20 flex h-full w-full items-center justify-center rounded-[3px] bg-white">
          <SVG />
        </div>
        <div className="absolute inset-0 h-full w-full scale-[1.5] animate-spin [background-image:conic-gradient(at_center,transparent,var(--color-blue-500)_20%,transparent_30%)]" />
        {/* //[animation-duration:4s] */}
        <div className="absolute inset-0 h-full w-full scale-[1.5] animate-spin [background-image:conic-gradient(at_center,transparent,var(--color-red-500)_20%,transparent_30%)] [animation-delay:0.4s]" />
      </div>
    </motion.div>
  );
};

const TopSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="312"
      height="33"
      viewBox="0 0 312 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.5"
        y1="1"
        x2="311.5"
        y2="1"
        stroke="var(--color-line)"
        strokeLinecap="round"
      />
      <line
        x1="311.5"
        y1="1"
        x2="311.5"
        y2="32"
        stroke="var(--color-line)"
        strokeLinecap="round"
      />

      <line
        x1="0.5"
        y1="1"
        x2="311.5"
        y2="1"
        stroke="url(#line-one-gradient)"
        strokeLinecap="round"
      />

      <defs>
        <motion.linearGradient
          gradientUnits="userSpaceOnUse"
          id="line-one-gradient"
          initial={{
            x1: "0%",
            x2: "10%",
          }}
          animate={{
            x1: "90%",
            x2: "100%",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          <stop stopColor="var(--color-line)" />
          <stop offset="0.33" stopColor="#F17463" />
          <stop offset="0.66" stopColor="#F17463" />
          <stop offset="1" stopColor="var(--color-line)" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

const MiddleSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="323"
      height="2"
      viewBox="0 0 323 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.5"
        y1="1"
        x2="322.5"
        y2="1"
        stroke="var(--color-line)"
        strokeLinecap="round"
      />
      <line
        x1="0.5"
        y1="1"
        x2="322.5"
        y2="1"
        stroke="url(#line-two-gradient)"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          gradientUnits="userSpaceOnUse"
          id="line-two-gradient"
          initial={{
            x1: "0%",
            x2: "10%",
          }}
          animate={{
            x1: "90%",
            x2: "100%",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          <stop stopColor="var(--color-line)" />
          <stop offset="0.33" stopColor="var(--color-blue-500)" />
          <stop offset="0.66" stopColor="var(--color-blue-500)" />
          <stop offset="1" stopColor="var(--color-line)" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

const BottomSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="326"
      height="32"
      viewBox="0 0 326 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line y1="31" x2="325" y2="31" stroke="var(--color-line)" />

      <line
        x1="325.5"
        y1="31"
        x2="325.5"
        y2="1"
        stroke="var(--color-line)"
        strokeLinecap="round"
      />
      <line y1="31" x2="325" y2="31" stroke="url(#line-three-gradient)" />
      <defs>
        <motion.linearGradient
          gradientUnits="userSpaceOnUse"
          id="line-three-gradient"
          initial={{
            x1: "0%",
            x2: "10%",
          }}
          animate={{
            x1: "90%",
            x2: "100%",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          <stop stopColor="var(--color-line)" />
          <stop offset="0.33" stopColor="var(--color-yellow-500)" />
          <stop offset="0.66" stopColor="var(--color-yellow-500)" />
          <stop offset="1" stopColor="var(--color-line)" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export const SVG = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      className="size-7 text-neutral-600"
    >
      {/* this pathe control the viewBox of teh svg change fill and stroke color to view it  */}
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.path
        variants={{
          animate: {
            x: [0, 5, -5, 0],
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          },
        }}
        d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z"
      />
      <motion.path
        variants={{
          animate: {
            rotate: [0, 10, -10, 0],
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          },
        }}
        d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z"
      />
    </motion.svg>
  );
};
