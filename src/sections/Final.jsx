"use client"
import {Vortex} from '../components/Background'
import { TextGenerateEffect } from "../components/Text"
import {TypewriterEffectSmooth } from '../components/Typewriter'
import CurlyArrow from "../components/Arrow"
import Arrow2 from "../components/Arrow2"


import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export default function Final() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [showText, setShowText] = useState(false)

  // Second section refs
  const ref2 = useRef(null)
  const isInView2 = useInView(ref2, { once: true })
  const [showText2, setShowText2] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowText(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  // Trigger second text on scroll
  useEffect(() => {
    if (isInView2) {
      const timer = setTimeout(() => setShowText2(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [isInView2])

  const imageFromLeft = {
    hidden: { x: "-90vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }

  // Image comes from RIGHT for second section
  const imageFromRight = {
    hidden: { x: "100vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const arrowVariant = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1, delay: 0.6 }
    }
  }


  function view(){
      window.open('/Certificate.pdf' , '_blank')
  }


  function paper(){

      window.open('https://www.researchgate.net/publication/393649671_In_Depth_Analysis_and_Prediction_of_Global_Terrorism_A_Synergistic_Approach_Using_EDA_and_Advanced_ML_Models' , '_blank')
  }

  return (
    <div className="relative min-h-[200vh] w-full" id="achievements">
  <Vortex
    baseHue={220}
    particleCount={400}
    backgroundColor="#000000"
    containerClassName="fixed inset-0 h-full w-full -z-10"
    className="fixed inset-0 h-full w-full -z-10"
  >
    <></>
  </Vortex>

  {/* HEADING */}
  <div className="flex justify-center pt-10">
    <TypewriterEffectSmooth
      words={[
        { text: "Awards" },
        { text: "&" },
        { text: "Achievements" }
      ]}
    />
  </div>
 

  {/* SECTION 1 - image from left */}
  <div ref={ref} className="flex flex-row gap-8 items-center justify-center px-10 mt-20">

    <motion.div
      variants={imageFromLeft}
      initial="hidden"
      whileInView="visible"
      animate={isInView ? "visible" : "hidden"}
      className=" flex-shrink-0"
    >
       
     <img
    src="/assests/Certificate1.jpg"
    alt="certificate"
    className="rounded-lg"
    style={{
  width: "500px",
  boxShadow: "0 0 30px 10px rgba(255,255,255,0.4)",
  border: "1px solid rgba(255,255,255,0.3)"
}}
  />
    
      <button className="mt-2 bg-transparent border border-blue-400 hover:bg-blue-500 text-white text-sm font-semibold py-2 px-10 rounded-full transition-all duration-300 hover:shadow-[0_0_10px_2px_rgba(96,165,250,0.5)] cursor-pointer" onClick={view}>
        View The Certificate 
      </button>
      
     
    </motion.div>
    
   

    <motion.span initial="hidden" animate={isInView ? "visible" : "hidden"}>
      <motion.div variants={arrowVariant}>
        <CurlyArrow />
      </motion.div>
    </motion.span>

    <div className="max-w-xl">
      {showText && (
        <TextGenerateEffect
          words="Ranked in the Top 10% of participants in Cohort 1 of a competitive 6-month AI & ML program jointly conducted by IIT Kharagpur AI4ICPS I-HUB Foundation and TCS iON, focusing on real-world applications ofArtificialIntelligence and Machine Learning."
          className="text-2xl w-140"
          duration={0.3}
        />
      )}
    </div>
  </div>

  {/* SECTION 2 - image from right */}
  <div ref={ref2} className="flex flex-row gap-8 items-center justify-center px-10 mt-32 pb-20">
    <div className="max-w-xl">
      {showText2 && (
        <TextGenerateEffect
          words="Co-authored and presented a research paper at STEP2K25 — 1st International Conference on Smart Technology for Emerging Problems,GMIT Kolkata.Officially published in Volume 1, July 2025 with ISBN 978-81-977844-3-9 and available on ResearchGate."
          className="text-2xl w-140"
          duration={0.3}
        />
      )}
    </div>

    <motion.span initial="hidden" animate={isInView2 ? "visible" : "hidden"}>
      <motion.div variants={arrowVariant}>
        <Arrow2 />
      </motion.div>
    </motion.span>

    <motion.div
      variants={imageFromRight}
      initial="hidden"
      whileInView="visible"
      animate={isInView2 ? "visible" : "hidden"}
      className=" flex-shrink-0"
    >
      <img src="/assests/Cover.png" alt="certificate" className="rounded-lg bg-center bg-no-repeat bg-cover" style={{ width: "500px" , height:"350px"  ,
  boxShadow: "0 0 20px 4px rgba(255,255,255,0.4)",
  border: "1px solid rgba(255,255,255,0.3)"
}}/>

      <button className="mt-2  ml-64  bg-transparent border border-blue-400 hover:bg-blue-500 text-white text-sm font-semibold py-2 px-10 rounded-full transition-all duration-300 hover:shadow-[0_0_10px_2px_rgba(96,165,250,0.5)] cursor-pointer" onClick={paper}>
        View In Research Gate
      </button>
    </motion.div>
  </div>
   
<motion.div className="relative w-fit mx-auto"
    initial={{opacity:0 , y: 60}}
    whileInView={{opacity:1 , y:0}}
      transition={{duration:0.6}}
      viewport={{once:true}}

    >
  <div className="absolute bg-pink-600 inset-0 rounded-2xl blur "></div>
  
 
  <div className="rounded-2xl text-center bg-black flex flex-col relative w-[700px]">
    
    <div className="text-2xl font-semibold p-6">
      DSA & Competitive Programming
    </div>

    <hr style={{ border:"none", borderTop:"1px solid rgba(255,255,255,0.2)" }}/>

    <div className="grid grid-cols-2 divide-x divide-white/20">

      <div className="flex flex-col items-center py-6 px-4">
        <span className="font-semibold text-2xl">Leetcode</span>
        <img src="/logos/leetcode.svg" alt="leetcode" className="w-10 h-10 mt-4 mb-4"/>
        <ul className="list-disc marker:text-white text-left space-y-1 text-sm mb-8">
          <li>Actively solving problems</li>
          <li>190+ problems solved</li>
          <li>Easy / Medium / Hard</li>
        </ul>
        <a href="https://leetcode.com/u/Ayann12/" target="_blank"  rel="noopener noreferer">
          <button className="w-40 h-10 border-solid border-white border-2 rounded-lg cursor-pointer hover:bg-amber-600">
            Link to  Account
          </button>
        </a>
      </div>

      <div className="flex flex-col items-center py-6 px-4">
        <span className="font-semibold text-2xl">Codeforces</span>
        <img src="/logos/code-forces.svg" alt="codeforces" className="w-10 h-10 mt-4 mb-4"/>
        <ul className="list-disc marker:text-white text-left space-y-1 text-sm mb-8">
          <li>Actively competing</li>
          <li>957 rating </li>
          <li>Growing rating 2025</li>
        </ul>

          <a href="https://codeforces.com/profile/Ayan_coder" target="_blank" rel="noopener noreferer">
            <button className="w-40 h-10 border-solid border-white border-2 rounded-lg cursor-pointer hover:bg-red-500">
              Link to Account
            </button>
          </a>
      </div>

    </div>
  </div>
</motion.div>
        </div>
        

    
  )
}