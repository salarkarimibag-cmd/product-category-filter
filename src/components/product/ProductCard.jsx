import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const goToProduct = () => navigate(`/product/${product.id}`);
  return (
    <div
      role="button"
      aria-label={`مشاهده محصول ${product.name}`}
      tabIndex={0}
      onClick={goToProduct}
      onKeyDown={(e) => e.key === "Enter" && goToProduct()}
      className="w-full max-w-sm cursor-pointer overflow-hidden rounded-3xl border border-white/30 bg-white/40 shadow-lg backdrop-blur-lg transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-xl dark:border-white/10 dark:bg-slate-800/40"
    >
      <div className="aspect-square w-full overflow-hidden ">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain p-4 transition-transform duration-300 will-change-transform md:hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="truncate font-bold text-gray-800 dark:text-white">
          {product.name}
        </h3>
        <p className="text-sm text-gray-400 dark:text-slate-400">
          {product.category}
        </p>
        <p className="mt-2 font-bold text-rose-600 dark:text-rose-400">
          {product.price.toLocaleString()} تومان
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
