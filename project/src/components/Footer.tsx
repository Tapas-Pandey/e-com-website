import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-amber-400 flex items-center justify-center">
                <span className="text-green-800 font-bold text-xl">RH</span>
              </div>
              <h3 className="ml-2 text-xl font-bold">Rajwadi Cosmo</h3>
            </div>
            <p className="mb-4 text-green-100">
              Bringing the ancient herbal wisdom of Rajasthan to modern wellness. 
              100% natural, ethically sourced, and traditionally crafted.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-amber-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-amber-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-amber-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-green-100 hover:text-amber-300 transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-green-100 hover:text-amber-300 transition-colors">Shop All</Link></li>
              <li><Link to="/about" className="text-green-100 hover:text-amber-300 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-green-100 hover:text-amber-300 transition-colors">Contact</Link></li>
              <li><a href="#" className="text-green-100 hover:text-amber-300 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=Skincare" className="text-green-100 hover:text-amber-300 transition-colors">Skincare</Link></li>
              <li><Link to="/products?category=Hair Care" className="text-green-100 hover:text-amber-300 transition-colors">Hair Care</Link></li>
              <li><Link to="/products?category=Wellness" className="text-green-100 hover:text-amber-300 transition-colors">Wellness</Link></li>
              <li><Link to="/products?category=Food" className="text-green-100 hover:text-amber-300 transition-colors">Herbal Food</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-amber-300" />
                <span>123 Herbal Lane, Jaipur, Rajasthan, India - 302001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-amber-300" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-amber-300" />
                <span>info@rajasthaniherbs.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-green-900 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-green-100">
            &copy; {new Date().getFullYear()} Rajwadi Cosmo. All rights reserved.
          </p>
          <div className="mt-2 md:mt-0">
            <ul className="flex space-x-4 text-sm text-green-100">
              <li><a href="#" className="hover:text-amber-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors">Shipping Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;