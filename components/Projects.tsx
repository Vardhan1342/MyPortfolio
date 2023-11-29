import React from 'react';
import { projectsData } from '@/lib/data';
import Project from './Project';
const Projects = () => {
  return (
    <section  id="projects" className="scroll-mt-28 mb-28">
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
