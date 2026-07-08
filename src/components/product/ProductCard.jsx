import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const goToProduct = () => navigate(`/product/${product.id}`);
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={goToProduct}
      onKeyDown={(e) => e.key === "Enter" && goToProduct()}
      className="w-full max-w-sm overflow-hidden rounded-3xl border border-white/30 bg-white/40 backdrop-blur-lg shadow-lg cursor-pointer transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-xl"
    >
      <img
        src={product.img}
        alt={product.name}
        loading="lazy"
        className="h-52 w-full object-contain"
      />

      <div className="p-4">
        <h3 className="font-bold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-400">{product.category}</p>
        <p className="mt-2 font-bold text-rose-600">
          {product.price.toLocaleString()} تومان
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
