import Model from '../components/Model2'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

const skills = [
  { id: 1, texture: '/logos/icons8-three.js-96.png',           name: 'Three.js'      },
  { id: 2, texture: '/logos/framer-motion.svg',                name: 'Framer-motion' },
  { id: 3, texture: '/logos/gsap.svg',                         name: 'GSAP'          },
  { id: 4, texture: '/logos/react-router.svg',                 name: 'React-Router'  },
  { id: 5, texture: '/logos/icons8-github-96.png',             name: 'Github'        },
  { id: 6, texture: '/logos/icons8-visual-studio-code-96.png', name: 'Vscode'        },
  { id: 7, texture: '/logos/icons8-git-96.png',                name: 'Git'           },
  { id: 7, texture: '/logos/puter-logo.png',                name: 'Puter. js'           },
]

const Skills2 = () => {
  return (
    <div style={{ height: '500px' }}>
      <p className=" text-2xl text-center">Libraries and Tools </p>

      <div style={{ width: '100%', height: '380px', overflow: 'hidden' }}>
        <Canvas
          style={{ width: '100rem', height: '100%' }}
          camera={{ position: [0, 2, 32] }}
        >
          <ambientLight intensity={3} />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#6366f1" />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Environment preset="studio" />

          {skills.map((skill, index) => (
            <Model
              key={skill.id}
              texture={skill.texture}
              index={index}
              total={skills.length}
              name={skill.name}
            />
          ))}
        </Canvas>
      </div>

    </div>
  )
}

export default Skills2