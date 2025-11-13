import { TrendingUp, ShoppingBag, Users, Wallet } from "lucide-react";

export default function StatsDashboard() {
  const stats = [
    {
      id: 1,
      title: "Total Sales",
      value: "₦2.5M",
      change: "+12%",
      icon: <ShoppingBag className="w-6 h-6 text-green-600" />,
      color: "bg-green-100",
    },
    {
      id: 2,
      title: "Orders",
      value: "1,234",
      change: "+8%",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      color: "bg-blue-100",
    },
    {
      id: 3,
      title: "Customers",
      value: "567",
      change: "+23%",
      icon: <Users className="w-6 h-6 text-yellow-600" />,
      color: "bg-yellow-100",
    },
    {
      id: 4,
      title: "Revenue",
      value: "₦4.2M",
      change: "+15%",
      icon: <Wallet className="w-6 h-6 text-purple-600" />,
      color: "bg-purple-100",
    },
  ];

  return (
    <div className="w-full max-w-6xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Dashboard Overview
      </h2>

      {/* Responsive grid: 1 (mobile) → 2 (tablet) → 4 (desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`p-6 rounded-2xl shadow-md border border-gray-100 bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300`}
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4`}
            >
              {stat.icon}
            </div>

            {/* Title */}
            <p className="text-gray-500 text-sm font-medium">{stat.title}</p>

            {/* Value */}
            <h3 className="text-2xl font-bold text-gray-800 mt-1">
              {stat.value}
            </h3>

            {/* Change */}
            <p className="text-sm font-medium text-green-600 mt-1">
              {stat.change} ↑
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
