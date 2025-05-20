import { useNavigate } from 'react-router-dom';

export default function PromoBanner() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-rose-50 to-pink-50 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-50 to-pink-50 rounded-full translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="text-center md:text-left max-w-2xl">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Special Offer
              </h2>
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <span className="font-playfair text-6xl md:text-7xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">20%</span>
                <div className="text-gray-800">
                  <p className="text-2xl font-bold">OFF</p>
                  <p className="text-lg opacity-90">Limited Time</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-8 font-poppins">
                Enjoy an exclusive 20% discount on our entire collection. Don't miss out on this amazing opportunity to refresh your wardrobe!
              </p>
              <button 
                onClick={() => navigate('/shop')}
                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600 font-poppins rounded-full px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Shop Now
              </button>
            </div>

            {/* Promo Code */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 text-center border border-rose-100">
              <p className="text-gray-800 font-poppins mb-4">Use Code</p>
              <div className="bg-white rounded-xl p-4 mb-4 shadow-lg border border-rose-100">
                <p className="font-mono text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">POSH20</p>
              </div>
              <p className="text-gray-600 text-sm font-poppins">
                Valid until December 31, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 