import { motion } from 'framer-motion'
import {
  FaCodeBranch,
  FaDatabase,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaNodeJs,
  FaReact,
  FaServer,
  
} from 'react-icons/fa6'
import { SiDjango, SiFastapi } from 'react-icons/si'
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { containerVariants, itemVariants } from '../../animations/variants'
import { skillCategories } from '../../data/portfolioData'
import AnimatedSection from '../shared/AnimatedSection'
import SectionHeading from '../shared/SectionHeading'

const iconMap = {
  react: FaReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  next: SiNextdotjs,
  node: SiFastapi,
  server: SiDjango,
  db: FaDatabase,
  git: FaGitAlt,
  figma: FaFigma,
  docker: FaDocker,
  ci: FaCodeBranch,
}

const SkillsSection = () => {
  return (
    <AnimatedSection id="skills" className="max-w-6xl px-6 py-24 mx-auto">
      <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <SectionHeading
          eyebrow="Skills"
          title="Tools and technologies I use to ship confidently"
          description="From interface craft to backend workflows, I focus on maintainable systems that scale."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ rotateX: 4, rotateY: -4 }}
              transition={{ type: 'spring', stiffness: 140, damping: 14 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-card"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3 className="text-2xl text-white font-display">{category.title}</h3>
              <div className="mt-5 space-y-4">
                {category.items.map((skill) => {
                  const Icon = iconMap[skill.icon]
                  return (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1 text-sm text-white/75">
                        <span className="inline-flex items-center gap-2">
                          <Icon /> {skill.name}
                        </span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-primaryStart to-accentPink"
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

export default SkillsSection
