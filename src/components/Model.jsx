import * as THREE from "three"
import { useTexture, ContactShadows  , RoundedBox} from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import {Canvas} from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei"
import { Environment } from "@react-three/drei"
const Model = ({ texture }) => {
  const tex = useTexture(texture)
 const ref = useRef()

useFrame((state) => {
  // gentle sway instead of full spin
  ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.4
  ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15

  // floating — keep this, it's perfect!
  ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
})

  return (
    <group ref={ref} >
      
    
      {/* BACK (white glossy card) */}
      <RoundedBox args={[4, 4, 0.1]} radius={0.2} smoothness={4}>
        <meshStandardMaterial
          color="white"
          roughness={0.1}   // ✨ glossy feel
          metalness={0.5}
          transparent={true}
          opacity={0.1}
        />
      </RoundedBox>

      {/* FRONT (image) */}
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial map={tex} transparent  toneMapped={false}  />
      </mesh>

      {/* SHADOW */}
     
    </group>
  )
}

const Render = ({ texture  , name }) => {
  return (
    <div className="w-30 h-30">
      <Canvas >
       
        <ambientLight intensity={3} />
        <pointLight position={[-5 , -5 , -5 ]} intensity={0.5}  color="#6366f1"/>

        <directionalLight
         position={[5, 5, 5]}
            intensity={1.5}
                />

        <Environment preset="studio" />

        <Model texture={texture} />
      </Canvas>

   <div className="text-center">   {name} </div>
    </div>
  )
}

export default Render