import { HeartOutlined, EyeOutlined, ShoppingCartOutlined, StarFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

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

// Import Coming Soon images
import comingSoon1 from '../assets/MG_3219-scaled.jpg';
import comingSoon2 from '../assets/MG_3460-scaled.jpg';
import comingSoon3 from '../assets/MG_3459-scaled.jpg';
import comingSoon4 from '../assets/MG_3430-scaled.jpg';
import comingSoon5 from '../assets/MG_3413.jpg';
import comingSoon6 from '../assets/MG_3384.jpg';
import comingSoon7 from '../assets/MG_3371.jpg';
import comingSoon8 from '../assets/MG_3355.jpg';

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

const comingSoonProducts = [
  { 
    name: 'Summer Evening Gown', 
    price: '$299', 
    img: comingSoon1, 
    rating: 5, 
    releaseDate: 'June 2024',
    description: 'Elegant evening gown perfect for summer events'
  },
  { 
    name: 'Designer Cocktail Dress', 
    price: '$249', 
    img: comingSoon2, 
    rating: 5, 
    releaseDate: 'July 2024',
    description: 'Stunning cocktail dress for special occasions'
  },
  { 
    name: 'Luxury Evening Wear', 
    price: '$399', 
    img: comingSoon3, 
    rating: 5, 
    releaseDate: 'August 2024',
    description: 'Exclusive evening wear collection'
  },
  { 
    name: 'Premium Party Dress', 
    price: '$279', 
    img: comingSoon4, 
    rating: 4, 
    releaseDate: 'June 2024',
    description: 'Perfect for your next party'
  },
  { 
    name: 'Designer Collection', 
    price: '$349', 
    img: comingSoon5, 
    rating: 5, 
    releaseDate: 'July 2024',
    description: 'Limited edition designer pieces'
  },
  { 
    name: 'Exclusive Evening Dress', 
    price: '$459', 
    img: comingSoon6, 
    rating: 5, 
    releaseDate: 'August 2024',
    description: 'One-of-a-kind evening dress'
  },
  { 
    name: 'Luxury Party Wear', 
    price: '$329', 
    img: comingSoon7, 
    rating: 4, 
    releaseDate: 'June 2024',
    description: 'Make a statement at your next event'
  },
  { 
    name: 'Premium Collection', 
    price: '$379', 
    img: comingSoon8, 
    rating: 5, 
    releaseDate: 'July 2024',
    description: 'Premium quality fashion pieces'
  },
];

export default function ProductGrid() {
  const navigate = useNavigate();
  const displayedProducts = products.slice(0, 8);
  const displayedComingSoon = comingSoonProducts.slice(0, 8);

  return (
    <>
      {/* Best Sellers Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black relative">
            Best Sellers
            <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full"></div>
          </h2>
          <button 
            onClick={() => navigate('/shop')}
            className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-black font-poppins rounded-full px-8 py-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedProducts.map((product, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden relative transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img src={product.img} alt={product.name} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <button className="absolute top-4 right-4 bg-white/90 rounded-full p-2.5 hover:bg-gold-100 transition-all duration-300 transform hover:scale-110 shadow-md">
                  <HeartOutlined className="text-xl text-gold-500" />
                </button>
                <button className="absolute top-4 left-4 bg-white/90 rounded-full p-2.5 hover:bg-gold-100 transition-all duration-300 transform hover:scale-110 shadow-md">
                  <EyeOutlined className="text-xl text-gray-700" />
                </button>
              </div>
              <div className="p-6 flex flex-col items-center">
                <span className="font-playfair text-xl font-semibold text-black mb-2 tracking-wide">{product.name}</span>
                <span className="font-poppins text-lg text-gold-700 font-bold mb-3">{product.price}</span>
                <div className="flex items-center mb-4">
                  {[...Array(product.rating)].map((_, i) => (
                    <StarFilled key={i} className="text-lg transform hover:scale-110 transition-transform duration-300" style={{ color: '#dcaa3c', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)' }} />
                  ))}
                  {[...Array(5 - product.rating)].map((_, i) => (
                    <StarFilled key={i} className="text-lg" style={{ color: '#d1d5db' }} />
                  ))}
                </div>
                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-poppins rounded-full py-3.5 mt-2 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
                  <ShoppingCartOutlined className="transform group-hover:rotate-12 transition-transform duration-300" /> 
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black relative">
            Coming Soon
            <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full"></div>
          </h2>
          <button 
            onClick={() => navigate('/coming-soon')}
            className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-black font-poppins rounded-full px-8 py-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedComingSoon.map((product, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden relative transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img src={product.img} alt={product.name} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <button className="absolute top-4 right-4 bg-white/90 rounded-full p-2.5 hover:bg-gold-100 transition-all duration-300 transform hover:scale-110 shadow-md">
                  <HeartOutlined className="text-xl text-gold-500" />
                </button>
                <button className="absolute top-4 left-4 bg-white/90 rounded-full p-2.5 hover:bg-gold-100 transition-all duration-300 transform hover:scale-110 shadow-md">
                  <EyeOutlined className="text-xl text-gray-700" />
                </button>
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-gold-500 to-gold-400 text-white px-4 py-2 rounded-full text-sm font-poppins shadow-md">
                  {product.releaseDate}
                </div>
              </div>
              <div className="p-6 flex flex-col items-center">
                <span className="font-playfair text-xl font-semibold text-black mb-2 tracking-wide">{product.name}</span>
                <p className="text-gray-600 text-sm text-center mb-2 tracking-wide">{product.description}</p>
                <span className="font-poppins text-lg text-gold-700 font-bold mb-3">{product.price}</span>
                <div className="flex items-center mb-4">
                  {[...Array(product.rating)].map((_, i) => (
                    <StarFilled key={i} className="text-lg transform hover:scale-110 transition-transform duration-300" style={{ color: '#dcaa3c', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)' }} />
                  ))}
                  {[...Array(5 - product.rating)].map((_, i) => (
                    <StarFilled key={i} className="text-lg" style={{ color: '#d1d5db' }} />
                  ))}
                </div>
                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-poppins rounded-full py-3.5 mt-2 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
                  <ShoppingCartOutlined className="transform group-hover:rotate-12 transition-transform duration-300" /> 
                  Pre-order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
} 