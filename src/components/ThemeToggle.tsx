import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { motion } from "framer-motion"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-foreground hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
            aria-label="Toggle theme"
        >
            {theme === "light" ? (
                <Moon className="w-5 h-5 text-blue-500" />
            ) : (
                <Sun className="w-5 h-5 text-yellow-500" />
            )}
        </motion.button>
    )
}
