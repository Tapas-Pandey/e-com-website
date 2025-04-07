import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      console.log('Subscribing email:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset the success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Join Our Herbal Community
          </motion.h2>
          <motion.p 
            className="text-green-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Subscribe to our newsletter for exclusive offers, new product announcements, and traditional Rajasthani wellness tips.
          </motion.p>
          
          <motion.form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </motion.form>
          
          {isSubmitted && (
            <motion.p 
              className="mt-4 text-amber-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Thank you for subscribing! Check your email for a special welcome gift.
            </motion.p>
          )}
          
          <motion.p 
            className="mt-6 text-sm text-green-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            By subscribing, you agree to our Privacy Policy. We respect your privacy and will never share your information.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;