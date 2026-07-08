import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function NotFound() {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count === 0) { navigate("/"); return; }
    const timer = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 dark:bg-slate-900 transition-colors duration-300 overflow-hidden relative">

      {/* دایره‌های پس‌زمینه دکوری */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-rose-200/30 blur-3xl dark:bg-rose-900/20" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl dark:bg-pink-900/20" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl p-10 text-center max-w-md w-full dark:bg-slate-800/60 dark:border-white/10 relative z-10"
      >
        {/* آیکون */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-8xl mb-4"
        >
          🔍
        </motion.div>

        {/* عدد 404 */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="text-9xl font-extrabold mb-2 bg-linear-to-r from-rose-500 to-pink-400 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        <h2 className="text-xl font-bold text-gray-800 mb-2 dark:text-white">
          صفحه پیدا نشد!
        </h2>

        <p className="text-gray-400 text-sm mb-6 leading-6 dark:text-slate-400">
          صفحه‌ای که دنبالش می‌گردید وجود ندارد یا حذف شده.
        </p>

        {/* countdown */}
        <div className="mb-3 flex items-center justify-center gap-2">
          <span className="text-sm text-gray-400 dark:text-slate-400">
            انتقال خودکار در
          </span>
          <motion.span
            key={count}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-rose-500 dark:bg-rose-900/40 dark:text-rose-400"
          >
            {count}
          </motion.span>
          <span className="text-sm text-gray-400 dark:text-slate-400">ثانیه</span>
        </div>

        {/* progress bar */}
        <div className="mb-8 h-1.5 w-full rounded-full bg-gray-100 overflow-hidden dark:bg-slate-700">
          <motion.div
            className="h-full rounded-full bg-rose-400 dark:bg-rose-500"
            animate={{ width: `${(count / 5) * 100}%` }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* دکمه‌ها */}
        <div className="flex flex-col gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => { setCount(0); navigate("/"); }}
            className="w-full rounded-xl bg-rose-500 px-4 py-3 text-white font-semibold hover:bg-rose-600 transition-all duration-300 shadow-lg shadow-rose-200 dark:shadow-rose-900/30"
          >
            🏠 بازگشت به خانه
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => { setCount(0); navigate(-1); }}
            className="w-full rounded-xl bg-white/70 px-4 py-3 text-gray-600 font-semibold hover:bg-white transition-all duration-300 shadow dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
          >
            → صفحه قبل
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFound;