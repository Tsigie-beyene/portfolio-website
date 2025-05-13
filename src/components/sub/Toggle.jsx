"use client";
import { moonIcon, sunIcon } from "@/assets";
import { useState, useRef, useEffect } from "react";
import {motion} from "framer-motion";

const Toggle = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const mainRef = useRef(null);

  const addDarkTheme = () => {
    if (mainRef.current) {
      mainRef.current.classList.add("dark");
      setDarkTheme(true);
    }
  };

  const removeDarkTheme = () => {
    if (mainRef.current) {
      mainRef.current.classList.remove("dark");
      setDarkTheme(false);
    }
  };

  useEffect(() => {
    // Only run in the browser
    const storedTheme = typeof window !== "undefined" && localStorage.getItem("darkTheme");
    const parsedTheme = storedTheme === "true";

    if (parsedTheme) {
      addDarkTheme();
    } else {
      removeDarkTheme();
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("darkTheme", darkTheme.toString());
    }
  }, [darkTheme]);

  const handleToggle = () => {
    if (!darkTheme) {
      addDarkTheme();
    } else {
      removeDarkTheme();
    }
  };

  return (
    <main ref={mainRef}>
      <div className="bg-zinc-50 dark:bg-zinc-800">
        <div
          className="max-w-[1200px] xl:w-full mx-auto flex justify-center xl:px-[90px]
            sm:pl-[80px] sm:pr-5 overflow-hidden"
        >
          <button
            onClick={handleToggle}
            className="fixed right-14 sm:right-10 top-10 text-yellow-600 
              hover:text-yellow-500"
          >
            <motion.span animate={{scale:darkTheme? 0: 1}} className="absolute block rounded-full bg-zinc-50 p-1 text-4xl cursor-pointer dark:bg-zinc-800">
              {moonIcon}
            </motion.span>
             <motion.span animate={{scale:darkTheme? 1: 0}}className="absolute block rounded-full bg-zinc-50 p-1 text-4xl cursor-pointer dark:bg-zinc-800">
              {sunIcon}
            </motion.span>
          </button>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Toggle;
