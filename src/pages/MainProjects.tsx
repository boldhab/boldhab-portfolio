import { motion } from "framer-motion"
import { ExternalLink, Github, Code, Zap, Server, Database, Palette, Cpu, Sparkles } from "lucide-react"
import type { Project } from "@/types/ui"
import Header from "@/components/Header"
import { useEffect, useState } from "react"
import { Footer } from "./Footer"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

// Import your images
import ethioCareerImg from "../assets/jobsite.png"
import dashboardImg from "../assets/dash-board.png"
import hotelImg from "../assets/hotel.png"
import realEstateImg from "../assets/real-estate.png"
import gamesImg from "../assets/games.png"
import habCommerceImg from "../assets/e-commerce.png"
import shoesEcomImg from "../assets/shoes.png"
import taskManagerImg from "../assets/taskmanager.png"
import coffeeShopImg from "../assets/coffiee.png"

const projects: Project[] = [
  {
    id: 1,
    title: "Ethio-Career (Job Portal) 💼",
    description: "A modern, full-stack job portal application built with Spring Boot and React, featuring AI-powered job matching, role-based dashboards, and comprehensive career management tools.",
    technologies: ["Spring Boot", "Spring Security", "React", "MySQL", "Tailwind CSS", "Google Gemini API"],
    features: ["AI job matching", "Role-based dashboards", "Real-time notifications", "CV upload & management", "AI profile analyzer"],
    challenges: "Integrating AI features with secure role-based access and real-time data management",
    solutions: "Implemented Spring Boot with JWT authentication and React frontend with modular components",
    results: "Delivered a comprehensive job portal with enhanced AI features and improved user engagement",
    githubUrl: "https://github.com/boldhab/Ethio-career-full-stack.git",
    liveUrl: "#",
    imageUrl: ethioCareerImg,
    category: "Full Stack",
    color: "bg-gradient-to-r from-blue-600/20 to-cyan-600/20",
    techIcons: [<Server />, <Database />, <Cpu />]
  },
  {
    id: 2,
    title: "Social Media Analytics Dashboard",
    description: "A modern, responsive analytics dashboard providing real-time insights into performance metrics, audience analytics, and campaign tracking.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "Zustand"],
    features: ["Real-time analytics", "Interactive charts", "Theme switching", "Responsive layout", "Modular components"],
    challenges: "Creating a scalable dashboard with consistent UI across all devices",
    solutions: "Adopted modular component architecture with Next.js App Router and Tailwind CSS",
    results: "Delivered a highly performant dashboard with clean UI and flexible configuration",
    githubUrl: "https://github.com/boldhab/scoial-manager.git",
    liveUrl: "https://scoial-manager-app.vercel.app/",
    imageUrl: dashboardImg,
    category: "Frontend",
    color: "bg-gradient-to-r from-purple-600/20 to-pink-600/20",
    techIcons: [<Code />, <Palette />]
  },
  {
    id: 3,
    title: "Hotel Management ",
    description: "A responsive hotel management application with room booking, amenities showcase, and multi-language support.",
    technologies: ["React", "Vite", "Tailwind CSS", "i18next", "React Router"],
    features: ["Multi-language support", "Room booking system", "Amenities showcase", "Responsive design", "Interactive UI"],
    challenges: "Managing translations and state across a complex booking system",
    solutions: "Implemented React Router for navigation and i18next for internationalization",
    results: "Delivered a user-friendly, multilingual hotel booking interface",
    githubUrl: "https://github.com/boldhab/Hotel-managment-front-end.git",
    liveUrl: "https://hotel-app-et.netlify.app",
    imageUrl: hotelImg,
    category: "Frontend",
    color: "bg-gradient-to-r from-emerald-600/20 to-teal-600/20",
    techIcons: [<Code />, <Palette />]
  },
  {
    id: 4,
    title: "Real Estate Landing Page",
    description: "A premium real estate landing page showcasing properties, agents, and testimonials with smooth animations.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "JavaScript"],
    features: ["Property listings", "Agent showcase", "Testimonials", "Smooth animations", "Responsive design"],
    challenges: "Creating visually rich content while maintaining performance",
    solutions: "Used modular React components and Framer Motion for animations",
    results: "Fast, visually appealing real estate landing page",
    githubUrl: "https://github.com/boldhab/Real-esate.git",
    liveUrl: "https://real-state-hab.netlify.app",
    imageUrl: realEstateImg,
    category: "Frontend",
    color: "bg-gradient-to-r from-amber-600/20 to-orange-600/20",
    techIcons: [<Code />, <Palette />]
  },
  {
    id: 5,
    title: "Collection of Games",
    description: "An arcade collection featuring multiple classic mini-games with persistent scoreboard and localStorage integration.",
    technologies: ["React", "Vite", "JavaScript", "CSS", "LocalStorage"],
    features: ["Multiple games", "Persistent scores", "Scoreboard", "Responsive UI", "Shared components"],
    challenges: "Managing state consistency across multiple independent games",
    solutions: "Implemented centralized scoring utility with localStorage",
    results: "Fun, performant arcade experience with reliable score persistence",
    githubUrl: "https://github.com/boldhab/Games.git",
    liveUrl: "https://games-hab.vercel.app",
    imageUrl: gamesImg,
    category: "Frontend",
    color: "bg-gradient-to-r from-rose-600/20 to-red-600/20",
    techIcons: [<Code />, <Zap />]
  },
  {
    id: 6,
    title: "Hab Commerce 🛍️",
    description: "A modern e-commerce platform built with vanilla web technologies, offering a premium shopping experience.",
    technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    features: ["Dynamic catalog", "Shopping cart", "Theme switching", "Checkout system", "Responsive design"],
    challenges: "Implementing full e-commerce functionality without frameworks",
    solutions: "Used modular JavaScript and LocalStorage for persistence",
    results: "Fast, functional e-commerce platform with persistent cart",
    githubUrl: "https://github.com/boldhab/e-commerce.git",
    liveUrl: "https://e-commerce-topaz-beta-13.vercel.app/",
    imageUrl: habCommerceImg,
    category: "Frontend",
    color: "bg-gradient-to-r from-violet-600/20 to-indigo-600/20",
    techIcons: [<Code />, <Palette />]
  },
  {
    id: 7,
    title: "Shoes E-commerce 👟",
    description: "A premium footwear shopping experience with clean UI, smooth navigation, and dynamic storefront.",
    technologies: ["React", "Vite", "React Router", "CSS", "ESLint"],
    features: ["Product showcase", "Interactive menu", "Store locator", "About section", "Contact interface"],
    challenges: "Designing feature-rich e-commerce with smooth navigation",
    solutions: "Implemented modular React components and React Router",
    results: "Polished, fully responsive footwear storefront",
    githubUrl: "https://github.com/boldhab/shoes_ecommerce.git",
    liveUrl: "",
    imageUrl: shoesEcomImg,
    category: "Frontend",
    color: "bg-gradient-to-r from-sky-600/20 to-blue-600/20",
    techIcons: [<Code />, <Palette />]
  },
  {
    id: 8,
    title: "Task Manager 🗂️",
    description: "A modern task management application with drag-and-drop functionality, animations, and notifications.",
    technologies: ["React", "Vite", "Framer Motion", "React DnD", "React Hot Toast"],
    features: ["Drag & drop", "Project management", "Notifications", "Animations", "Responsive design"],
    challenges: "Providing smooth drag-and-drop with real-time feedback",
    solutions: "Used React DnD for drag-and-drop and Framer Motion for animations",
    results: "Highly interactive task manager with intuitive UI",
    githubUrl: "https://github.com/boldhab/Task_managment.git",
    liveUrl: "",
    imageUrl: taskManagerImg,
    category: "Frontend",
    color: "bg-gradient-to-r from-green-600/20 to-emerald-600/20",
    techIcons: [<Code />, <Zap />]
  },
  {
    id: 9,
    title: "Coffee Shop Website ☕",
    description: "A responsive coffee shop website showcasing menu, testimonials, gallery, and contact information.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: ["Menu showcase", "Testimonials", "Gallery", "Contact form", "Responsive design"],
    challenges: "Creating visually appealing design while keeping interactions lightweight",
    solutions: "Used semantic HTML5 and CSS3 with JavaScript for interactivity",
    results: "Clean, interactive coffee shop website",
    githubUrl: "https://github.com/boldhab/coffee_restorant_project.git",
    liveUrl: "https://coffee-restorant-hab.vercel.app",
    imageUrl: coffeeShopImg,
    category: "Frontend",
    color: "bg-gradient-to-r from-amber-600/20 to-yellow-600/20",
    techIcons: [<Code />, <Palette />]
  }
]

export function MainProjects() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950/30 text-white py-20 px-4 sm:px-8 relative overflow-hidden">
        <Header />
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto pt-5 relative z-10"
        >
          {/* Header */}
          <motion.header 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">
                Portfolio
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent">
                Featured{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h1>

            <motion.p
              className="text-slate-300 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Detailed case studies of my most significant work, showcasing technical challenges, solutions, and outcomes.
            </motion.p>
          </motion.header>

          {/* Projects Grid */}
          <motion.div
            className="space-y-32"
            variants={containerVariants}
            initial="hidden"
            animate={loaded ? "show" : "hidden"}
          >
            {projects.map((project, index) => (
              <motion.section
                key={project.id}
                variants={projectVariants}
                className={`relative p-8 rounded-3xl ${project.color} border border-white/10 backdrop-blur-sm`}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Category Badge */}
                <div className="absolute -top-3 left-8">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Image Column */}
                  <div className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                    <motion.div
                      className="relative h-80 md:h-96 overflow-hidden rounded-2xl group"
                      variants={imageVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      whileHover="hover"
                    >
                      <LazyLoadImage
                        src={project.imageUrl}
                        alt={project.title}
                        effect="blur"
                        className="w-full h-full object-cover"
                        wrapperClassName="w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Tech Icons Overlay */}
                      <motion.div 
                        className="absolute bottom-6 left-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                      >
                        {project.techIcons?.map((icon, i) => (
                          <motion.div
                            key={i}
                            className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                          >
                            {icon}
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content Column */}
                  <div className={`${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        {project.title}
                      </h2>
                      <p className="text-slate-300 text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-blue-400" />
                        Key Features
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Code className="w-5 h-5 text-blue-400" />
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm hover:border-blue-500/30 hover:bg-blue-500/10 transition-all"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all group"
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5 text-slate-300 group-hover:text-white" />
                        <span className="font-medium">Code</span>
                      </motion.a>

                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all group"
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="font-medium">Live Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  )
}