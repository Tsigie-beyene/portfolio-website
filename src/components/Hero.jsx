'use client'
import Image from "next/image";
import { heroIcons } from "@/assets/index";
import { useMotionValue, useTransform,motion,useSpring} from "framer-motion";
import { useState } from "react";

export default function Hero() {

   const [windowOffset,setWindowOffset] =useState({innerWidth:0 , innerHeight:0})
   const [mouseMove,setMouseMove] =useState(false)
   const [buttonHover,setButtonHover]= useState(false)
   const x =useMotionValue(0)
   const y =useMotionValue(0)

   const handleMouseMove=(e)=>{
      const {clientX,clientY} = e
      x.set(clientX)
      y.set(clientY)

      // console.log(clientX,clientY,x,y)
   }

   const handleMouseEnter =() =>{
       setWindowOffset({innerWidth:window.innerWidth, innerHeight:window.innerHeight})
       setMouseMove(true)

   }
  const {innerWidth,innerHeight} =windowOffset

   const xSpring =useSpring(x,{stiffness:100, damping:10})
   const ySpring =useSpring(y,{stiffness:100, damping:10}) 
 

  const rotateY= useTransform(xSpring,[0,innerWidth],[-30,30])
  const rotateX=useTransform(ySpring,[0,innerHeight],[10,-50])

  return (  
    <div 
    id="home"
    className="grid h-screen place-items-center" 
    onMouseMove={handleMouseMove}
    onMouseEnter={handleMouseEnter}
    >
     <div>
          <motion.div 
          initial={{opacity:0,y:-100}}
          animate={{opacity:1,y:0}}
          transition={{delay:0.5}}
          className="flex-col items-center justify-center font-light capitalize flex gap-y-3 ">
             <motion.div 
             className="flex items-center justify-center" 
             style ={{
                 rotateX: mouseMove ? rotateX: 0,
                 rotateY: mouseMove ? rotateY: 0,
                 transition: '0.1s',
             }}>
                <Image 
                src={'/person.png'} 
                alt="person Image" 
                width={400} 
                height={400} 
                priority={true}
                className="h-auto w-[150px]"
                />
                <motion.span className="absolute text-3xl font-semibold text-white"
                 initial={{scale:0}}
                 animate={{opacity: buttonHover? 0:1,
                  scale:buttonHover? 2:0,
                  y: buttonHover? -40: 0,
                 }}
                 transition={{opacity:{delay:0.4}}}
                 > Hi </motion.span>
            </motion.div>
            <h1 className="text-3xl font-bold tracking-wider text-center text-gray-500 transition-colors dark:text-white">Hi I'm Tsigie Beyene &</h1>
            <p className="text-lg tracking-wider text-center text-gray-700 transition-colors dark:text-gray-200">A Passionate Full-Stack Developer 😊</p>
         </motion.div>
         <motion.div 
         initial={{opacity:0,y:100}}
         animate={{opacity:1,y:0}}
         transition={{delay:0.5}}
      
         className="flex justify-center mt-8 text-3xl text-yellow-600 gap-x-10">
        {heroIcons.map((item, i) => (
  <a
    href={item.url}
    key={i}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 transition-colors rounded-lg hover:bg-red-400 hover:text-white"
  >
    {item.icon}
  </a>
))}
         </motion.div>
         <motion.a
           initial={{opacity:0,x:-30}}
         animate={{opacity:1,x:0}}
         transition={{delay:0.7}}
      
         href="/#contact" className="block px-3 py-1 mx-auto font-light tracking-wider text-white capitalize transition-colors bg-red-400 rounded-lg mt-7 w-max hover:bg-red-500"
         onMouseEnter={()=>setButtonHover(true)}
         onMouseLeave={()=>setButtonHover(false)}
         
         >Talk to me
         </motion.a>
    </div>    
    </div>
  );
}

 