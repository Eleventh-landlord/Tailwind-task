export default function BlogPost() {
  const relatedPosts = [
    {
      title: "10 Ways to Enjoy Jollof Rice Like a True Nigerian",
      image: "Image/Jollof Rice Recipe (1).jpeg",
    },
    {
      title: "The Comeback of Ankara Fashion",
      image: "Image/African Fabrics.jpeg",
    },
    {
      title: "Why Palm Wine is the Ultimate Nigerian Drink",
      image: "Image/Recycled toddy bots_.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Featured Image */}
      <div className="w-full h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Nigerian Cuisine"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {/* Article Content */}
        <article className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            The Rich Taste of Nigerian Cuisine
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 space-x-3">
            <span>By <span className="font-medium text-green-700">Adeleke Kehinde</span></span>
            <span>•</span>
            <span>Nov 12, 2025</span>
            <span>•</span>
            <span>5 min read</span>
          </div>

          {/* Article Body */}
          <div className="space-y-5 leading-relaxed text-gray-700">
            <p>
              Nigerian cuisine is known for its vibrant flavors, colorful presentation, 
              and deep cultural roots. Each meal tells a story — from the spicy aroma of 
              jollof rice to the smoky taste of suya on a Friday night.
            </p>

            <p>
              Ingredients like palm oil, pepper, and crayfish create distinct layers 
              of taste that are hard to replicate elsewhere. Meals are often shared 
              communally, strengthening bonds among friends and family.
            </p>

            <p>
              Whether it’s enjoying a bowl of pounded yam with egusi soup or sipping palm 
              wine under a mango tree, Nigerian food is more than sustenance — it’s an experience.
            </p>

            <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600">
              “Good food is the foundation of genuine happiness — and Nigerians know this best.”
            </blockquote>

            <p>
              The next time you visit a Nigerian home or restaurant, take time to savor the 
              spices, the textures, and the laughter that always fills the room.
            </p>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-green-600 pb-2">
            Related Posts
          </h2>

          {relatedPosts.map((post, index) => (
            <div
              key={index}
              className="flex space-x-3 bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-20 h-20 object-cover"
              />
              <div className="p-3 flex flex-col justify-center">
                <p className="text-sm font-medium text-gray-800 hover:text-green-700 cursor-pointer">
                  {post.title}
                </p>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}
