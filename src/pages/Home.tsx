import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, Star, ShieldCheck, Zap, Truck } from 'lucide-react';
import { Product } from '../types';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setFeaturedProducts(data.slice(0, 4)));
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488161628813-244aa2f8ce70?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero" 
            className="w-full h-full object-cover opacity-60 scale-110 animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-6 px-4 py-1 border border-white/20 rounded-full backdrop-blur-sm"
          >
            New Collection 2024
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
          >
            OWN YOUR <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">STYLE.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-12 font-medium tracking-tight max-w-xl mx-auto"
          >
            Premium, minimal, and modern essentials designed for the urban man. Excellence in every detail.
          </motion.p>
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.3 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/shop" 
              className="group bg-white text-black px-10 py-5 rounded-none font-black uppercase tracking-widest text-xs flex items-center space-x-3 active:scale-95 transition-all"
            >
              <span>Shop All Products</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/about" 
              className="text-xs uppercase tracking-widest font-black border-b-2 border-white/20 pb-1 hover:border-white transition-colors"
            >
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-40"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-white" />
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: <ShieldCheck className="w-6 h-6" />, title: 'Premium Quality', desc: 'Sourced from the best sustainable fabrics.' },
              { icon: <Zap className="w-6 h-6" />, title: 'Modern Fit', desc: 'Crafted for the contemporary urban lifestyle.' },
              { icon: <Truck className="w-6 h-6" />, title: 'Fast Delivery', desc: 'Express shipping across all major cities.' },
              { icon: <Star className="w-6 h-6" />, title: 'Top Rated', desc: 'Loved by thousands of style-conscious men.' }
            ].map((prop, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-sm">
                  {prop.icon}
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest">{prop.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Featured</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">BEST SELLERS.</h2>
            </div>
            <Link to="/shop" className="flex items-center space-x-3 text-xs font-black uppercase tracking-widest group">
              <span>View Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {featuredProducts.map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="group flex flex-col space-y-4"
              >
                <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-black text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest">New</span>
                  )}
                  {product.isBestSeller && (
                    <span className="absolute top-4 left-4 bg-gray-100 text-black text-[10px] font-black px-3 py-1 uppercase tracking-widest">Bestseller</span>
                  )}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold uppercase tracking-tight">{product.name}</h3>
                  <p className="text-lg font-black">{product.price.toLocaleString()} SDG</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">
          <Link to="/shop?category=T-shirts" className="relative group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-3xl font-black tracking-tighter mb-2">T-SHIRTS.</h3>
              <span className="text-[10px] uppercase font-black tracking-widest border-b border-white pb-1">Shop Now</span>
            </div>
          </Link>
          <div className="grid grid-rows-2 gap-4">
             <Link to="/shop?category=Hoodies" className="relative group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-black tracking-tighter mb-2">HOODIES.</h3>
                <span className="text-[10px] uppercase font-black tracking-widest border-b border-white pb-1">Explore</span>
              </div>
            </Link>
             <Link to="/shop?category=Accessories" className="relative group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554992251-184043b2776c?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-black tracking-tighter mb-2">ACCESSORIES.</h3>
                <span className="text-[10px] uppercase font-black tracking-widest border-b border-white pb-1">View All</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 uppercase">Join the drops.</h2>
          <p className="text-gray-400 mb-10 text-sm font-medium tracking-tight">Subscribe to get first access to limited releases and exclusive 15% off your first order.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-white/10 border border-white/10 px-6 py-4 text-sm font-medium focus:outline-none focus:border-white transition-colors"
            />
            <button className="bg-white text-black px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-gray-200 transition-colors">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
