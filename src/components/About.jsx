 'use client'

import Image from "next/image"
import Heading from "./sub/Heading"
import Achievements from "./sub/Achievements"
export default function About() {
  return (
    <div className="min-h-screen px-96 flex flex-col items-center justify-center">
     <Heading text={"About Me"}/> 
      <div className="w-full flex items-center justify-between  md:justify-center">
      <Image src={'/about-me.png'} alt="About Image" width={400} height={400} className="w-[300px] lg:w-[200px] md:hidden "/>
      <div>
        <span>Arrow left</span>
        <p> About text</p>
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

