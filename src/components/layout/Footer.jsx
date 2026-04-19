import { socialLinks } from '../../data/portfolioData'
import SocialLinks from '../shared/SocialLinks'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#0d0d1f] py-10">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">
              Israel Sunday
            </h3>
            <p className="text-sm text-white/60">
              Full Stack Developer
            </p>
          </div>

          {/* Socials */}
          <SocialLinks links={socialLinks} />

          {/* Back to top */}
          <button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
            className="px-5 py-2 text-sm transition border rounded-full border-white/20 text-white/80 hover:border-primaryStart hover:text-white"
          >
            Back to top ↑
          </button>
        </div>

        {/* Bottom line */}
        <div className="pt-6 mt-6 text-center border-t border-white/10">
          <p className="text-sm text-white/50">
            © {year} Israel Sunday. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer