"use client";
import React, { useRef, useState } from "react";
import {
  IconChevronLeft,
  IconChevronRight,
  IconRocket,
} from "@tabler/icons-react";
import Image from "next/image";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
  useSpring,
} from "motion/react";

// const ref = useRef<HTMLDivElement | null>(null);
// const { scrollYProgress } = useScroll({
//   target: ref,
//   offset: ["start end", "end start"],
// });
// useMotionValueEvent(scrollYProgress, "change", (latest) => {
//   console.log("Page scroll: ", latest);
// });

// const translateContent = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

export const MotionHooksExample = () => {
  const backgrounds = ["#3d0000", "#001e45", "#26262c"];
  const [background, setBackground] = useState(backgrounds[0]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const finalValue = Math.floor(latest * backgrounds.length);
    setBackground(backgrounds[finalValue]);
  });
  return (
    <motion.div
      animate={{ background }}
      transition={{ duration: 0.2 }}
      ref={containerRef}
      className="flex min-h-screen items-center justify-center bg-neutral-900"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-10 py-40">
        {features.map((feature, index) => (
          <Card key={index} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
};

const Card = ({ feature }: { feature: Feature }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -300]),
    { stiffness: 100, damping: 30, mass: 1 },
  );
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <div ref={ref} className="grid grid-cols-2 items-center gap-20 py-40">
      <motion.div
        style={{ filter: useMotionTemplate`blur(${blur}px)`, scale }}
        className="flex flex-col gap-5"
      >
        {feature.icon}
        <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
        <p className="text-lg text-neutral-400">{feature.description}</p>
      </motion.div>
      <motion.div style={{ y: translateContent, opacity: opacityContent }}>
        {feature.content}
      </motion.div>
    </div>
  );
};

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
};

const features: Feature[] = [
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Generate ultra realistic images in seconds",
    description:
      "With our state of the art AI, you can generate ultra realistic images in no time at all.",
    content: (
      <div>
        <Image
          src="https://assets.aceternity.com/pro/car-1.jpg"
          alt="car"
          height="500"
          width="500"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Replicate great Art",
    description:
      "Generate the painting of renowned artists, like Van Gogh or Monet or Majnu bhai.",
    content: (
      <Image
        src="https://assets.aceternity.com/pro/art.jpeg"
        alt="art"
        height="500"
        width="500"
        className="rounded-lg"
      />
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Batch generate images with a single click.",
    description:
      "With our state of the art AI, you can generate a batch of images within 10 seconds with absolutely no compute power.",
    content: (
      <div className="relative">
        <div className="-rotate-[10deg]">
          <Image
            src="https://assets.aceternity.com/pro/car-1.jpg"
            alt="car1"
            height="500"
            width="500"
            className="rounded-lg"
          />
        </div>
        <div className="absolute inset-0 rotate-[10deg] transform">
          <Image
            src="https://assets.aceternity.com/pro/car-2.jpg"
            alt="car2"
            height="500"
            width="500"
            className="rounded-lg"
          />
        </div>
      </div>
    ),
  },
];
