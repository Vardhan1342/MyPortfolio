"use client"
import React from 'react';
import { skillsData } from '@/lib/data';
import SectionViewHook from './inViewSection';
import { motion, Variants } from 'framer-motion';
import Heading from './Heading';



const itemVariants: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: (index:number)=>(
    { opacity: 1,
      y: 0 ,
      transition:{
        delay:0.05 * index
      }
    }),
};

const Skills = () => {

    const { ref } =SectionViewHook("Skills",0.4);

  return (
    <section ref={ref}  id="skills" className='mb-28 scroll-mt-28 text-center sm:mb-40 max-w-[53rem]'>
  <Heading>Skills</Heading>     
  <ul
 className='flex justify-center items-center flex-wrap gap-4 mt-10'
     >
        {skillsData.map((skill,index)=>(
            <motion.li key={index}
            variants={itemVariants} 
            initial="initial" 
            whileInView="animate" 
            viewport={
                {
                    once:true,
                }
            }
            custom={index}
            className='bg-gray-100/10 border border-black/10 p-2 rounded-lg shadow-xl tracking-wide'
            >
                {skill}
                
            </motion.li>
        ))}
     </ul>
      
    </section>
  );
}

export default Skills;
