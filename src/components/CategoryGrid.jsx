import { ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

// Import images
import img1 from '../assets/1-1.png';
import img2 from '../assets/MG_3257-scaled.jpg';

const featuredCategories = [
  {
    title: "Trending Now",
    description: "Discover our most popular styles that are flying off the shelves",
    img: img1,
    link: "/shop?category=trending",
    buttonText: "Shop Trending",
    overlayColor: "bg-black/40"
  },
  {
    title: "Coming Soon",
    description: "Get a sneak peek at our upcoming collection",
    img: img2,
    link: "/shop?category=coming-soon",
    buttonText: "View Preview",
    overlayColor: "bg-gold-500/40"
  }
];

export default function CategoryGrid() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-12 text-center text-black relative">
        Featured Categories
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold-500 rounded-full"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredCategories.map((category, idx) => (
          <div
            key={idx}
            className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => navigate(category.link)}
          >
            <img 
              src={category.img} 
              alt={category.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className={`absolute inset-0 ${category.overlayColor} transition-opacity duration-300 group-hover:opacity-70`} />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
                {category.title}
              </h3>
              <p className="text-white/90 font-poppins text-lg mb-6 max-w-md">
                {category.description}
              </p>
              <button className="inline-flex items-center gap-2 bg-white text-black font-poppins rounded-full px-6 py-3 transition-all duration-300 transform group-hover:scale-105 group-hover:bg-gold-500 group-hover:text-pink-600">
                {category.buttonText}
                <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 