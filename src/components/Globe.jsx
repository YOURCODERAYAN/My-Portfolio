import { OrbitControls } from '@react-three/drei'
import{Canvas} from '@react-three/fiber'
import {useTexture} from '@react-three/drei'
import { Environment } from '@react-three/drei'
import {useRef} from 'react'
import {useFrame} from '@react-three/fiber'





const Sphere=()=>{

const meshRef = useRef();

useFrame(()=>{
     meshRef.current.rotation.y += 0.01;
})

    const texture = useTexture('/assests/earth2.jpg')
  return (
    <mesh ref={meshRef} scale={1.5}>
        <sphereGeometry args={[2.8,64 , 64]}/>
        <meshStandardMaterial map={texture}/>
    </mesh>
  )
}




const Globe=()=>{

    return(
    <Canvas camera={{position:[0,0,8] }}>
     <ambientLight intensity={3} />
     <Environment preset='studio' />
        <Sphere/>
    <OrbitControls/>
    </Canvas>
    )
}

export default Globe