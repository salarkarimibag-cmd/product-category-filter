import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight, HiTrash, HiCheckCircle } from "react-icons/hi2";
import useCart from "../hooks/useCart";
import toast from "react-hot-toast";

function Cart() {
  const navigate = useNavigate();
  const {
    cart,
    totalItems,
    totalPrice,
    increase,
    decrease,
    removeFromCart,
    clearCart,
  } = useCart();

  const handleClearCart = () => {
    toast((t) => (
      <div className="flex flex-col gap-2">
        <span className="font-semibold dark:text-white">سبد خرید پاک بشه؟</span>
        <div className="flex gap-2">
          <button
            onClick={() => {
              clearCart();
              toast.dismiss(t.id);
              toast.success("سبد خرید پاک شد 🧹");
            }}
            className="rounded-lg bg-red-500 px-3 py-1 text-xs text-white hover:bg-red-600"
          >
            بله
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="rounded-lg bg-gray-200 px-3 py-1 text-xs hover:bg-gray-300 dark:bg-slate-700 dark:text-white"
          >
            خیر
          </button>
        </div>
      </div>
    ));
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-6 dark:bg-slate-900">
        <div className="text-8xl animate-bounce">🛒</div>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-white">سبد خرید خالیه!</h2>
        <p className="text-gray-400 text-sm dark:text-slate-400">محصولی اضافه نکردید.</p>
        <button
          onClick={() => navigate("/modern-food-store")}
          className="mt-4 rounded-xl bg-rose-500 px-6 py-3 text-white font-semibold hover:bg-rose-600 transition active:scale-95 shadow-lg shadow-rose-200"
        >
          مشاهده محصولات
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-10 dark:bg-slate-900 transition-colors duration-300">
      <div className="mx-auto max-w-4xl">
        {/* هدر */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-rose-500 transition dark:text-slate-300 dark:hover:text-rose-400"
          >
            <HiArrowRight />
            بازگشت
          </button>

          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            سبد خرید
            <span className="mr-2 rounded-full bg-rose-100 px-3 py-1 text-sm text-rose-500 dark:bg-rose-900/40 dark:text-rose-400">
              {totalItems} آیتم
            </span>
          </h1>

          <button
            onClick={handleClearCart}
            className="flex items-center gap-1 text-sm text-red-400 transition hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
          >
            <HiTrash />
            پاک کردن
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* لیست محصولات */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-4 rounded-2xl border border-white/30 bg-white/40 p-4 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-slate-800/60"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-20 w-20 rounded-xl bg-white/60 p-2 object-contain dark:bg-slate-700"
                  />

                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 dark:text-white">{item.name}</h3>
                    <p className="text-sm text-gray-400 dark:text-slate-400">{item.category}</p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                      {item.price.toLocaleString()} × {item.quantity}
                    </p>
                    <p className="font-bold text-rose-600 dark:text-rose-400">
                      جمع: {(item.price * item.quantity).toLocaleString()} تومان
                    </p>
                  </div>

                  {/* کنترل تعداد */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => { decrease(item.id); toast("تعداد کاهش یافت ➖"); }}
                      className="h-8 w-8 rounded-full bg-gray-100 font-bold transition hover:bg-gray-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
                    >
                      −
                    </button>

                    <span className="w-6 text-center font-bold dark:text-white">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => { increase(item.id); toast("تعداد افزایش یافت ➕"); }}
                      className="h-8 w-8 rounded-full bg-rose-100 font-bold text-rose-600 transition hover:bg-rose-200 dark:bg-rose-900/40 dark:text-rose-400 dark:hover:bg-rose-900/60"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => { removeFromCart(item.id); toast.success("محصول حذف شد 🗑️"); }}
                    className="text-red-400 transition hover:text-red-600 dark:hover:text-red-300"
                  >
                    <HiTrash size={20} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* خلاصه سفارش */}
          <div className="rounded-3xl border border-white/30 bg-white/40 p-6 shadow-xl backdrop-blur-xl h-fit dark:border-white/10 dark:bg-slate-800/60">
            <h2 className="text-lg font-bold text-gray-800 mb-4 dark:text-white">
              خلاصه سفارش
            </h2>

            <div className="flex justify-between text-sm text-gray-500 mb-2 dark:text-slate-400">
              <span>تعداد آیتم‌ها</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between text-sm text-gray-500 mb-4 dark:text-slate-400">
              <span>قیمت کل</span>
              <span>{totalPrice.toLocaleString()} تومان</span>
            </div>

            <div className="flex justify-between text-sm text-green-600 mb-6 dark:text-green-400">
              <span>ارسال</span>
              <span>رایگان 🎁</span>
            </div>

            <div className="border-t border-gray-200 mb-4 dark:border-slate-700" />

            <div className="flex justify-between font-bold text-gray-800 mb-6 dark:text-white">
              <span>مبلغ نهایی</span>
              <span>{totalPrice.toLocaleString()} تومان</span>
            </div>

            <motion.button
              onClick={() => {
                toast.success("سفارش شما با موفقیت ثبت شد 🎉");
                clearCart();
                setTimeout(() => navigate("/"), 1500);
              }}
              whileHover={{ scale: 1.03, boxShadow: "0 18px 35px rgba(244,63,94,.35)" }}
              whileTap={{ scale: 0.96 }}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-rose-500 py-3 font-semibold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-600"
            >
              <HiCheckCircle className="text-xl" />
              ثبت سفارش
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
