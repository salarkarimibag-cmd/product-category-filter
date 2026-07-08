import { useNavigate } from "react-router-dom";
import { HiShoppingCart, HiShoppingBag } from "react-icons/hi2";
import { Menu } from "lucide-react";
import useCart from "../../hooks/useCart";

function Navbar({ onOpenSidebar }) {
  const navigate = useNavigate();
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-[100] flex items-center justify-between px-6 py-4 bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-sm dark:bg-slate-900/60 dark:border-white/10">
      {/* لوگو */}
      <h1
        onClick={() => navigate("/")}
        className="flex cursor-pointer items-center gap-2 text-xl font-bold text-rose-500"
      >
        <HiShoppingBag className="text-2xl" />
        فروشگاه
      </h1>

      {/* سمت راست */}
      <div className="flex items-center gap-3">
        {/* دکمه سبد خرید */}
        <button
          onClick={() => navigate("/cart")}
          className="relative flex items-center  cursor-pointer gap-2 rounded-xl bg-white/60 px-4 py-2 shadow transition hover:bg-white dark:bg-slate-800/60 dark:text-white dark:hover:bg-slate-800"
        >
          <HiShoppingCart className="text-xl" />
          <span>سبد خرید</span>

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">
              {totalItems}
            </span>
          )}
        </button>

        {/* دکمه منو — فقط موبایل */}
        <button
          onClick={onOpenSidebar}
          aria-label="باز کردن منو"
          className="rounded-xl p-2 transition hover:bg-white/60 dark:text-white dark:hover:bg-slate-800 lg:hidden"
        >
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
