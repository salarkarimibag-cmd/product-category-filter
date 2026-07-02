import CategoryFilter from "./components/CategoryFilter";
import products from "./data/products";
import Home from "./pages/Home";

function App() {
  return (
    <div className="p-6 ">
      <Home />
      <CategoryFilter products={products} />
    </div>
  );
}

export default App;
