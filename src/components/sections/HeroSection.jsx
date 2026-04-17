import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../animations/variants'
import { socialLinks } from '../../data/portfolioData'
import useMousePosition from '../../hooks/useMousePosition'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import useScrollProgress from '../../hooks/useScrollProgress'
import AnimatedButton from '../shared/AnimatedButton'
import SocialLinks from '../shared/SocialLinks'

const roles = ['Frontend Engineer', 'Motion-Driven Designer', 'React Specialist']

const HeroSection = () => {
  const [index, setIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const mouse = useMousePosition()
  const scrollProgress = useScrollProgress()
  const reducedMotion = usePrefersReducedMotion()

  const currentRole = useMemo(() => roles[index % roles.length], [index])

  useEffect(() => {
    let character = 0
    const typeTimer = setInterval(() => {
      character += 1
      setTyped(currentRole.slice(0, character))
      if (character >= currentRole.length) {
        clearInterval(typeTimer)
        setTimeout(() => {
          setIndex((current) => current + 1)
          setTyped('')
        }, 1200)
      }
    }, 85)

    return () => clearInterval(typeTimer)
  }, [currentRole])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-hero-gradient px-6 pb-16 pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          // Layered parallax: mouse controls horizontal drift, scroll adds depth on Y.
          transform: reducedMotion
            ? `translate3d(0, ${scrollProgress * -12}px, 0)`
            : `translate3d(${mouse.x * 18}px, ${mouse.y * 18 + scrollProgress * -28}px, 0)`,
        }}
      >
        <div className="absolute left-16 top-20 h-28 w-28 rounded-full bg-accentBlue/25 blur-xl" />
        <div className="absolute right-20 top-36 h-44 w-44 rounded-full bg-accentPink/20 blur-2xl" />
        <div className="absolute bottom-16 left-1/3 h-32 w-32 rounded-full bg-white/10 blur-xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl"
      >
        <motion.p variants={itemVariants} className="text-sm uppercase tracking-[0.24em] text-white/80">
          Available for freelance and full-time work
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="mt-5 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          I craft immersive web experiences with
          <span className="ml-3 bg-gradient-to-r from-accentBlue to-accentPink bg-clip-text text-transparent">
            pixel-perfect motion.
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-lg text-white/80">
          <span className="text-white/60">Role:</span>{' '}
          <span className="font-medium text-white">{typed}</span>
          <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-white/90 align-middle" />
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
          <AnimatedButton
            className="bg-gradient-to-r from-primaryStart to-primaryEnd text-white shadow-glow"
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            View Projects
          </AnimatedButton>
          <AnimatedButton
            className="border border-white/25 bg-white/5 text-white/90"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Let&apos;s Talk
          </AnimatedButton>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8">
          <SocialLinks links={socialLinks} />
        </motion.div>
      </motion.div>

      <motion.button
        type="button"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        // Soft bounce guides users to the next section without intrusive motion.
        animate={reducedMotion ? {} : { y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-white/80"
      >
        Scroll Down
      </motion.button>
    </section>
  )
}

export default HeroSection
