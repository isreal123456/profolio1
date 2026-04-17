import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../animations/variants'
import { socialLinks } from '../../data/portfolioData'
import AnimatedButton from '../shared/AnimatedButton'
import AnimatedSection from '../shared/AnimatedSection'
import SectionHeading from '../shared/SectionHeading'
import SocialLinks from '../shared/SocialLinks'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const ContactSection = ({ onToast }) => {
  const [formValues, setFormValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = (values) => {
    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Name is required.'
    if (!values.email.match(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/))
      nextErrors.email = 'Enter a valid email.'
    if (!values.subject.trim()) nextErrors.subject = 'Subject is required.'
    if (values.message.trim().length < 10)
      nextErrors.message = 'Message should be at least 10 characters.'
    return nextErrors
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      return
    }
    const timer = setTimeout(() => setErrors({}), 3500)
    return () => clearTimeout(timer)
  }, [errors])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationErrors = validate(formValues)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      onToast({ type: 'error', message: 'Please fix the highlighted fields.' })
      return
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      onToast({
        type: 'error',
        message: 'EmailJS keys are missing. Add VITE_EMAILJS_* values in .env.',
      })
      return
    }

    try {
      setIsSubmitting(true)
      await emailjs.send(serviceId, templateId, formValues, publicKey)
      setFormValues(initialForm)
      onToast({ type: 'success', message: 'Message sent successfully. I will reply soon.' })
    } catch {
      onToast({ type: 'error', message: 'Message failed to send. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatedSection id="contact" className="max-w-6xl px-6 py-24 mx-auto">
      <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <SectionHeading
          eyebrow="Contact"
          title="Let us create something exceptional together"
          description="Share your project goals, timelines, and vision. I will respond with a practical plan."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          >
            {['name', 'email', 'subject'].map((field) => (
              <label key={field} className="block">
                <span className="block mb-2 text-sm capitalize text-white/70">{field}</span>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formValues[field]}
                  onChange={handleChange}
                  className={`w-full rounded-xl border bg-[#0f1021] px-4 py-3 text-white outline-none transition ${
                    errors[field]
                      ? 'border-rose-500'
                      : 'border-white/20 focus:border-primaryStart'
                  }`}
                />
              </label>
            ))}

            <label className="block">
              <span className="block mb-2 text-sm text-white/70">Message</span>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                rows={6}
                name="message"
                value={formValues.message}
                onChange={handleChange}
                className={`w-full rounded-xl border bg-[#0f1021] px-4 py-3 text-white outline-none transition ${
                  errors.message
                    ? 'border-rose-500'
                    : 'border-white/20 focus:border-primaryStart'
                }`}
              />
            </label>

            <AnimatedButton
              type="submit"
              disabled={isSubmitting}
              className="w-full text-white bg-gradient-to-r from-primaryStart to-primaryEnd disabled:opacity-70"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <span className="w-4 h-4 border-2 rounded-full animate-spin border-white/30 border-t-white" />
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </AnimatedButton>
          </motion.form>

          <motion.div variants={itemVariants} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-2xl text-white font-display">Contact Details</h3>
            <p className="mt-4 text-white/70">
              Prefer direct channels? Reach me on social platforms or send a quick email.
            </p>
            <p className="mt-6 text-sm text-white/60">Email</p>
            <a href="mailto:sundayisrael@gmail.com" className="text-lg text-accentBlue">
              sundayisrael@gmail.com
            </a>
            <div className="mt-8">
              <SocialLinks links={socialLinks} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

export default ContactSection
