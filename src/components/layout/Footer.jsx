import { FaGithub, FaInstagram, FaReact, FaGithubAlt } from "react-icons/fa";
import { SiVite, SiTailwindcss, SiFramer } from "react-icons/si";
import { ShoppingBasket, ExternalLink } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/20 bg-white/40 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-rose-500 p-3 text-white shadow-lg">
              <ShoppingBasket size={26} />
            </div>

            <div>
              <h2 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
                Modern Food Store
              </h2>

         
            </div>
          </div>

          <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
            یک فروشگاه مدرن محصولات غذایی که با React و Tailwind CSS توسعه داده
            شده و شامل قابلیت‌هایی مانند فیلتر محصولات، سبد خرید، Dark Mode،
            انیمیشن‌های روان و طراحی Responsive است.
          </p>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Technologies
          </h3>

          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-2 rounded-xl bg-white/60 px-3 py-2 dark:bg-slate-800">
              <FaReact className="text-sky-500" />
              React
            </span>

            <span className="flex items-center gap-2 rounded-xl bg-white/60 px-3 py-2 dark:bg-slate-800">
              <SiVite className="text-yellow-500" />
              Vite
            </span>

            <span className="flex items-center gap-2 rounded-xl bg-white/60 px-3 py-2 dark:bg-slate-800">
              <SiTailwindcss className="text-cyan-500" />
              Tailwind
            </span>

            <span className="flex items-center gap-2 rounded-xl bg-white/60 px-3 py-2 dark:bg-slate-800">
              <SiFramer className="text-pink-500" />
              Framer Motion
            </span>
          </div>
        </div>

        {/* Project */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Project
          </h3>

          <div className="space-y-3">
            <a
              href="https://github.com/salarkarimibag-cmd/modern-food-store"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-600 transition hover:text-rose-500 dark:text-gray-300"
            >
              <FaGithubAlt />
              GitHub Repository
            </a>

            <a
              href="https://salarkarimibag-cmd.github.io/modern-food-store/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-600 transition hover:text-rose-500 dark:text-gray-300"
            >
              <ExternalLink size={18} />
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
              className="rounded-2xl bg-white/60 p-3 text-2xl text-gray-700 shadow transition hover:-translate-y-1 hover:text-black dark:bg-slate-800 dark:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white/60 p-3 text-2xl text-pink-500 shadow transition hover:-translate-y-1 dark:bg-slate-800"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 py-6 text-center text-sm text-gray-500 dark:border-white/10 dark:text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-rose-500">Modern Food Store</span> —
        Designed & Developed by Salar Karimi ❤️
      </div>
    </footer>
  );
}

export default Footer;
