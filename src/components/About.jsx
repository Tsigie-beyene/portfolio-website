 'use client'

import Image from "next/image"
import Heading from "./sub/Heading"
import Achievements from "./sub/Achievements"
import { aboutData,aboutText,downloadIcon,arrowLeftIcon } from "@/assets"
export default function About() {
  return (
    <div className="min-h-screen px-96 flex flex-col items-center justify-center">
     <Heading text={"About Me"}/> 
      <div className="w-full flex items-center justify-between  md:justify-center">
      <Image src={'/about-me.png'} alt="About Image" width={400} height={400} className="w-[300px] lg:w-[200px]  "/>
      <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify">
        <span className="absolute -left-5 top-30 scale-[2.5] text-zinc-100  ">{arrowLeftIcon}</span>
        <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px]"> {aboutText}</p>
        <a href="/nick-cv.pdf" downloads="">
          <span>Download CV</span>
          <span>Download icon</span>


        </a>
      </div>
      </div>
        <div>
          <Achievements/>
        </div>
      </div>
  )
}

