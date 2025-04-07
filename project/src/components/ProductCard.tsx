import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover"
          />
        </Link>
        <button 
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-pink-50 transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart size={18} className="text-pink-500" />
        </button>
        {product.featured && (
          <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="text-xs text-green-600 font-medium mb-1">{product.category}</div>
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-green-700 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mt-4">
          <div className="text-gray-800 font-bold">₹{product.price}</div>
          <button 
            onClick={() => addToCart(product)}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md flex items-center transition-colors"
          >
            <ShoppingCart size={16} className="mr-1" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;