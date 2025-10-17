"use client"

import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { Textarea } from "../ui/textarea"

export function ContactInquirySection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessType: "",
    businessName: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, businessType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        businessType: "",
        businessName: "",
        message: "",
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <section className="py-20">
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-luxury-gold/10">
            <CheckCircle className="h-12 w-12 text-luxury-gold" />
          </div>
          <h2 className="mb-4 text-4xl">Thank You!</h2>
          <p className="mx-auto max-w-2xl font-sans text-gray-300 text-lg">
            We&apos;ve received your inquiry and will get back to you within 24
            hours. Our wholesale team is excited to discuss partnership
            opportunities with you.
          </p>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="py-20" id="contact-form">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="mb-6 text-4xl">Start Your Partnership Today</h2>
        <p className="mx-auto max-w-3xl text-white/80 text-xl">
          Ready to bring premium American Wagyu to your menu? Contact us for
          pricing, samples, or to schedule a ranch visit.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact Form */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Card className="border-luxury-gold/20 bg-luxury-charcoal">
            <CardContent className="p-8">
              <h3 className="mb-6 text-2xl text-white">Get in Touch</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-white" htmlFor="firstName">
                      First Name
                    </Label>
                    <Input
                      className="border-luxury-gold/30 bg-luxury-black text-white"
                      id="firstName"
                      name="firstName"
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      required
                      value={formData.firstName}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white" htmlFor="lastName">
                      Last Name
                    </Label>
                    <Input
                      className="border-luxury-gold/30 bg-luxury-black text-white"
                      id="lastName"
                      name="lastName"
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      required
                      value={formData.lastName}
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-white" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      className="border-luxury-gold/30 bg-luxury-black text-white"
                      id="email"
                      name="email"
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      type="email"
                      value={formData.email}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white" htmlFor="phone">
                      Phone
                    </Label>
                    <Input
                      className="border-luxury-gold/30 bg-luxury-black text-white"
                      id="phone"
                      name="phone"
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      value={formData.phone}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white" htmlFor="businessType">
                    Business Type
                  </Label>
                  <Select
                    onValueChange={handleSelectChange}
                    value={formData.businessType}
                  >
                    <SelectTrigger className="border-luxury-gold/30 bg-luxury-black text-white">
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent className="border-luxury-gold/30 bg-luxury-charcoal">
                      <SelectItem value="restaurant">Restaurant</SelectItem>
                      <SelectItem value="steakhouse">Steakhouse</SelectItem>
                      <SelectItem value="hotel">Hotel/Resort</SelectItem>
                      <SelectItem value="catering">Catering Company</SelectItem>
                      <SelectItem value="retail">
                        Retail/Butcher Shop
                      </SelectItem>
                      <SelectItem value="individual">
                        Individual Buyer
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-white" htmlFor="businessName">
                    Business Name
                  </Label>
                  <Input
                    className="border-luxury-gold/30 bg-luxury-black text-white"
                    id="businessName"
                    name="businessName"
                    onChange={handleInputChange}
                    placeholder="Enter your business name"
                    value={formData.businessName}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white" htmlFor="message">
                    Message
                  </Label>
                  <Textarea
                    className="min-h-[120px] border-luxury-gold/30 bg-luxury-black text-white"
                    id="message"
                    name="message"
                    onChange={handleInputChange}
                    placeholder="Tell us about your business, volume needs, and any specific requirements..."
                    required
                    value={formData.message}
                  />
                </div>

                <Button
                  className="w-full cursor-pointer bg-luxury-gold text-luxury-black transition-colors hover:bg-luxury-champagne disabled:opacity-50"
                  disabled={isSubmitting}
                  size="lg"
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-luxury-black border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Inquiry
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="rounded-2xl bg-luxury-charcoal/50 p-6">
            <h3 className="mb-6 text-2xl text-white">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-luxury-gold/10">
                  <Mail className="h-6 w-6 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg text-white">Email</h4>
                  <p className="font-sans text-gray-300">
                    <a
                      className="transition-colors hover:text-luxury-gold"
                      href="mailto:wholesale@ozarknaturalsteak.com"
                    >
                      wholesale@ozarknaturalsteak.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-luxury-gold/10">
                  <Phone className="h-6 w-6 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg text-white">Phone</h4>
                  <p className="font-sans text-gray-300">
                    <a
                      className="transition-colors hover:text-luxury-gold"
                      href="tel:+15551234567"
                    >
                      (555) 123-4567
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-luxury-gold/10">
                  <MapPin className="h-6 w-6 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg text-white">Location</h4>
                  <p className="font-sans text-gray-300">
                    Ozark Mountains, Arkansas
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-luxury-gold/10 p-6">
            <h4 className="mb-4 text-white text-xl">Why Partner With Us?</h4>
            <ul className="space-y-3 font-sans text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-luxury-gold" />
                Premium American Wagyu quality
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-luxury-gold" />
                Competitive wholesale pricing
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-luxury-gold" />
                Reliable supply chain
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-luxury-gold" />
                Personalized customer service
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-luxury-gold" />
                Flexible ordering options
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

