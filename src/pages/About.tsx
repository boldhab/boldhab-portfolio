import type { TimelineItem } from "@/types/ui"
import {
  Briefcase,
  GraduationCap,
  Code,
  Rocket,
  User,
  Users,
  TreePine,
  Sparkles,
  Zap,
  Target,
  Brain,
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const items: TimelineItem[] = [
    {
      id: 1,
      title: "Introduction",
      description:
        "Full-stack developer with 3+ years of experience building web applications using React, Next.js, Vue.js, Laravel, Node.js and PostgreSQL. I have developed a strong foundation in front-end and back-end development, and I'm passionate about creating user-friendly and efficient applications that meet the needs of my clients.",
      icon: <User className="w-5 h-5" />,
      side: "left",
      color: "text-blue-400",
    },
    {
      id: 2,
      title: "Education",
      description:
        "Software engineering degree from Debre Brihan University (2022-2025). Graduated with honors. Certified in fundamental programming and Artificial Intelligence from Udemy, and MERN stack development from Alison.",
      date: "2022 - 2025",
      icon: <GraduationCap className="w-5 h-5" />,
      side: "right",
      color: "text-emerald-400",
    },
    {
      id: 3,
      title: "Internship",
      description:
        "Internship at Efuye Gela as a full-stack developer and as a frontend developer at Melfan Tech. Worked on a range of projects including web applications using React, Next.js, Vue.js, Laravel, Node.js and PostgreSQL.",
      date: "2018 - 2020",
      icon: <Briefcase className="w-5 h-5" />,
      side: "left",
      color: "text-amber-400",
    },
    {
      id: 4,
      title: "Current Work",
      description: "Developing a Node.js package for Ethiopian payment systems integrating Telebirr and Fayda APIs. Actively building personal projects and contributing to open-source while continuously learning new technologies.",
      date: "2020 - Present",
      icon: <Code className="w-5 h-5" />,
      side: "right",
      color: "text-cyan-400",
    },
    {
      id: 5,
      title: "Future Goals",
      description:
        "Continuously learning and growing as a developer. Working on personal projects and contributing to open-source projects. Seeking new opportunities to expand my skills and knowledge.",
      icon: <Rocket className="w-5 h-5" />,
      side: "left",
      color: "text-purple-400",
    },
    {
      id: 6,
      title: "Development Philosophy",
      description:
        "I believe in clean, maintainable code and user-centric design. Performance and accessibility should never be afterthoughts.",
      icon: <Target className="w-5 h-5" />,
      side: "right",
      color: "text-rose-400",
    },
    {
      id: 7,
      title: "Work Style",
      description:
        "Agile practitioner who thrives in collaborative environments. Strong believer in documentation and knowledge sharing.",
      icon: <Users className="w-5 h-5" />,
      side: "left",
      color: "text-pink-400",
    },
  ]

  return (
    <section ref={containerRef} className="relative overflow-hidden min-h-screen">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: "radial-gradient(circle, rgba(52, 211, 153, 0.1) 0%, transparent 70%)",
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Professional Journey</span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500">
                Path
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A timeline of milestones, experiences, and principles that shape my journey as a developer
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-emerald-500/0"
              style={{
                scaleY: scrollYProgress,
              }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-500/20 via-emerald-500/20 to-blue-500/20 blur-sm" />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-24">
            {items.map((item, index) => {
              const isLeft = item.side === "left"
              
              return (
                <motion.div
                  key={item.id}
                  className={`relative flex ${
                    isLeft ? "md:flex-row-reverse" : "md:flex-row"
                  } items-center`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                >
                  {/* Timeline Node */}
                  <div className="hidden md:flex flex-1 justify-center relative">
                    <motion.div
                      className={`absolute top-1/2 ${
                        isLeft ? "right-0" : "left-0"
                      } w-1/2 h-0.5 bg-gradient-to-r ${
                        isLeft 
                          ? "from-transparent via-cyan-500/30 to-cyan-500/50" 
                          : "from-cyan-500/50 via-cyan-500/30 to-transparent"
                      }`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                    <motion.div
                      className="relative z-10 w-5 h-5 rounded-full bg-slate-900 border-2 border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`flex-1 ${
                      isLeft ? "md:pr-12" : "md:pl-12"
                    }`}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="group relative">
                      {/* Card Glow Effect */}
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-blue-500/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Main Card */}
                      <div className="relative p-6 md:p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl shadow-2xl">
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-4">
                          <motion.div
                            className={`p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 ${item.color} shadow-lg`}
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {item.icon}
                          </motion.div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-xl md:text-2xl font-bold text-white">
                                {item.title}
                              </h3>
                              {item.date && (
                                <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                                  {item.date}
                                </span>
                              )}
                            </div>
                            <motion.div
                              className="h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-emerald-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Bottom Decoration */}
                        <motion.div
                          className="h-0.5 w-0 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 1 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Floating CTA */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-blue-500/10 border border-white/10 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-slate-300">
                Currently open for new opportunities
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}