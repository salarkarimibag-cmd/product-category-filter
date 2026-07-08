import ProductCard from "./ProductCard";
import { useAutoAnimate } from "@formkit/auto-animate/react";
function ProductList({ products, activeProductId, setActiveProductId }) {
  const [listRef] = useAutoAnimate();
  const handleClose = () => setActiveProductId(null);
  if (products.length === 0) {
    return <p className="py-10 text-center text-gray-500">محصولی یافت نشد.</p>;
  }

  return (
    
    <div
      ref={listRef}
      className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isActive={activeProductId === product.id}
          onSelect={setActiveProductId}
          onClose={handleClose}
        />
      ))}
    </div>
  );
}

export default ProductList;
