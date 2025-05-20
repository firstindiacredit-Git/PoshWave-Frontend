import { HeartOutlined, EyeOutlined, ShoppingCartOutlined, StarFilled } from '@ant-design/icons';

// Import images
import img1 from '../assets/1-1.png';
import img2 from '../assets/2-2.png';
import img3 from '../assets/4-5.png';
import img4 from '../assets/4-7.png';
import img5 from '../assets/4-10.png';
import img6 from '../assets/4-12.png';
import img7 from '../assets/5-5.png';
import img8 from '../assets/5-10.png';
import img9 from '../assets/5-12.png';

const products = [
  { name: 'Elegant Midi Dress', price: '$129', img: img1, rating: 5 }, 
  { name: 'Classic White Top', price: '$59', img: img2, rating: 4 },
  { name: 'Chic Black Skirt', price: '$79', img: img3, rating: 4 },
  { name: 'Trendy Denim Jacket', price: '$149', img: img4, rating: 5 },
  { name: 'Beige Wide Pants', price: '$89', img: img5, rating: 4 },
  { name: 'Gold Accent Blouse', price: '$99', img: img6, rating: 5 },
  { name: 'Summer Floral Dress', price: '$119', img: img7, rating: 5 },
  { name: 'Casual Striped Shirt', price: '$69', img: img8, rating: 4 },
  { name: 'Designer Handbag', price: '$199', img: img9, rating: 5 },
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px] bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${img1})`,
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
              Discover Our Collection
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-poppins mb-8">
              Explore our curated selection of premium fashion pieces, designed to elevate your style.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-gold-500 hover:bg-gold-600 text-white font-poppins rounded-full px-8 py-3 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Shop Now
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-poppins rounded-full px-8 py-3 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-12 text-center text-black relative">
          Our Collection
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold-500 rounded-full"></div>
        </h2>
        
        {/* Filters and Sort Section */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          <div className="flex gap-4">
            <select className="bg-white border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-400">
              <option>All Categories</option>
              <option>Dresses</option>
              <option>Tops</option>
              <option>Bottoms</option>
              <option>Accessories</option>
            </select>
            <select className="bg-white border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-400">
              <option>Price Range</option>
              <option>$0 - $50</option>
              <option>$51 - $100</option>
              <option>$101 - $200</option>
              <option>$201+</option>
            </select>
          </div>
          <select className="bg-white border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-400">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden relative transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img src={product.img} alt={product.name} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                <button className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-gold-100 transition-all duration-300 transform hover:scale-110">
                  <HeartOutlined className="text-xl text-gold-500" />
                </button>
                <button className="absolute top-4 left-4 bg-white/90 rounded-full p-2 hover:bg-gold-100 transition-all duration-300 transform hover:scale-110">
                  <EyeOutlined className="text-xl text-gray-700" />
                </button>
              </div>
              <div className="p-6 flex flex-col items-center">
                <span className="font-playfair text-xl font-semibold text-black mb-2">{product.name}</span>
                <span className="font-poppins text-lg text-gold-700 font-bold mb-3">{product.price}</span>
                <div className="flex items-center mb-4">
                  {[...Array(product.rating)].map((_, i) => (
                    <StarFilled key={i} className="text-lg transform hover:scale-110 transition-transform duration-300" style={{ color: '#dcaa3c', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)' }} />
                  ))}
                  {[...Array(5 - product.rating)].map((_, i) => (
                    <StarFilled key={i} className="text-lg" style={{ color: '#d1d5db' }} />
                  ))}
                </div>
                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-poppins rounded-full py-3 mt-2 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
                  <ShoppingCartOutlined className="transform group-hover:rotate-12 transition-transform duration-300" /> 
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 