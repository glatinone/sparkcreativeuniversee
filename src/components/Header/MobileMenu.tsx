import Link from 'next/link';

type NavLink = {
  name: string;
  href: string;
};

type MobileMenuProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  navLinks: NavLink[];
};

export default function MobileMenu({ open, setOpen, navLinks }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={() => setOpen(false)}
    >
      <div
        className={`absolute top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={e => e.stopPropagation()}
      >
        <button className="absolute top-4 right-4" onClick={() => setOpen(false)} aria-label="Close menu">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="flex flex-col mt-20 space-y-6 px-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-lg font-medium text-gray-800 hover:text-purple-600" onClick={() => setOpen(false)}>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
} 