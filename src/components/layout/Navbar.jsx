import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { navLinks } from '../../data/portfolioData'

const Navbar = ({ scrollProgress }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        isScrolled ? 'bg-base/85 shadow-card backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div
        className="h-1 origin-left bg-gradient-to-r from-primaryStart via-accentBlue to-accentPink"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="font-display text-xl font-semibold"
        >
          <span className="bg-gradient-to-r from-primaryStart to-accentPink bg-clip-text text-transparent">
            DevPortfolio
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="group relative text-sm text-white/80 transition hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-primaryStart to-accentPink transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          ))}
        </div>

        <button
          type="button"
          className="rounded-xl border border-white/20 p-2 text-white md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-6 mb-4 rounded-2xl border border-white/15 bg-panel/95 p-4 backdrop-blur md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="block w-full rounded-lg px-3 py-2 text-left text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
