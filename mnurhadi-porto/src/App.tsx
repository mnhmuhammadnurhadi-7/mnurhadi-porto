import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import ProjectCard from './components/ProjectCard'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { projects } from './data/projects'
import ProjectModal from './components/ProjectModal'
import type { Project } from './types'

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="min-h-screen bg-[#F0F4F8]">
      <Navbar />
      <Hero />
      <Stats />

      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-2">Work & Achievements</p>
        <h2 className="font-['Sora'] text-3xl font-extrabold text-[#1A3557] tracking-tight mb-3">
          Projects, Experience & Activities
        </h2>
        <p className="text-[#64748B] text-sm mb-12">
          Click any card to view the full case study with proof and documentation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      <Skills />
      <Certifications />
      <Contact />
      <Footer />

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  )
}

export default App
