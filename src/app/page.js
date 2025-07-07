"use client";

import { useState, useRef, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experiance from "@/components/Experiance";
import Skill from "@/components/Skill";
import Reviews from "@/components/Reviews";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Questions from "@/components/Questions";
import Navbar from "@/components/Navbar";
import Toggle from "@/components/sub/Toggle";
import Load from "@/components/sub/Load";

export default function Home() {
  const [id, setId] = useState(0);
  const compsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setId(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const compsArr = Array.from(compsRef.current.children);
    compsArr.forEach((comp) => observer.observe(comp));

    // Cleanup on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Load />
      <Toggle>
        <Navbar id={id} />
        <div className="w-full mx-auto px-20" ref={compsRef}>
          <Hero />
          <About />
          <Experiance />
          <Skill />
          <Reviews />
          <Projects />
          <Contact />
          <Questions />
        </div>
      </Toggle>
    </>
  );
}
