import { motion, AnimatePresence } from "framer-motion";
import { HiMoon, HiSun } from "react-icons/hi2";
import useTheme from "../../hooks/useTheme";
import useHideOnFooter from "../../hooks/useHideOnFooter";
function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();
  const hide = useHideOnFooter();
  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={darkMode ? "تغییر به حالت روشن" : "تغییر به حالت تاریک"}
      aria-pressed={darkMode}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        opacity: hide ? 0 : 1,
        scale: hide ? 0.85 : 1,
        y: hide ? 24 : 0,
      }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      style={{
        pointerEvents: hide ? "none" : "auto",
      }}
      className="fixed bottom-4 left-4 z-50 flex h-12 w-20 items-center rounded-full border border-white/20 bg-white/30 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900/40 sm:bottom-6 sm:left-6"
    >
      {/* Knob */}
      <motion.div
        animate={{
          x: darkMode ? 0 : 32,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 22,
        }}
        className="absolute left-1 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg dark:bg-slate-800"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={darkMode ? "moon" : "sun"}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {darkMode ? (
              <HiMoon className="text-xl text-slate-200" />
            ) : (
              <HiSun className="text-xl text-yellow-500" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Icons */}
      <div className="flex w-full items-center justify-between px-3">
        <HiSun className="text-lg text-yellow-500" />
        <HiMoon className="text-lg text-slate-300 dark:text-slate-400" />
      </div>
    </motion.button>
  );
}

export default ThemeToggle;
