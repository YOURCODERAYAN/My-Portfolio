import { useFrame } from '@react-three/fiber'
import { useTexture, RoundedBox, Html } from '@react-three/drei'
import { useRef } from 'react'

const Model = ({ texture, index, total, name }) => {
  const tex = useTexture(texture)
  const ref = useRef()

  const col = index % 5
  const row = Math.floor(index / 5)
  const itemsInRow = Math.min(5, total - row * 5)
  const offset = (5 - itemsInRow) / 2

  useFrame((state) => {
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.4
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15
  })

  return (
    <group ref={ref} position={[(col - 2 + offset) * 7, row * -8, 15]}>

      <RoundedBox args={[5, 5, 0.1]} radius={0.2} smoothness={4}>
        <meshStandardMaterial
          color="white"
          roughness={0.1}
          metalness={0.5}
          transparent
          opacity={0.15}
        />
      </RoundedBox>

      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[3.5, 3.5]} />
        <meshBasicMaterial map={tex} transparent toneMapped={false} />
      </mesh>

      {/* name directly under each icon */}
      <Html position={[0, -4, 0]} center>
        <p style={{
          color: 'white',
          fontSize: '13px',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          userSelect: 'none'
        }}>
          {name}
        </p>
      </Html>

    </group>
  )
}

export default Model