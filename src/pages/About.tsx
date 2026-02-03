import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Code, Rocket, Users, Layers, Briefcase, Sparkles, ChevronRight, Award, Clock, Terminal, BookOpen, Zap } from "lucide-react"

interface JourneyMilestone {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  color: string
  skills: string[]
  year: string
}

export function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.5])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1])

  const milestones: JourneyMilestone[] = [
    {
      id: 1,
      title: "Academic Foundation",
      description: "Software Engineering student at Debre Birhan University, building strong foundations in algorithms, data structures, and software design principles.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-400",
      skills: ["Algorithms", "Data Structures", "OOP", "Software Design"],
      year: "2022 - Present"
    },
    {
      id: 2,
      title: "Technical Mastery",
      description: "Mastered both front-end and back-end development, creating full-stack applications with modern technologies and best practices.",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-pink-400",
      skills: ["React/Next.js", "Node.js", "TypeScript", "PostgreSQL"],
      year: "2023 - Present"
    },
    {
      id: 3,
      title: "Real-World Application",
      description: "Hands-on experience through freelance projects, delivering end-to-end solutions from concept to deployment and maintenance.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-emerald-500 to-green-400",
      skills: ["Project Management", "Client Communication", "Deployment", "Maintenance"],
      year: "2023 - Present"
    },
    {
      id: 4,
      title: "Full-Stack Expertise",
      description: "Developed responsive interfaces and scalable back-end systems, focusing on performance, security, and user experience.",
      icon: <Layers className="w-6 h-6" />,
      color: "from-orange-500 to-amber-400",
      skills: ["API Design", "Database Design", "UI/UX", "Performance"],
      year: "2024 - Present"
    },
    {
      id: 5,
      title: "Professional Growth",
      description: "Enhanced soft skills including communication, time management, and problem-solving for effective collaboration.",
      icon: <Users className="w-6 h-6" />,
      color: "from-rose-500 to-red-400",
      skills: ["Communication", "Teamwork", "Problem Solving", "Time Management"],
      year: "Ongoing"
    },
    {
      id: 6,
      title: "Future Vision",
      description: "Continuously learning and evolving to deliver cutting-edge solutions that help businesses transform ideas into reality.",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-violet-500 to-purple-400",
      skills: ["Innovation", "Continuous Learning", "Scalability", "Best Practices"],
      year: "Next Steps"
    }
  ]

  const stats = [
    { label: "Projects Completed", value: "20+", icon: <Terminal className="w-5 h-5" /> },
    { label: "Technologies Mastered", value: "15+", icon: <Terminal className="w-5 h-5" /> },
    { label: "Client Satisfaction", value: "100%", icon: <Award className="w-5 h-5" /> },
    { label: "Years Experience", value: "2+", icon: <Clock className="w-5 h-5" /> },
  ]

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen py-20 md:py-32 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)",
            filter: "blur(60px)"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
          animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            background: "radial-gradient(circle, rgba(52, 211, 153, 0.08) 0%, transparent 70%)",
            filter: "blur(60px)"
          }}
        />
        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(34, 211, 238, 0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(34, 211, 238, 0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            opacity,
          }}
        />
      </div>

      {/* Content Container */}
      <motion.div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ scale }}>
        {/* Header */}
        <motion.div className="text-center mb-16 md:mb-24" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
          <motion.div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Evolution & Growth</span>
          </motion.div>
          <motion.h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-emerald-100 bg-clip-text text-transparent" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            My{" "}
            <span className="relative">
              <span className="relative bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Development
              </span>
            </span>{" "}
            Journey
          </motion.h2>
          <motion.p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
            From academic foundations to professional full-stack development, follow my path of continuous learning and growth
          </motion.p>
        </motion.div>

        {/* Horizontal Flow Timeline with Flex Wrap */}
        <div className="relative w-full mb-12">
          {/* Timeline Container - Uses flex with wrap */}
          <div className="relative flex flex-wrap justify-center gap-6">
            {/* Milestone Cards */}
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                className="relative"
                style={{ 
                  width: 'calc(100% - 12px)',
                  maxWidth: '400px',
                  flex: '1 1 300px' // This makes cards flexible
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {/* Timeline Node */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    className="w-12 h-12 rounded-full border-2 border-white/20 bg-slate-900 flex items-center justify-center relative"
                    whileHover={{ scale: 1.1 }}
                    animate={isInView ? {
                      borderColor: ["rgba(255,255,255,0.2)", "rgba(34,211,238,0.8)", "rgba(255,255,255,0.2)"],
                      boxShadow: ["0 0 0 rgba(34,211,238,0)", "0 0 20px rgba(34,211,238,0.5)", "0 0 0 rgba(34,211,238,0)"]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center`}>
                      {milestone.icon}
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{index + 1}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Milestone Card */}
                <div className="group mt-6">
                  <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl h-full min-h-[280px] flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-300 border border-white/10 flex-shrink-0 ml-2">
                        {milestone.year}
                      </span>
                    </div>
                    <p className="text-slate-300 mb-4 leading-relaxed flex-grow">
                      {milestone.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {milestone.skills.map((skill, idx) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-300 border border-white/10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 + 0.5 }}
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: "rgba(255,255,255,0.1)",
                            borderColor: "rgba(34,211,238,0.3)"
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div className="mt-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} className="group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">{stat.value}</div>
                  <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      
            
             
           
         
      </motion.div>
    </section>
  )
}

export function About() {
  return <JourneySection />
}