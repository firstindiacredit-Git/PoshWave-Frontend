import { HeartOutlined, EyeOutlined, ShoppingCartOutlined, StarFilled } from '@ant-design/icons';

// Import images
import img1 from '../assets/MG_3219-scaled.jpg';
import img2 from '../assets/MG_3460-scaled.jpg';
import img3 from '../assets/MG_3459-scaled.jpg';
import img4 from '../assets/MG_3430-scaled.jpg';
import img5 from '../assets/MG_3413.jpg';
import img6 from '../assets/MG_3384.jpg';
import img7 from '../assets/MG_3371.jpg';
import img8 from '../assets/MG_3355.jpg';
import img9 from '../assets/MG_3350.jpg';

const comingSoonProducts = [
  { 
    name: 'Summer Evening Gown', 
    price: '$299', 
    img: img1, 
    rating: 5, 
    releaseDate: 'June 2024',
    description: 'Elegant evening gown perfect for summer events'
  },
  { 
    name: 'Designer Cocktail Dress', 
    price: '$249', 
    img: img2, 
    rating: 5, 
    releaseDate: 'July 2024',
    description: 'Stunning cocktail dress for special occasions'
  },
  { 
    name: 'Luxury Evening Wear', 
    price: '$399', 
    img: img3, 
    rating: 5, 
    releaseDate: 'August 2024',
    description: 'Exclusive evening wear collection'
  },
  { 
    name: 'Premium Party Dress', 
    price: '$279', 
    img: img4, 
    rating: 4, 
    releaseDate: 'June 2024',
    description: 'Perfect for your next party'
  },
  { 
    name: 'Designer Collection', 
    price: '$349', 
    img: img5, 
    rating: 5, 
    releaseDate: 'July 2024',
    description: 'Limited edition designer pieces'
  },
  { 
    name: 'Exclusive Evening Dress', 
    price: '$459', 
    img: img6, 
    rating: 5, 
    releaseDate: 'August 2024',
    description: 'One-of-a-kind evening dress'
  },
  { 
    name: 'Luxury Party Wear', 
    price: '$329', 
    img: img7, 
    rating: 4, 
    releaseDate: 'June 2024',
    description: 'Make a statement at your next event'
  },
  { 
    name: 'Premium Collection', 
    price: '$379', 
    img: img8, 
    rating: 5, 
    releaseDate: 'July 2024',
    description: 'Premium quality fashion pieces'
  },
  { 
    name: 'Exclusive Designer Wear', 
    price: '$499', 
    img: img9, 
    rating: 5, 
    releaseDate: 'August 2024',
    description: 'Exclusive designer collection'
  },
];

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Coming Soon</h1>
          <p className="font-poppins text-xl">Get ready for our exclusive upcoming collection</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {comingSoonProducts.map((product, idx) => (
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
                <div className="absolute bottom-4 left-4 bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-poppins">
                  {product.releaseDate}
                </div>
              </div>
              <div className="p-6 flex flex-col items-center">
                <span className="font-playfair text-xl font-semibold text-black mb-2">{product.name}</span>
                <p className="text-gray-600 text-sm text-center mb-2">{product.description}</p>
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
                  Pre-order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 