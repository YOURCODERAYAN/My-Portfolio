import React from 'react'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useTexture , Html } from '@react-three/drei'
import {useEffect , useState} from 'react'





    const panelAngle = (Math.PI * 2 / 3) - 0.2
const Cylinder = ({image , links , index , name , tech , githubUrl}) => {


const rotation = (Math.PI * 2 / 3) * index 

    const[hovered , setHovered] = useState(false);
    const [htmlHovered , sethtmlHovered] = useState(false)


    const showOverlay = hovered || htmlHovered


    const angle  = rotation + panelAngle / 2

    const x = Math.sin(angle) *  7
    const y = Math.sin(angle) * 7
   




   

    const texture = useTexture(image) // creating surface image texture //



   function handleClick(){

            window.open(links , '_blank')
    }


    

  return (
    <>

            
                <mesh   onClick={handleClick} rotation={[0,rotation , 0]}  onPointerOver={()=> setHovered(true)} onPointerOut={()=> setHovered(false)}>

                    <cylinderGeometry args={[7 , 7 ,5, 30, 1, true , 0 , panelAngle ]}/>
                    <meshBasicMaterial color="white" map={texture} emmisive="white" emmisiveIntensity={0.25}  side={THREE.DoubleSide} />
        
                </mesh>

            {showOverlay && (



                <Html 
            position={[x , 0 , y]}   
                center
                
                >

                    <div
                     
                  onMouseEnter={()=> sethtmlHovered(true)}
                  onMouseLeave={()=> sethtmlHovered(false)}

                  className="flex items-center justify-center flex-col gap-4"
                  style={{
                    background:'rgba(0,0,0 , 0.75)',
                    backdropFilter :  'blur(8px)',
                    border:'1px solid rgba(255 , 255 , 255 , 0.2)',
                    borderRdius:'12px',
                    paddingTop:"20px",
                    paddingBottom:"20px",
                    paddingleft:"20px",
                    paddingRight:"20px",


                    color:'white',
                    textAlign:'center',
                    pointerEvents:'all',
                    width:'300px',
                    transition:'all 0.3s ease',
                    borderRadius:"10px",
                    
                    
                  }}  
                    
                    >
                       {/* Project name */}
            <p style={{ 
              fontSize: '17px', 
              fontWeight: 'bold',
              marginBottom: '6px',
              letterSpacing: '0.5px'
            }}>
              {name}
            </p>

            {/* Tech stack */}
            <p style={{ 
              fontSize: '15px', 
              color: '#aaaaaa',
              letterSpacing: '0.3px'
            }}>
              {tech}
            </p>

             <a 
        href={githubUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <button className="w-30 border-solid border-2 h-7 rounded-2xl p-4 overflow-hidden flex items-center justify-center cursor-pointer text-2xl">
          <p>GitHub</p>
        </button>
      </a>
          </div>
                </Html>
            )}
 

    </>
  )
}

export default Cylinder