"use client";
import { moonIcon,sunIcon } from "@/assets";

const Toggle = ({children}) => {
  return (
  <main>
    <div className="bg-zinc-50">
        <div className="max-w-[1200px] xl:w-full mx-auto flex justify-center xl:px-[90px]
        sm:pl-[80px] sm:pr-5 overflow-hidden">
            <button className="fixed right-14 sm:right-10 top-10 text-yellow-600 
            hover:text-yellow-500">
                <span className="absolute block rounded-full bg-zinc-50 p-1 text-4xl">{moonIcon}</span>
                {/* <span className="absolute block rounded-full bg-zinc-50 p-1 text-3xl">{sunIcon}</span> */}

            </button>
            {children}
        </div>
    </div>
  </main>
  )
}

export default Toggle