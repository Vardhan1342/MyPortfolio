"use client"

import React from 'react';
import { projectsData } from '@/lib/data';
import Project from './Project';
import SectionViewHook from './inViewSection';



const Projects = () => {
const { ref } =SectionViewHook("Projects",0.4);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <h1 className='text-2xl font-bold text-gray-600 font-sans mb-5 text-center'>My Projects</h1>
      <div>
        {projectsData.map((project,index)=>(
            <div key={index}>
                <Project {...project}/>
            </div>
        ))}
      </div>
    </section>
  );
}





export default Projects;
