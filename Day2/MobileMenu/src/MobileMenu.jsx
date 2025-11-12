import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-green-700 font-bold text-lg">NG</span>
          </div>
          <span className="text-xl font-semibold tracking-wide">
            NaijaMarket
          </span>
        </div>

        {/* Center Nav Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#" className="hover:text-green-200 transition">Home</a>
          <a href="#" className="hover:text-green-200 transition">Shop</a>
          <a href="#" className="hover:text-green-200 transition">About</a>
          <a href="#" className="hover:text-green-200 transition">Contact</a>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <button className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 text-xs bg-white text-green-700 font-bold w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
          <button className="hidden md:inline-block bg-white text-green-700 font-semibold px-4 py-2 rounded-lg hover:bg-green-100 transition">
            Login
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-green-800 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-800 text-white px-6 py-3 space-y-3 animate-slide-down">
          <a href="#" className="block hover:text-green-200 transition">Home</a>
          <a href="#" className="block hover:text-green-200 transition">Shop</a>
          <a href="#" className="block hover:text-green-200 transition">About</a>
          <a href="#" className="block hover:text-green-200 transition">Contact</a>
          <button className="w-full mt-2 bg-white text-green-700 font-semibold py-2 rounded-lg hover:bg-green-100 transition">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
