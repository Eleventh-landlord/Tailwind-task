import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}
