import { GlareCard } from '../components/Model'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

const skills = [
  { id: 1, texture: '/logos/icons8-c++-96.png', name: 'C++' },
  { id: 2, texture: '/logos/icons8-python-96.png',  name: 'Python' },
  { id: 3, texture: '/logos/icons8-javascript-96.png',    name:'Javascript'},
  
]

const Skills2 = () => {
  return (
    <div className="flex flex-col items-center justify-center">
            <p className="mb-20 text-2xl">Core Languages</p>
            <div className='grid grid-cols-3 gap-3'>
              {skills.map((skill) => (
                <GlareCard key={skill.id} className="flex flex-col items-center justify-center gap-3">
                  <img src={skill.texture} alt={skill.name} className="w-16 h-16 object-contain" />
                  <p className="text-white text-sm font-semibold">{skill.name}</p>
                </GlareCard>
              ))}
            </div>
          </div>
  )
}

export default Skills2