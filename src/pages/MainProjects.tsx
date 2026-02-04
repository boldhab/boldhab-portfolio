import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "@/types/ui"
import Header from "@/components/Header"
import { cn } from "@/lib/utils"
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
  description:
    "A modern, full-stack job portal application built with Spring Boot (backend) and React (frontend), enabling job seekers, employers, and admins to manage profiles, applications, and postings, with AI-powered features for enhanced user experience.",
  technologies: [
    "Spring Boot",
    "Spring Security",
    "Spring Data JPA",
    "Hibernate",
    "MySQL",
    "Java 17",
    "React",
    "React Router",
    "Tailwind CSS",
    "Axios",
    "React Hot Toast",
    "Heroicons",
    "Vite",
    "Google Gemini API"
  ],
  features: [
    "Job Seekers: Profile management, CV uploads, job search with filters, AI match scoring, AI profile analyzer",
    "Employers: Post and manage jobs, review applicants, communicate with candidates, AI job description generator",
    "Admins: Approve employers, moderate job postings, view platform analytics, manage users",
    "AI Features: Chatbot assistant, profile analyzer, match score, AI-generated job descriptions",
    "Frontend built with React and Tailwind CSS for a responsive, clean UI",
    "Backend with Spring Boot, Spring Security, and MySQL for secure and scalable data management",
    "Role-based dashboards and protected routes",
    "Real-time notifications and interactive UI elements"
  ],
  challenges:
    "Integrating full-stack features including role-based access, AI-powered assistance, real-time feedback, and a secure, scalable backend",
  solutions:
    "Implemented Spring Boot with JWT authentication for backend, React frontend with modular components, Axios for API requests, and Google Gemini API for AI-powered features",
  results:
    "Delivered a comprehensive job portal with enhanced AI features, secure role-based access, responsive design, and improved user engagement for job seekers and employers",
  githubUrl: "https://github.com/your-username/ethio-career",
  liveUrl: "#",
  imageUrl: ethioCareerImg,
}
,

  {
  id: 2,
  title: "Social Media Analytics Dashboard",
  description:
    "A modern, responsive social media analytics dashboard that provides real-time insights into performance, audience metrics, and campaign analytics through an intuitive UI.",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Chart.js",
    "Radix UI",
    "Zustand"
  ],
  features: [
    "Modular dashboard sections with reusable UI components",
    "Responsive layout with collapsible sidebar navigation",
    "Theme switching with light and dark mode using next-themes",
    "Interactive charts and analytics powered by Chart.js",
    "Configurable sections for posts, campaigns, customers, and settings"
  ],
  challenges:
    "Designing a scalable and responsive dashboard architecture while maintaining performance and consistent UI across devices",
  solutions:
    "Adopted a modular component-based architecture with the Next.js App Router, leveraged Tailwind CSS for responsive design, and used Zustand for scalable state management",
  results:
    "Delivered a highly performant and user-friendly dashboard with clean UI, fast load times, and flexible configuration for future feature expansion",
  githubUrl: "https://github.com/your-username/social-media-dashboard",
  liveUrl: "#",
  imageUrl: dashboardImg,
}
,

  {
  id: 3,
  title: "Hotel Management Frontend",
  description:
    "A modern and responsive frontend application for a Hotel Management System that allows guests to browse rooms, explore amenities, read testimonials, and book their stay through an intuitive interface.",
  technologies: [
    "React",
    "Vite",
    "React Router",
    "i18next",
    "Tailwind CSS",
    "FontAwesome",
    "ESLint"
  ],
  features: [
    "Welcoming home page with hero section and quick navigation links",
    "Detailed room browsing with individual room cards and views",
    "Interactive booking system with reservation form",
    "Amenities and experiences showcase pages",
    "Special offers and promotions section",
    "Guest testimonials and reviews",
    "Contact page with inquiry form",
    "Multi-language support using i18next",
    "Fully responsive design for all screen sizes"
  ],
  challenges:
    "Managing application-wide state and translations while maintaining a clean and scalable component structure",
  solutions:
    "Implemented React Router for structured navigation, modular reusable components, and i18next for seamless internationalization across the application",
  results:
    "Delivered a user-friendly, multilingual hotel booking interface with smooth navigation, responsive design, and improved user engagement",
  githubUrl: "https://github.com/your-username/hotel-management-frontend",
  liveUrl: "#",
  imageUrl: hotelImg,
}
,

 {
  id: 4,
  title: "Real Estate Landing Page",
  description:
    "A modern, fully responsive real estate landing page designed to showcase properties, agents, testimonials, and contact information with smooth animations and a premium user experience.",
  technologies: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "Font Awesome",
    "JavaScript Modules"
  ],
  features: [
    "Modern hero section with engaging call-to-action",
    "Featured property listings with dynamic data rendering",
    "Why Choose Us section highlighting key value propositions",
    "Agents team showcase with profile cards",
    "Client testimonials powered by structured data files",
    "Contact form for customer inquiries",
    "Smooth animations and transitions using Framer Motion",
    "Fully responsive layout optimized for all devices",
    "Clean, component-based single-page architecture"
  ],
  challenges:
    "Creating a visually rich landing page while maintaining performance and clean component separation",
  solutions:
    "Used a modular React component structure, Tailwind CSS for rapid responsive styling, and Framer Motion to add smooth, non-intrusive animations",
  results:
    "Delivered a fast, visually appealing real estate landing page that improves user engagement and presents property information clearly across all screen sizes",
  githubUrl: "https://github.com/boldhab/Real-esate.git",
  liveUrl: "#",
  imageUrl: realEstateImg,
}
,

  {
  id: 5,
  title: "Collection of Games",
  description:
    "A lightweight React and Vite-based arcade featuring multiple classic mini-games with a shared scoreboard that persists player scores using browser localStorage.",
  technologies: [
    "React",
    "Vite",
    "JavaScript",
    "ESLint",
    "CSS"
  ],
  features: [
    "Multiple classic mini-games including Memory Match, Snake, Minesweeper, Dino Jump, Breakout, Rock Paper Scissors, and 2048",
    "Single-page navigation between games",
    "Persistent scoreboard with best scores saved in localStorage",
    "Dedicated scoreboard page to view and clear stored results",
    "Responsive and lightweight UI optimized for performance",
    "Shared UI components across all games"
  ],
  challenges:
    "Managing state consistency and score persistence across multiple independent games within a single application",
  solutions:
    "Implemented a centralized scoring utility using browser localStorage and reusable components to standardize score tracking across games",
  results:
    "Delivered a fun, performant arcade experience with reliable score persistence and seamless navigation between games",
  githubUrl: "https://github.com/your-username/collection-of-games",
  liveUrl: "#",
  imageUrl: gamesImg,
}
,
 {
  id: 6,
  title: "Hab Commerce 🛍️",
  description:
    "A modern, premium, and fully responsive e-commerce platform built with vanilla web technologies, offering a sleek shopping experience with performance, aesthetics, and user-friendly interactions.",
  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "LocalStorage"
  ],
  features: [
    "Dynamic product catalog with multiple categories and lazy-loaded images",
    "Advanced real-time search with category filtering and price sorting",
    "Persistent shopping cart stored across sessions using LocalStorage",
    "Native light and dark theme support with automatic persistence",
    "Authentication system with login, sign-up, and personal profile views",
    "Simulated multi-method checkout supporting Credit Cards, Cryptocurrency, and PayPal",
    "Ultra-responsive mobile-first design for all devices",
    "Optimized for performance with zero external dependencies and minimal bundle size"
  ],
  challenges:
    "Implementing a fully functional, feature-rich e-commerce experience without frameworks while maintaining performance and responsiveness",
  solutions:
    "Used modular JavaScript for state management, LocalStorage for persistence, and CSS Grid/Flexbox for responsive layout and theme support",
  results:
    "Delivered a fast, visually appealing, fully functional e-commerce platform with persistent cart, smooth interactions, and responsive design across all devices",
  githubUrl: "https://github.com/your-username/e-commerce",
  liveUrl: "#",
  imageUrl: habCommerceImg,
}
,
 {
  id: 7,
  title: "Shoes E-commerce 👟",
  description:
    "A modern, responsive frontend application for a premium footwear shopping experience, featuring clean UI, smooth navigation, and a dynamic storefront built with React and Vite.",
  technologies: [
    "React",
    "Vite",
    "React Router",
    "Vanilla CSS",
    "ESLint"
  ],
  features: [
    "Dynamic landing page showcasing premium footwear collections",
    "Interactive menu for browsing collections and categories",
    "Integrated store location view for physical outlets",
    "About Us section highlighting the brand story and mission",
    "Dedicated contact interface for customer inquiries",
    "Responsive design optimized for seamless viewing across all devices",
    "Clean modular component structure for maintainable code"
  ],
  challenges:
    "Designing a feature-rich, visually appealing e-commerce frontend while keeping navigation smooth and code modular",
  solutions:
    "Implemented modular React components, React Router for page navigation, and responsive CSS to ensure consistent UI across all screen sizes",
  results:
    "Delivered a polished, fully responsive footwear storefront with intuitive navigation, clear presentation of products, and a seamless user experience",
  githubUrl: "https://github.com/your-username/shoes-ecommerce",
  liveUrl: "#",
  imageUrl: shoesEcomImg,
}
,
 {
  id: 8,
  title: "Task Manager 🗂️",
  description:
    "A modern, lightweight frontend application for managing projects and tasks, featuring a clean dashboard, intuitive modals, drag-and-drop task ordering, and helpful notifications.",
  technologies: [
    "React",
    "Vite",
    "JavaScript",
    "CSS",
    "@hello-pangea/dnd",
    "framer-motion",
    "react-hot-toast",
    "react-router-dom",
    "lucide-react",
    "Font Awesome",
    "react-icons",
    "ESLint"
  ],
  features: [
    "Project lists and task lists with modal-based create/edit forms",
    "Drag-and-drop task reordering using @hello-pangea/dnd",
    "Animated UI interactions with framer-motion",
    "Toast notifications for success and error feedback",
    "Routing using react-router-dom for multi-page navigation",
    "Icon integration via lucide-react, Font Awesome, and react-icons",
    "Responsive and lightweight frontend design",
    "Modular component structure for maintainable code"
  ],
  challenges:
    "Providing a smooth drag-and-drop experience, responsive UI, and real-time feedback while keeping code modular and maintainable",
  solutions:
    "Used @hello-pangea/dnd for drag-and-drop, framer-motion for animations, react-hot-toast for notifications, and a clean component architecture with Vite and React Router",
  results:
    "Delivered a highly interactive task management frontend with intuitive modals, drag-and-drop functionality, and responsive notifications across all devices",
  githubUrl: "https://github.com/your-username/task-manager",
  liveUrl: "https://task-managment-one-psi.vercel.app",
  imageUrl: taskManagerImg,
}
,

    {
  id: 9,
  title: "Coffee Shop Website ☕",
  description:
    "A modern, responsive Coffee Shop website designed to showcase products, menu, customer testimonials, gallery, and contact information, with a clean and user-friendly interface.",
  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript"
  ],
  features: [
    "Responsive navigation bar with logo, menu links, and mobile toggle buttons",
    "Hero section highlighting main coffee offerings with call-to-action buttons",
    "About section detailing the coffee shop story",
    "Menu section with categories such as Hot Beverages, Cold Beverages, Desserts, Special Combos, Burgers & French Fries, and Refreshments",
    "Testimonials carousel with customer feedback",
    "Gallery section displaying coffee and cafe ambiance images",
    "Contact section with details, opening hours, and inquiry form",
    "Footer with copyright and policy links"
  ],
  challenges:
    "Creating a visually appealing and fully responsive design while keeping interactions lightweight and intuitive",
  solutions:
    "Used semantic HTML5, CSS3 for responsive layout and styling, and JavaScript for interactive elements like menu toggling and testimonial slider",
  results:
    "Delivered a clean, interactive, and mobile-friendly Coffee Shop website that effectively showcases products and engages visitors",
  githubUrl: "https://github.com/your-username/coffee-shop-website",
  liveUrl: "https://coffee-restorant-hab.vercel.app",
  imageUrl: coffeeShopImg,
}

]

export function MainProjects() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    setLoaded(true)
  }, [])

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
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
      <div className="min-h-screen bg-[#1a1a1a] text-white py-20 px-4 sm:px-8">
        <Header />
        {/* Background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#3a5a40]/20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
                opacity: 0.3,
              }}
              animate={{
                x: [null, Math.random() * window.innerWidth],
                y: [null, Math.random() * window.innerHeight],
                transition: {
                  duration: Math.random() * 20 + 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto pt-5"
        >
          <header className="mb-16">
            <motion.h1
              className="font-semibold text-3xl py-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              My main{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
                projects
              </span>
            </motion.h1>
            <motion.p
              className="text-gray-400 max-w-3xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Detailed case studies of my most significant work, including
              technical challenges and measurable outcomes.
            </motion.p>
          </header>

          <motion.div
            className="space-y-24"
            variants={container}
            initial="hidden"
            animate={loaded ? "show" : "hidden"}
          >
            {projects.map((project, index) => (
              <motion.section
                key={project.id}
                variants={item}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                <div
                  className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
                >
                  <motion.div
                    className="relative h-96 overflow-hidden rounded-2xl group"
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    whileHover="hover"
                  >
                    <LazyLoadImage
                      src={project.imageUrl}
                      alt={project.title}
                      effect="blur"
                      className="w-full h-full object-cover"
                      wrapperClassName="w-full h-full"
                      placeholderSrc={project.imageUrl}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white"
                      >
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-sm text-gray-300">
                          {project.technologies.join(", ")}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                <div
                  className={`${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-2xl sm:text-3xl font-bold">
                      {project.title}
                    </h2>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-400/25  text-white">
                      Featured
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6">{project.description}</p>

                  <div className="mb-8">
                    <motion.h3
                      className="font-semibold text-lg mb-3 flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="w-4 h-4 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                        <motion.span
                          className="w-2 h-2 bg-white rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </span>
                      Key Features
                    </motion.h3>

                    <ul className="space-y-3">
                      {project.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start group"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                          <motion.span
                            className="text-blue-400 mr-3 mt-0.5 flex-shrink-0"
                            whileHover={{ rotate: 15 }}
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path
                                d="M5 12h14"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <path
                                d="M12 5l7 7-7 7"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </motion.span>

                          <motion.span
                            className="text-[15px] leading-relaxed relative"
                            whileHover={{
                              x: 5,
                            }}
                          >
                            {feature}
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                          </motion.span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="font-semibold mb-2">Challenges</h3>
                      <p className="text-gray-400 text-sm">
                        {project.challenges}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Solutions</h3>
                      <p className="text-gray-400 text-sm">
                        {project.solutions}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="font-semibold mb-2">Results</h3>
                      <p className="text-gray-400 text-sm">{project.results}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <motion.h3
                      className="font-semibold text-lg mb-4 flex items-center"
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-2" />
                      Technologies Used
                    </motion.h3>

                    <motion.div
                      className="flex flex-wrap gap-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
                    >
                      {project.technologies.map((tech) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{
                            y: -3,
                            scale: 1.05,
                            background:
                              "linear-gradient(135deg, rgba(168,85,247,0.2) 0%, rgba(236,72,153,0.2) 100%)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                            hover: { duration: 0.2 },
                          }}
                          className={cn(
                            "text-sm px-3 py-1.5 rounded-full",
                            "bg-gray-800/80 text-gray-200",
                            "border border-gray-700 hover:border-blue-400/50",
                            "transition-all duration-200",
                            "flex items-center gap-1.5",
                            "cursor-default"
                          )}
                        >
                          <span className="w-2 h-2 bg-blue-400 rounded-full" />
                          {tech}
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      className="mt-4 flex items-center gap-2 text-xs text-gray-400"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <span className="flex gap-1">
                        {[1, 2, 3].map((dot) => (
                          <motion.span
                            key={dot}
                            className="w-2 h-2 rounded-full bg-gray-700"
                            animate={{
                              scale: dot === 2 ? [1, 1.1, 1] : 1,
                              backgroundColor:
                                dot === 2 ? "#a855f7" : "#374151",
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: dot * 0.2,
                            }}
                          />
                        ))}
                      </span>
                      <span>Advanced proficiency in these technologies</span>
                    </motion.div>
                  </div>

                  <div className="mt-10">
                    <motion.div
                      className="flex gap-5"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ staggerChildren: 0.1 }}
                    >
                      {/* GitHub Button */}
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-2 px-6 py-3 rounded-xl overflow-hidden"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl" />
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                        <div className="relative z-10 flex items-center gap-3">
                          <Github
                            size={18}
                            className="text-gray-300 group-hover:text-white transition-colors"
                          />
                        </div>
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.a>

                      {/* Live Demo Button */}
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-2 px-6 py-3 rounded-xl overflow-hidden"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                        <div className="relative z-10 flex items-center gap-3">
                          <ExternalLink
                            size={18}
                            className="text-blue-100 group-hover:text-white transition-colors"
                          />
                        </div>
                        <motion.div
                          className="absolute inset-0 border-2 border-blue-400/30 rounded-xl opacity-0 group-hover:opacity-100"
                          initial={{ scale: 0.9 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div
                          className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0, 0.8, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.5,
                          }}
                        />
                      </motion.a>
                    </motion.div>
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
