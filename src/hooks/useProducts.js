import { useMemo, useState } from "react";

function useProducts(products, selectedCategory) {
  const [activeProductId, setActiveProductId] = useState(null);
  const [search, setSearch] = useState("");

  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((p) => p.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCategory =
        selectedCategory === "all" || p.category === selectedCategory;

      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [products, selectedCategory, search]);

  return {
    search,
    setSearch,
    selectedCategory,
    activeProductId,
    setActiveProductId,
    categories,
    filteredProducts,
  };
}

export default useProducts;
