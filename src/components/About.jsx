'use client'

import Image from "next/image"
import Heading from "./sub/Heading"
import Achievements from "./sub/Achievements"
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from "@/assets"

export default function About() {
  return (
    <div id="about" className="min-h-screen flex flex-col items-center justify-center px-15 sm:px-6 md:px-2 lg:px-o.5 xl:px-0.5">
      <Heading text={"About Me"} />

      {/* Main Section: Image + Text */}
      <div className="w-full flex flex-col items-center gap-6 md:flex-row md:justify-center md:items-start">
        
        {/* Image (shown on all devices, scaled based on screen size) */}
        <Image
          src="/about-me.png"
          alt="About Image"
          width={400}
          height={400}
          className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[300px]"
        />

        {/* Text Box */}
        <div className="relative w-full max-w-[800px] rounded-xl bg-zinc-100 p-4 sm:p-6 text-justify dark:bg-zinc-700 transition-colors">
          
          {/* Decorative Arrow (shown only on medium and up) */}
          <span className="hidden md:block absolute -left-5 top-25 scale-[2.5] text-zinc-100 dark:text-zinc-700 transition-colors">
            {arrowLeftIcon}
          </span>

          {/* About Text */}
          <p className="text-base font-light text-gray-700 sm:text-[15px] md:text-[16px] lg:text-lg dark:text-white first-letter:pl-3">
            {aboutText}
          </p>

          {/* Download CV Button */}
          <a
            href="/Tsigie_Beyene_Resume.pdf"
            download
            className="mt-6 inline-flex items-center gap-x-2 rounded-full border border-gray-300 bg-red-400 px-4 py-2 text-sm sm:text-base font-light text-white hover:bg-red-500 transition-colors"
          >
            <span>Download CV</span>
            <span className="text-2xl">{downloadIcon}</span>
          </a>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mt-16 w-full flex flex-wrap items-center justify-center gap-x-7 gap-y-10">
        {aboutData.map((item, i) => (
          <Achievements key={i} title={item.title} amount={item.amount}>
            {item.icon}
          </Achievements>
        ))}
      </div>
    </div>
  )
}
