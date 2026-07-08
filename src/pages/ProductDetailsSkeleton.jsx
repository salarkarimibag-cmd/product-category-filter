import { motion } from "framer-motion";

function ProductDetailsSkeleton() {
  return (
    <div className="min-h-screen px-4 py-10 dark:bg-slate-900 transition-colors duration-300">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 rounded-3xl border border-white/30 bg-white/40 p-8 shadow-xl backdrop-blur-xl md:grid-cols-2 dark:border-white/10 dark:bg-slate-800/60">

          {/* Image */}
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-80 rounded-3xl bg-gray-200 dark:bg-slate-700"
          />

          {/* Info */}
          <div className="space-y-5">

            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="h-10 w-2/3 rounded bg-gray-200 dark:bg-slate-700"
            />

            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="h-5 w-1/3 rounded bg-gray-200 dark:bg-slate-700"
            />

            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="h-8 w-1/2 rounded bg-gray-200 dark:bg-slate-700"
            />

            <div className="flex gap-3">
              <div className="h-8 w-24 rounded-full bg-gray-200 dark:bg-slate-700" />
              <div className="h-8 w-24 rounded-full bg-gray-200 dark:bg-slate-700" />
              <div className="h-8 w-24 rounded-full bg-gray-200 dark:bg-slate-700" />
            </div>

            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="h-36 rounded-2xl bg-gray-200 dark:bg-slate-700"
            />

            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="h-14 rounded-2xl bg-gray-300 dark:bg-slate-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsSkeleton;