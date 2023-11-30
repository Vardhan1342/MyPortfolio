import About from '@/components/About'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Intro from '@/components/intro'
import Sectiondivider from '@/components/sectiondivider'
import Image from 'next/image'

export default function Home() {
  return (
           <main className="flex flex-col items-center justify-center px-4">
             <Intro />
             <Sectiondivider />
             <About />
             <Projects />
    
            <Skills />
            <Contact />
           </main>
  )
}
