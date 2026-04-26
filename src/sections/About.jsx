import {useRef} from 'react'
import Cards from '../components/Cards'
import Globe from '../components/Globe'
import Copy from  './copy'
import Skills from './Skills'
import Skills2 from './skills2'
import Skills3 from './skills3'

function About(){

        const containerRef = useRef()
        return(
              <>
                <section className="c-space section-spacing mb-0">
                        <h2 className="text-heading">About Me</h2>
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
               {/* Grid -1 */}
                <div className="flex items-end grid-default-color grid-1">
                        <img src="/assests/coding-pov.png" alt="Coding-Image"  className="absolute scale-[1.75] -right-20 -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"/>

                        <div className="z-10">
                                <p className="headtext">Hi, I'm Ayan Saha</p>
                                <p className="subtext">Frontend Developer who writes clean code
                                                     <br />   and builds things that just work. <br />

                                                        Open to opportunities — let's build something.</p>

                        </div>

                </div>

                {/* Grid -2 */}
                <div className="grid-default-color grid-2">

                        <div className="flex items-center justify-center w-full h-full" ref={containerRef}>
                                <p className="flex-items-end text-5xl  text-gray-500">CODE IS CRAFT</p>

                                <Cards text="Clean Code" style={{rotate:"75deg" , top:"30%" , left:"20%" }} containerRef={containerRef}/>
                                <Cards text="Problem Solver" style={{rotate:"-30deg" , top:"30%" , left:"20%"}}  containerRef={containerRef}/>
                                <Cards text="Component Thinking" style={{rotate:"20deg" , bottom:"30%" , left:"70%"}} containerRef={containerRef}/>
                                <Cards text="Debugging > Googling" style={{rotate:"-45deg" , top:"55%" , left:"0%"}} containerRef={containerRef}/>
                                <Cards text="Logic First" style={{rotate:"20deg" , top:"10%" , left:"38%"}} containerRef={containerRef} />
                                <Cards text="Always Learning" style={{rotate:"20deg" , top:"10%" , left:"38%"}} containerRef={containerRef} />


                                <Cards images="/assests/icons8-javascript-64.png" style={{ rotate:"70deg" ,top:"70%" , left:"70%"}} containerRef={containerRef} />
                                <Cards images="/assests/icons8-react-100.png" style={{ rotate:"30deg" ,top:"50%" , left:"40%"}} containerRef={containerRef}/>
                                <Cards images="/assests/icons8-html-5-64.png" style={{ rotate:"30deg" ,top:"40%" , left:"50%"}} containerRef={containerRef}/>
                                <Cards images="/assests/css-3.png" style={{ rotate:"30deg" ,top:"40%" , left:"50%"}} containerRef={containerRef}/>



                        </div>
                </div>

                {/* Grid -3 */}
                 <div className="  grid-default-color grid-3" style={{backgroundImage: "url('assests/stars.jpg')", backgroundPosition:"center", backgroundRepeat:"no-repeat" , backgroundSize:"cover"}}>
                        <div className="z-10 w-[-50%]">
                                <p className="headtext"> Time Zone</p>
                                <p className="subtext">I'm based on India ,<br /> and open to remote work <br /> worldwide</p>
                        </div>

                        <figure className="absolute left-2/3 top-2/4 -translate-x-1/2 -translate-y-1/2 w-80 h-60">
                                <Globe />
                        </figure>
                 </div>

                {/* Grid -4 */}

                <div className="grid-special-color grid-4">                                                                                                                                                                                                                                                                                                                             

                        <div className="flex flex-col  items-center gap-4 size-full">
                                        <p className="text-center head-text mt-0">
                                                        Do you want to start a project together ? 
                                        </p>

                        {/* copy button */}
                        <Copy />
                        </div>

                </div>


                {/*grid-5*/}

                <div className=" grid-5 " style={{backgroundImage : "url('/assests/27230.jpg')"  , backgroundPosition:'center' , backgroundRepeat:'no-repeat' , backgroundSize:'cover'}}>

                        <div>
                                <Skills />

                        </div>
                </div>
                </div>
               

                </section>


                <div className="flex flex-row  items-center justify-center gap-10  -mt-12 rounded-2xl">

                        <div className="flex items-center justify-center rounded-2xl w-190 p-10 gap-10" style={{backgroundImage: "url('assests/27230.jpg')" , backgroundPosition:'center' , backgroundRepeat:'no-repeat' , backgroundSize:'cover' }}>
                                       <Skills2 />
                        </div>


                        <div className="flex items-center justify-center rounded-2xl   -ml-3"  style={{backgroundImage: "url('assests/27230.jpg')" , backgroundPosition:'center' , backgroundRepeat:'no-repeat' , backgroundSize:'cover'}}>
                               <Skills3 />
                        </div>

                </div>

                




                </>

             

        )
}
export default About



