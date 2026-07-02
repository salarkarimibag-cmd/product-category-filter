import { useMemo, useState } from "react";

function CategoryFilter({ products = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((p) => p.category))];
  }, [products]);
  const filteredProducts = useMemo(() => {
    return selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory, products]);

  return (
    <div>
      <div className="flex flex-col items-center justify-between  mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          فیلتر محصولات با دسته‌بندی
        </h2>

        <span className="px-3 py-1 mt-2.5  text-sm bg-rose-100 text-rose-600 rounded-4xl">
          {filteredProducts.length} محصول
        </span>
      </div>
      <select
        className="border border-gray-300 rounded-xl px-4 py-2 text-sm font-semibold text-gray-700 mb-4 focus:outline-none focus:ring-2 focus:ring-rose-400"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((cate) => (
          <option key={cate} value={cate}>
            {cate === "all" ? "همه" : cate}
          </option>
        ))}
      </select>
      <div className="">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-50 object-contain"
                />

                <div className="p-4">
                  <h3 className="font-bold text-gray-800">{p.name}</h3>
                  <p className="text-sm text-gray-400">{p.category}</p>
                  <p className="text-rose-600 font-bold mt-2">
                    {p.price.toLocaleString()} تومان
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10">محصولی یافت نشد.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryFilter;
