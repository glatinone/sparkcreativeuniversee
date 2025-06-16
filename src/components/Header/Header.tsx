import Logo from './Logo';
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Logo />
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className="text-gray-800 hover:text-purple-600 font-medium transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>
        <button className="md:hidden flex items-center" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <MobileMenu open={menuOpen} setOpen={setMenuOpen} navLinks={navLinks} />
      </div>
    </header>
  );
} 