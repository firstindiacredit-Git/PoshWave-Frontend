import { StarFilled } from '@ant-design/icons';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fashion Blogger",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    text: "PoshWave has transformed my wardrobe! The quality and style of their pieces are unmatched. I'm constantly receiving compliments on my outfits.",
    rating: 5
  },
  {
    name: "Emily Chen",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    text: "The customer service is exceptional, and the clothes are even better than the photos. I've been a loyal customer for over a year now!",
    rating: 5
  },
  {
    name: "Maria Rodriguez",
    role: "Fashion Enthusiast",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    text: "I love how PoshWave combines classic elegance with modern trends. Their pieces are versatile and perfect for any occasion.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-12 text-center text-black relative">
        What Our Customers Say
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold-500 rounded-full"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-playfair text-xl font-semibold text-black">{testimonial.name}</h3>
                <p className="text-gray-600 font-poppins">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <StarFilled key={i} className="text-gold-400 text-lg" />
              ))}
            </div>
            <p className="text-gray-700 font-poppins italic">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
} 