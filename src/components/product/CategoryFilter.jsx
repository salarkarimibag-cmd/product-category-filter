import ProductList from "./ProductList";
import Select from "../ui/Select";
import Input from "../ui/Input";
import useProducts from "../../hooks/useProducts";

function CategoryFilter({
  products = [],
  selectedCategory,
  setSelectedCategory,
}) {
  const {
    search,
    setSearch,
    activeProductId,
    setActiveProductId,
    categories,
    filteredProducts,
  } = useProducts(products, selectedCategory);

  return (
    <>
      <div className="p-6">
        {/* هدر */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            فیلتر محصولات با دسته‌بندی
          </h2>

          <span className="mt-2.5 rounded-4xl bg-rose-100 px-3 py-1 text-sm text-rose-500 dark:bg-rose-900/40 dark:text-rose-400">
            {filteredProducts.length} محصول
          </span>
        </div>

        {/* جستجو و فیلتر */}
        <div
          className="
 relative
 z-40
 mb-8
 rounded-3xl
 border
 border-white/30
 bg-white/30
 p-6
 shadow-xl
 backdrop-blur-xl
 dark:border-white/10
 dark:bg-slate-800/40
 "
        >
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Input
              placeholder="جستجو..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClear={() => setSearch("")}
            />

            <Select
              value={selectedCategory}
              onChange={setSelectedCategory}
              options={categories}
            />
          </div>
        </div>

        <ProductList
          products={filteredProducts}
          activeProductId={activeProductId}
          setActiveProductId={setActiveProductId}
        />
      </div>
    </>
  );
}

export default CategoryFilter;
