export function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-300/30 via-blue-500/20 to-blue-900/40 backdrop-blur-md" />

        {/* Floating circles */}
        <motion.div
          className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "10%", left: "15%" }}
        />

        <motion.div
          className="absolute w-96 h-96 bg-blue-700/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: "10%", right: "10%" }}
        />
      </div>

      {/* Actual footer content */}
      <div className="relative max-w-4xl mx-auto px-4 py-10 border-t border-white/10">
        {/* your existing footer JSX goes here */}
      </div>
    </footer>
  )
}
