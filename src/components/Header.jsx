import { useState, useEffect } from 'react';
import { HeartOutlined, ShoppingCartOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logo from '../assets/BlackLogo.svg';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'New Arrivals', href: '#' },
  { name: 'Sale', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="PoshWave" className="h-10" />
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <Link key={link.name} to={link.href} className="text-base font-medium text-gray-700 hover:text-black transition-colors font-poppins">
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1 ml-6">
          <SearchOutlined className="text-gray-400 mr-2" />
          <input type="text" placeholder="Search..." className="bg-transparent outline-none text-sm font-poppins" />
        </div>
        {/* Icons */}
        <div className="flex items-center gap-4 ml-6">
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
            <HeartOutlined className="text-xl text-gray-700" />
          </button>
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
            <ShoppingCartOutlined className="text-xl text-gray-700" />
          </button>
          {/* Mobile menu button */}
          <button className="md:hidden p-2 ml-2" onClick={() => setMenuOpen(!menuOpen)}>
            <MenuOutlined className="text-2xl text-gray-700" />
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t px-4 pb-4 flex flex-col gap-3 animate-fade-in-down">
          {navLinks.map(link => (
            <Link key={link.name} to={link.href} className="text-base font-medium text-gray-700 hover:text-black transition-colors font-poppins">
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 w-full">
              <SearchOutlined className="text-gray-400 mr-2" />
              <input type="text" placeholder="Search..." className="bg-transparent outline-none text-sm font-poppins w-full" />
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <HeartOutlined className="text-xl text-gray-700" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <ShoppingCartOutlined className="text-xl text-gray-700" />
            </button>
          </div>
        </nav>
      )}
    </header>
  );
} 