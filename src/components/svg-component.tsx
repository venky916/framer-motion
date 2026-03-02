"use client";
import React from "react";
import { motion } from "motion/react";

export const SVGComponent = () => {
  return (
    <motion.div
      whileHover="animate"
      className="flex h-60 w-60 items-center justify-center rounded-md bg-white text-black shadow-sm"
    >
      <SVG />
    </motion.div>
  );
};

const CircleSVG = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      direction="ltr"
      width="539.2000122070312"
      height="298.4000244140625"
      viewBox="557.6000366210938 278 539.2000122070312 298.4000244140625"
      strokeLinecap="round"
      strokeLinejoin="round"
      //   style={{
      //     strokeDasharray: "1000",
      //     strokeDashoffset: "500",
      //   }}

      // second way
      //   className={"text-purple-500"}

      //   fourth way
      stroke={"currentColor"}
      // even text also work text-purple-500
      className={"fill-transparent stroke-red-500"}
    >
      <defs />
      <g transform="matrix(1, 0, 0, 1, 589.6, 310)" opacity="1">
        <motion.path
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
          strokeWidth="3.5"
          d="M 0 117.2 C 0 52.4722 106.3771 0 237.6 0 C 368.8229 0 475.2 52.4722 475.2 117.2 C 475.2 181.9278 368.8229 234.4 237.6 234.4 C 106.3771 234.4 0 181.9278 0 117.2"
          //   First way
          //   fill="red"
          //   stroke="var(--color-cyan-500)"
          //   Second way
          //   fill={"none"}
          //   stroke="currentColor"
          // Third Way
          // fill={"currentColor"}
          // stroke={"currentColor"}
          // className={"stroke-green-500 fill-red-500"}

          //   fourth way
          fill={"transparent"}
        />
      </g>
    </motion.svg>
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
      className="size-40 text-neutral-600"
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
