"use client"

import React from 'react';
import {motion} from "framer-motion";
import { links } from '@/lib/data';
import Link from 'next/link';
import { useActiveSectionHook } from '@/context/activeSection';
const Header = () => {
const activeSection=useActiveSectionHook();
const { activestate,setActiveState }=activeSection
  return (
    <header className="z-[999] relative">
      <motion.div
       className="fixed top-0 left-1/2 -translate-x-1/2 h-[3.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-900/90 dark:border-black/20"
       initial={{y:-100,x:"-50%",opacity:0}}
       animate={{y:0,x:"-50%",opacity:1}}
       transition={{ duration:0.2}}

      >
      </motion.div>

      <nav className='flex fixed left-1/2 top-[0.15rem] h-12 -translate-x-1/2 sm:top-[2rem] sm:h-[initial] sm:py-0 py-2 '>
        <ul className='flex gap-x-8 sm:gap-x-10  items-center justify-between font-medium text-sm text-gray-500 sm:flex-nowrap '>

              {links.map((val)=>(
                <motion.li 
                className='flex h-1/4 items-center justify-center w-full '
                initial={{y:-100,x:"",opacity:0}}
                animate={{y:0,x:"",opacity:1}}
                transition={{ duration:0.2}}
                key={val.name}>
                  <div className={`  rounded-lg  ${activestate === val.name && "text-gray-900 "}`}>

                   <Link 
                   className={`flex items-center justify-center py-2  sm:p-2  hover:text-gray-900 rounded-lg  transition w-full active:text-gray-900
                   dark:hover:text-gray-300  ${activestate === val.name && "text-gray-900 bg-slate-200/80 dark:bg-gray-700"}` }
                   href={val.hash}
                   onClick={()=>setActiveState(val.name)}
                   >
                    
                    {val.name}
                   </Link> 
                  </div>
                    </motion.li>
              ))}
        </ul>
        </nav>
    </header>
  );
}

export default Header;
