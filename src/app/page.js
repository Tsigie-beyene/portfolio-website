 'use client'

import Hero from '@/components/Hero';
import About from '@/components/About';
import Experiance from '@/components/Experiance';
import Skill from '@/components/Skill';
import Reviews from '@/components/Reviews';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Questions from '@/components/Questions';
import Navbar from '@/components/Navbar';
import Toggle from '@/components/sub/Toggle';
import Load from '@/components/sub/Load';
import { useState,useRef, useEffect } from 'react';

export default function Home() { 
  const [id, setId] = useState(0);
  const compsRef= useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
     entries.forEach((entry) => { 
      const intrsecting = entry.isIntersecting
      if (intrsecting) {
        setId(entry.target.id)
         }
       })
     },
     {threshold:0.3},
  )

  const compsArr = Array.from(compsRef.current.children)
  compsArr.forEach((comp) => {
    observer.observe(comp)
  })
       
}, [])
  return (
    <>
    <Load />
    <Toggle>
   <Navbar id={id} /> 
    <div className="w-min" ref={compsRef} > 
    <Hero />
    <About /> 
    <Experiance/>
    <Skill/>
    <Reviews/>
    <Projects/>
    <Contact/>
    <Questions/>
    
    </div>
    </Toggle>
    </>
 
  )
}
