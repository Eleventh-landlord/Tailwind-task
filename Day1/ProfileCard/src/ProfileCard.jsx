export default function ProfileCard() {
  return (
    <div className="w-80 bg-white rounded-3xl shadow-xl overflow-hidden pb-6 border border-gray-100">
      {/* Header - Nigerian Flag */}
      <div className="h-24 w-full flex">
        <div className="w-1/3 h-full bg-green-600" />
        <div className="w-1/3 h-full bg-white" />
        <div className="w-1/3 h-full bg-green-600" />
      </div>

      {/* Avatar */}
      <div className="flex justify-center -mt-12">
        <img
          src="/Image/me.jpg" 
          alt="Adeleke kehinde"
          className="w-24 h-24 rounded-full border-[4px] border-white shadow-md object-cover"
        />
      </div>

      {/* Name & Title */}
      <div className="mt-3 px-4">
        <h2 className="text-xl font-semibold text-gray-900">Adeleke Kehinde</h2>
        <p className="text-sm text-gray-600">Frontend Developer</p>
        <p className="text-xs text-gray-500 mt-1">📍 Lagos, Nigeria</p>
      </div>

      {/* Stats */}
      <div className="flex justify-between bg-gray-50 mt-5 mx-4 py-3 px-4 rounded-2xl border border-gray-200 shadow-sm">
        {[
          { number: "1,200", label: "Followers" },
          { number: "58", label: "Posts" },
          { number: "4,500", label: "Likes" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <h3 className="text-base font-bold text-gray-800">{stat.number}</h3>
            <p className="text-[11px] text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Bio */}
      <p className="text-sm text-gray-600 mt-5 px-6 leading-relaxed">
        Passionate about building clean and user-friendly interfaces, and improving
        user experience through modern web development.
      </p>

      {/* Follow Button */}
      <button className="mt-5 bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-8 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg">
        Follow
      </button>
    </div>
  );
}
