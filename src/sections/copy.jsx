import React from 'react'
import Type from '../components/type'
import { AnimatePresence , motion } from 'motion/react'
import {useEffect , useState} from 'react'

const Copy = () => {

  const[show , setShow] = useState(false)
  const[time , setTime] = useState("")
  const[copi , setCopi] = useState(false)
function generate(){

    const email  = "ayanwork2003@gmail.com"

                    navigator.clipboard.writeText(email) // This is for email copy to clipboard//

        // now we have to update date and time 

        const now = new Date();

        const formatted = now . toLocaleString("en-IN",{

          day:"2-digit",
          month:"short",
          year:"numeric",
          hour:"2-digit",
          minute:"2-digit",

        })

setTime(formatted);
setShow(true);
setCopi(true);

}

useEffect(()=>{

  if(show){
      const timer = setTimeout(()=>{

        setShow(false)
        setTime("")
      },2000)
      return ()=>clearTimeout(timer)
  }

},[show])





  return (
    <div className="flex flex-col items-center justify-center">

                <button className="bg-white w-43 h-14 rounded-2xl text-black flex items-center justify-center pt-2 pb-2 pl-2 pr-2 " onClick={generate}>
                  <img src="/assests/file-copy-line.svg" alt="copyicon"  className="h-6 w-6 "/>

                  Copy Email
                </button>

                <div className="relative ">
                  <AnimatePresence>
                      { show &&(
                                <motion.div className="flex items-center justify-center absolute left-1/2 -translate-x-1/2 "  
                       initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: show ? 1 : 0,
                        y: show ? 0 :20
                        }}>
                                    <Type  time={time}/>
                                </motion.div>
                                )
                                }



                  </AnimatePresence>


                </div>

               
    </div>
  )
}

export default Copy