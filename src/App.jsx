import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/layout/Footer";
import ThemeToggle from "./components/ui/ThemeToggle";
import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <div className="min-h-screen bg-linear-to-br from-violet-100 via-pink-50 to-amber-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <Navbar onOpenSidebar={() => setSidebarOpen(true)} />
      <ThemeToggle />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "16px",
            background: "#fff",
            color: "#1f2937",
            boxShadow: "0 10px 30px rgba(0,0,0,.12)",
          },
          success: {
            iconTheme: {
              primary: "#f43f5e",
              secondary: "#fff",
            },
          },
        }}
      />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
