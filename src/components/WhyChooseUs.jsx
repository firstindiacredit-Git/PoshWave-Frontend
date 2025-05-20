import { CheckCircleOutlined, StarOutlined, GlobalOutlined, TeamOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <StarOutlined className="text-4xl text-gold-500" />,
    title: "Premium Quality",
    description: "We source only the finest materials and work with skilled artisans to create exceptional pieces that stand the test of time.",
  },
  {
    icon: <GlobalOutlined className="text-4xl text-gold-500" />,
    title: "Global Fashion",
    description: "Our collections are inspired by global fashion trends while maintaining timeless elegance and sophistication.",
  },
  {
    icon: <TeamOutlined className="text-4xl text-gold-500" />,
    title: "Expert Team",
    description: "Our team of fashion experts and stylists are dedicated to helping you find the perfect pieces for your wardrobe.",
  },
  {
    icon: <CheckCircleOutlined className="text-4xl text-gold-500" />,
    title: "Quality Assurance",
    description: "Every item undergoes rigorous quality checks to ensure you receive only the best fashion pieces.",
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

const statsVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black relative inline-block">
            Why Choose PoshWave
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full"></div>
          </h2>
          <p className="mt-6 text-gray-600 font-poppins text-lg max-w-2xl mx-auto leading-relaxed tracking-wide">
            Experience the difference with our commitment to excellence in fashion
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-gold-50 to-gold-100 mb-6 shadow-md group-hover:from-gold-100 group-hover:to-gold-200 transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-black mb-3 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-poppins leading-relaxed tracking-wide">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            variants={statsVariants}
            className="bg-gradient-to-br from-white to-gold-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 text-center"
          >
            <h3 className="font-playfair text-5xl font-bold text-gold-500 mb-3 tracking-wide">10K+</h3>
            <p className="font-poppins text-gray-600 text-lg tracking-wide">Happy Customers</p>
          </motion.div>
          <motion.div 
            variants={statsVariants}
            className="bg-gradient-to-br from-white to-gold-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 text-center"
          >
            <h3 className="font-playfair text-5xl font-bold text-gold-500 mb-3 tracking-wide">1000+</h3>
            <p className="font-poppins text-gray-600 text-lg tracking-wide">Fashion Items</p>
          </motion.div>
          <motion.div 
            variants={statsVariants}
            className="bg-gradient-to-br from-white to-gold-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 text-center"
          >
            <h3 className="font-playfair text-5xl font-bold text-gold-500 mb-3 tracking-wide">50+</h3>
            <p className="font-poppins text-gray-600 text-lg tracking-wide">Countries Served</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 