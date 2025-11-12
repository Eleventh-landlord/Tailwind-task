

export default function NewsCard({
  category = "Politics",
  image,
  headline,
  excerpt,
  author,
  date,
  readTime = "3 min read",
}) {
  const categoryColors = {
    Politics: "bg-green-600 text-white",
    Sports: "bg-amber-500 text-white",
    Entertainment: "bg-purple-600 text-white",
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <img
        src={image}
        alt="news"
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        {/* Category Badge */}
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${categoryColors[category]}`}
        >
          {category}
        </span>

        {/* Headline */}
        <h2 className="text-lg font-semibold text-gray-900 mt-3 leading-snug">
          {headline}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {excerpt}
        </p>

        {/* Author & Meta Info */}
        <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
          <span>✍️ {author}</span>
          <span>{date} • {readTime}</span>
        </div>

        {/* Read More */}
        <a
          href="#"
          className="inline-block mt-4 text-green-700 font-medium hover:underline"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}
