import { useEffect, useMemo, useState } from "react"
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

  const navItems: (navItems & { href: string; type: "section" | "route" })[] = useMemo(
    () => [
      { name: "About", id: "about", href: "/#about", type: "section" },
      { name: "Skills", id: "skills", href: "/#skills", type: "section" },
      { name: "Projects", id: "projects", href: "/#projects", type: "section" },
      { name: "Contact", id: "contact", href: "/contact", type: "route" },
    ],
    []
  )

  useEffect(() => {
    if (location.pathname.toLowerCase() === "/contact") {
      setActiveTab("contact")
      return
    }
    if (location.pathname.toLowerCase() === "/projects") {
      setActiveTab("projects")
      return
    }
  }, [location.pathname])

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace("#", "")
    const element = document.getElementById(id)
    if (element) {
      setActiveTab(id)
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [location.hash])

  useEffect(() => {
    if (location.pathname !== "/") return

    const sectionIds = navItems.filter((item) => item.type === "section").map((item) => item.id)
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (!visible.length) return
        visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        const id = visible[0].target.id
        setActiveTab(id)
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0.1, 0.3, 0.6] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [location.pathname, navItems])

  const handleClick = (id: string, type: "section" | "route" = "route") => {
    setActiveTab(id)
    setIsMobileMenuOpen(false)

    if (type !== "section" || location.pathname !== "/") return
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
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
                  to={item.href}
                  onClick={() => handleClick(item.id, item.type)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === item.id
                      ? "text-white bg-blue-500/10 border border-blue-500/20"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
                {activeTab === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-1/2 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full -translate-x-1/2"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
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
                      to={item.href}
                      onClick={() => handleClick(item.id, item.type)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeTab === item.id
                          ? "text-white bg-blue-500/20 border border-blue-500/30"
                          : "text-slate-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
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