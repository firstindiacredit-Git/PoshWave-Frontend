import { FacebookOutlined, InstagramOutlined, TwitterOutlined, MailOutlined } from '@ant-design/icons';

const footerLinks = {
  shop: ['New Arrivals', 'Best Sellers', 'Dresses', 'Tops', 'Bottoms', 'Accessories'],
  company: ['About Us', 'Careers', 'Store Locator', 'Our Blog', 'Reviews'],
  help: ['Customer Service', 'Track Order', 'Shipping & Returns', 'Size Guide', 'Contact Us'],
  legal: ['Terms & Conditions', 'Privacy Policy', 'Shipping Policy', 'Return Policy']
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="font-playfair text-3xl font-bold mb-4">PoshWave</h2>
            <p className="text-gray-400 mb-6 font-poppins">
              Discover the perfect blend of elegance and contemporary fashion. Your style, elevated.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <FacebookOutlined className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <InstagramOutlined className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <TwitterOutlined className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-playfair text-lg font-semibold mb-4 capitalize">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors font-poppins">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-playfair text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-6 font-poppins">
              Stay updated with our latest collections and exclusive offers.
            </p>
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <MailOutlined className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 text-white rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-gold-400"
                />
              </div>
              <button className="bg-gold-500 hover:bg-gold-600 text-white font-poppins rounded-full px-6 py-3 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 font-poppins">
          <p>&copy; {new Date().getFullYear()} PoshWave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 