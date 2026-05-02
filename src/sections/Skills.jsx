import {GlareCard}  from '../components/Model'
const skills = [
  { id: 1, texture: '/logos/icons8-html-5-96.png ', name : 'HTML' },
  { id : 2 , texture : '/logos/icons8-css-96.png' , name: 'CSS'},
  {id : 3 , texture : '/logos/icons8-javascript-96.png', name: 'Javascript'},
  {id : 4 , texture : '/logos/icons8-react-96.png' , name : 'React'},
  {id : 5 , texture : '/logos/icons8-tailwind-css-96.png' , name:'Tailwind-css'},
  
 
]

const Skills = () => {
  return (
  <div className="flex flex-col items-center justify-center">
      <p className="mb-20 text-2xl">Frontend Stack </p>
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
};

export default Skills