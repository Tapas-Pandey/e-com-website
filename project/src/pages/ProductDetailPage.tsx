import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, ChevronRight, Check, Truck, RotateCcw, Shield } from 'lucide-react';
import { getProductById, Product } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(parseInt(id || '0'));
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/products" 
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };

  // Get similar products (same category)
  const similarProducts = getProductById(parseInt(id || '0'))
    ? getProductById(parseInt(id || '0'))!.category
      ? getProductById(parseInt(id || '0'))!.id
        ? getProductById(parseInt(id || '0'))!
          ? [1, 2, 3].map(() => getProductById(parseInt(id || '0'))!).filter(p => p.id !== product.id)
          : []
        : []
      : []
    : [];

  return (
    <div className="bg-amber-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-6 flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link to="/products" className="hover:text-green-600">Products</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link to={`/products?category=${product.category}`} className="hover:text-green-600">{product.category}</Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-gray-700">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              {product.featured && (
                <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div 
              className="p-6 md:p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-sm text-green-600 font-medium mb-2">{product.category}</div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
              
              <div className="mb-6">
                <p className="text-2xl font-bold text-gray-800">₹{product.price}</p>
                <p className="text-sm text-gray-500 mt-1">Including all taxes</p>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              {/* Stock Status */}
              <div className="flex items-center mb-6">
                <div className={`h-3 w-3 rounded-full ${product.stock > 10 ? 'bg-green-500' : product.stock > 0 ? 'bg-amber-500' : 'bg-red-500'} mr-2`}></div>
                <span className="text-sm font-medium">
                  {product.stock > 10 
                    ? 'In Stock' 
                    : product.stock > 0 
                      ? `Only ${product.stock} left` 
                      : 'Out of Stock'}
                </span>
              </div>
              
              {/* Quantity Selector */}
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center">
                  <button 
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="bg-gray-200 text-gray-600 px-3 py-2 rounded-l-md hover:bg-gray-300"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 text-center border-y border-gray-200 py-2 focus:outline-none"
                  />
                  <button 
                    onClick={() => quantity < product.stock && setQuantity(quantity + 1)}
                    className="bg-gray-200 text-gray-600 px-3 py-2 rounded-r-md hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md flex items-center justify-center transition-colors"
                  disabled={product.stock === 0}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </button>
                <button className="flex-1 border border-green-600 text-green-600 hover:bg-green-50 font-medium px-6 py-3 rounded-md flex items-center justify-center transition-colors">
                  <Heart size={18} className="mr-2" />
                  Add to Wishlist
                </button>
              </div>
              
              {/* Shipping Info */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex items-start">
                  <Truck size={18} className="text-green-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Free shipping across India</p>
                    <p className="text-xs text-gray-500">Delivery in 3-5 business days</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <RotateCcw size={18} className="text-green-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Easy 30-day returns</p>
                    <p className="text-xs text-gray-500">No questions asked refund policy</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield size={18} className="text-green-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">100% Authentic Products</p>
                    <p className="text-xs text-gray-500">Certified natural and organic ingredients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              <button 
                onClick={() => setActiveTab('description')}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                  activeTab === 'description' 
                    ? 'border-b-2 border-green-600 text-green-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Description
              </button>
              <button 
                onClick={() => setActiveTab('benefits')}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                  activeTab === 'benefits' 
                    ? 'border-b-2 border-green-600 text-green-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Benefits
              </button>
              <button 
                onClick={() => setActiveTab('ingredients')}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                  activeTab === 'ingredients' 
                    ? 'border-b-2 border-green-600 text-green-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Ingredients
              </button>
            </div>
          </div>
          
          <div className="p-6">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-700">{product.description}</p>
                <p className="mt-4 text-gray-700">
                  This premium product is crafted using traditional Rajasthani methods that have been passed down through generations. 
                  Each batch is carefully prepared to ensure the highest quality and effectiveness.
                </p>
                <p className="mt-4 text-gray-700">
                  Our products are made in small batches to maintain quality and are packaged in eco-friendly materials to reduce environmental impact.
                </p>
              </div>
            )}
            
            {activeTab === 'benefits' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'ingredients' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Ingredients</h3>
                <p className="text-gray-700 mb-4">
                  We use only the finest natural ingredients, ethically sourced from trusted suppliers:
                </p>
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-amber-500 mt-2 mr-2"></div>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Similar Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;