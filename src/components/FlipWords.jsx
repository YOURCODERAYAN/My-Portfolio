"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export const FlipWords = ({
  words,
  duration = 2500,
  className,
}) => {
  const [index, setIndex] = useState(0);

  // ✅ clean interval loop (no bugs)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

  const currentWord = words[index];

  return (
    <span className={twMerge("inline-block relative", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="inline-block"
        >
          {currentWord.split(" ").map((word, wordIndex) => (
            <span
              key={wordIndex}
              className="inline-block whitespace-nowrap"
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: letterIndex * 0.03,
                    duration: 0.2,
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
              <span>&nbsp;</span>
            </span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};