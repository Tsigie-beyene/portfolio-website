"use client"

import Heading from "./sub/Heading"
import Image from "next/image"
import { reviewsData,starIcons,arrowIcons } from "@/assets"
import { useEffect, useRef, useState } from "react"
import {animate,motion } from "framer-motion"


export default function Reviews() {
    const [index, setIndex] = useState(0)
    const[direction, setDirection] = useState(false)
    const prevIndex = useRef(0)
    const slides = useRef([])

    const rightClickHandler = () => {
     animate(slides.current[index], {x:0},{delay:0.3},)
     animate(slides.current[prevIndex.current], {scale:index===0?1:.4,
        rotate:index===0?0:index%2===0?10:-10,})
    }

    const leftClickHandler = () => {
        animate(slides.current[index], {scale:1,rotate:0},{delay:0.2})
        animate(slides.current[prevIndex.current], {x:'100%'}, {delay:0.2},)
    } 
    useEffect(() => {
        direction ? leftClickHandler() : rightClickHandler()
        prevIndex.current = index
    },[index]) 

  return (
    <div id="reviews" className="my-20 px-6 md:px-4 ml-[70px] md:ml-0">
        <Heading text={'Reviews'}/>
        <div className="flex flex-col items-center justify-center">
            <motion.div initial={{opacity:0, x:-200}}
             whileInView={{opacity:1, x:0}}
             viewport={{once:true}}
                transition={{duration:.4}}
            className="relative w-[280px] h-[600px] p-2 flex items-center justify-center overflow-hidden
            md:w-[95%] md:h-[400px] md:p-5
            lg:w-[700px] lg:h-[500px]
            xl:w-[800px] xl:h-[500px]">
                {reviewsData.map((review,i) => (
                     <motion.div
                     initial={{x:'100%'}}
                     key={i} className="absolute inset-0 flex flex-col items-center justify-center gap-y-4 border border-yellow-500 bg-zinc-50 p-2 rounded-xl dark:bg-zinc-700 transition-colors
                     md:gap-y-4 md:p-5
                     lg:gap-y-7 lg:p-14"
                     ref={(el) => (slides.current.push(el))}
                     >
                         <Image className="w-[90px] aspect-square rounded-full border border-yellow-500 p-2 object-contain
                         md:w-[110px] md:p-3
                         lg:w-[130px] lg:p-4" 
                         src={review.image}
                          alt="Reviews Image" 
                          width={130} 
                          height={130}
                         />
                         <h1 className="text-xl text-center tracking-wider text-yellow-600 md:text-xl lg:text-2xl">
                            {review.name}
                            </h1>
                         <p className="text-base font-extralight text-center tracking-wider text-gray-600 first-letter:pl-2 dark:text-white transition-colors md:text-sm lg:text-lg">
                            {review.comment}
                         </p>
                         <div className="flex flex-col items-center justify-center gap-y-2">
                             <span className="text-base font-light text-yellow-500 mr-3 md:text-lg">
                                 {review.stars.reduce((sum, item) =>{
                                    return (sum+= item)
                                 },0 ).toFixed(1)}
                                </span>
                             <div className="flex items-center gap-x-2 text-xl text-yellow-500 md:text-2xl">
                                {review.stars.map((star,i) =>(<span key={i} >{
                                    star ===1? starIcons[0] :starIcons[1]
                                }</span>
                            ) )}
                             </div>
                         </div>
                     </motion.div>
                ))} 
            </motion.div>
            <div className="flex gap-x-4 text-3xl text-yellow-500 mt-5 md:text-4xl">
                <button className={`${index===0 ? "opacity-30 pointer-events-none" : "opacity-100 pointer-events-auto hover:scale-150 transition-all"}`}
                onClick={(
                    () => {
                        setDirection(true)
                        setIndex(index-1)
                    }
                )}>{arrowIcons[0]}</button>
                <button 
                className={`${index===reviewsData.length-1 ? "opacity-30 pointer-events-none" : "opacity-100 pointer-events-auto hover:scale-150 transition-all"}`}
                onClick={(
                    () => {
                        setDirection(false)
                        setIndex(index+1)
                    }
                )}
                >{arrowIcons[1]}</button>

            </div>
        </div>
    </div>
  )
}
