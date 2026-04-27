import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../animations/variants'
import { aboutTags, stats } from '../../data/portfolioData'
import AnimatedButton from '../shared/AnimatedButton'
import AnimatedSection from '../shared/AnimatedSection'
import SectionHeading from '../shared/SectionHeading'
import useInView from '../../hooks/useInView'
import me from '../../assets/me.png'

const Counter = ({ target, inView }) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) {
      return
    }

    const duration = 1200
    const steps = 45
    let current = 0
    const increment = Math.ceil(target / steps)

    const timer = setInterval(() => {
      // Lightweight incremental counter for smooth stat reveals on first view.
      current += increment
      if (current >= target) {
        setValue(target)
        clearInterval(timer)
      } else {
        setValue(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target, inView])

  return <span>{value}</span>
}

const AboutSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <AnimatedSection id="about" className="max-w-6xl px-6 py-24 mx-auto">
      <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <SectionHeading
          eyebrow="About Me"
          title="Building polished products with strategy and speed"
          description="I blend design sensitivity with engineering depth to create performant, accessible products that users remember."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div variants={itemVariants} className="relative" ref={ref}>
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[2rem] border border-primaryStart/50" />
            <img
              src={me}
              alt="Developer portrait"
              loading="lazy"
              className="relative h-[28rem] w-full rounded-[2rem] object-cover shadow-card"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg leading-relaxed text-white/75">
              For the past few years, I have helped startups and growing teams launch
              meaningful digital products. My approach starts with user intent, then
              combines robust architecture, smooth motion, and thoughtful visual systems.
            </p>

            <div className="grid gap-4 mt-8 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-3xl text-white font-display">
                    <Counter target={stat.value} inView={inView} />+
                  </p>
                  <p className="mt-2 text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {aboutTags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ y: -2, scale: 1.03 }}
                  className="px-4 py-2 text-sm border rounded-full border-white/20 bg-white/5 text-white/80"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <AnimatedButton
              className="mt-8 text-white bg-gradient-to-r from-primaryStart to-primaryEnd"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download CV
            </AnimatedButton>
          </motion.div>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

export default AboutSection
