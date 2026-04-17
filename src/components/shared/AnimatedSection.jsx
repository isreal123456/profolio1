import { motion } from 'framer-motion'
import { sectionReveal } from '../../animations/variants'
import useInView from '../../hooks/useInView'

const AnimatedSection = ({ id, className = '', children }) => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={sectionReveal}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection
