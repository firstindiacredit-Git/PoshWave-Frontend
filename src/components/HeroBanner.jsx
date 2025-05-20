import { Carousel } from 'antd';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';

// Import images
import img1 from '../assets/MG_3219-scaled.jpg';
import img2 from '../assets/MG_3460-scaled.jpg';
import img3 from '../assets/MG_3459-scaled.jpg';

const slides = [
  {
    img: img1,
    title: "Elevate Your Style",
    subtitle: "Discover the latest trends in fashion",
    description: "Experience luxury fashion that combines elegance with contemporary design. Shop our exclusive collection today.",
    cta: "Shop Now",
    badge: "New Arrivals"
  },
  {
    img: img2,
    title: "Timeless Elegance",
    subtitle: "Where style meets sophistication",
    description: "Curated pieces that define modern luxury. Find your perfect style statement with our premium collection.",
    cta: "Explore Collection",
    badge: "Featured"
  },
  {
    img: img3,
    title: "Fashion Forward",
    subtitle: "Redefining luxury fashion",
    description: "Step into a world of premium fashion where every piece tells a story of elegance and innovation.",
    cta: "Discover More",
    badge: "Trending"
  }
];

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export default function HeroBanner() {
  const ref = useRef(null);

  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-50" ref={ref}>
      <Carousel 
        autoplay 
        dots 
        className="hero-carousel"
        effect="fade"
        autoplaySpeed={5000}
      >
        {slides.map((slide, idx) => (
          <div key={idx}>
            <motion.div
              className="relative min-h-[91vh] flex items-center"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
            >
              {/* Background Image with Overlay */}
              <motion.div
                className="absolute inset-0"
                style={{ 
                  backgroundImage: `url(${slide.img})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center',
                  filter: 'brightness(0.85)'
                }}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: [0.6, -0.05, 0.01, 0.99] }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/50 to-transparent" />

              {/* Content Container */}
              <div className="relative max-w-7xl mx-auto px-4 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
                  {/* Left Side - Text Content */}
                  <motion.div 
                    className="text-white space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                      <span className="text-sm font-poppins tracking-wider">{slide.badge}</span>
                    </div>
                    <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      {slide.title}
                    </h1>
                    <h2 className="font-playfair text-xl md:text-2xl text-white/90">
                      {slide.subtitle}
                    </h2>
                    <p className="text-base md:text-lg text-white/80 font-poppins max-w-xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-white text-black hover:bg-black hover:text-white font-poppins rounded-full px-6 py-3 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                        {slide.cta}
                        <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                      <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-poppins rounded-full px-6 py-3 transition-all duration-300 transform hover:scale-105">
                        Learn More
                      </button>
                    </div>
                  </motion.div>

                  {/* Right Side - Featured Products Card */}
                  <motion.div
                    className="hidden lg:block"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                      <h3 className="text-white font-playfair text-2xl mb-6">Featured Collection</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {[1, 2].map((item) => (
                          <div key={item} className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10">
                            <img 
                              src={slide.img} 
                              alt={`Featured Item ${item}`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                <p className="text-white font-poppins text-sm">Featured Item {item}</p>
                                <p className="text-white/80 font-poppins text-xs">$299.99</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button className="w-full mt-6 bg-white/10 hover:bg-white/20 text-white font-poppins rounded-full py-3 transition-all duration-300">
                        View All Featured
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
              <motion.div 
                className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </motion.div>
          </div>
        ))}
      </Carousel>

      {/* Scroll Indicator */}
      {/* <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-2 bg-white/50 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
        <span className="text-white/50 text-sm mt-2 font-poppins">Scroll to explore</span>
      </motion.div> */}
    </section>
  );
}