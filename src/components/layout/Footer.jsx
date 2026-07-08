import { FaGithub, FaGithubAlt, FaInstagram, FaReact } from "react-icons/fa";
import { SiFramer, SiTailwindcss, SiVite } from "react-icons/si";
import { ExternalLink, ShoppingBasket } from "lucide-react";

function Footer() {
  return (
    <footer
      id="footer"
      className="mt-20 border-t border-white/20 bg-white/40 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/40"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-500 text-white shadow-lg">
              <ShoppingBasket size={26} />
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Modern Food Store
              </h2>

              <p className="mt-1 bg-linear-to-r from-rose-500 to-orange-400 bg-clip-text text-sm font-medium text-transparent">
                Crafted with React & Tailwind CSS
              </p>
            </div>
          </div>

          <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
            یک فروشگاه مدرن محصولات غذایی که با React و Tailwind CSS توسعه داده
            شده و شامل قابلیت‌هایی مانند فیلتر محصولات، سبد خرید، حالت تاریک،
            انیمیشن‌های روان و طراحی کاملاً Responsive است.
          </p>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Technologies
          </h3>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-white/60 px-3 py-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-slate-800"
            >
              <FaReact className="text-sky-500" />
              React
            </a>

            <a
              href="https://vite.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-white/60 px-3 py-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-slate-800"
            >
              <SiVite className="text-yellow-500" />
              Vite
            </a>

            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-white/60 px-3 py-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-slate-800"
            >
              <SiTailwindcss className="text-cyan-500" />
              Tailwind CSS
            </a>

            <a
              href="https://motion.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-white/60 px-3 py-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-slate-800"
            >
              <SiFramer className="text-pink-500" />
              Framer Motion
            </a>
          </div>
        </div>

        {/* Project */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Project
          </h3>

          <div className="space-y-4">
            <a
              href="https://github.com/salarkarimibag-cmd/modern-food-store"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Repository"
              className="flex items-center gap-2 text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-rose-500 dark:text-gray-300"
            >
              <FaGithubAlt />
              GitHub Repository
              <ExternalLink size={15} />
            </a>

            <a
              href="https://salarkarimibag-cmd.github.io/modern-food-store/"
              target="_blank"
              rel="noreferrer"
              aria-label="Live Demo"
              className="flex items-center gap-2 text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-rose-500 dark:text-gray-300"
            >
              <ExternalLink size={17} />
              Live Demo
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Connect
          </h3>

          <div className="flex gap-4">
            <a
              href="https://github.com/salarkarimibag-cmd"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-2xl bg-white/60 p-3 text-2xl text-gray-700 shadow transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-black dark:bg-slate-800 dark:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-2xl bg-white/60 p-3 text-2xl text-pink-500 shadow transition-all duration-300 hover:-translate-y-1 hover:scale-110 dark:bg-slate-800"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm text-gray-500 dark:text-gray-400 md:flex-row">
          <p dir="ltr">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-rose-500">
              Modern Food Store
            </span>
            {" | "}
            All rights reserved.
          </p>

          <p className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
            <span>Designed &amp; Developed with</span>

            <FaReact className="text-sky-500" />

            <span>by</span>

            <span className="font-semibold text-gray-800 dark:text-white">
              Salar Karimi
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
