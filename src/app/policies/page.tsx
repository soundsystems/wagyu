"use client"

import { CreditCard, FileText, RotateCcw, Shield } from "lucide-react"
import { motion } from "motion/react"

export default function PoliciesPage() {
  const policies = [
    {
      icon: Shield,
      title: "Privacy Policy",
      content:
        "We respect your privacy and are committed to protecting your personal information. We collect only the information necessary to process your orders and provide customer service. We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law.",
    },
    {
      icon: FileText,
      title: "Terms of Service",
      content:
        "By using our website and services, you agree to these terms. Our products are sold as-is and we reserve the right to modify our services at any time. All content on this website is owned by Ozark Natural Steak Co. and protected by copyright laws.",
    },
    {
      icon: CreditCard,
      title: "Payment Policy",
      content:
        "We accept major credit cards and process payments securely through our e-commerce platform. All transactions are encrypted and secure. Payment is required at the time of order placement. We reserve the right to verify payment information and may require additional verification for large orders.",
    },
    {
      icon: RotateCcw,
      title: "Return & Refund Policy",
      content:
        "Due to the perishable nature of our products, we cannot accept returns once the product has been delivered. However, if you receive a product that does not meet our quality standards, please contact us within 24 hours of delivery. We will work with you to resolve any issues and may provide a replacement or refund at our discretion.",
    },
  ]

  return (
    <div className="min-h-screen bg-luxury-black text-white">
      <div className="mx-auto max-w-4xl px-20 py-20">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-5xl md:text-6xl">Policies</h1>
          <p className="mx-auto max-w-3xl font-sans text-gray-300 text-xl leading-relaxed">
            Our commitment to transparency and customer satisfaction is
            reflected in our clear policies and terms of service.
          </p>
        </motion.div>

        <div className="space-y-12">
          {policies.map((policy, index) => {
            const IconComponent = policy.icon
            return (
              <motion.div
                className="rounded-2xl bg-luxury-charcoal/30 p-8"
                initial={{ opacity: 0, y: 30 }}
                key={policy.title}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-luxury-gold/10">
                    <IconComponent className="h-8 w-8 text-luxury-gold" />
                  </div>
                  <div>
                    <h2 className="mb-4 text-3xl">{policy.title}</h2>
                    <p className="font-sans text-gray-300 text-lg leading-relaxed">
                      {policy.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="mt-16 rounded-2xl bg-luxury-charcoal/50 p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="mb-4 text-2xl">Questions About Our Policies?</h3>
          <p className="mb-6 font-sans text-gray-300">
            If you have any questions about our policies or need clarification
            on any terms, please don&apos;t hesitate to contact us.
          </p>
          <button
            className="cursor-pointer rounded-lg bg-luxury-gold px-8 py-3 font-medium text-luxury-black transition-colors hover:bg-luxury-champagne"
            type="button"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  )
}

