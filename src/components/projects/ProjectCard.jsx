import { motion } from 'framer-motion'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'

const ProjectCard = ({ project, onOpen }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-card will-change-transform"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base/95 via-transparent to-transparent opacity-75" />
      </div>

      <div className="space-y-4 p-6">
        <h3 className="font-display text-2xl text-white">{project.title}</h3>
        <p className="text-sm text-white/70">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primaryStart to-primaryEnd px-4 py-2 text-sm text-white transition hover:shadow-glow"
          >
            Live Demo <FaArrowUpRightFromSquare />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:text-white"
          >
            GitHub <FaGithub />
          </a>
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="text-sm text-accentBlue underline-offset-4 transition hover:underline"
          >
            Details
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
