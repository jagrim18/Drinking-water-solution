import { motion } from 'motion/react';
import { Shield, Droplets, Truck, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: '7-Stage RO Purification',
    description: 'Advanced filtration system ensuring 99.9% pure water',
  },
  {
    icon: Droplets,
    title: 'Fresh & Hygienic',
    description: 'Sealed 20L containers for maximum freshness',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Same-day delivery service in your area',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description: 'ISO certified and lab tested water quality',
  },
];

export function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Why Choose Us?
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to delivering the purest drinking water to keep you and your family healthy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-blue-100"
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/20 rounded-full blur-2xl -z-10 group-hover:bg-blue-300/30 transition-all" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
