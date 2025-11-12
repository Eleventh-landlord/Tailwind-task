

const naijaGreens = [
  { name: "Green 50", hex: "#ECFDF5" },
  { name: "Green 100", hex: "#D1FAE5" },
  { name: "Green 200", hex: "#A7F3D0" },
  { name: "Green 300", hex: "#6EE7B7" },
  { name: "Green 400", hex: "#34D399" },
  { name: "Green 500", hex: "#10B981" }, // Naija Green (Primary)
  { name: "Green 600", hex: "#059669" },
  { name: "Green 700", hex: "#047857" },
  { name: "Green 800", hex: "#065F46" },
  { name: "Green 900", hex: "#064E3B" },
  { name: "Green 950", hex: "#022C22" },
];

export default function ColorPalette() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Nigerian Color Palette Showcase
      </h1>

      {/* Nigerian Flag Colors */}
      <h2 className="text-lg font-semibold mb-3 text-gray-700">Nigerian Flag Colors</h2>
      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-[#008751] rounded-md"></div>
          <p className="text-sm mt-2 font-medium text-gray-700">Green (#008751)</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-white border rounded-md"></div>
          <p className="text-sm mt-2 font-medium text-gray-700">White (#FFFFFF)</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-[#008751] rounded-md"></div>
          <p className="text-sm mt-2 font-medium text-gray-700">Green (#008751)</p>
        </div>
      </div>

      {/* Naija Green Shades */}
      <h2 className="text-lg font-semibold mb-3 text-gray-700">Naija Green Shades (50–950)</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {naijaGreens.map((color) => (
          <div key={color.name} className="flex flex-col items-center">
            <div
              className="w-20 h-20 rounded-md border"
              style={{ backgroundColor: color.hex }}
            ></div>
            <p
              className="text-sm mt-2 font-medium"
              style={{ color: getContrast(color.hex) }}
            >
              {color.name}  
            </p>
            <p className="text-xs text-gray-600">{color.hex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Auto Text Contrast Function ---- */
function getContrast(hex) {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 150 ? "#1a1a1a" : "#ffffff";
}
