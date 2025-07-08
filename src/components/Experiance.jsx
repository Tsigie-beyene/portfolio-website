'use client'
import Heading from "./sub/Heading"
import Image from "next/image"
import { arrowLeftIcon, experienceData } from "@/assets"
import {motion,useScroll,useSpring} from "framer-motion"
import{useRef} from "react"

export default function Experiance () {
  const date= new Date().getFullYear()

  const containerRef=useRef(null)

  const {scrollYProgress} =useScroll({
    target:containerRef,
    offset:['start 95%','end end'],
  })

  const scrollY =useSpring(scrollYProgress,{
    stiffness:200,
    damping:20, 
  })
    
  return (
    <div id="experience" className="py-20 px-8 relative">
      <Heading text={'Experience & Education'}/>
      <Image 
      src={"/education.png"} 
      alt= {'Experience Image'}
      width={300} height={300} 
      className="absolute -top-4 right-0 pt-20 opacity-70 hidden lg:block"
      />

      <div ref={containerRef} className="relative w-full h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20">
        {experienceData.map((data,i)=>(
          <div
          key={`id-${i}`}
          className={`w-full px-4 lg:px-8 xl:px-14 relative left-0
            sm:w-full sm:px-0
            lg:w-[480px] lg:px-12
            xl:w-[600px]
            ${i % 2 === 0
              ? 'left-0 lg:-left-[240px] xl:-left-[300px]'
              : 'left-0 lg:left-[240px] xl:left-[300px]'
            }`}>
          <motion.div 
          initial ={{opacity:0, x:i % 2 === 0 ? -80: 80}} 
          whileInView={{opacity:1, x:0}}
          viewport={{once:true}}
          transition={{duration:.7,type:'spring',stiffness:50}}
          className="relative flex flex-col gap-y-3 rounded-md border border-red-400 bg-white p-4 tracking-wide text-sm lg:text-base dark:bg-zinc-700 transition-colors z-20 sm:text-sm">
            <h1 className="text-lg font-earthlight text-gray-700 dark:text-gray-100 sm:text-xl">{data.title} </h1>
            <p className="text-gray-800 dark:text-gray-100" >
              <span className="block font-earthlight">Education: </span>
              <span className="block pl-2 font-light">{data.education} </span>
            </p>  
            <div className="text-gray-800 dark:text-gray-200 transition-colors">
             <span className="font-earthlight">Experience:</span>
             <ul 
             className="pl-2">
              {data.experience.map((exp,j)=>(
                <li key={j} className="my-1 font-light">
                  {exp}
                </li>
              )
            )}   
             </ul>
            </div>
               <span className={`absolute top-20 text-red-300 -translate-y-1/2 hidden lg:block ${
              i % 2 === 0 ? 'left-full rotate-180' : 'right-full'
               }`}>
                {arrowLeftIcon}</span>  
          </motion.div>
              <div className={`w-14 absolute top-20 border border-gray-300 rounded-full aspect-square grid place-items-center
              text-red-400 font-light -translate-y-1/2 z-10 bg-white
              ${i % 2 === 0 ? 'left-1/2 -translate-x-1/2 lg:left-full lg:-translate-x-1/2' : 'right-1/2 translate-x-1/2 lg:right-full lg:translate-x-1/2' 
              }`}>
                {date-experienceData.length + i +1}
              </div>
          </div>
        )  
        )}  
           <motion.div initial={{scaleY:0}} 
           style={{scaleY:scrollY}}
           className="absolute w-1 h-full rounded-full bg-gray-300 left-1/2 top-0 origin-top">
           </motion.div>
        </div>
      </div>
 
  )
}