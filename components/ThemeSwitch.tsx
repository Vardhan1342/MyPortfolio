"use client"
import React, { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

type theme="light" | "dark";

const ThemeSwitch = () => {

    const [theme,setTheme]=useState<theme>("light");

    const toggleMode=()=>{
        if(theme==="light"){
            setTheme("dark")
            window.localStorage.setItem("theme","dark")
            document.documentElement.classList.add("dark")

        }else{
            setTheme("light")
            window.localStorage.setItem("theme","light")
            document.documentElement.classList.remove("dark")
        }
    }

    useEffect(() => {
        const localTheme=window.localStorage.getItem("theme") as theme | null;
        if(localTheme){
            setTheme(localTheme)
            if(localTheme === "dark"){
                document.documentElement.classList.add("dark")
            }
        }
        else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            setTheme("dark")
            document.documentElement.classList.add("dark")

        }
    }, []);

  return (
    <button 
    className='fixed w-[3rem] h-[3rem] bottom-5 right-5 border border-white/40 rounded-full backdrop-blur-[0.5rem] bg-opacity-80 flex items-center justify-center shadow-xl hover:scale-110 transition-all'
    onClick={toggleMode}
    >
     {theme === "light" ? <BsSun size={20} /> : <BsMoon size={20}/>}
    </button> 
  );
}

export default ThemeSwitch;
