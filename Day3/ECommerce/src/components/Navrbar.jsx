import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-600">NaijaStore</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-green-600 cursor-pointer">Home</li>
          <li className="hover:text-green-600 cursor-pointer">Shop</li>
          <li className="hover:text-green-600 cursor-pointer">Categories</li>
          <li className="hover:text-green-600 cursor-pointer">Contact</li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <ShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer hover:text-green-600" />
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            Login
          </button>
          {/* Hamburger */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <ul className="flex flex-col items-center py-4 space-y-3 font-medium">
            <li className="hover:text-green-600">Home</li>
            <li className="hover:text-green-600">Shop</li>
            <li className="hover:text-green-600">Categories</li>
            <li className="hover:text-green-600">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
