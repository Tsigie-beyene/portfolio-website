"use client"

import Heading from "./sub/Heading"
import Image from "next/image"
import { reviewsData,starIcons,arrowIcons } from "@/assets"

export default function Reviews() {
  return (
    <div className="my-20 px-80">
        <Heading text={'Reviews'}/>
        <div className="flex flex-col items-center justify-center">
            <div className="relative w-[800px] lg:w-[600px] md:w-[95%] sm:w-[280px] *
            h-[500px] lg:h-[450px] md:h-[400px] sm:h-[600px] flex items-center justify-center" >
                {reviewsData.map((review,i) => (
                     <div key={i} className="absolute inset-0 flex flex-col items-center justify-center gap-y-7
                     lg:gap-y-4 border border-yellow-500 bg-zinc-50 p-14 lg:p-5 rounded-xl">
                         <Image className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 *
                         object-contain" 
                         src={review.image}
                          alt="Reviews Image" 
                          width={130} 
                          height={130}
                         />
                         <h1 className="text-2xl md:text-xl text-center tracking-wider text-yellow-600">
                            {review.name}
                            </h1>
                         <p className=" text-lg md:text-sm text-center tracking-wider text-gray-600
                         first-letter:pl-2">
                            {review.comment}
                         </p>
                         <div className="flex flex-col items-center justify-center gap-y-2">
                             <span className="text-lg font-light text-yellow-500 mr-3">
                                 {review.stars.reduce((sum, item) =>{
                                    return (sum+= item)
                                 },0 ).toFixed(1)}

                                </span>
                             <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                                {review.stars.map((star,i) =>(<span>stars</span>
                            ) )}
                                 
                             </div>
                         </div>
                     </div>
                ))} 
               
            </div>
            <div className="flex gap-x-4 text-4xl text-yellow-500 mt-5">
                <button>Left</button>
                <button>Right</button>

            </div>
        </div>
    </div>
  )
}
