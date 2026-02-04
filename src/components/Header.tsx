import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Sparkles } from "lucide-react"
import type { navItems } from "@/types/ui"

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<string>("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const location = useLocation()
  const { scrollYProgress } = useScroll()

  // Spring animation for scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Update active tab based on current route
  useEffect(() => {
    const path = location.pathname.substring(1) || "home"
    setActiveTab(path)
  }, [location])

  const navItems: navItems[] = [
    { name: "Home", id: "home", icon: "🏠" },
    { name: "Skills", id: "skills", icon: "⚡" },
    { name: "Journey", id: "about", icon: "📜" },
    { name: "Projects", id: "projects", icon: "🚀" },
    { name: "Contact", id: "contact", icon: "📞" },
  ]

  const handleClick = (id: string) => {
    setActiveTab(id)
    setIsMobileMenuOpen(false)
    
    // If we're already on the page, scroll to section
    if (location.pathname === `/${id}` || (id === "home" && location.pathname === "/")) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Main Header - Always Visible */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          duration: 0.6, 
          type: "spring",
          stiffness: 100,
          damping: 20 
        }}
        className={`fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4 md:px-8 lg:px-20 z-40 transition-all duration-300
          ${scrolled 
            ? "bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-xl" 
            : "bg-slate-900/95 backdrop-blur-xl border-b border-white/5"
          }`}
        style={{ opacity: 1 }}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2"
        >
          <Link 
            to="/" 
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            onClick={() => handleClick("home")}
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              HB
              <span className="hidden sm:inline text-sm font-normal text-slate-400 ml-2">Dev</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                className="relative"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.id === "home" ? "/" : `/${item.id}`}
                  onClick={() => handleClick(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === item.id
                      ? "text-white bg-blue-500/10 border border-blue-500/20"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>

                {/* Active indicator */}
                {activeTab === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-1/2 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full -translate-x-1/2"
                    initial={false}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 25 
                    }}
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </motion.button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-16 bg-slate-900/95 backdrop-blur-xl md:hidden z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              className="p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.id === "home" ? "/" : `/${item.id}`}
                      onClick={() => handleClick(item.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeTab === item.id
                          ? "text-white bg-blue-500/20 border border-blue-500/30"
                          : "text-slate-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-base font-medium">{item.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  )
}

export default Header