import { motion, useAnimation } from "motion/react";

export default function Arrow2() {
  const mainControls = useAnimation();
  const headControls = useAnimation();

  const draw = async () => {
    mainControls.set({ pathLength: 0 });
    headControls.set({ pathLength: 0, opacity: 0 });

    await mainControls.start({
      pathLength: 1,
      transition: { duration: 2.8, ease: [0.4, 0, 0.2, 1] },
    });

    headControls.start({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    });
  };

  return (
    <motion.svg
      width="160"
      height="110"
      viewBox="0 0 320 220"
      xmlns="http://www.w3.org/2000/svg"
      onViewportEnter={draw}
      style={{transform:"scaleX(-1)"}}
    >
      <motion.path
        d="M 30,60 C 120,-20 280,20 260,90 C 245,145 190,165 150,145 C 110,125 115,75 155,70 C 195,65 240,100 280,140 C 295,155 305,165 310,170"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={mainControls}
      />
      <motion.path
  d="M 294,165 L 310,170 L 305,154"
  fill="none"
  stroke="white"
  strokeWidth="3"
  strokeLinecap="round"
  strokeLinejoin="round"
  initial={{ pathLength: 0, opacity: 0 }}
  animate={headControls}
/>
    </motion.svg>
  );
}