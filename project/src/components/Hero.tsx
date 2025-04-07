import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-amber-50 to-green-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-amber-200 opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-green-200 opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-amber-300 opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-4 leading-tight">
              Ancient Wisdom, <br />
              <span className="text-amber-600">Modern Wellness</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Experience the royal heritage of Rajasthan with our 100% natural herbal products, 
              crafted using traditional recipes passed down through generations.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/products" 
                className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 text-center"
              >
                Shop Now
              </Link>
              <Link 
                to="/about" 
                className="bg-transparent border-2 border-amber-500 text-amber-700 hover:bg-amber-500 hover:text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 text-center"
              >
                Our Story
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500 rounded-tl-[100px] rounded-br-[100px] transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1531701915033-23f036e0bbb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Rajasthani Herbal Products" 
                className="relative z-10 rounded-tl-[100px] rounded-br-[100px] shadow-xl object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg z-20 max-w-[200px]">
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-1 text-sm text-gray-600">4.9/5</span>
                </div>
                <p className="text-sm text-gray-700">
                  "These products transformed my skin! Pure Rajasthani magic."
                </p>
                <p className="text-xs text-gray-500 mt-1">- Priya S.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;