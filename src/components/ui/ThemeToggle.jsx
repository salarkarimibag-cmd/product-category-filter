import { motion, AnimatePresence } from "framer-motion";
import { HiMoon, HiSun } from "react-icons/hi2";
import useTheme from "../../hooks/useTheme";

function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        fixed bottom-6 left-6
        z-60

        flex h-14 w-24 items-center
        rounded-full

        border border-white/20
        bg-white/30
        backdrop-blur-xl

        shadow-xl
        dark:border-white/10
        dark:bg-slate-900/40
      "
    >
      {/* پس‌زمینه متحرک */}
      <motion.div
        animate={{
          x: darkMode ? 48 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 22,
        }}
        className="
          absolute left-1
          flex h-12 w-12 items-center justify-center
          rounded-full
          bg-white
          shadow-lg
          dark:bg-slate-800
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={darkMode ? "moon" : "sun"}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
          >
            {darkMode ? (
              <HiMoon className="text-xl text-slate-200" />
            ) : (
              <HiSun className="text-xl text-yellow-500" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="flex w-full justify-between px-4">
        <HiSun className="text-xl text-yellow-500" />
        <HiMoon className="text-xl text-slate-300" />
      </div>
    </motion.button>
  );
}

export default ThemeToggle;
