import { CarOutlined, CreditCardOutlined, CustomerServiceOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <CarOutlined className="text-4xl text-gold-500" />,
    title: "Free Shipping",
    description: "Enjoy free shipping on all orders over $100. Fast and reliable delivery to your doorstep.",
  },
  {
    icon: <CreditCardOutlined className="text-4xl text-gold-500" />,
    title: "Secure Payment",
    description: "Multiple payment options with 100% secure checkout. Shop with confidence.",
  },
  {
    icon: <CustomerServiceOutlined className="text-4xl text-gold-500" />,
    title: "24/7 Support",
    description: "Our customer service team is available round the clock to assist you with any queries.",
  },
  {
    icon: <SafetyCertificateOutlined className="text-4xl text-gold-500" />,
    title: "Quality Guarantee",
    description: "We guarantee the quality of all our products. 30-day return policy for your peace of mind.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export default function ServiceSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black relative inline-block">
            Our Services
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full"></div>
          </h2>
          <p className="mt-6 text-gray-600 font-poppins text-lg max-w-2xl mx-auto leading-relaxed tracking-wide">
            We're committed to providing the best shopping experience with our premium services
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-gold-50 to-gold-100 mb-6 shadow-md">
                  {service.icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-black mb-3 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-poppins leading-relaxed tracking-wide">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-100 via-gold-50 to-gold-100 rounded-2xl p-8 text-black shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <h3 className="font-playfair text-2xl font-bold mb-4 tracking-wide">VIP Membership</h3>
            <p className="font-poppins mb-6 leading-relaxed tracking-wide">Join our VIP program for exclusive benefits and early access to new collections.</p>
            <button className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-black font-poppins rounded-full px-8 py-3 transition-all duration-300 shadow-md hover:shadow-lg">
              Learn More
            </button>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-100 via-gold-50 to-gold-100 rounded-2xl p-8 text-black shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <h3 className="font-playfair text-2xl font-bold mb-4 tracking-wide">Personal Styling</h3>
            <p className="font-poppins mb-6 leading-relaxed tracking-wide">Get personalized fashion advice from our expert stylists.</p>
            <button className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-black font-poppins rounded-full px-8 py-3 transition-all duration-300 shadow-md hover:shadow-lg">
              Book Now
            </button>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-100 via-gold-50 to-gold-100 rounded-2xl p-8 text-black shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <h3 className="font-playfair text-2xl font-bold mb-4 tracking-wide">Gift Cards</h3>
            <p className="font-poppins mb-6 leading-relaxed tracking-wide">Give the gift of fashion with our exclusive gift cards.</p>
            <button className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-black font-poppins rounded-full px-8 py-3 transition-all duration-300 shadow-md hover:shadow-lg">
              Shop Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 