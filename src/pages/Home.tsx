import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Sparkles, ArrowRight, Code, Server, Database, Download, FileText } from "lucide-react"

import { PersonalCardHeader } from "@/components/PersonalCardHeader"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import ProfileImage from "@/components/ProfileImage"
import { Button } from "@/components/ui/button"
import { SiTelegram } from "react-icons/si"
import type { socialLinks } from "@/types/ui"
import { Link } from "react-router-dom"

const socialLinks: socialLinks[] = [
  { name: "GitHub", url: "https://github.com/boldhab", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/habtam-befekadu",
    icon: "linkedin",
  },
  { name: "Telegram", url: "https://t.me/habtamu_befekadu", icon: "telegram" },
  { name: "Email", url: "mailto:habtamubefekadu19@gmail.com", icon: "mail" },
]

export default function Home() {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // Replace with your actual CV URL or file path
    const cvUrl = "/path/to/your/cv.pdf"
    const link = document.createElement("a")
    link.href = cvUrl
    link.download = "Habtamu_Befekadu_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full"
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            background: "radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)",
            filter: "blur(35px)",
          }}
        />

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-500/20"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + i * 6}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(90deg, currentColor 1px, transparent 1px),
                             linear-gradient(0deg, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 py-20"
        >
          {/* Left Column - Profile & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Profile Image */}
            <motion.div
              className="relative mb-8"
              whileHover={{ scale: 1.05 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative">
                <ProfileImage />
                {/* Animated rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -inset-2 rounded-full border border-blue-500/20"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>

            {/* Title Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">
                Full-Stack Developer
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-transparent">
                Habtamu{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Befekadu
              </span>

            </motion.h1>


            {/* Specialization */}
            <motion.div
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <h2 className="text-xl font-semibold text-foreground bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                MERN & Laravel Specialist
              </h2>
            </motion.div>



            {/* Education */}
            <motion.p
              className="text-md text-muted-foreground mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              <span className="text-blue-500 font-semibold">Software Engineering</span> student at Debre Birhan University
            </motion.p>



            {/* Social Links */}
            <motion.div
              className="flex gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <TooltipProvider>
                {socialLinks.map((social) => (
                  <Tooltip key={social.name}>
                    <TooltipTrigger asChild>
                      <motion.a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {social.icon === "github" && <Github size={18} />}
                        {social.icon === "linkedin" && <Linkedin size={18} />}
                        {social.icon === "telegram" && <SiTelegram size={18} />}
                        {social.icon === "mail" && <Mail size={18} />}
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </motion.div>

            {/* CTA Buttons - Now with 3 buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {/* View Projects */}
              <motion.div
                className="flex-1"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link to="/projects">
                  <Button className="w-full h-10 text-sm rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 hover:shadow-[0_0_16px_rgba(59,130,246,0.3)] transition-all duration-300 font-semibold">
                    View Projects
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>

              {/* Contact Me */}
              <motion.div
                className="flex-1"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="w-full h-10 text-sm rounded-lg border-emerald-500/40 text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 font-semibold"
                  >
                    Contact Me
                  </Button>
                </Link>
              </motion.div>

              {/* CV */}
              <motion.div
                className="flex-1"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Button
                  onClick={handleDownloadCV}
                  variant="ghost"
                  className="w-full h-10 text-sm rounded-lg bg-secondary/50 border border-border text-foreground hover:bg-secondary hover:border-blue-500/30 transition-all duration-300 font-semibold"
                >
                  <Download className="mr-2 w-4 h-4" />
                  My CV
                </Button>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right Column - Info & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-3/5 space-y-8"
          >
            {/* Intro Text - Updated with education info */}
            <motion.div
              className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
              whileHover={{ borderColor: "rgba(59, 130, 246, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Code className="w-6 h-6 text-blue-500" />
                About Me
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Full-stack developer with{" "}
                <span className="text-blue-500 font-semibold">2+ years</span> of experience in{" "}
                <span className="text-blue-500 font-semibold">MERN</span> and{" "}
                <span className="text-red-500 font-semibold">Laravel</span>, building scalable, modern web applications with clean, maintainable code.
                Software Engineering student at{" "}
                <span className="text-blue-500 font-semibold">Debre Birhan University</span>.
              </p>
            </motion.div>



            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { value: "2+", label: "Years Experience", icon: <Sparkles className="w-4 h-4" /> },
                { value: "15+", label: "Projects Built", icon: <Server className="w-4 h-4" /> },
                { value: "Student", label: "Debre Birhan University", icon: <FileText className="w-4 h-4" /> },
                { value: "MERN & Laravel", label: "Specialization", icon: <Database className="w-4 h-4" /> },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 backdrop-blur-sm text-center"
                  whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.3)" }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.6 + index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>




          </motion.div>
        </motion.div>
      </div>

      {/* Floating Cards */}
      <PersonalCardHeader
        name="habtamubefekadu19@gmail.com"
        title="Email Me"
        position="top-1/3 -right-6"
      />
      <PersonalCardHeader
        name="Full-Stack Developer | MERN & Laravel"
        title="Debre Birhan University Student"
        position="top-2/3 -right-6"
      />
    </div>
  )
}