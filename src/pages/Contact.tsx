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

// Color constants from your system
const COLORS = {
  primary: {
    500: "#3B82F6",
    600: "#2563EB"
  },
  accent: {
    purple: "#8B5CF6",
    green: "#22C55E"
  },
  text: {
    primary: "#E5E7EB",
    secondary: "#9CA3AF"
  },
  background: {
    global: "#020617",
    card: "#0F172A"
  }
}

// Compact Magnetic Wrapper
const MagneticWrapper = ({ children, strength = 0.15 }: { children: React.ReactNode, strength?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
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
    >
      {children}
    </motion.div>
  );
};

// Compact Particle System
const FloatingParticles = () => {
  const particles = useMemo(() => [...Array(25)].map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 0.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * -20,
  })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            backgroundColor: `${COLORS.primary[500]}20` // 20% opacity
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 30 - 15, 0],
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

// LAYER 1: Slow Animated Gradient (Base)
const SlowAnimatedGradient = () => {
  return (
    <motion.div
      className="absolute inset-0"
      animate={{
        background: [
          `linear-gradient(45deg, ${COLORS.background.global} 0%, #1E293B 50%, #1E3A8A 100%)`,
          `linear-gradient(135deg, #1E3A8A 0%, ${COLORS.background.global} 50%, #1E293B 100%)`,
          `linear-gradient(225deg, #1E293B 0%, #1E3A8A 50%, ${COLORS.background.global} 100%)`,
          `linear-gradient(315deg, ${COLORS.background.global} 0%, #1E293B 50%, #1E3A8A 100%)`,
        ]
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

// LAYER 2: Main Floating Blobs (Depth)
const MainFloatingBlobs = () => {
  const blobs = [
    {
      id: 1,
      color: COLORS.primary[500],
      size: 400,
      x: "10%",
      y: "20%",
      opacity: 0.2,
      animation: {
        x: [0, 50, 0],
        y: [0, -30, 0],
        scale: [1, 1.2, 1]
      }
    },
    {
      id: 2,
      color: COLORS.accent.purple,
      size: 300,
      x: "80%",
      y: "60%",
      opacity: 0.25,
      animation: {
        x: [0, -40, 0],
        y: [0, 40, 0],
        scale: [1, 1.3, 1]
      }
    },
    {
      id: 3,
      color: COLORS.primary[500],
      size: 250,
      x: "70%",
      y: "10%",
      opacity: 0.15,
      animation: {
        x: [0, -20, 0],
        y: [0, 50, 0],
        scale: [1, 1.1, 1]
      }
    }
  ];

  return (
    <>
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
            background: `radial-gradient(circle, ${blob.color}${Math.round(blob.opacity * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
            filter: "blur(60px)",
            opacity: blob.opacity,
          }}
          animate={blob.animation}
          transition={{
            duration: 20 + blob.id * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: blob.id * 2,
          }}
        />
      ))}
    </>
  );
};

// LAYER 2B: Two Corner Floating Blobs (Specific request)
const CornerFloatingBlobs = () => {
  const cornerBlobs = [
    {
      id: 1,
      color: COLORS.primary[500],
      size: 250,
      position: "top-left",
      x: "-10%",
      y: "-10%",
      opacity: 0.2,
      animation: {
        x: [0, 20, 0],
        y: [0, 15, 0],
        scale: [1, 1.15, 1]
      }
    },
    {
      id: 2,
      color: COLORS.accent.purple,
      size: 200,
      position: "bottom-right",
      x: "-10%",
      y: "-10%",
      opacity: 0.15,
      animation: {
        x: [0, -25, 0],
        y: [0, -20, 0],
        scale: [1, 1.1, 1]
      }
    }
  ];

  return (
    <>
      {/* Top Left Corner Blob */}
      <motion.div
        className="absolute top-0 left-0 rounded-full"
        style={{
          width: cornerBlobs[0].size,
          height: cornerBlobs[0].size,
          background: `radial-gradient(circle, ${cornerBlobs[0].color}${Math.round(cornerBlobs[0].opacity * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
          filter: "blur(50px)",
          opacity: cornerBlobs[0].opacity,
        }}
        animate={cornerBlobs[0].animation}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0,
        }}
      />

      {/* Bottom Right Corner Blob */}
      <motion.div
        className="absolute bottom-0 right-0 rounded-full"
        style={{
          width: cornerBlobs[1].size,
          height: cornerBlobs[1].size,
          background: `radial-gradient(circle, ${cornerBlobs[1].color}${Math.round(cornerBlobs[1].opacity * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
          filter: "blur(45px)",
          opacity: cornerBlobs[1].opacity,
        }}
        animate={cornerBlobs[1].animation}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </>
  );
};

// LAYER 3: Noise Overlay (Polish)
const NoiseOverlay = () => {
  return (
    <motion.div
      className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px",
      }}
      animate={{
        opacity: [0.02, 0.04, 0.02],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// Combined Background Component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Layer 1: Slow Animated Gradient */}
      <SlowAnimatedGradient />

      {/* Layer 2: Main Floating Blobs */}
      <MainFloatingBlobs />

      {/* Layer 2B: Two Corner Floating Blobs */}
      <CornerFloatingBlobs />

      {/* Layer 3: Noise Overlay */}
      <NoiseOverlay />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px),
                           linear-gradient(0deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", subject: "", message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

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
        "service_8oby0sa", "template_jrk5rq9",
        e.target as HTMLFormElement, "Ddw-YUU_qHVSVYCjv"
      )
      .then(
        (result) => {
          setIsSubmitted(true)
          setIsLoading(false)
          setFormData({ name: "", email: "", subject: "", message: "" })
        },
        (error) => {
          setErrorMessage("Oops! Something went wrong. Please try again later.")
          setIsLoading(false)
        }
      )
  }

  useEffect(() => {
    nameRef.current?.focus()
  }, [])

  const socialLinks = [
    { name: "Telegram", href: "https://t.me/habtamu_befekadu", icon: <Send className="w-4 h-4" /> },
    { name: "GitHub", href: "https://github.com/boldhab", icon: <Github className="w-4 h-4" /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/habtam-befekadu", icon: <Linkedin className="w-4 h-4" /> },
  ]

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "habtamubefekadu19@gmail.com", href: "mailto:habtamubefekadu19@gmail.com" },
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+251 982 851 021", href: "tel:+251982851021" },
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Addis Ababa, Ethiopia", href: "#" },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: COLORS.background.global }}>
      {/* Animated Background */}
      <AnimatedBackground />

      <FloatingParticles />
      <Header />

      <div className="relative z-10 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Compact Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border backdrop-blur-sm"
              style={{
                borderColor: `${COLORS.primary[500]}40`,
                backgroundColor: `${COLORS.primary[500]}10`,
              }}
            >
              <Sparkles className="w-3 h-3" style={{ color: COLORS.primary[500] }} />
              <span
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: COLORS.primary[500] }}
              >
                Get in Touch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ color: COLORS.text.primary }}
            >
              {isSubmitted ? "Message Sent!" : "Let's Connect"}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-md mx-auto text-sm md:text-base"
              style={{ color: COLORS.text.secondary }}
            >
              {isSubmitted
                ? "I'll get back to you within 24 hours."
                : "Ready to bring your ideas to life. Let's start the conversation."}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            {/* Left - Compact Contact Info */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div
                className="p-8 rounded-2xl backdrop-blur-sm shadow-lg"
                style={{
                  backgroundColor: COLORS.background.card,
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${COLORS.primary[500]}10`,
                      border: `1px solid ${COLORS.primary[500]}20`
                    }}
                  >
                    <MessageSquare className="w-5 h-5" style={{ color: COLORS.primary[500] }} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold" style={{ color: COLORS.text.primary }}>Contact Info</h2>
                    <p className="text-sm" style={{ color: COLORS.text.secondary }}>Direct ways to reach me</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-4 group"
                      whileHover={{ x: 4 }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:bg-white/10 group-hover:border-white/20"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: COLORS.primary[500]
                        }}
                      >
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <span className="text-xs" style={{ color: COLORS.text.secondary }}>{item.label}</span>
                        <p className="font-medium" style={{ color: COLORS.text.primary }}>{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <p className="text-sm mb-4" style={{ color: COLORS.text.secondary }}>Connect with me</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <MagneticWrapper key={social.name} strength={0.1}>
                        <motion.a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: COLORS.text.secondary
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                          whileHover={{
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            color: COLORS.primary[500],
                            borderColor: COLORS.primary[500]
                          }}
                        >
                          {social.icon}
                        </motion.a>
                      </MagneticWrapper>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Compact Form/Success */}
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
                    className="p-8 md:p-10 rounded-2xl backdrop-blur-sm shadow-lg text-center"
                    style={{
                      background: `linear-gradient(135deg, ${COLORS.primary[500]}10, ${COLORS.accent.purple}05)`,
                      border: `1px solid ${COLORS.primary[500]}20`
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${COLORS.primary[500]}, ${COLORS.accent.purple})`
                      }}
                    >
                      <CheckCircle className="w-10 h-10" style={{ color: 'white' }} />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.text.primary }}>Success!</h3>
                    <p className="mb-8" style={{ color: COLORS.text.secondary }}>Your message has been sent. I'll respond soon.</p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="h-12 px-8 rounded-xl hover:shadow-lg transition-all"
                      style={{
                        backgroundColor: COLORS.primary[500],
                        color: 'white'
                      }}
                      whileHover={{
                        backgroundColor: COLORS.primary[600],
                        boxShadow: `0 0 20px ${COLORS.primary[500]}40`
                      }}
                    >
                      New Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    className="p-8 rounded-2xl backdrop-blur-sm shadow-lg"
                    style={{
                      backgroundColor: COLORS.background.card,
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: `${COLORS.primary[500]}10`,
                          border: `1px solid ${COLORS.primary[500]}20`
                        }}
                      >
                        <Send className="w-5 h-5" style={{ color: COLORS.primary[500] }} />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold" style={{ color: COLORS.text.primary }}>Send Message</h2>
                        <p className="text-sm" style={{ color: COLORS.text.secondary }}>Fill out the form below</p>
                      </div>
                    </div>

                    <form className="space-y-6" onSubmit={sendEmail}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm" style={{ color: COLORS.text.secondary }}>Your Name</label>
                          <Input
                            ref={nameRef}
                            className="h-12 rounded-xl text-white placeholder:text-white/20"
                            style={{
                              backgroundColor: 'rgba(255,255,255,0.05)',
                              borderColor: 'rgba(255,255,255,0.1)'
                            }}
                            id="name"
                            name="name"
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm" style={{ color: COLORS.text.secondary }}>Your Email</label>
                          <Input
                            className="h-12 rounded-xl text-white placeholder:text-white/20"
                            style={{
                              backgroundColor: 'rgba(255,255,255,0.05)',
                              borderColor: 'rgba(255,255,255,0.1)'
                            }}
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm" style={{ color: COLORS.text.secondary }}>Subject</label>
                        <Input
                          className="h-12 rounded-xl text-white placeholder:text-white/20"
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            borderColor: 'rgba(255,255,255,0.1)'
                          }}
                          id="subject"
                          name="subject"
                          placeholder="Project inquiry"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm" style={{ color: COLORS.text.secondary }}>Message</label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project..."
                          rows={5}
                          className="rounded-xl text-white placeholder:text-white/20 resize-none"
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            borderColor: 'rgba(255,255,255,0.1)'
                          }}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {errorMessage && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-center"
                          style={{ color: '#EF4444' }}
                        >
                          {errorMessage}
                        </motion.p>
                      )}

                      <Button
                        type="submit"
                        className="w-full h-12 rounded-xl font-semibold transition-all disabled:opacity-50"
                        style={{
                          backgroundColor: COLORS.primary[500],
                          color: 'white'
                        }}
                        disabled={isLoading}
                        whileHover={{
                          backgroundColor: COLORS.primary[600],
                          boxShadow: `0 0 20px ${COLORS.primary[500]}40`
                        }}
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
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Footer Note */}
          <motion.div
            className="mt-12 text-center text-xs"
            style={{ color: COLORS.text.secondary }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p>Response time: Within 24 hours • Based in Addis Ababa, Ethiopia</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact