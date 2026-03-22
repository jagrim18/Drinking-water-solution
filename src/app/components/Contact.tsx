import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Instagram, Facebook, MessageCircle, Navigation } from 'lucide-react';

export function Contact() {
  const businessInfo = {
    name: 'AquaPure Water Solutions',
    owner: 'Rajesh Kumar',
    phone: '+91 98765 43210',
    email: 'contact@aquapure.com',
    address: '123 Water Street, Clean City, State - 123456',
    whatsapp: '+919876543210',
    instagram: 'aquapure_water',
    facebook: 'aquapurewater',
    coordinates: '28.6139,77.2090', // Replace with actual coordinates
  };

  const getDirectionsUrl = () => {
    return `https://www.google.com/maps/dir/?api=1&destination=${businessInfo.coordinates}`;
  };

  const getWhatsAppUrl = () => {
    return `https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}`;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to experience pure, healthy water? Contact us today!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6 mb-8">
                  {/* Owner Name */}
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Owner</p>
                      <p className="text-gray-600">{businessInfo.owner}</p>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.a
                    href={`tel:${businessInfo.phone}`}
                    className="flex items-start gap-4 group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600 group-hover:text-blue-600 transition-colors">
                        {businessInfo.phone}
                      </p>
                    </div>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href={`mailto:${businessInfo.email}`}
                    className="flex items-start gap-4 group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600 group-hover:text-blue-600 transition-colors">
                        {businessInfo.email}
                      </p>
                    </div>
                  </motion.a>

                  {/* Address */}
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">{businessInfo.address}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Get Directions Button */}
                <motion.a
                  href={getDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all w-full mb-6"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </motion.a>

                {/* Social Media */}
                <div>
                  <p className="font-semibold text-gray-800 mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    <motion.a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <MessageCircle className="w-6 h-6 text-white" />
                    </motion.a>

                    <motion.a
                      href={`https://instagram.com/${businessInfo.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </motion.a>

                    <motion.a
                      href={`https://facebook.com/${businessInfo.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Facebook className="w-6 h-6 text-white" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map/Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Why Choose {businessInfo.name}?
                </h3>

                <div className="space-y-4">
                  {[
                    'Same-day delivery available',
                    '24/7 customer support',
                    'Quality guaranteed',
                    'Affordable pricing',
                    'Regular health & safety checks',
                    'Eco-friendly packaging',
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-xl"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8 p-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl text-white"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-bold mb-2">Special Offer!</h4>
                  <p className="text-blue-50">
                    Order 5 or more containers and get free delivery + 10% discount on your first order!
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
