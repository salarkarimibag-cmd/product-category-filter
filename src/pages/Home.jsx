import CategoryFilter from "../components/product/CategoryFilter";
import HomeSkeleton from "../components/skeleton/HomeSkeleton";
import products from "../data/products";
import useLoading from "../hooks/useLoading";

function Home({ selectedCategory, setSelectedCategory }) {
  const loading = useLoading();

  if (loading) {
    return <HomeSkeleton />;
  }

  return (
    <CategoryFilter
      products={products}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
  );
}

export default Home;
