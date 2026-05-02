import React, { useRef, useEffect, useMemo } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useMotionValue, useSpring } from 'motion/react'

export function Astronaut(props) {
  const group = useRef()

  const { nodes, materials, animations } =
    useGLTF('/models/tenhun_falling_spaceman_fanart.glb', true)

  const { actions } = useAnimations(animations, group)

  const yPosition = useRef(useMotionValue(5)).current
  const ySpring = useSpring(yPosition, {
    damping: 20,
    stiffness: 100,
  })

  // ✅ Filter once, not on every render
  const skinnedMeshes = useMemo(
    () => Object.values(nodes).filter(n => n.type === "SkinnedMesh"),
    [nodes]
  )

  // ✅ Animation start
  useEffect(() => {
    if (!actions || animations.length === 0) return
    const action = actions[animations[0].name]
    action?.reset().fadeIn(0.5).play()
    return () => action?.fadeOut(0.5)
  }, [actions, animations])

  // ✅ Trigger fall
  useEffect(() => {
    yPosition.set(-1)
  }, [yPosition])

  // ✅ Subscribe instead of polling every frame
  useEffect(() => {
    const unsubscribe = ySpring.on("change", (v) => {
      if (group.current) group.current.position.y = v
    })
    return unsubscribe
  }, [ySpring])

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[-Math.PI / 2, -0.2, 2.2]}
      scale={props.scale || 0.3}
      position={props.position || [1.3, -1, 0]}
    >
      <primitive object={nodes.metarig_rootJoint} />
      {skinnedMeshes.map((node, i) => (
        <skinnedMesh
          key={i}
          geometry={node.geometry}
          material={node.material}
          skeleton={node.skeleton}
        />
      ))}
    </group>
  )
}

useGLTF.preload('/models/tenhun_falling_spaceman_fanart.glb', true)