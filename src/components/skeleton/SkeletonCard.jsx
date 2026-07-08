import { motion } from "framer-motion";

function SkeletonCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="
        overflow-hidden
        rounded-3xl
        border border-white/30
        bg-white/40
        p-4
        shadow-lg
        backdrop-blur-lg
        dark:border-white/10
        dark:bg-slate-900/40
      "
    >
      <div className="skeleton h-52 rounded-2xl" />
      <div className="skeleton mt-5 h-6 w-3/4 rounded-lg" />
      <div className="skeleton mt-3 h-4 w-1/2 rounded-lg" />
      <div className="skeleton mt-6 h-7 w-1/3 rounded-lg" />
    </motion.div>
  );
}

export default SkeletonCard;