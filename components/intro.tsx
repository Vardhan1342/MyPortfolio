"use client"
import Image from 'next/image';
import React  from 'react';
import {motion } from "framer-motion"
import { Button } from './ui/button';
import Link from 'next/link';
import {BsArrowRight, BsGithub, BsLinkedin} from "react-icons/bs"
import {HiDownload} from "react-icons/hi"
import SectionViewHook from './inViewSection';
import { useActiveSectionHook } from '@/context/activeSection';





const Intro = () => {
  const activeSection=useActiveSectionHook();
const { activestate,setActiveState }=activeSection

const { ref } =SectionViewHook("Home");
 
  


  return (
    <section ref={ref} id="home" className='scroll-mt-28'>
      <div className='flex flex-col space-y-10 justify-center  items-center '>
        <div className='relative'>
            <motion.div
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            transition={{
                type:"tween",
                duration:0.2
            }}
            >

            <Image 
            src="/profile.jpg"
            alt="profile"
            quality="95"
            priority={true}
            width="80"
            height="19"
            className=' h-24 w-24 rounded-full object-cover border-[0.3rem] border-white shadow-xl'
            />
            </motion.div>
            <motion.span
             initial={{opacity:0,scale:0}}
             animate={{opacity:1,scale:1}}
             transition={{
                 type:"spring",
                 duration:0.7,
                delay:0.1,
                stiffness:125,
             }}
            className='text-3xl absolute bottom-0 right-0'>👋</motion.span>
        </div>

        <motion.div 
            initial={{opacity:0,y:100}}
            animate={{opacity:1,y:0}}
            className='text-center  font-medium tracking-wide px-3' >
          <h1 className='font-bold text-3xl'> Hello ,{`I'm`}  Sri Vardhan</h1>
          <h1 className='text-[1.4rem]'>{`I'm a`} <span className='font-bold'>full-stack developer </span></h1>
          <h1 className='text-[1.3rem]'>I enjoy building sites & apps.</h1>
        </motion.div>
        
        <motion.div 
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        className='flex gap-2 flex-wrap justify-center flex-col sm:flex-row'>
            <Button className='rounded-full hover:scale-105 transition dark:text-gray-900 dark:font-semibold dark:bg-gray-200' 
            onClick={()=>{setActiveState("Contact")}}>
                <Link href="#contact" className='flex items-center justify-center gap-2'> 
                  <p>Contact me here</p>
                 <BsArrowRight />
                </Link> 
            </Button>
            <Button variant="outline" className='rounded-full gap-2 hover:scale-105 transition'>
                <a href="/resume.pdf" download={true}>Download resume</a>
                <HiDownload />
            </Button>
            <div className='flex justify-center items-center gap-x-2 '>
                <Button variant="outline" className='rounded-full gap-2 hover:scale-105 transition'>
                <a>  <BsLinkedin /> </a>
                </Button>
                <Button variant="outline" className='rounded-full gap-2 hover:scale-105'>
                <a href='https://github.com/Vardhan1342'> <BsGithub className="text-[1.2rem]" /> </a>
                </Button>
            </div>
        </motion.div>

      </div>

    </section>
  );
}

export default Intro;
