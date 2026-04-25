import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop All', path: '/shop' },
    { name: 'T-shirts', path: '/shop?category=T-shirts' },
    { name: 'Hoodies', path: '/shop?category=Hoodies' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-black"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-xs uppercase tracking-[0.2em] font-medium hover:opacity-100 opacity-60 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-2xl font-black tracking-[0.3em] font-sans">M. KALU</h1>
        </Link>

        {/* Actions */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="p-2 opacity-60 hover:opacity-100 transition-opacity hidden md:block">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/account" className="p-2 opacity-60 hover:opacity-100 transition-opacity hidden md:block">
            <User className="w-5 h-5" />
          </Link>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 relative group"
          >
            <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {itemCount > 0 && (
              <span className="absolute top-1 right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white z-[70] p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-xl font-black tracking-widest">M. KALU</h2>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col space-y-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-bold tracking-widest uppercase hover:text-gray-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-8 border-t border-gray-100">
                  <Link 
                    to="/account" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 text-gray-600 mb-6"
                  >
                    <User className="w-5 h-5" />
                    <span className="font-medium">My Account</span>
                  </Link>
                  <Link 
                    to="/contact" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 text-gray-600"
                  >
                    <Search className="w-5 h-5" />
                    <span className="font-medium">Support</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
