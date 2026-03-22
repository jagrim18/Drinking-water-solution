import { motion } from 'motion/react';
import { Check, Droplets } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Products() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Our Premium Product
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            High-quality 20-liter RO purified water containers
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1762423255554-afdb20ca0c10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJlJTIwbWluZXJhbCUyMHdhdGVyJTIwZ2xhc3N8ZW58MXx8fHwxNzczOTk1NDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="20L Water Container"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>

              {/* 3D Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-2xl shadow-2xl"
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-2">
                  <Droplets className="w-5 h-5" />
                  <span className="font-bold">20L</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  20 Liter Premium RO Water
                </h3>
                <p className="text-gray-600 mb-6">
                  Our flagship product - premium quality RO purified drinking water in sealed 20-liter containers. 
                  Perfect for homes, offices, and events.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    '7-Stage RO + UV Purification',
                    'TDS Level: Below 50 ppm',
                    'pH Balanced (7.0 - 7.5)',
                    'BPA-Free Food Grade Container',
                    'Sealed & Tamper-Proof',
                    'Regular Lab Testing',
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.a
                  href="tel:+1234567890"
                  className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all w-full text-center"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Order Your Container Today
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
