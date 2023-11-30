"use client"

import React from 'react';
import {motion} from "framer-motion"
import SectionViewHook from './inViewSection';
import Heading from './Heading';



const About = () => {

  const { ref } =SectionViewHook("About",0.3);


  return (
    <motion.section 
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 dark:text-gray-300"
    >
    <Heading>About me</Heading>      
      <p>
      While graduating , I decided to pursue my
        passion for programming. I enrolled in a course and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.
      </p>
      <p className=''> 
            I am a <span>full stack developer</span> with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Nextjs, Redux, Node.js, Express, MongoDB,
             HTML, CSS, and Git.I am always looking to learn new technologies. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications. I am currently looking for an opportunity as a developer.
      </p>
    </motion.section>
  );
}

export default About;
