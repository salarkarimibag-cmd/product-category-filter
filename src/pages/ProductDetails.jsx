import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowRight, HiShoppingCart, HiCreditCard } from "react-icons/hi2";
import products from "../data/products";
import ProductDetailsSkeleton from "../pages/ProductDetailsSkeleton";
import useLoading from "../hooks/useLoading";
import useCart from "../hooks/useCart";
import toast from "react-hot-toast";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const loading = useLoading(1000);
  const { addToCart, isInCart } = useCart();

  if (loading) return <ProductDetailsSkeleton />;

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl text-gray-500 dark:bg-slate-900 dark:text-slate-400">
        محصول پیدا نشد 😢
      </div>
    );
  }

  const added = isInCart(product.id);

  const info = [
    { title: "دسته‌بندی", value: product.category },
    { title: "شناسه", value: `#${product.id}` },
  ];

  const badges = [
    {
      text: "✅ موجود",
      className:
        "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
    },
    {
      text: "🚚 ارسال رایگان",
      className:
        "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
    },
    {
      text: "⭐ ضمانت کیفیت",
      className:
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
    },
  ];

  const handleAddToCart = () => {
    addToCart(product);
    if (added) {
      toast.success("تعداد محصول افزایش یافت ➕");
    } else {
      toast.success(`${product.name} به سبد خرید اضافه شد 🛒`);
    }
  };
  const handleBuyNow = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="min-h-screen px-4 py-10 dark:bg-slate-900 transition-colors duration-300">
      <div className="mx-auto max-w-5xl">
        {/* Back Button */}
        <motion.button
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="
    mb-6
    inline-flex
    items-center
    gap-2
    rounded-2xl
    border
    border-white/30
    bg-white/60
    px-4
    py-2.5
    text-gray-700
    shadow-lg
    backdrop-blur-xl
    transition-all
    duration-300
    hover:bg-rose-500
    hover:text-white
    dark:border-white/10
    dark:bg-slate-800/70
    dark:text-white
    dark:hover:bg-rose-500
  "
        >
          <motion.span whileHover={{ x: 3 }}>
            <HiArrowRight className="text-xl" />
          </motion.span>

          <span>بازگشت</span>
        </motion.button>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid gap-10 rounded-3xl border border-white/30 bg-white/40 p-8 shadow-xl backdrop-blur-xl md:grid-cols-2 dark:border-white/10 dark:bg-slate-800/60"
        >
          {/* Image */}
          <motion.div
            whileHover={{
              scale: 1.04,
              rotate: 1,
              y: -6,
              filter: "drop-shadow(0 20px 20px rgba(0,0,0,.18))",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center justify-center"
          >
            <img
              src={product.img}
              alt={product.name}
              className="h-80 w-full object-contain"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              {product.name}
            </h1>

            <p className="mt-2 text-gray-500 dark:text-slate-400">
              دسته‌بندی: {product.category}
            </p>

            {/* Price */}
            <div className="mt-6 flex items-center gap-2">
              <span className="text-xl">💰</span>
              <p className="text-3xl font-bold text-rose-600 dark:text-rose-400">
                {product.price.toLocaleString()} تومان
              </p>
            </div>

            <div className="my-6 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-slate-600" />

            {/* Badges */}
            <div className="my-6 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <motion.span
                  key={badge.text}
                  whileHover={{ scale: 1.05 }}
                  className={`rounded-full px-4 py-1 text-sm ${badge.className}`}
                >
                  {badge.text}
                </motion.span>
              ))}
            </div>

            {/* Rating */}
            <div className="mt-6 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={
                    index < Math.round(product.rating)
                      ? "text-yellow-500"
                      : "text-gray-300 dark:text-slate-600"
                  }
                >
                  ★
                </span>
              ))}
              <span className="mr-2 text-sm text-gray-500 dark:text-slate-400">
                ({product.rating})
              </span>
            </div>

            {/* Info Cards */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {info.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white/60 p-4 shadow-sm transition hover:shadow-md dark:bg-slate-700/60"
                >
                  <p className="text-xs text-gray-500 dark:text-slate-400">
                    {item.title}
                  </p>
                  <p className="mt-1 font-semibold dark:text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-8 rounded-2xl bg-white/60 p-5 shadow-sm dark:bg-slate-700/60">
              <h3 className="mb-3 text-lg font-bold text-gray-800 dark:text-white">
                توضیحات محصول
              </h3>
              <p className="leading-8 text-gray-600 dark:text-slate-300">
                {product.description}
              </p>
            </div>

            {/* Button */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* افزودن به سبد خرید */}
              <motion.button
                onClick={handleAddToCart}
                whileHover={{
                  y: -2,
                  scale: 1.02,
                  boxShadow: "0 18px 35px rgba(244,63,94,.35)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 ${
                  added
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-rose-500 hover:bg-rose-600"
                }`}
              >
                <HiShoppingCart className="text-xl" />
                {added ? "✓ در سبد خرید" : "افزودن به سبد خرید"}
              </motion.button>

              {/* خرید الآن */}
              <motion.button
                onClick={handleBuyNow}
                whileHover={{
                  y: -2,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-rose-500 to-pink-500 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-rose-600 hover:to-pink-600"
              >
                <HiCreditCard className="text-xl" />
                <span>خرید الآن</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProductDetails;
