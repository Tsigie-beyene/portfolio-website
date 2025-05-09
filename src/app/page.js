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

export default function Home() {
  return (
    <>
   <Navbar/> 
    <div > 
    <Hero />
    <About /> 
    <Experiance/>
    <Skill/>
    <Reviews/>
    <Projects/>
    <Contact/>
    <Questions/>
    
    </div>
    </>
 
  )
}
