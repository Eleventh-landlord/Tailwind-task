import NewsCard from "./NewsCard";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <NewsCard
        category="Fashion"
        image="Image/newscard.jpg"
        headline="Swag Out takes over the fashon industry in Nigeria"
        excerpt="Swag Out which was created by Adeleke Boluwatife has reportedly raised the highest revenue we have ever seen in the fashion world and has taken its mark already just within 3 years of proper building."
        author="Adeleke Kehinde"
        date="Nov 11, 2025"
        readTime="4 min read"
      />
    </div>
  );
}
