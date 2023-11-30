"use client"
import React from 'react';
import {motion} from 'framer-motion';
const Sectiondivider = () => {
  return (
    <div>
      <motion.div 
      initial={{opacity:0,y:100}}
      animate={{opacity:1,y:0}}
      transition={{delay :0.125}}
      className='bg-gray-200 dark:bg-gray-800 sm:my-24 my-16 sm:h-16 sm:w-1 h-1 w-16 rounded-full block '>

      </motion.div>
    </div>
  );
}

export default Sectiondivider;
