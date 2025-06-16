import { useEffect, useState } from 'react';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="bg-gray-950 text-gray-300 pt-12 pb-6 relative">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-bold text-white mb-2">SPARKS</h3>
          <p className="text-sm">Where creativity meets innovation. We transform ideas into digital experiences that inspire and engage.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-purple-400">Home</a></li>
            <li><a href="/portfolio" className="hover:text-purple-400">Portfolio</a></li>
            <li><a href="/services" className="hover:text-purple-400">Services</a></li>
            <li><a href="/about" className="hover:text-purple-400">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="text-sm space-y-1">
            <li>Email: <a href="mailto:contact@sparkscreative.com" className="hover:text-purple-400">contact@sparkscreative.com</a></li>
            <li>Phone: <a href="tel:+15551234567" className="hover:text-purple-400">+1 (555) 123-4567</a></li>
            <li>Address: 123 Creative Street, Digital City</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-purple-400">Twitter</a></li>
            <li><a href="#" className="hover:text-purple-400">LinkedIn</a></li>
            <li><a href="#" className="hover:text-purple-400">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4">
        <span className="text-xs">© 2025 SPARKS Creative Universe. All rights reserved.</span>
        <span className="text-xs mt-2 md:mt-0">Developed by <a href="#" className="text-purple-400 hover:underline">@Nova</a></span>
      </div>
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </footer>
  );
} 