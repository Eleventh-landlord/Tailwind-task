const categories = [
  { name: "Food", color: "bg-green-100", icon: "🍲" },
  { name: "Fashion", color: "bg-yellow-100", icon: "🧵" },
  { name: "Drinks", color: "bg-blue-100", icon: "🍹" },
  { name: "Accessories", color: "bg-purple-100", icon: "👜" },
];

export default function Categories() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h3 className="text-2xl font-bold mb-8">Shop by Category</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className={`${cat.color} rounded-2xl p-6 hover:-translate-y-2 hover:shadow-md transition-all cursor-pointer`}
          >
            <div className="text-4xl mb-2">{cat.icon}</div>
            <p className="font-medium text-gray-800">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
