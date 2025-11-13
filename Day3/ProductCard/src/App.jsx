import ProductCard from "./ProductCard";
import "./App.css";

export default function App() {
  const products = [
    {
      id: 1,
      name: "Jollof Rice",
      price: 1500,
      image: "https://images.unsplash.com/photo-1625944226601-1b8a8593f21b",
    },
    {
      id: 2,
      name: "Ankara Fabric",
      price: 5000,
      image: "https://images.unsplash.com/photo-1602107142773-84b9c53a3f5f",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center gap-8 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
