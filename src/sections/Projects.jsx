import React from 'react'
import Page from './Page'
import {motion} from 'motion/react'
import arrow from '/logos/arrow.png'

const Projects = () => {
  return (
    <div className="mt-100 text-5xl flex items-center flex-col font-semibold" id="projects"> My Projects 
    
    <div>

        <Page />
    </div>
    {/* Here marquee */}
   
        <div className="mt-96  w-screen h-20  bg-zinc-900  flex items-center overflow-hidden ">
              
              <motion.div className="flex flex-row text-white text-3xl whitespace-nowrap font-limelight"
              
              initial={{x:"0%"}}
              animate={{x:"-60%"}}

              transition={{

                duration: 50,
                repeat:Infinity,
                ease:"linear"

              }}
              
              
              >

               
                <span className="mx-10">Ai Resume Analyzer</span>
            <span className="mx-10">    <img src={arrow} alt="arrow"  className="w-10  "/> </span>
                <span className="mx-10">Macbook 3d Website</span>
                <span className="mx-10">In Depth Analysis and Prediction of Global Terrorism: A
                  Synergistic Approach using EDA and Advanced ML Models </span>

                
                <span className="mx-10">Ai Resume Analyzer</span>
                <span className="mx-10">Macbook 3d Website</span>
                <span className="mx-10">In Depth Analysis and Prediction of Global Terrorism: A
                  Synergistic Approach using EDA and Advanced ML Models </span>
              </motion.div>

        </div>
  
    </div>
  
  )
}

export default Projects