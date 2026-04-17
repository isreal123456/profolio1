import { lazy, Suspense, useCallback, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import ErrorBoundary from './components/ErrorBoundary'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import ToastContainer from './components/shared/ToastContainer'
import useScrollProgress from './hooks/useScrollProgress'

const HeroSection = lazy(() => import('./components/sections/HeroSection'))
const AboutSection = lazy(() => import('./components/sections/AboutSection'))
const SkillsSection = lazy(() => import('./components/sections/SkillsSection'))
const ProjectsSection = lazy(() => import('./components/sections/ProjectsSection'))
const ContactSection = lazy(() => import('./components/sections/ContactSection'))

const loadingSkeleton = (
  <div className="mx-auto max-w-6xl px-6 py-20">
    <div className="h-8 w-40 animate-pulse rounded bg-white/10" />
    <div className="mt-4 h-24 animate-pulse rounded bg-white/5" />
  </div>
)

function App() {
  const [toasts, setToasts] = useState([])
  const progress = useScrollProgress()

  const dismissToast = useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }, [])

  const createToast = useCallback((toast) => {
    const id = Date.now() + Math.random()
    setToasts((current) => [...current, { ...toast, id }])
    setTimeout(() => dismissToast(id), 4000)
  }, [dismissToast])

  const sections = useMemo(
    () => (
      <Suspense fallback={loadingSkeleton}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection onToast={createToast} />
      </Suspense>
    ),
    [createToast],
  )

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-base text-white">
        <Navbar scrollProgress={progress} />
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          {sections}
        </motion.main>
        <Footer />
        <ToastContainer toasts={toasts} onDismiss={dismissToast} />
      </div>
    </ErrorBoundary>
  )
}

export default App
