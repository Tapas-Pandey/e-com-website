import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-amber-50'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">RC</span>
            </div>
            <div className="ml-2">
              <h1 className="text-xl font-bold text-green-800">Rajwadi Cosmo</h1>
              <p className="text-xs text-green-600">100% Pure & Natural</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-green-800 hover:text-green-600 font-medium">Home</Link>
            <Link to="/products" className="text-green-800 hover:text-green-600 font-medium">Products</Link>
            <Link to="/about" className="text-green-800 hover:text-green-600 font-medium">About Us</Link>
            <Link to="/contact" className="text-green-800 hover:text-green-600 font-medium">Contact</Link>
          </nav>

          {/* Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-green-800 hover:text-green-600">
              <Search size={20} />
            </button>
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-green-800 hover:text-green-600" size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-green-800" size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-green-100">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-green-800 hover:text-green-600 font-medium">Home</Link>
              <Link to="/products" className="text-green-800 hover:text-green-600 font-medium">Products</Link>
              <Link to="/about" className="text-green-800 hover:text-green-600 font-medium">About Us</Link>
              <Link to="/contact" className="text-green-800 hover:text-green-600 font-medium">Contact</Link>
              <div className="pt-2 flex items-center">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full p-2 border border-green-200 rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <button className="bg-green-600 text-white p-2 rounded-r-md">
                  <Search size={20} />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;