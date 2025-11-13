export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      {/* Product Image */}
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 hover:text-green-600">
          {product.name}
        </h3>
        <p className="text-gray-600 mt-1 text-sm">₦{product.price.toLocaleString()}</p>

        {/* Add to Cart Button */}
        <button
          className="mt-4 w-full bg-green-600 text-white font-medium py-2 rounded-xl 
          transition-all duration-300 hover:bg-green-700 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
