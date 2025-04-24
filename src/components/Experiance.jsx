'use client'

import Heading from "./sub/Heading"
import Image from "next/image"

export default function Experiance () {
  return (
    <div className="py-20 px-80 relative
     ">
      <Heading text={'Experiance & Education'}/>
      <Image src={"/education.png"} alt= {'Experiance      Image'}width={400} height={400} 
      className=" absolute -top-4 right-80 opacity-70 lg:hidden md:hidden sm:hidden"
     />
      <div className="w-full h-full flext flex-col items-center justify-center gap-y-10 lg:gap-y-20">  
        <div className="w-[600px] xl:w-[480px] sm:w-full px-12 sm:px-0 relative -left-[100px]">
          <div className=" flex flex-col gap-y-3 rounded-md border border-red-400 bg-white p-4 tracking-wide sm:text-sm">
            <h1 className="text-xl sm:text-lg font-light text-gray-700">Foundation and Basics </h1>
            <p>
              <span>
                Education:
              </span>
              <span>
                Education:  
              </span>
            </p>
            <div>
             <span>
              Experience:
             </span>
             <ul>
              <li>
                experience
              </li>
             </ul>
               <span>
                icon
               </span>
               <div>
                2020
               </div>
            </div>
            <div>
              timeline 
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
