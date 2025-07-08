 'use client'

import Heading from "./sub/Heading"
import Image from "next/image"
import { skillsData } from "@/assets"
import { motion } from "framer-motion"

const Skill = () => {
  const variants={
    visible:(i)=>(
      {
        opacity:1,
        y:0,
        transition:{
          delay:0.3 + i*0.07,
        },
      }),
    hidden:{
      opacity:0,
      y:30,
    },
  }
  return (
    <div id="skills" className="min-h-screen flex flex-col items-center justify-center gap-y-12 px-4 sm:gap-y-20">
        <Heading text={'Skills & Tools'}/>
        <div className="w-full flex flex-wrap justify-center gap-y-6 gap-x-4 sm:gap-x-8 sm:gap-y-10 lg:gap-y-6">
          {skillsData.map((item,i) => (
            <motion.div 
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover={{scale:1.1}}
            viewport={{margin:'50px',once:true}}
            key={i}
            className="flex items-center justify-center gap-x-2 rounded-xl border border-yellow-500 bg-zinc-200 px-3 py-2 sm:gap-x-3 sm:px-5 lg:px-2">
                <Image src={item.icon} alt ="skills Image" width={100} height= {100}
                className="h-auto w-[40px]" />
                <p className="text-sm text-gray-600">{item.name}</p>
            </motion.div>
         ) )}
        </div>
    </div>
  )
}

export default Skill