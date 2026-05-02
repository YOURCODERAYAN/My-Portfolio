import {GlareCard} from '../components/Model2'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

const skills = [
  { id: 1, texture: '/logos/icons8-three.js-96.png',           name: 'Three.js'      },
  { id: 2, texture: '/logos/framer-motion.svg',                name: 'Framer-motion' },
  { id: 3, texture: '/logos/gsap1.svg',                         name: 'GSAP'          },
  { id: 4, texture: '/logos/router2.svg',                 name: 'React-Router'  },
  { id: 5, texture: '/logos/icons8-github-96.png',             name: 'Github'        },
  { id: 6, texture: '/logos/icons8-visual-studio-code-96.png', name: 'Vscode'        },
  { id: 7, texture: '/logos/icons8-git-96.png',                name: 'Git'           },
  { id: 7, texture: '/logos/puter-logo.png',                name: 'Puter. js'           },
  {id:8 , texture:'/logos/icons8-figma-96.png' , name:'Figma'},
  {id:9 , texture:'/logos/logo.png' , name:"Aceternity UI"},
]

const Skills2 = () => {
  return (
   <div className="flex flex-col items-center justify-center">
         <p className="mb-20 text-2xl">Tools & Libraries </p>
         <div className='grid grid-cols-5 gap-3'>
           {skills.map((skill) => (
             <GlareCard key={skill.id} className="flex flex-col items-center justify-center gap-3">
               <img src={skill.texture} alt={skill.name} className="w-16 h-16 object-contain" />
               <p className="text-white text-sm font-semibold">{skill.name}</p>
             </GlareCard>
           ))}
         </div>
       </div>
     );
}

export default Skills2