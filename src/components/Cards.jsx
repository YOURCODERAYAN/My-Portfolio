import React from 'react'
import{motion} from 'motion/react'

const Cards = ({text , style , images , containerRef}) => {
  return images && !text ?(
    <motion.img src={images} alt="logo-iamges" style={style} className="absolute w-15 cursor-grab"
    whileHover={{scale:1.06}}
    drag
    dragElastic={1}
    dragConstraints={containerRef}
    
    
    />):(
    <motion.div className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-48 cursor-grab" style={style} 
    whileHover={{scale:1.06}}
    drag
    dragElastic={1}
    dragConstraints={containerRef}
    >
        {text}
    </motion.div>
  )
}

export default Cards