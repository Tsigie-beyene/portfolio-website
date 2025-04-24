'use client'

import Heading from "./sub/Heading"
import Image from "next/image"
import { arrowLeftIcon, experienceData } from "@/assets"

export default function Experiance () {
  const date= new Date().getFullYear()
  return (
    <div className="py-20 px-70 relative">
      <Heading text={'Experiance & Education'}/>
      <Image 
      src={"/education.png"} 
      alt= {'Experiance Image'}
      width={400} height={400} 
      className=" absolute -top-4 right-70 opacity-70 lg:hidden md:hidden sm:hidden"
      />

      <div className=" w-full h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20">
        {experienceData.map((data,i)=>(
          <div
          key={'id-${i}'}
          className=" w-[600px] xl:w-[480px] sm:w-full px-12 sm:px-0 relative -left-[300px]">
          <div className=" relative flex flex-col gap-y-3 rounded-md border border-red-400 bg-white p-4 tracking-wide sm:text-sm">
            <h1 className="text-xl sm:text-lg font-light text-gray-700">{data.title} </h1>
            <p className="text-gray-800" >
              <span className="blcok font-light">Education: </span>
              <span className="block pl-2 font-extralight ">{data.education} </span>
            </p>
            <div className="text-gray-800">
             <span className="font-light">Experience:</span>
             <ul 
             className="pl-2">
              {data.experience.map((exp,j)=>(
                <li key={j} className="my-1 font-extralight">
                  {exp}
                </li>
              )
            )}   
             </ul>
            </div>
               <span className="absolute top-20 left-full text-red-300">{arrowLeftIcon}</span>  
            </div>
              <div className="w-14 absolute top-20 left-full border border-gray-30 rounded-full aspect-square grid place-items-center
              text-red-400 font-light ">
                {date-experienceData.length + i +1}
              </div>
          </div>
        )  
        )}  
           <div className="absolute w-1 h-full rounded-full bg-gray-300"> </div>
        </div>
      </div>
 
  )
}
