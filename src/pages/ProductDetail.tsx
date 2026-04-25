import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ShieldCheck, Truck, RefreshCcw, Star, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        const found = data.find((p: Product) => p.id === id);
        if (found) {
          setProduct(found);
          setSelectedSize(found.sizes[0]);
        }
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center font-black tracking-widest uppercase">Loading...</div>;
  if (!product) return <div className="h-screen flex items-center justify-center">Product not found.</div>;

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart(product, selectedSize, quantity);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-8">
          <Link to="/" className="hover:text-black">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-black">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative group">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  src={product.images[activeImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              {product.isNew && (
                <span className="absolute top-6 left-6 bg-black text-white text-xs font-black px-4 py-1.5 uppercase tracking-widest shadow-xl">New Arrival</span>
              )}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "aspect-square bg-gray-100 transition-all border-2",
                    activeImage === idx ? "border-black" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-2 block">{product.category}</span>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-6">
                 <p className="text-3xl font-black">{product.price.toLocaleString()} SDG</p>
                 <div className="flex items-center text-yellow-500">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    <span className="ml-2 text-xs font-bold text-gray-500">(12 Reviews)</span>
                 </div>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium mb-8 max-w-xl">
                {product.description}
              </p>
            </div>

            {/* Selectors */}
            <div className="space-y-8 mb-10">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-black uppercase tracking-widest">Select Size</h3>
                  <button className="text-[10px] font-black uppercase tracking-widest border-b border-black pb-0.5">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "w-14 h-14 border text-xs font-black uppercase tracking-widest transition-all active:scale-95",
                        selectedSize === size ? "bg-black text-white border-black" : "border-gray-200 text-gray-400 hover:border-black hover:text-black"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-black uppercase tracking-widest mb-4">Quantity</h3>
                <div className="inline-flex items-center border border-gray-200">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-4 hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-black text-sm">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-4 hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white py-5 px-10 text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center space-x-3 active:scale-[0.98] transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>
              <button className="px-10 py-5 border border-black text-xs font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">
                Wishlist
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
              <div className="flex items-start space-x-3">
                <Truck className="w-5 h-5 text-gray-400" />
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest mb-1">Fast Shipping</h4>
                  <p className="text-[10px] text-gray-500 font-medium leading-tight">Delivery within 24-48 hours across Sudan.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <RefreshCcw className="w-5 h-5 text-gray-400" />
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest mb-1">Easy Returns</h4>
                  <p className="text-[10px] text-gray-500 font-medium leading-tight">14-day hassle-free return policy.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-gray-400" />
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest mb-1">Secure Payment</h4>
                  <p className="text-[10px] text-gray-500 font-medium leading-tight">M-Pesa, Card, and Cash on Delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
