import MobileMenu from "./MobileMenu";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MobileMenu />

      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
           Welcome to NaijaMarket
        </h1>
        <p className="text-gray-600 mt-2">
          Explore authentic Nigerian products and culture.
        </p>
      </div>
    </div>
  );
}
