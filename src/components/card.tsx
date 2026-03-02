"use client";

import { cn } from "@/lib/utils";
import {
  Icon24Hours,
  Icon360View,
  IconCube3dSphere,
  IconMessage,
  IconPlus,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export const Card = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className={cn(
              "flex min-h-[28rem] w-80 flex-col rounded-xl bg-white p-4 text-neutral-700",
              "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
            )}
          >
            <h2 className="text-2 font-bold">Aceternity UI Components</h2>
            <p className="mt-2 text-xs text-neutral-600">
              A Collection of beautiful UI Components, Let&apos;s get on with
              it{" "}
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setOpen(false)}
                className="shadow-clerk mt-4 flex cursor-pointer items-center gap-2 rounded-md px-2 py-1"
              >
                <Image
                  width={50}
                  height={50}
                  alt="logo"
                  src={"/logo.webp"}
                  className="size-4"
                />{" "}
                Aceternity
                <IconX className="h-4 w-4 text-neutral-400" />
              </button>
            </div>
            <div className="relative mt-4 flex-1 rounded-lg border border-dashed border-neutral-200 bg-gray-100">
              {/* motion divs */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white"
              >
                <div className="flex gap-2 p-4">
                  <div className="shadow-clerk flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-white bg-gradient-to-br">
                    <IconMessage className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Aceternity UI Components
                    </p>
                    <p className="mt-1 text-[8px] text-neutral-400">
                      A collection of UI components
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="shadow-clerk flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-white bg-gradient-to-br">
                    <Icon24Hours className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      24 hours Turnaround
                    </p>
                    <p className="mt-1 text-[8px] text-neutral-400">
                      Super fast delivery at warp speed
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="shadow-clerk flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-white bg-gradient-to-br">
                    <Icon360View className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      360 days all around
                    </p>
                    <p className="mt-1 text-[8px] text-neutral-400">
                      we are here to help 24X7
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="shadow-clerk flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-white bg-gradient-to-br">
                    <IconCube3dSphere className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Some Other Components
                    </p>
                    <p className="mt-1 text-[8px] text-neutral-400">
                      Here goes another subtitles
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 p-3">
                  <div className="shadow-clerk flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-md bg-white bg-gradient-to-br">
                    <IconPlus className="h-3 w-3 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      create Project
                    </p>
                  </div>
                </div>
              </motion.div>
              {/* motion divs end here */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
