 "use client" 
 import Image from "next/image"
 import {motion} from "framer-motion"
 import {useState} from "react"
function Project({data,index}) {
  const[show,setShow] = useState(false)
  return (
    <motion.div 
    initial={{opacity:0,y:index%2===0 ? 100 : -100}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:1,type:'spring',stiffness:100}}
    onClick={()=>setShow((show)=>!show)}
    className=" relative w-[300px] sm:w-[350px] sm:w-full h-max border 
    border-yellow-400 rounded-lg cursor-pointer">
        <Image src={data.url} 
         alt="Project Image"
            width={400}
            height={400}
            className="transition-opacity duration-300 rounded-lg opacity-80 hover:opacity-100"
        />
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:show ? 1 : 0}}
        className="absolute  flex flex-col items-center justify-center inset-0 w-full h-full p-0 md:p-6 transition-colors rounded-lg gap-y-0 md:gap-y-2 bg-white/95 dark:bg-zinc-700/95">
            <h2 className="text-lg font-bold tracking-wide text-gray-500 transition-colors dark:text-white">{data.name}</h2>
            <p className="text-justify text-gray-500 transition-colors first-letter:pl-2 dark:text-gray-100">{data.desc}</p>
        </motion.div>
    </motion.div>
  )
}

export default Project