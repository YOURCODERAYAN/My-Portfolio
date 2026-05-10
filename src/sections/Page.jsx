import React from 'react'
import Cylinder from '../components/cylinder'
import {Canvas} from '@react-three/fiber'
import met from '../constants/met'
import {motion} from 'motion/react'
import {useRef , useState} from 'react'
import {useFrame} from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Environment } from '@react-three/drei'




const Scene = ({met}) => {

    const[hovered , setHovered] = useState(false)

const ref = useRef(null)

useFrame(()=>{
    if(ref.current){
        
        ref.current.rotation.y+= hovered ? 0.001 : 0.005
    }

})
  return (
    <group ref={ref} rotation={[0 , 1 , -0.4]} onPointerOver={()=> setHovered(true)} onPointerOut={()=> setHovered(false)}>

    {
        met.map((item , index)=>(

    <Cylinder 
    
    key={index}
    image={item.img}
    links={item.link}
    index={index}
    name={item.name}
    tech={item.tech}
    githubUrl={item.githubUrl}
    
    />
        ))
    }
    </group>


  )
}




const Page = () => {


  
  return (
    
           
                    <div className="w-full h-96">
                     
                           <Canvas camera={{position :[0 , -1, 20] , fov:40 }} style={{width:"100rem" , height:"33rem", marginTop:"30px"}}>

                            <Scene met={met}/>
                            <EffectComposer>

                                <Bloom
                            intensity={0.3}
                            luminanceThreshold={1}
                            luminanceSmoothing={0.8}
                            radius={0.8}
                                
                                />
                            </EffectComposer>
                                <ambientLight intensity={0.5} />
                                <directionalLight position={[5, 5 , 5]} intensity={1.2} />
                                <directionalLight position={[-5 , -5 , -5]} internsity={0.4} />
                                
                                <Environment preset='city' />
                            </Canvas>

                     
                         
                           
                    </div>


            
            
  )
}

export default Page