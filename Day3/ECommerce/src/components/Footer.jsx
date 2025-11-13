export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-3">
        <h4 className="text-xl font-semibold">NaijaStore</h4>
        <p>© {new Date().getFullYear()} NaijaStore. All rights reserved.</p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Support</a>
        </div>
      </div>
    </footer>
  );
}
