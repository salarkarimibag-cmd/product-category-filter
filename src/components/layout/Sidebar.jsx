import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Apple, Candy, Coffee, Droplets,
  House, ShoppingCart, Sparkles,
  Store, Wheat, X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const categories = [
  { name: "غلات", icon: Wheat },
  { name: "روغن", icon: Droplets },
  { name: "شیرینی", icon: Candy },
  { name: "نوشیدنی", icon: Coffee },
  { name: "ادویه", icon: Sparkles },
  { name: "میوه خشک", icon: Apple },
];

const navClass = (active) =>
  `flex items-center gap-3 rounded-2xl p-3 transition ${
    active
      ? "bg-rose-500 text-white shadow-lg"
      : "hover:bg-rose-100 dark:hover:bg-slate-800 dark:text-white"
  }`;

function Sidebar({ isOpen, onClose, selectedCategory, setSelectedCategory }) {
  const location = useLocation();

  useEffect(() => {
    const handleEscape = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99998] bg-black/50 backdrop-blur-md"
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed right-0 top-0 z-[99999] flex h-screen w-[340px] flex-col border-l border-white/20 bg-white/70 p-6 shadow-2xl backdrop-blur-3xl dark:border-white/10 dark:bg-slate-900/80"
          >
            {/* Header */}
            <div className="mb-8 shrink-0 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-500 text-white shadow-lg">
                  <Store size={22} />
                </div>
                <div>
                  <h2 className="font-bold text-gray-800 dark:text-white">Food Store</h2>
                  <p className="text-xs text-gray-500 dark:text-slate-400">خرید آسان</p>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="بستن منو"
                className="group flex h-10 w-10 items-center justify-center rounded-2xl bg-white/60 transition hover:bg-rose-500 hover:text-white dark:bg-slate-800 dark:text-white"
              >
                <X size={22} className="transition-transform duration-300 group-hover:rotate-90" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="shrink-0 space-y-2">
              <Link to="/" onClick={onClose} className={navClass(location.pathname === "/")}>
                <House size={20} />
                خانه
              </Link>

              <Link to="/cart" onClick={onClose} className={navClass(location.pathname === "/cart")}>
                <ShoppingCart size={20} />
                سبد خرید
              </Link>
            </nav>

            {/* Categories */}
            <div className="mt-8 flex-1 overflow-y-auto overscroll-contain border-t border-gray-200 pt-6 pr-1 dark:border-slate-700">
              {/*  اصلاح شد */}
              <h3 className="mb-4 text-sm font-bold text-gray-500 dark:text-slate-400">
                دسته‌بندی محصولات
              </h3>

              <div className="space-y-2">
                {categories.map(({ name, icon: Icon }) => (
                  <motion.button
                    key={name}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => { setSelectedCategory(name); onClose(); }}
                    className={`flex w-full items-center gap-3 rounded-2xl p-3 transition ${
                      selectedCategory === name
                        ? "bg-rose-500 text-white shadow-lg"
                        : "hover:bg-gray-100 dark:hover:bg-slate-800 dark:text-white"
                    }`}
                  >
                    <Icon size={19} />
                    <span>{name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
