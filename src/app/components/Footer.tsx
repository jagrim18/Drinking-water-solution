import { motion } from 'motion/react';
import { Droplets, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">AquaPure</span>
            </div>
            <p className="text-blue-200 text-sm">
              Delivering pure, healthy water to your doorstep. Your trusted partner for premium RO water supply.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">About Us</a>
              </li>
            </ul>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>Monday - Saturday: 8:00 AM - 8:00 PM</li>
              <li>Sunday: 9:00 AM - 6:00 PM</li>
              <li className="pt-2 text-cyan-300">Emergency Orders: 24/7</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 pt-8 mt-8 text-center">
          <motion.p
            className="text-sm text-blue-200 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Made with <Heart className="w-4 h-4 text-red-400 fill-current" /> for healthy living
          </motion.p>
          <p className="text-xs text-blue-300 mt-2">
            © 2026 AquaPure Water Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
