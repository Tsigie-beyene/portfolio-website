 'use client'

import Heading from "./sub/Heading"
import Image from "next/image"

const Skill = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-20 px-70">
        <Heading text={'Skills & Tools'}/>
        <div className="w-full flex flex-wrap justify-between gap-x-8 gap-y-10 lg:gap-y-6">
            <div className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500
            bg-zinc-200 px-5 py-2 lg:px-2">
                <Image src={'/skills/nextjs.png'} alt ="skills Image" width={100} height= {100} />
                <p>NextJS</p>
            </div>
        </div>
    </div>
  )
}

export default Skill