//  import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Section component imports
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import CategoryGrid from './components/CategoryGrid'
import ProductGrid from './components/ProductGrid'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Shop from './pages/Shop'
import PromoBanner from './components/PromoBanner'
import ComingSoon from './pages/ComingSoon'
import ServiceSection from './components/ServiceSection'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-5"></div>
        
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="relative">
              {/* Hero Section - First Impression */}
              <HeroBanner />

              {/* Featured Categories - Quick Navigation */}
              <CategoryGrid />

              {/* Best Sellers - Main Products */}
              <ProductGrid />

              {/* Promotional Banner - Special Offers */}
              <PromoBanner />

              {/* Why Choose Us - Brand Value */}
              <WhyChooseUs />

              {/* Services - Additional Benefits */}
              <ServiceSection />

              {/* Testimonials - Social Proof */}
              <Testimonials />
            </main>
          } />
          <Route path="/shop" element={<Shop />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
