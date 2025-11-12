const products = [
  { name: "Jollof Rice", price: "₦1,500", image: "Image/Jollof Rice Recipe (1).jpeg" },
  { name: "Ankara Fabric", price: "₦5,000", image: "Image/African Fabrics.jpeg" },
  { name: "Suya", price: "₦1,000", image: "Image/download (1).jpeg" },
  { name: "Aso-Ebi", price: "₦15,000", image: "Image/3 Bundles of Vibrant Yoruba Aso-Oke, Handwoven Nigeria Aso-Ebi Fabric, Ethnic Africa Wedding Guest Attire, Traditional Bride Groom Outfit.jpeg" },
  { name: "Palm Wine", price: "₦1,200", image: "Image/Recycled toddy bots_.jpeg" },
  { name: "Agbada", price: "₦25,000", image: "Image/Black Agbada Design.jpeg" },
  { name: "Chin Chin", price: "₦500", image: "Image/A.jpeg" },
  { name: "Puff Puff", price: "₦300", image: "Image/puff.jpeg" },
];

export default function ProductCard() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
         Nigerian Product Showcase
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-green-700 font-medium mt-1">{product.price}</p>

              {/* Button */}
              <button className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-all duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
