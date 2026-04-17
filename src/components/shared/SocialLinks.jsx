import { FaDribbble, FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  dribbble: FaDribbble,
}

const SocialLinks = ({ links }) => {
  return (
    <div className="flex items-center gap-3">
      {links.map((link) => {
        const Icon = iconMap[link.icon]
        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg text-white/85 transition hover:border-primaryStart hover:text-white"
            aria-label={link.name}
          >
            <Icon />
          </motion.a>
        )
      })}
    </div>
  )
}

export default SocialLinks
