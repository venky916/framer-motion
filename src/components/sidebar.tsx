"use client";
// Animation sequences and animation orchestration

// Animation orchestration this page
// staggered animation for child elements (means one comes after another)

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Home,
  BarChart3,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Sidebar Component
export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      name: "Home",
      href: "/",
      icon: <Home />,
    },
    {
      name: "Analytics",
      href: "/analytics",
      icon: <BarChart3 />,
    },
    {
      name: "Users",
      href: "/users",
      icon: <Users />,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <Settings />,
    },
  ];

  const sidebarVariant = {
    open: {
      width: "16rem",
    },
    closed: {
      width: "4.5rem",
    },
  };

  const childVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };

  //   const parentVariants = {
  //     open: {
  //       transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  //     },
  //     closed: {
  //       transition: { staggerChildren: 0.05, staggerDirection: -1 },
  //     },
  //   };

  const parentVariants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      exit={"closed"}
      //   whileHover={"open"}
      transition={{ duration: 0.3 }}
      className="h-full border-r border-neutral-100"
    >
      <motion.nav
        variants={sidebarVariant}
        className="h-full bg-white shadow-md"
      >
        <div className="flex items-center justify-between p-4">
          <h2
            className={`text-xl font-semibold ${isOpen ? "block" : "sr-only"} text-black`}
          >
            Dashboard
          </h2>
          <button
            onClick={toggleSidebar}
            className="ml-2 cursor-pointer rounded-full bg-gray-100 p-2 text-black shadow-md hover:bg-gray-200 focus:outline-none"
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>
        <div className="relative">
          <nav className="p-4">
            <motion.ul variants={parentVariants} className="space-y-2">
              {links.map((link) => (
                <motion.li variants={childVariants} key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 rounded p-2 text-gray-700 hover:bg-gray-200"
                    title={isOpen ? link.name : ""}
                  >
                    {link.icon}
                    {isOpen && link.name}
                    {/* {link.name} */}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>
      </motion.nav>
    </motion.div>
  );
};
