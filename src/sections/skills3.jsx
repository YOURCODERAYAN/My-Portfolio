import Model from '../components/Model2'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

const skills = [
  { id: 1, texture: '/logos/icons8-c++-96.png', name: 'C++' },
  { id: 2, texture: '/logos/icons8-python-96.png',  name: 'Python' },
  { id: 3, texture: '/logos/icons8-javascript-96.png',    name:'Javascript'},
  
]

const Skills2 = () => {
  return (
    <div style={{ height: '580px' ,width:"380px" }}>
      <p className=" text-2xl  pt-10  text-center">Languages </p>

      <div style={{ width: '100%', height: '380px', overflow: 'hidden' }}>
        <Canvas
          style={{ width: '100%', height: '100%' }}
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