import { motion } from 'framer-motion'

const AnimatedButton = ({ className = '', children, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
      className={`relative overflow-hidden rounded-full px-6 py-3 text-sm font-medium will-change-transform ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default AnimatedButton
