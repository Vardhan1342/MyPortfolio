import About from '@/components/About'
import Projects from '@/components/Projects'
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
             <Sectiondivider />

           </main>
  )
}
