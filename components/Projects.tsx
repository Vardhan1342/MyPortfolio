import React from 'react';
import { motion} from "framer-motion"
import { projectsData } from '@/lib/data';
import Image from 'next/image';
const Projects = () => {
  return (
    <section  id="projects" className="scroll-mt-28 mb-28">
      <h1 className='text-2xl font-bold text-gray-600 font-sans mb-7 text-center'>My Projects</h1>
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

type ProjectProps=( typeof projectsData)[number]
function Project({
    title,
    description,
    tags,
    imageUrl
}:ProjectProps){
    return (
    <section className=' border p-4 sm:flex  my-10 justify-center items-center shadow-xl max-w-[42rem] sm:h-[25rem] relative  overflow-hidden'>
        <div className='flex flex-col items-start space-y-8 sm:max-w-[50%]'>
            <h3 className='text-2xl font-medium hover:text-gray-700'><a href="https://github.com/Vardhan1342"  target="_blank" rel="noopener noreferrer">{title}</a></h3>
            <p className='text-gray-700 text-sm'>
                {description}
            </p>
            <ul className='flex gap-x-4 flex-wrap '>
                {tags.map((tag,index)=>(
                    <li key={index} className='bg-black rounded-full p-2 text-white text-center border-2 mt-2 text-sm'> {tag} </li>
                ))}
            </ul>
        </div>
        <div className='overflow-hidden'>

                <Image src={imageUrl} alt="image" quality="95" priority={true} width="300" height="200" 
                
                className='absolute sm:static top-14 w-full h-full opacity-10 sm:opacity-100'
                />
        </div>
    </section>
    )
}



export default Projects;
