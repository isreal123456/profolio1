import { socialLinks } from '../../data/portfolioData'
import SocialLinks from '../shared/SocialLinks'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#111124] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="text-sm text-white/60">
          Copyright {year} DevPortfolio. All rights reserved.
        </p>
        <SocialLinks links={socialLinks} />
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/80 transition hover:border-primaryStart hover:text-white"
        >
          Back to top
        </button>
      </div>
    </footer>
  )
}

export default Footer
