"use client";
import { FlipWords } from "./FlipWords.jsx";
//import { motion } from "motion/react";

function HeroText() {
  // ✅ Parent container (controls delay automatically)
  /*const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // ✅ Individual item animation
  const item = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };*/

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">

      {/* 🔥 Desktop View */}
      <div
        className="flex-col hidden md:flex c-space"
      >
        <h1 className="text-4xl font-medium">
          Hi I'm Ayan
        </h1>

        <div className="flex flex-col items-start">
          <p
            className="text-5xl font-medium text-neutral-300"
            
          >
            A Developer
            <br />
            Dedicated to Crafting
          </p>

          <div>
            <FlipWords
              words={["Secure", "Modern", "Scalable"]}
              className="font-black text-white text-8xl"
            />
          </div>

          <p
            className="text-4xl font-medium text-neutral-300"
            
          >
            Web Solutions
          </p>
        </div>
      </div>

      {/* 🔥 Mobile View */}
      <div
        className="flex flex-col space-y-6 md:hidden"
      >
        <p className="text-4xl font-medium">
          Hi, I'm Ayan
        </p>

        <div>
          <p
            className="text-5xl font-black text-neutral-300"
          >
            Building
          </p>

          <div>
            <FlipWords
              words={["Secure", "Scalable", "Modern"]}
              className="font-bold text-white text-7xl"
            />
          </div>

          <p
            className="text-4xl font-black text-neutral-300"
           
          >
            Web Applications
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroText;