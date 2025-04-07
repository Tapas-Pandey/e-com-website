import React from 'react';
import { motion } from 'framer-motion';
import Newsletter from '../components/Newsletter';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-amber-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <img 
            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80" 
            alt="Rajasthan landscape" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-green-100 mb-8">
              Bringing the ancient herbal wisdom of Rajasthan to the modern world, 
              with a commitment to purity, tradition, and sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-green-800 mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At Rajwadi Cosmo, our mission is to preserve and share the ancient herbal wisdom of Rajasthan 
                with the world. We believe in the power of nature to heal, nurture, and enhance our wellbeing.
              </p>
              <p className="text-gray-700 mb-4">
                We are committed to creating 100% natural products using traditional recipes that have been 
                passed down through generations of Rajasthani families, including those once used by royalty.
              </p>
              <p className="text-gray-700">
                By combining age-old knowledge with modern scientific understanding, we create products 
                that are effective, safe, and respectful of both human health and the environment.
              </p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-amber-500 rounded-tl-[80px] rounded-br-[80px] transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1589244159943-460088ed5c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Rajwadi Cosmo and spices" 
                className="relative z-10 rounded-tl-[80px] rounded-br-[80px] shadow-xl object-cover w-full h-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From a small family business to a trusted name in herbal wellness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-amber-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-amber-500 font-bold text-xl mb-4">2005</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">The Beginning</h3>
              <p className="text-gray-600">
                Rajwadi Cosmo began as a small family business in Jaipur, with recipes passed down through five generations. 
                Our founder, Arjun Singh, started by creating herbal remedies for friends and family.
              </p>
            </motion.div>

            <motion.div 
              className="bg-amber-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-amber-500 font-bold text-xl mb-4">2012</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Growing Roots</h3>
              <p className="text-gray-600">
                As word spread about the effectiveness of our products, we expanded our range and opened our first store in Jaipur. 
                We began working directly with local farmers to source the finest herbs.
              </p>
            </motion.div>

            <motion.div 
              className="bg-amber-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-amber-500 font-bold text-xl mb-4">2020</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Digital Transformation</h3>
              <p className="text-gray-600">
                Recognizing the need to make our products accessible to a wider audience, we launched our e-commerce platform, 
                allowing us to share the benefits of Rajasthani herbal traditions with customers across India and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Authenticity</h3>
              <p className="text-gray-600">
                We stay true to traditional Rajasthani herbal formulations, preserving ancient wisdom while ensuring effectiveness.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Purity</h3>
              <p className="text-gray-600">
                We use only 100% natural ingredients, with no artificial additives, preservatives, or chemicals in any of our products.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We work with local farmers who practice sustainable cultivation methods and use eco-friendly packaging for our products.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Community</h3>
              <p className="text-gray-600">
                We support local communities in Rajasthan by providing fair wages and investing in education and healthcare initiatives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The passionate people behind Rajwadi Cosmo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-amber-50 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Arjun Singh" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Arjun Singh</h3>
                <p className="text-green-600 mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                  A fifth-generation herbalist with a passion for preserving Rajasthan's herbal traditions and making them accessible to the modern world.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-amber-50 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Priya Sharma" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Dr. Priya Sharma</h3>
                <p className="text-green-600 mb-3">Chief Formulator</p>
                <p className="text-gray-600">
                  An Ayurvedic doctor with over 15 years of experience in developing herbal formulations that blend traditional wisdom with scientific research.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-amber-50 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Vikram Mehta" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Vikram Mehta</h3>
                <p className="text-green-600 mb-3">Sustainability Director</p>
                <p className="text-gray-600">
                  An environmental scientist dedicated to ensuring our sourcing and production processes are sustainable and environmentally responsible.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default AboutPage;