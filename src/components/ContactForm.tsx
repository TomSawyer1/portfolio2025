import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslation } from 'react-i18next'
import { Send, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const createContactSchema = (t: (key: string, opts?: any) => string) =>
  z.object({
    name: z.string().min(2, t('errors.minLength', { min: 2 })),
    email: z.string().email(t('errors.invalidEmail')),
    message: z.string().min(10, t('errors.minLength', { min: 10 })),
  })

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>

export function ContactForm() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(createContactSchema(t)),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: 'Thomas Spencer',
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-300 dark:text-neutral-300 light:text-neutral-700">
          {t('contact.name')}
        </label>
        <input
          id="name"
          type="text"
          placeholder={t('contact.namePlaceholder')}
          className="input"
          {...register('name')}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-300 dark:text-neutral-300 light:text-neutral-700">
          {t('contact.email')}
        </label>
        <input
          id="email"
          type="email"
          placeholder={t('contact.emailPlaceholder')}
          className="input"
          {...register('email')}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-300 dark:text-neutral-300 light:text-neutral-700">
          {t('contact.message')}
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder={t('contact.messagePlaceholder')}
          className="input resize-none"
          {...register('message')}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            {t('contact.sending')}
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            {t('contact.send')}
          </>
        )}
      </button>

      {/* Status messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border border-green-500/50 bg-green-500/10 p-4 text-sm text-green-500"
        >
          {t('contact.success')}
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border border-red-500/50 bg-red-500/10 p-4 text-sm text-red-500"
        >
          {t('contact.error')}
        </motion.div>
      )}
    </motion.form>
  )
}

