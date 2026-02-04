import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useAnimation, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ExternalLink, ArrowUp, Code, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
}

const MagneticButton = ({ children, className }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 250, mass: 0.1 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !isHovered) return;

    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const strength = 0.25;
    const newX = distanceX * strength;
    const newY = distanceY * strength;

    x.set(newX);
    y.set(newY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={cn("relative inline-block", className)}
      style={{
        x: xSpring,
        y: ySpring,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.div>
  );
};

const BackToTopButton = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const scaleSpring = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    restDelta: 0.001,
  });

  const scale = useTransform(scaleSpring, [0, 1], [0.3, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (isScrolling) return;

    setIsScrolling(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => setIsScrolling(false), 1000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-500/20 shadow-xl shadow-blue-900/20 flex items-center justify-center group cursor-pointer"
          aria-label="Back to top"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          {/* Progress ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="url(#blue-progress)"
              strokeWidth="2"
              strokeLinecap="round"
              pathLength="1"
              style={{ pathLength: scrollYProgress }}
            />
            <defs>
              <linearGradient id="blue-progress" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Animated arrow */}
          <motion.div
            style={{ scale, opacity, rotate }}
            className="relative z-10"
          >
            <ArrowUp className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
          </motion.div>

          {/* Pulse effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-full border border-blue-400/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const containerControls = useAnimation();
  const itemControls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          containerControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          });

          itemControls.start((i) => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: i * 0.08,
              duration: 0.5,
              ease: "easeOut",
            },
          }));
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [containerControls, itemControls, hasAnimated]);

  const navItems = [
    { to: "/projects", icon: ExternalLink, label: "Projects", color: "hover:border-blue-400/50 hover:text-blue-300" },
    { to: "/contact", icon: Mail, label: "Contact", color: "hover:border-cyan-400/50 hover:text-cyan-300" },
    { to: "https://github.com/boldhab", icon: Github, label: "GitHub", external: true, color: "hover:border-slate-400/50 hover:text-slate-300" },
    { to: "https://www.linkedin.com/in/habtam-befekadu", icon: Linkedin, label: "LinkedIn", external: true, color: "hover:border-blue-500/50 hover:text-blue-400" },
  ];

  return (
    <>
      <motion.footer
        ref={containerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={containerControls}
        className="relative overflow-hidden border-t border-blue-900/20 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 py-16"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/10 via-transparent to-transparent" />

          {/* Floating dots */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-500/20"
              style={{
                left: `${10 + i * 15}%`,
                top: `${30 + i * 8}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Bottom glow line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                custom={index}
                animate={itemControls}
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <MagneticButton>
                  <Button
                    variant="ghost"
                    asChild
                    className={cn(
                      "group relative overflow-hidden",
                      "bg-slate-900/40 hover:bg-slate-800/50",
                      "border border-blue-900/30 hover:border-blue-500/40",
                      "text-slate-300 hover:text-white",
                      "transition-all duration-300",
                      "px-6 py-5 h-auto backdrop-blur-sm",
                      item.color
                    )}
                  >
                    {item.external ? (
                      <Link
                        to={item.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <item.icon className="w-5 h-5 group-hover:scale-110 transition-all duration-300 group-hover:rotate-12" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    ) : (
                      <Link to={item.to} className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 group-hover:scale-110 transition-all duration-300 group-hover:rotate-12" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    )}
                  </Button>
                </MagneticButton>
              </motion.div>
            ))}
          </div>

          {/* Email Contact */}
          <motion.div
            custom={4}
            animate={itemControls}
            initial={{ opacity: 0, y: 30 }}
            className="text-center mb-10"
          >
            <MagneticButton className="inline-block">
              <motion.a
                href="mailto:habtamubefekadu19@gmail.com"
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-blue-500/10 backdrop-blur-md border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:bg-blue-500/15"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Mail className="w-5 h-5 text-blue-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
                <span className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors duration-300">
                  habtamubefekadu19@gmail.com
                </span>
                <ExternalLink className="w-4 h-4 text-blue-500/60 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
              </motion.a>
            </MagneticButton>
          </motion.div>

          {/* Tech Stack & Copyright */}
          <motion.div
            custom={5}
            animate={itemControls}
            initial={{ opacity: 0, y: 30 }}
            className="space-y-6 text-center"
          >
            {/* Tech stack badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Code className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-slate-300">Built with React, TypeScript & Tailwind</span>
            </div>

            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-sm text-slate-500"
            >
              © {new Date().getFullYear()} Habtamu Befekadu. All rights reserved.
            </motion.p>
          </motion.div>

          {/* Fun Message */}
          <motion.div
            custom={6}
            animate={itemControls}
            initial={{ opacity: 0, y: 30 }}
            className="mt-10 flex justify-center items-center gap-3 text-slate-400"
          >
            {/* Animated coffee cup */}
            <motion.div
              animate={{
                rotate: [0, 5, 0, -5, 0],
                y: [0, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center gap-2"
            >
              <Coffee className="w-5 h-5 text-amber-600" />
            </motion.div>

            {/* Beating heart */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
            </motion.div>

            <span className="text-sm">
              Crafted with care and deployed on Vercel
            </span>
          </motion.div>
        </div>

        {/* Footer bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </motion.footer>

      <BackToTopButton />
    </>
  );
}