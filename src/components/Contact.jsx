"use client"

import Heading from "./sub/Heading"
import Image from "next/image"
import {motion} from "framer-motion"

function Contact() {
  return (
    <div className="h-screen py-20 px-80">
        <Heading text={'Get in touch'}/>
        <div className="w-full h-full my-auto flex lg:flex-col items justify-between lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20">
            <motion.div
            initial={{opacity:0,y:150}}
            whileInView={{opacity:1,y:0}} 
            transition={{duration:.4}}
            viewport={{once:true}}
            >
                <Image src={'/contact.gif'}
                alt="Contact Image" 
                width={400}
                height={400}
                className="w-[400px] rounded-md opacity-80"
                />
            </motion.div>
            <motion.form 
            initial={{opacity:0,x:150}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.4}}
            viewport={{once:true}}
            className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3">
                <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
                    <input type="text" placeholder="Your Name" className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2
                    text-sm tracking-wider text-gray-500 outline-none"/>
                    <input type="email" placeholder=" Your Email" className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2
                    text-sm tracking-wider text-gray-500 outline-none"/>
                </div>
                <input type="text" placeholder="Subject" className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2
                    text-sm tracking-wider text-gray-500 outline-none"/>
                <textarea placeholder="Write Me..." className="max-h-[250px] min-h-[150px] w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2
                    text-sm tracking-wider text-gray-500 outline-none"></textarea>
                <input type="submit" value="Send Message" className="w-full border border-yellow-500 bg-yellow-600 rounded-md  px-4 py-2
                    text-sm font-light tracking-wider text-white-500 outline-none hover:bg-yellow-500 transition-colors cursor-pointer"/>
            </motion.form>
        </div>
    </div>
  )
}

export default Contact