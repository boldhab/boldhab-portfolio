import emailjs from "emailjs-com"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, MessageSquare, Sparkles, ArrowRight, Loader2 } from "lucide-react"
import { useState, useEffect, useRef, useMemo } from "react"
import type { ChangeEvent, FormEvent } from "react"

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "@/components/Header"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

// Blue-themed Magnetic Wrapper
const MagneticWrapper = ({ children, strength = 0.12 }: { children: React.ReactNode, strength?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 250 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * strength);
    y.set((clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
};

// Blue-themed Floating Particles
const FloatingParticles = () => {
  const particles = useMemo(() => [...Array(15)].map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 0.8,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 8,
    delay: Math.random() * -15,
  })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-400/10 dark:bg-blue-400/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.4, 0],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Animated Background Elements with blue theme
const BlueBackground = () => {
  return (
    <>
      {/* Primary Blue Gradient */}
      <motion.div
        className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_70%)]"
        animate={{
          x: [0, 30, 0],
          y: [0, -15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          filter: "blur(40px)",
        }}
      />

      {/* Cyan Accent */}
      <motion.div
        className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.05)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(34,211,238,0.1)_0%,transparent_70%)]"
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        style={{
          filter: "blur(35px)",
        }}
      />

      {/* Subtle Moving Dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-blue-500/15 dark:bg-blue-500/30"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + i * 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", subject: "", message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  // Subtle mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 40, stiffness: 350 });
  const springY = useSpring(mouseY, { damping: 40, stiffness: 350 });

  const moveX = useTransform(springX, [0, window.innerWidth], [-15, 15]);
  const moveY = useTransform(springY, [0, window.innerHeight], [-15, 15]);

  const handleGlobalMouseMove = (e: globalThis.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsLoading(true)

  emailjs
    .sendForm(
      "service_hj82dcp",       // Your Gmail service ID
      "template_2da03xp",      // Your template ID
      e.currentTarget,          // The form element
      "aqvltvwaYFkc7IlVS"      // Your public key
    )
    .then(
      () => {
        setIsSubmitted(true)
        setIsLoading(false)
        setFormData({ name: "", email: "", subject: "", message: "" })
      },
      (error) => {
        console.error("EmailJS error:", error)
        setIsLoading(false)
      }
    )
}


  useEffect(() => {
    nameRef.current?.focus()
  }, [])

  const socialLinks = [
    { name: "Telegram", href: "https://t.me/habtamu_befekadu", icon: <Send className="w-4 h-4" />, color: "hover:bg-blue-500/20" },
    { name: "GitHub", href: "https://github.com/boldhad", icon: <Github className="w-4 h-4" />, color: "hover:bg-blue-500/20" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/habtam-befekadu", icon: <Linkedin className="w-4 h-4" />, color: "hover:bg-blue-500/20" },
  ]

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "habtamubefekadu19@gmail.com", href: "mailto:habtamubefekadu19@gmail.com" },
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+251 982 851 021", href: "tel:+251982851021" },
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Addis Ababa, Ethiopia", href: "#" },
  ]

  return (
    <div className="relative min-h-screen bg-background transition-colors duration-300 selection:bg-blue-500/30 overflow-hidden">
      <Header />
      <FloatingParticles />
      <BlueBackground />

      {/* Interactive Background Layer */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ x: moveX, y: moveY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/3 to-transparent rounded-full blur-[60px]" />
        </motion.div>

        {/* Animated Grid */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1]"
          style={{
            backgroundImage: `linear-gradient(90deg, currentColor 1px, transparent 1px),
                             linear-gradient(0deg, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Clean Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm"
            >
              <Sparkles className="w-3 h-3 text-blue-500" />
              <span className="text-xs font-medium text-blue-600 dark:text-blue-300 uppercase tracking-wider">Contact</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-transparent"
            >
              {isSubmitted ? "Message Sent!" : "Let's Work Together"}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-md mx-auto text-sm md:text-base"
            >
              {isSubmitted
                ? "I'll get back to you within 24 hours."
                : "Have a project in mind? Let's make it happen."}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
            {/* Contact Info Panel */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="p-8 rounded-2xl bg-secondary/30 border border-border backdrop-blur-sm shadow-lg hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">Get in Touch</h2>
                    <p className="text-muted-foreground text-sm">Direct ways to reach me</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-4 group p-3 rounded-xl hover:bg-blue-500/5 transition-all duration-300"
                      whileHover={{ x: 4 }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <span className="text-xs text-muted-foreground">{item.label}</span>
                        <p className="text-foreground font-medium text-sm">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Connect Online</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <MagneticWrapper key={social.name} strength={0.08}>
                        <motion.a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-10 h-10 rounded-lg bg-blue-500/5 border border-blue-500/10 flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300`}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                        >
                          {social.icon}
                        </motion.a>
                      </MagneticWrapper>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Panel */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 backdrop-blur-sm shadow-lg text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-6 shadow-lg"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent!</h3>
                    <p className="text-muted-foreground mb-8">I'll review your message and get back to you soon.</p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="h-12 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
                    >
                      New Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    className="p-8 rounded-2xl bg-secondary/30 border border-border backdrop-blur-sm shadow-lg hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <Send className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-foreground">Send a Message</h2>
                        <p className="text-muted-foreground text-sm">Tell me about your project</p>
                      </div>
                    </div>

                    <form className="space-y-6" onSubmit={sendEmail}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm text-muted-foreground">Your Name</label>
                          <Input
                            ref={nameRef}
                            className="h-12 rounded-xl bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus:bg-secondary focus:border-blue-500 transition-all"
                            id="name"
                            name="name"
                            placeholder="your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-muted-foreground">Your Email</label>
                          <Input
                            className="h-12 rounded-xl bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus:bg-secondary focus:border-blue-500 transition-all"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="example@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">Subject</label>
                        <Input
                          className="h-12 rounded-xl bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus:bg-secondary focus:border-blue-500 transition-all"
                          id="subject"
                          name="subject"
                          placeholder="Project inquiry"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">Message</label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Describe your project, timeline, and requirements..."
                          rows={5}
                          className="rounded-xl bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus:bg-secondary focus:border-blue-500 resize-none transition-all"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all disabled:opacity-50"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <div className="flex items-center justify-center gap-2">
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span>Sending...</span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-2">
                              <span>Send Message</span>
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Footer Note */}
          <motion.div
            className="mt-12 text-center text-muted-foreground text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p>Typically respond within 24 hours • Based in Addis Ababa, Ethiopia</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact