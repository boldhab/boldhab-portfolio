import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiFigma,
  SiDocker,
  SiGithub,
  SiFramer,
  SiJavascript,
  SiLaravel,
  SiSpring,
  SiMysql,
} from "react-icons/si"
import { Sparkles, Zap, Cpu, Database, Palette, Server, Code } from "lucide-react"

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  // Function to get background color from text color
  const getBgColorFromTextColor = (textColor: string) => {
    const colorMap: Record<string, string> = {
      "text-[#61DAFB]": "bg-[#61DAFB]",
      "text-white": "bg-white",
      "text-[#3178C6]": "bg-[#3178C6]",
      "text-[#F7DF1E]": "bg-[#F7DF1E]",
      "text-[#38BDF8]": "bg-[#38BDF8]",
      "text-[#339933]": "bg-[#339933]",
      "text-[#6DB33F]": "bg-[#6DB33F]",
      "text-[#FF2D20]": "bg-[#FF2D20]",
      "text-[#47A248]": "bg-[#47A248]",
      "text-[#4169E1]": "bg-[#4169E1]",
      "text-[#4479A1]": "bg-[#4479A1]",
      "text-[#F05032]": "bg-[#F05032]",
      "text-[#2496ED]": "bg-[#2496ED]",
      "text-[#F24E1E]": "bg-[#F24E1E]",
    }
    return colorMap[textColor] || "bg-blue-500"
  }

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Palette className="w-5 h-5" />,
      skills: [
        { icon: <SiReact size={28} />, name: "React", color: "text-[#61DAFB]", level: 95 },
        { icon: <SiNextdotjs size={28} />, name: "Next.js", color: "text-white", level: 90 },
        { icon: <SiTypescript size={28} />, name: "TypeScript", color: "text-[#3178C6]", level: 88 },
        { icon: <SiJavascript size={28} />, name: "JavaScript", color: "text-[#F7DF1E]", level: 92 },
        { icon: <SiTailwindcss size={28} />, name: "Tailwind", color: "text-[#38BDF8]", level: 94 },
        { icon: <SiFramer size={28} />, name: "Framer Motion", color: "text-white", level: 89 },
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      skills: [
        { icon: <SiNodedotjs size={28} />, name: "Node.js", color: "text-[#339933]", level: 90 },
        { icon: <SiExpress size={28} />, name: "Express", color: "text-white", level: 88 },
        { icon: <SiSpring size={28} />, name: "Spring Boot", color: "text-[#6DB33F]", level: 85 },
        { icon: <SiLaravel size={28} />, name: "Laravel", color: "text-[#FF2D20]", level: 82 },
      ]
    },
    {
      title: "Database",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { icon: <SiMongodb size={28} />, name: "MongoDB", color: "text-[#47A248]", level: 86 },
        { icon: <SiPostgresql size={28} />, name: "PostgreSQL", color: "text-[#4169E1]", level: 85 },
        { icon: <SiMysql size={28} />, name: "MySQL", color: "text-[#4479A1]", level: 88 },
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Cpu className="w-5 h-5" />,
      skills: [
        { icon: <SiGit size={28} />, name: "Git", color: "text-[#F05032]", level: 92 },
        { icon: <SiGithub size={28} />, name: "GitHub", color: "text-white", level: 90 },
        { icon: <SiDocker size={28} />, name: "Docker", color: "text-[#2496ED]", level: 78 },
        { icon: <SiFigma size={28} />, name: "Figma", color: "text-[#F24E1E]", level: 75 },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    }
  }

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      y: -4,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-blue-950/30 py-16">
      <div ref={containerRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -15 }}
          animate={controls}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm"
            variants={itemVariants}
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">
              Technologies
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent">
              Tech Stack
            </span>
            <motion.span
              className="ml-3 inline-block"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              ⚡
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-slate-300 max-w-xl mx-auto text-base"
            variants={itemVariants}
          >
            Core tools and technologies I use to build exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="space-y-14"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-500/20 via-blue-500/10 to-transparent" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillCardVariants}
                    whileHover="hover"
                    className="group relative"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Skill Card - Increased Size */}
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
                      {/* Icon Container - Increased Size */}
                      <motion.div
                        className={`w-14 h-14 rounded-lg ${skill.color} flex items-center justify-center mb-4 mx-auto`}
                        whileHover={{ rotate: 8, scale: 1.08 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {skill.icon}
                      </motion.div>

                      {/* Skill Name */}
                      <h4 className="text-center font-semibold text-white text-sm mb-3">
                        {skill.name}
                      </h4>

                      {/* Skill Level Indicator */}
                      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${getBgColorFromTextColor(skill.color)}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.2, 
                            delay: (categoryIndex * 0.15) + (skillIndex * 0.08),
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                      
                      {/* Level Percentage */}
                      <motion.p
                        className="text-xs text-slate-400 text-center mt-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ 
                          delay: (categoryIndex * 0.15) + (skillIndex * 0.08) + 0.8,
                          duration: 0.3
                        }}
                        viewport={{ once: true }}
                      >
                        {skill.level}%
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Spring Boot & SQL Highlight - Increased Size */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
         
        </motion.div>

       
        
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
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
          className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
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
            className="absolute w-1 h-1 rounded-full bg-blue-500/30"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + i * 7}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
    </div>
  )
}

export default Skills