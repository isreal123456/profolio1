import { motion } from 'framer-motion'
import { itemVariants } from '../../animations/variants'

const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <motion.div variants={itemVariants} className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-accentBlue">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-white/70">{description}</p>
    </motion.div>
  )
}

export default SectionHeading
