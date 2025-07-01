"use client"

import Heading from "./sub/Heading"
import Image from "next/image"
import {motion} from "framer-motion"
import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus(null)

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error')
      setIsLoading(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error')
      setIsLoading(false)
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' })
        setSubmitStatus('success')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div id="contact" className="h-screen lg:h-auto py-20 lg:py-40 xs:pb-20 ">
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
            onSubmit={handleSubmit}
            className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3">
                <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name" 
                      className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2
                      text-sm tracking-wider text-gray-500 outline-none focus:border-yellow-600 focus:bg-white transition-colors"
                      required
                    />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email" 
                      className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2
                      text-sm tracking-wider text-gray-500 outline-none focus:border-yellow-600 focus:bg-white transition-colors"
                      required
                    />
                </div>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject" 
                  className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2
                  text-sm tracking-wider text-gray-500 outline-none focus:border-yellow-600 focus:bg-white transition-colors"
                  required
                />
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write Me..." 
                  className="max-h-[250px] min-h-[150px] w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2
                  text-sm tracking-wider text-gray-500 outline-none focus:border-yellow-600 focus:bg-white transition-colors resize-none"
                  required
                ></textarea>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 text-sm text-center bg-green-100 p-2 rounded-md"
                  >
                    Message sent successfully! Check your email client.
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-sm text-center bg-red-100 p-2 rounded-md"
                  >
                    Please fill all fields correctly and try again.
                  </motion.div>
                )}
                
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className={`w-full border border-yellow-500 rounded-md px-4 py-2
                  text-sm font-light tracking-wider text-white outline-none transition-colors cursor-pointer
                  ${isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-yellow-600 hover:bg-yellow-500'
                  }`}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-2">
                  Or email me directly at: <a href="mailto:tsigiebey29@gmail.com" className="text-yellow-600 hover:underline">tsigiebey29@gmail.com</a>
                </p>
            </motion.form>
        </div>
    </div>
  )
}

export default Contact