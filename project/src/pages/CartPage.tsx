import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-amber-50 py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-white rounded-lg shadow-md p-8 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-6">
              <ShoppingBag size={64} className="text-gray-300" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link 
              to="/products" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md inline-flex items-center transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Your Cart</h1>
          <p className="text-gray-600">{cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {cart.map((item, index) => (
                <div 
                  key={item.product.id} 
                  className={`p-6 flex flex-col sm:flex-row items-center gap-6 ${
                    index !== cart.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <Link to={`/products/${item.product.id}`}>
                      <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
                        {item.product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-500 mb-2">{item.product.category}</p>
                    
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="bg-gray-100 text-gray-600 px-3 py-1 rounded-l-md hover:bg-gray-200"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="w-10 text-center border-y border-gray-100 py-1">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="bg-gray-100 text-gray-600 px-3 py-1 rounded-r-md hover:bg-gray-200"
                          disabled={item.quantity >= item.product.stock}
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <p className="font-semibold text-gray-800">₹{item.product.price * item.quantity}</p>
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-500 hover:text-red-600"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            
            <div className="mt-6">
              <Link 
                to="/products" 
                className="text-green-600 hover:text-green-700 inline-flex items-center"
              >
                <ArrowLeft size={18} className="mr-2" />
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">₹{Math.round(totalPrice * 0.18)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="text-lg font-bold text-gray-800">Total</span>
                  <span className="text-lg font-bold text-gray-800">₹{totalPrice + Math.round(totalPrice * 0.18)}</span>
                </div>
              </div>
              
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md transition-colors">
                Proceed to Checkout
              </button>
              
              <div className="mt-6">
                <h3 className="font-medium text-gray-800 mb-2">We Accept</h3>
                <div className="flex gap-2">
                  <div className="bg-gray-100 rounded p-2 text-xs">Credit Card</div>
                  <div className="bg-gray-100 rounded p-2 text-xs">Debit Card</div>
                  <div className="bg-gray-100 rounded p-2 text-xs">UPI</div>
                  <div className="bg-gray-100 rounded p-2 text-xs">COD</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;