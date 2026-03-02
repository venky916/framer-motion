"use client";

import Link from "next/link";
import { title } from "process";
import React, { useState } from "react";
import { motion } from "motion/react";

export const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="py-40">
      <nav className="mx-auto flex max-w-4xl items-center gap-2 rounded-full bg-gray-100 px-2 py-1 shadow-lg">
        {navItems.map((item, idx) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            href={item.href}
            key={item.title}
            className="group relative w-full py-3 text-center text-lg text-neutral-500"
          >
            <span className="relative z-20 group-hover:text-white">
              {item.title}
            </span>
            {hovered === idx && (
              <motion.div
                layoutId="hover"
                className="absolute inset-0 rounded-full w-full h-full bg-black/80"
              ></motion.div>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};
