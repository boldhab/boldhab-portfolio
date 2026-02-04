import { motion } from "framer-motion"
import { useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { Code, Cpu, Database } from "lucide-react"

import mineImg from "../../public/image.png"

export default function ProfileImage() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div className="relative group">
      {/* Tech skill badges around the image */}
      <motion.div
        className="absolute -top-4 -left-4 md:-top-6 md:-left-16 bg-gradient-to-br from-blue-500/80 to-cyan-500/80 backdrop-blur-sm text-white rounded-full px-3 py-1.5 text-xs font-medium z-10 border border-white/10 shadow-lg flex items-center gap-1.5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          rotate: [0, 5, -5, 0],
          y: [0, -3, 0],
        }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          y: { duration: 3, repeat: Infinity },
        }}
      >
        <Code className="w-3 h-3" />
        <span>Full-Stack</span>
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-16 bg-gradient-to-br from-emerald-500/80 to-teal-500/80 backdrop-blur-sm text-white rounded-full px-3 py-1.5 text-xs font-medium z-10 border border-white/10 shadow-lg flex items-center gap-1.5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          x: [0, 5, -5, 0],
        }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          x: { duration: 5, repeat: Infinity },
        }}
      >
        <Cpu className="w-3 h-3" />
        <span>MERN Stack</span>
      </motion.div>

      {/* Laravel badge */}
      <motion.div
        className="absolute -top-4 -right-4 md:-top-6 md:-right-16 bg-gradient-to-br from-red-500/80 to-orange-500/80 backdrop-blur-sm text-white rounded-full px-3 py-1.5 text-xs font-medium z-10 border border-white/10 shadow-lg flex items-center gap-1.5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: [0, -2, 0],
          x: [0, 2, 0],
        }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          y: { duration: 4, repeat: Infinity },
        }}
      >
        <Database className="w-3 h-3" />
        <span>Laravel</span>
      </motion.div>

      {/* Main profile image with interactive elements */}
      <motion.div
        className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20 relative cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setIsClicked(!isClicked)}
        animate={{
          borderColor: isHovered
            ? ["#3b82f6", "#06b6d4", "#3b82f6"]
            : "rgba(255, 255, 255, 0.2)",
          boxShadow: isHovered ? "0 0 25px rgba(59, 130, 246, 0.4)" : "none",
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          borderColor: { duration: 3 },
          scale: { type: "spring", stiffness: 300 }
        }}
      >
        <LazyLoadImage
          src={mineImg}
          alt="Habtamu Befekadu"
          effect="blur"
          className="w-full h-full object-cover"
        />

        {/* Tech emoji on hover */}
        {isHovered && (
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.5 }}
            animate={{
              y: [0, -8, 0],
              opacity: 1,
              scale: 1,
              rotate: [0, 10, -10, 0],
            }}
            exit={{ y: -20, opacity: 0, scale: 0.5 }}
            transition={{
              duration: 0.8,
              ease: "backOut",
            }}
            className="absolute -top-6 -right-6 text-3xl"
          >
            💻
          </motion.div>
        )}

        {/* Click effect */}
        {isClicked && (
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 rounded-full bg-blue-500/30 pointer-events-none"
          />
        )}

        {/* Gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        />
        
        {/* Animated ring */}
        <motion.div
          className="absolute -inset-2 rounded-full border border-blue-500/30 pointer-events-none"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Floating tech particles (appear on hover) */}
      {isHovered && (
        <>
          {/* Blue particle */}
          <motion.div
            className="absolute top-4 left-1/4 w-1.5 h-1.5 rounded-full bg-blue-400"
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: -20,
              opacity: [0, 0.8, 0],
              x: [-8, 8],
            }}
            transition={{
              duration: 1.2,
              delay: 0.1,
            }}
          />
          
          {/* Cyan particle */}
          <motion.div
            className="absolute bottom-4 right-1/4 w-1.5 h-1.5 rounded-full bg-cyan-400"
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: 20,
              opacity: [0, 0.8, 0],
              x: [8, -8],
            }}
            transition={{
              duration: 1.2,
              delay: 0.3,
            }}
          />
          
          {/* Purple particle */}
          <motion.div
            className="absolute top-1/2 left-0 w-1.5 h-1.5 rounded-full bg-purple-400"
            initial={{ x: 0, opacity: 0 }}
            animate={{
              x: -15,
              opacity: [0, 0.6, 0],
              y: [-5, 5],
            }}
            transition={{
              duration: 1.5,
              delay: 0.2,
            }}
          />
          
          {/* Green particle */}
          <motion.div
            className="absolute top-1/2 right-0 w-1.5 h-1.5 rounded-full bg-emerald-400"
            initial={{ x: 0, opacity: 0 }}
            animate={{
              x: 15,
              opacity: [0, 0.6, 0],
              y: [5, -5],
            }}
            transition={{
              duration: 1.5,
              delay: 0.4,
            }}
          />
        </>
      )}

      {/* Subtle pulse effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-blue-500/10 pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}