 'use client'

import Hero from '@/components/Hero';
import About from '@/components/About';
import Experiance from '@/components/Experiance';
import Skill from '@/components/Skill';
import Reviews from '@/components/Reviews';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Questions from '@/components/Questions';

export default function Home() {
  return  <div > 
    <Hero />
    <About /> 
    <Experiance/>
    <Skill/>
    <Reviews/>
    <Projects/>
    <Contact/>
    <Questions/>
    {/* <Footer/> */} 
    
    </div>
  
}
