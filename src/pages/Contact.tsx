import emailjs from "emailjs-com"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle, GitHub, Linkedin, Telegram } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import type { ChangeEvent, FormEvent } from "react"

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Header from "@/components/Header"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const nameRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const sendEmail = (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage("")

    emailjs
      .sendForm(
        "service_8oby0sa",
        "template_jrk5rq9",
        e.target as HTMLFormElement,
        "Ddw-YUU_qHVSVYCjv"
      )
      .then(
        (result) => {
          console.log("Email sent!", result.text)
          setIsSubmitted(true)
          setIsLoading(false)
          setFormData({ name: "", email: "", subject: "", message: "" })
        },
        (error) => {
          console.error("Failed to send email", error.text)
          setErrorMessage(
            "Oops! Something went wrong. Please try again later."
          )
          setIsLoading(false)
        }
      )
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    nameRef.current?.focus()
  }, [])

  const socialLinks = [
    { name: "Telegram", href: "https://t.me/habtamu_befekadu", icon: <Telegram className="w-5 h-5" />, ariaLabel: "Habtamu Befekadu on Telegram" },
    { name: "GitHub", href: "https://github.com/boldhad", icon: <GitHub className="w-5 h-5" />, ariaLabel: "Habtamu Befekadu on GitHub" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/habtam-befekadu", icon: <Linkedin className="w-5 h-5" />, ariaLabel: "Habtamu Befekadu on LinkedIn" },
  ]

  return (
    <>
      <Header />

      {/* Floating Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#3a5a40]/20"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, scale: Math.random() * 0.5 + 0.5, opacity: 0.3 }}
            animate={{ x: [null, Math.random() * window.innerWidth], y: [null, Math.random() * window.innerHeight], transition: { duration: Math.random() * 25 + 20, repeat: Infinity, repeatType: "reverse" } }}
            style={{ width: `${Math.random() * 150 + 100}px`, height: `${Math.random() * 150 + 100}px` }}
          />
        ))}
      </div>

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              {isSubmitted ? "Message Sent!" : "Get In Touch"}
            </motion.h1>
            <motion.p className="text-muted-foreground max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} aria-live="polite">
              {isSubmitted ? "Thank you for reaching out! I'll get back to you soon." : errorMessage || "Have a project in mind or want to collaborate? Feel free to reach out!"}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left - Contact Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
              <Card className="h-full p-6 bg-[#1a1a1a] border-[#201f1f]">
                <h2 className="text-2xl font-semibold mb-6 text-white">Contact Information</h2>
                <div className="space-y-6">
                  {[
                    { icon: <Mail className="w-5 h-5 text-[#4d4d4d]" />, label: "Email", value: "habtamubefekadu19@gmail.com" },
                    { icon: <Phone className="w-5 h-5 text-[#4d4d4d]" />, label: "Phone", value: "+251 982 851 021" },
                    { icon: <MapPin className="w-5 h-5 text-[#4d4d4d]" />, label: "Location", value: "Addis Ababa, Ethiopia" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">{item.icon}</div>
                      <div>
                        <h3 className="font-medium text-white">{item.label}</h3>
                        <p className="text-white">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Icons */}
                <motion.div className="mt-8 pt-6 border-t border-[#201f1f]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                  <h3 className="font-medium mb-4 text-slate-100">Connect with me</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        aria-label={social.ariaLabel}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-[#201f1f] text-slate-100 hover:bg-[#2a2a2a] transition-colors shadow-md"
                        whileHover={{ scale: 1.1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </Card>
            </motion.div>

            {/* Right - Form / Success */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
              {isSubmitted ? (
                <Card className="h-full p-6 bg-[#1a1a1a] border-[#201f1f] flex flex-col items-center justify-center">
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="text-center">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-500/20 mb-6">
                      <CheckCircle className="h-10 w-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground mb-6">Thank you for contacting me. I'll get back to you as soon as possible.</p>
                    <motion.div whileTap={{ scale: 0.98 }}>
                      <Button onClick={() => setIsSubmitted(false)} className="bg-gradient-to-r from-green-500 to-blue-600">
                        Send another message
                      </Button>
                    </motion.div>
                  </motion.div>
                </Card>
              ) : (
                <Card className="h-full p-6 bg-[#1a1a1a] border-[#201f1f]">
                  <h2 className="text-2xl font-semibold mb-6 text-slate-100">Send a Message</h2>
                  <form className="space-y-4" onSubmit={sendEmail}>
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-100">Name</label>
                      <Input ref={nameRef} className="text-slate-100 border-[#201f1f] focus:ring-1 focus:ring-green-500" id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-100">Email</label>
                      <Input className="text-slate-100 border-[#201f1f] focus:ring-1 focus:ring-green-500" id="email" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-slate-100">Subject</label>
                      <Input className="text-slate-100 border-[#201f1f] focus:ring-1 focus:ring-green-500" id="subject" name="subject" placeholder="What's this about?" value={formData.subject} onChange={handleChange} required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-100">Message</label>
                      <Textarea id="message" name="message" placeholder="Your message here..." rows={5} className="text-slate-100 border-[#201f1f] focus:ring-1 focus:ring-green-500" value={formData.message} onChange={handleChange} required />
                    </div>

                    {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}

                    <motion.div whileTap={{ scale: 0.98 }} className="pt-2">
                      <Button type="submit" className="w-full bg-gradient-to-r from-green-500 to-blue-600 cursor-pointer" disabled={isLoading}>
                        {isLoading ? (
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </Card>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Contact
