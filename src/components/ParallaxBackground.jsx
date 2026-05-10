import {motion,useScroll , useSpring , useTransform} from 'motion/react'

function Parallax(){
    const{scrollYProgress} = useScroll();

    const x = useSpring(scrollYProgress,{damping:40});

    const mountain3Y = useTransform(x,[0,0.5] ,["0%" , "50%"]);
    const planetsX = useTransform(x,[0,0.5] ,["0%" , "-20%"]);
    const mountain2Y = useTransform(x,[0,0.5] ,["0%" , "20%"]);
    const mountain1Y = useTransform(x,[0,0.5] ,["0%" , "0%"]);

    return(
        <section className="absolute inset-0 bg-black/40 overflow-hidden">
            <div className="relative h-screen ">
                {/*BACKGROUND SKY */}
                <div
            className="absolute inset-0 w-full h-screen -z-50"
            style={{
                backgroundImage:"url(/assests/sky.jpg)",
                backgroundPosition:"bottom",
                backgroundSize:"cover"
            }}
                
                />
                {/*MOUNTAIN Layer -3*/}
                <motion.div
              className="absolute inset-0  -z-40"
            style={{
                backgroundImage:"url(/assests/mountain-3.png)",
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                y:mountain3Y
            }}   
                
                />
                {/*Planets*/}
                <motion.div
             className="absolute inset-0  -z-30"
            style={{
                backgroundImage:"url(/assests/planets.png)",
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                y:planetsX
            }}     
                
                />
                {/*Mountain Layer -2 */}
                <motion.div
              className="absolute inset-0 -z-20"
            style={{
                backgroundImage:"url(/assests/mountain-2.png)",
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                y:mountain2Y
            }}      
                
                
                />
                {/*Mountain Layer -1*/}
                <motion.div
                 className="absolute inset-0 -z-10"
            style={{
                backgroundImage:"url(/assests/mountain-1.png)",
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                y:mountain1Y
            }}   
                
                />
            </div>
        </section>
    )
}

export default Parallax