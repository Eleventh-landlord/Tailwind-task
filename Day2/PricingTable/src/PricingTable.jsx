/* PricingTable.jsx */

export default function PricingTable() {
  const plans = [
    {
      name: "Basic",
      price: "₦5,000/month",
      features: [
        "Access to core features",
        "5 GB storage",
        "Email support",
      ],
      button: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "₦15,000/month",
      features: [
        "All Basic features",
        "50 GB storage",
        "Priority support",
        "Advanced analytics",
      ],
      button: "Choose Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₦50,000/month",
      features: [
        "All Pro features",
        "Unlimited storage",
        "Dedicated manager",
        "Custom integrations",
      ],
      button: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Choose Your Plan
        </h1>
        <p className="text-gray-600 mt-3">
          Flexible pricing for individuals, businesses, and enterprises.
        </p>
      </div>

      {/* Responsive Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-md border border-gray-200 bg-white flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${
              plan.popular
                ? "scale-105 bg-green-700 text-white border-green-700 shadow-lg"
                : ""
            }`}
          >
            {/* Header */}
            <div className="p-6 text-center">
              <h2
                className={`text-xl font-semibold ${
                  plan.popular ? "text-black" : "text-gray-800"
                }`}
              >
                {plan.name}
              </h2>
              <p
                className={`mt-2 text-3xl font-bold ${
                  plan.popular ? "text-green-700" : "text-green-700"
                }`}
              >
                {plan.price}
              </p>
            </div>

            {/* Features */}
            <ul className="px-8 py-4 space-y-3 text-sm ">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-center justify-center ${
                    plan.popular ? "text-black" : "text-gray-700"
                  }`}
                >
                  ✅ {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="p-6">
              <button
                className={`w-full py-2.5 font-semibold rounded-lg transition-all duration-200 ${
                  plan.popular
                    ? "bg-white text-white-700 hover:bg-green-100"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {plan.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
