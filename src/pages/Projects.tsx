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
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import { motion, useInView } from "framer-motion"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import { useRef } from "react"
import { Link } from "react-router-dom"
import ethioCareerImg from "../assets/ethio-career.png"
import socialDashboardImg from "../assets/dashboard.png"
import hotelManagementImg from "../assets/hotel.png"


const projects = [
  {
  title: "Ethio-Career (Job Portal Application)",
  description:
    "A full-stack job portal platform enabling Job Seekers, Employers, and Admins to manage recruitment workflows. Features include CV management, job posting, application tracking, role-based dashboards, and AI-powered tools using Google Gemini for job matching, profile analysis, and job description generation.",
  tags: [
    "Spring Boot",
    "React",
    "Java",
    "MySQL",
    "JWT",
    "Tailwind CSS",
    "Google Gemini AI",
    "REST API",
  ],
  github: "#",
  live: "#",
  image: ethioCareerImg,
}
,
  {
  title: "Social Media Analytics Dashboard",
  description:
    "A modern, responsive social media analytics dashboard built with Next.js and Tailwind CSS. It features overview cards, interactive charts, audience insights, and modular sections for posts, campaigns, customers, and settings, with theme support and scalable state management.",
  tags: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Radix UI",
    "Chart.js",
    "Zustand",
    "Next-Themes",
  ],
  github: "#",
  live: "#",
  image: socialDashboardImg,
}
,
  {
  title: "Hotel Management Frontend",
  description:
    "A modern, responsive frontend application for a Hotel Management System built with React and Vite. It allows guests to browse rooms, view amenities and experiences, read testimonials, explore special offers, and book rooms through an interactive, multi-language booking interface.",
  tags: [
    "React",
    "Vite",
    "React Router",
    "Tailwind CSS",
    "i18next",
    "Responsive Design",
    "ESLint",
  ],
  github: "#",
  live: "#",
  image: hotelManagementImg,
}
,
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div id="projects" className="min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
              Projects
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Things I've built to solve problems, explore ideas, and learn new
            technologies.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col group overflow-hidden bg-[#252424] border-none pt-0">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white ">{project.description}</p>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <h2 className="text-xl">{project.title}</h2>
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-white">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="px-3 py-1 text-xs font-medium rounded-full border border-[#1a1a1a] bg-transparent/50 text-slate-200 shadow-sm hover:shadow-md hover:bg-slate-700/50 transition-all duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="justify-between">
                  <div className="flex space-x-2">
                    {project.github && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link to={project.github} target="_blank">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 hover:bg-[#1a1a1a] hover:text-white"
                              >
                                <Github className="h-4 w-4 text-white" />
                              </Button>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View code in Github</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                    {project.live && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link to={project.live} target="_blank">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 hover:bg-[#1a1a1a] hover:text-white"
                              >
                                <ExternalLink className="h-4 w-4 text-white" />
                              </Button>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Demo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {index % 2 === 0 ? "Featured" : "Personal"}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/Projects">
              <Button
                variant="outline"
                className="px-8 py-6 text-black rounded-full"
              >
                View All My Projects
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Projects
