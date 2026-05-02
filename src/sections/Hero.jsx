import { OrbitControls } from '@react-three/drei';
import { Astronaut } from '../components/Astronaut';
import HeroText from '../components/HeroText'
import Parallax from '../components/ParallaxBackground';
import {Canvas} from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';
import {Float} from '@react-three/drei'
import { Suspense } from 'react';
import Loader  from '../components/loader'
function Hero(){

    const isMobile = useMediaQuery({maxWidth:853})

        return(
            <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space" id="home">
                <HeroText />
            { /*  <Parallax/> */ }


            <figure
        className="absolute inset-0"
        style={{width:"100vw" , height:"100vh"}}
            >
                    <Canvas  camera={{position:[0,1,3]}}>
                        <Suspense  fallback={<Loader />}>
                             <Astronaut  scale={isMobile&& 0.23} position={isMobile&&[0,-1.5 , 0]}/>   
                             </Suspense>
                            
                            
                    </Canvas>

            </figure>
            </section>
        )
}

export default Hero;