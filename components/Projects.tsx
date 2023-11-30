"use client"

import React from 'react';
import { projectsData } from '@/lib/data';
import Project from './Project';
import SectionViewHook from './inViewSection';
import Heading from './Heading';



const Projects = () => {
const { ref } =SectionViewHook("Projects",0.4);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <Heading>My Projects</Heading>
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
