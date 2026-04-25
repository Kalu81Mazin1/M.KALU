import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[110] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="w-5 h-5" />
                <h2 className="text-lg font-bold uppercase tracking-widest">Your Cart</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Your cart is empty</h3>
                    <p className="text-gray-500 text-sm">Looks like you haven't added anything yet.</p>
                  </div>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}`} className="flex space-x-4">
                      <Link 
                        to={`/product/${item.id}`} 
                        onClick={() => setIsCartOpen(false)}
                        className="w-24 h-32 bg-gray-100 flex-shrink-0"
                      >
                        <img 
                          src={item.images[0]} 
                          alt={item.name} 
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </Link>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between mb-1">
                          <Link 
                            to={`/product/${item.id}`}
                            onClick={() => setIsCartOpen(false)}
                            className="font-bold text-sm hover:underline"
                          >
                            {item.name}
                          </Link>
                          <button 
                            onClick={() => removeFromCart(item.id, item.selectedSize)}
                            className="text-gray-400 hover:text-black transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mb-4">{item.selectedSize}</p>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center border border-gray-200">
                            <button 
                              onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                              className="px-2 py-1 text-sm hover:bg-gray-50"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 text-xs font-bold">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                              className="px-2 py-1 text-sm hover:bg-gray-50"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-bold text-sm">{item.price.toLocaleString()} SDG</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Subtotal</span>
                  <span className="text-xl font-black">{cartTotal.toLocaleString()} SDG</span>
                </div>
                <Link 
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-black text-white p-5 flex items-center justify-center space-x-3 group active:scale-[0.98] transition-transform"
                >
                  <span className="text-xs font-black uppercase tracking-widest">Checkout Now</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex items-center justify-center space-x-2 text-[10px] text-gray-400 uppercase tracking-tighter">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span>Secure Checkout & Fast Delivery</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
