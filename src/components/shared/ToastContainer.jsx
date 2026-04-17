import { AnimatePresence, motion } from 'framer-motion'
import { FaCircleCheck, FaCircleExclamation, FaXmark } from 'react-icons/fa6'

const iconMap = {
  success: FaCircleCheck,
  error: FaCircleExclamation,
}

const ToastContainer = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-[90] flex w-[22rem] max-w-[calc(100vw-2rem)] flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = iconMap[toast.type] || FaCircleExclamation
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              className="flex items-start gap-3 rounded-2xl border border-white/20 bg-[#121225]/95 p-4 text-sm text-white shadow-card backdrop-blur"
            >
              <Icon
                className={`mt-0.5 text-base ${
                  toast.type === 'success' ? 'text-emerald-400' : 'text-rose-400'
                }`}
              />
              <p className="flex-1 text-white/85">{toast.message}</p>
              <button
                type="button"
                onClick={() => onDismiss(toast.id)}
                className="text-white/60 transition hover:text-white"
                aria-label="Dismiss message"
              >
                <FaXmark />
              </button>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

export default ToastContainer
