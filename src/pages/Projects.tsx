import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Github, ExternalLink, Sparkles, Eye, Zap, Clock, Users, Server } from "lucide-react"
import { motion, useInView } from "framer-motion"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import { useRef } from "react"
import { Link } from "react-router-dom"
import ethioCareerImg from "../assets/jobsite.png"
import socialDashboardImg from "../assets/dash-board.png"
import hotelManagementImg from "../assets/hotel.png"

const projects = [
  {
    title: "Ethio-Career Job Portal",
    description:
      "Full-stack job portal with AI-powered matching using Google Gemini. Features role-based dashboards, CV management, job posting, and application tracking.",
    tags: [
      "Spring Boot",
      "React",
      "Java",
      "MySQL",
      "JWT",
      "AI Integration",
      "REST API",
      "Tailwind CSS",
    ],
    github: "https://github.com/boldhab/job-site.git",
    live: "",
    image: ethioCareerImg,
    category: "Full-Stack",
    year: "2025",
    features: ["AI Matching", "Role-Based Access", "Real-time Updates", "CV Parser"],
    complexity: "High",
    team: "Solo"
  },
  {
    title: "Social Analytics Dashboard",
    description:
      "Modern analytics dashboard with interactive charts, audience insights, campaign tracking, and real-time data visualization for social media metrics.",
    tags: [
      "Next.js",
      "TypeScript",
      "Chart.js",
      "Radix UI",
      "Zustand",
      "Tailwind CSS",
      "Next-Themes",
      "Responsive Design",
    ],
    github: "https://github.com/boldhab/scoial-manager.git",
    live: "https://scoial-manager.vercel.app/",
    image: socialDashboardImg,
    category: "Frontend",
    year: "2025",
    features: ["Real-time Charts", "Theme Support", "Modular Design", "Export Data"],
    complexity: "High",
    team: "Solo"
  },
  {
    title: "Hotel Management System",
    description:
      "Responsive hotel booking platform with room browsing, multi-language support, booking interface, and customer testimonials section.",
    tags: [
      "React",
      "Vite",
      "React Router",
      "i18next",
      "Tailwind CSS",
      "ESLint",
      "Responsive",
      "Booking System",
    ],
    github: "https://github.com/boldhab/Hotel-managment-front-end.git",
    live: "https://hotel-app-et.netlify.app/",
    image: hotelManagementImg,
    category: "Frontend",
    year: "2025",
    features: ["Multi-language", "Booking System", "Room Gallery", "Testimonials"],
    complexity: "High",
    team: "Solo"
  },
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 120,
        damping: 18,
        duration: 0.8 
      } 
    },
  }

  const getComplexityColor = (complexity: string) => {
    switch(complexity) {
      case "High": return "from-red-500/20 to-orange-500/20 text-red-300 border-red-500/30"
      case "Medium": return "from-yellow-500/20 to-amber-500/20 text-yellow-300 border-yellow-500/30"
      default: return "from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30"
    }
  }

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Full-Stack": return "from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30"
      case "Frontend": return "from-purple-500/20 to-violet-500/20 text-purple-300 border-purple-500/30"
      case "Backend": return "from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30"
      default: return "from-gray-500/20 to-slate-500/20 text-gray-300 border-gray-500/30"
    }
  }

  return (
    <div id="projects" className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full"
          animate={{
            x: [0, 35, 0],
            y: [0, -35, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          style={{
            background: "radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 70%)",
            filter: "blur(45px)",
          }}
        />

        {/* Floating Tech Icons */}
        {["⚛️", "🚀", "💻", "⚡", "🔗", "🎨"].map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 mb-8 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-500/15 to-cyan-500/10 backdrop-blur-xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Zap className="w-5 h-5 text-blue-400 animate-pulse" />
            <span className="text-sm font-bold text-blue-300 uppercase tracking-widest">
              Projects
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Crafted With Passion
            </span>
          </motion.h2>

          
        </div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-transparent to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <Card className="relative h-full flex flex-col overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/15 backdrop-blur-xl shadow-2xl group-hover:border-blue-500/40 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)] transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="text-white space-y-3">
                      <h3 className="text-lg font-semibold">Key Features</h3>
                      <ul className="space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <Badge className={`px-4 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r ${getCategoryColor(project.category)} backdrop-blur-sm`}>
                      {project.category}
                    </Badge>
                    <Badge className={`px-4 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r ${getComplexityColor(project.complexity)} backdrop-blur-sm`}>
                      {project.complexity}
                    </Badge>
                  </div>
                  
                  {/* Bottom Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <Badge className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-slate-300 border-white/20 backdrop-blur-sm">
                      <Clock className="w-3 h-3 mr-1" />
                      {project.year}
                    </Badge>
                    <Badge className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-slate-300 border-white/20 backdrop-blur-sm">
                      <Users className="w-3 h-3 mr-1" />
                      {project.team}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-white text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow pb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="px-3 py-1.5 text-xs font-medium rounded-full border-white/15 bg-white/5 text-slate-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 hover:border-blue-500/30 hover:text-white transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-6 border-t border-white/15 justify-between">
                  <div className="flex gap-3">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link to={project.github} target="_blank">
                            <Button
                              size="sm"
                              className="h-10 gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] text-white border-0 transition-all duration-300 shadow-lg"
                            >
                              <Github className="h-4 w-4" />
                              <span className="text-sm font-semibold">Code</span>
                            </Button>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View source code on GitHub</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link to={project.live} target="_blank">
                            <Button
                              size="sm"
                              className="h-10 gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] text-white border-0 transition-all duration-300 shadow-lg"
                            >
                              <ExternalLink className="h-4 w-4" />
                              <span className="text-sm font-semibold">Live Demo</span>
                            </Button>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View live project demo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  
                  <div className="text-xs text-slate-500 flex items-center gap-2">
                    <Server className="w-4 h-4" />
                    <span>{project.tags.slice(0, 2).join(" + ")}</span>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, type: "spring" }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-60" />
            
            <div className="relative p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 border border-blue-500/30 backdrop-blur-2xl shadow-2xl">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              
              <h3 className="text-3xl font-bold text-white mb-4">Ready for the Next Project?</h3>
             
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/projects">
                    <Button className="h-14 px-10 rounded-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-400 hover:via-blue-500 hover:to-blue-600 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] text-white text-lg font-bold border-0 transition-all duration-500 shadow-2xl">
                      <Eye className="mr-3 h-6 w-6" />
                      View All Projects
                      <ArrowUpRight className="ml-3 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact">
                    <Button 
                      className="h-14 px-10 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-500 hover:via-purple-600 hover:to-purple-700 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] text-white text-lg font-bold border-0 transition-all duration-500 shadow-2xl"
                    >
                      <Zap className="mr-3 h-6 w-6" />
                      Contact us
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* CSS for gradient animation */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </div>
  )
}

export default Projects