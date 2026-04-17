import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { containerVariants } from '../../animations/variants'
import { projectFilters, projects } from '../../data/portfolioData'
import ProjectCard from '../projects/ProjectCard'
import ProjectModal from '../projects/ProjectModal'
import AnimatedSection from '../shared/AnimatedSection'
import SectionHeading from '../shared/SectionHeading'

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects
    }
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <AnimatedSection id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work across web, SaaS, and mobile"
          description="Each project balances performance, scalability, and expressive interaction design."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm transition ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primaryStart to-primaryEnd text-white'
                  : 'border border-white/20 text-white/70 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </AnimatedSection>
  )
}

export default ProjectsSection
