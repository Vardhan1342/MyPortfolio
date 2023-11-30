"use client"
import {useRef} from 'react';
import { motion, useScroll, useTransform} from "framer-motion"
import { VscGoToFile } from "react-icons/vsc";
import Image from 'next/image';
import { projectsData } from '@/lib/data';


type ProjectProps=( typeof projectsData)[number]
export default function Project({
    title,
    description,
    tags,
    imageUrl
}:ProjectProps){
   const ref=useRef<HTMLElement>(null)
   const {scrollYProgress}=useScroll({
   target:ref,
   offset:["0 1","1.33 1"]
   })

   const scale=useTransform(scrollYProgress,[0,1],[0.8,1])
   const opacity=useTransform(scrollYProgress,[0,1],[0.6,1])

    return (
    <motion.section 
    style={{
        scale:scale,
        opacity:opacity
    }}
    ref={ref} 
    className=' border p-4 sm:flex text-gray-700 dark:text-gray-200 my-5 justify-center items-center shadow-xl max-w-[42rem] sm:h-[25rem] relative  overflow-hidden  '>
        <div className='flex flex-col items-start space-y-8 sm:max-w-[50%]'>
            <h3 className='text-2xl font-medium hover:text-gray-700 flex items-center justify-center gap-1'><a href="https://github.com/Vardhan1342"  target="_blank" rel="noopener noreferrer">{title}</a><VscGoToFile className="mt-2" size={10}/></h3>
            <p className=' text-sm'>
                {description}
            </p>
            <ul className='flex gap-x-4 flex-wrap '>
                {tags.map((tag,index)=>(
                    <li key={index} className='bg-black/70 rounded-full p-2 text-white text-center border-2 mt-2 text-sm'> {tag} </li>
                ))}
            </ul>
        </div>
        <div className='overflow-hidden rounded-md'>

                <Image src={imageUrl} alt="image" quality="95" priority={true} width="300" height="200" 
                
                className='absolute sm:static top-0 -right-40 w-full h-full opacity-10 sm:opacity-100'
                />
                
        </div>
    </motion.section>
    )
}

