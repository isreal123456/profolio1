import { AnimatePresence, motion } from 'framer-motion'
import { FaXmark } from 'react-icons/fa6'
import { modalVariants } from '../../animations/variants'

const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#07070f]/80 p-4 backdrop-blur"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/15 bg-[#121225] p-6 text-white shadow-card"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accentBlue">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-3xl">{project.title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/20 p-2 text-white/70 transition hover:text-white"
              >
                <FaXmark />
              </button>
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="h-64 w-full rounded-2xl object-cover"
            />
            <p className="mt-5 text-white/75">{project.details}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
