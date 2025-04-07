import React from 'react';
import { Leaf, Award, Truck, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Leaf className="w-10 h-10 text-green-600" />,
    title: '100% Natural',
    description: 'All our products are made with pure, natural ingredients sourced directly from Rajasthans organic farms.'
  },
  {
    icon: <Award className="w-10 h-10 text-amber-500" />,
    title: 'Royal Heritage',
    description: 'Our formulations are based on ancient recipes once used by Rajasthani royalty for their wellness rituals.'
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
    title: 'Quality Assured',
    description: 'Every product undergoes rigorous testing to ensure the highest standards of purity and effectiveness.'
  },
  {
    icon: <Truck className="w-10 h-10 text-purple-500" />,
    title: 'Fast Delivery',
    description: 'We deliver our products across India within 3-5 business days, with secure packaging to preserve freshness.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-green-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Rajwadi Cosmo?
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We blend ancient wisdom with modern science to create products that nurture your body naturally
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-amber-50 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;