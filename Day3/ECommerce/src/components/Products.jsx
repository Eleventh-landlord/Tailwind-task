const products = [
  { id: 1, name: "Jollof Rice", price: "₦1,500", img: "https://images.unsplash.com/photo-1625944226601-1b8a8593f21b" },
  { id: 2, name: "Ankara Fabric", price: "₦5,000", img: "https://images.unsplash.com/photo-1602107142773-84b9c53a3f5f" },
  { id: 3, name: "Suya", price: "₦1,000", img: "https://images.unsplash.com/photo-1605475128049-1cbdfb911bf9" },
  { id: 4, name: "Palm Wine", price: "₦1,200", img: "https://images.unsplash.com/photo-1578687382608-3e006e25a61a" },
  { id: 5, name: "Agbada", price: "₦25,000", img: "https://images.unsplash.com/photo-1571080657919-66aef16e86fe" },
  { id: 6, name: "Chin Chin", price: "₦500", img: "https://images.unsplash.com/photo-1590080875831-3ed8f5b3b1cf" },
];

export default function Products() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold mb-8 text-center">Popular Products</h3>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all"
          >
            <img
              src={p.img}
              alt={p.name}
              className="h-48 w-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="p-4 text-center">
              <h4 className="font-semibold text-gray-800 hover:text-green-600 transition">
                {p.name}
              </h4>
              <p className="text-gray-600 text-sm mt-1">{p.price}</p>
              <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
