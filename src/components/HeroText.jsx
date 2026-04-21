import { FlipWords } from "./FlipWords.jsx"; 
import {motion} from 'motion/react'

function HeroText(){

    const variants ={

        hidden:{opacity:0 , x:-50},
        visible:{opacity:1 , x:0},
    };

        return(
            <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
                {/*Desktop View */}
                    <div className="flex-col hidden md:flex c-space">
                            <motion.h1 className="text-4xl font-medium"
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            transition={{delay:1}}
                            
                            >Hi I'am Ayan</motion.h1>


                <div className="flex flex-col items-start">
                    <motion.p className="text-5xl font-medium text-neutral-300"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{delay:1.2}}
                    
                    >A Developer 
                        <br /> Dedicated to Crafting</motion.p>
                        <motion.div
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            transition={{delay:1.5}} 
                        >
                                <FlipWords 
                            words={["Secure" , "Modern" , "Scalbale"]}  
                            className="font-black text-white text-8xl"
                                />
                        </motion.div>

                    <motion.p className="text-4xl font-medium text-neutral-300 "
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{delay:1.8}}
                    >Web Solutions</motion.p>
                </div>
            </div>
                {/*Mobile View */}
            <div className="flex flex-col space-y-6 md:hidden">

                <motion.p className="text-4xl font-medium">Hi , I'm Ayan </motion.p>
                <div>
                    <motion.p className="text-5xl font-black text-neutral-300">Building</motion.p>
                    <div><FlipWords
                words={['Secure' , 'Scalable' , 'Modern']}
                className="font-bold text-white text-7xl"
                    /></div>
                    <motion.p className="text-4xl font-black text-neutral-300">Web Applications</motion.p>
                </div>
            </div>


        </div>

        )
}

export default HeroText