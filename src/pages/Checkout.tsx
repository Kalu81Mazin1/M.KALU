import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, CreditCard, Truck, ShieldCheck, ArrowLeft } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Checkout() {
  const { cart, cartTotal } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    phone: '',
    paymentMethod: 'cod'
  });

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-40 px-4 text-center">
        <h1 className="text-3xl font-black mb-6 uppercase tracking-tighter">Your cart is empty.</h1>
        <Link to="/shop" className="bg-black text-white px-8 py-4 text-xs font-black uppercase tracking-widest">Return to Shop</Link>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your order! In a real scenario, this would redirect to payment.");
    // In real app: send to server, then redirect
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50/50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Main Form */}
          <div className="flex-1 bg-white p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-4 mb-10 overflow-x-auto pb-4 scrollbar-hide">
              <button 
                onClick={() => setStep(1)}
                className={cn(
                  "text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap",
                  step === 1 ? "text-black border-b-2 border-black pb-1" : "text-gray-300"
                )}
              >
                01. Information
              </button>
              <ChevronRight className="w-3 h-3 text-gray-200 shrink-0" />
              <button 
                onClick={() => formData.email && setStep(2)}
                className={cn(
                  "text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap",
                  step === 2 ? "text-black border-b-2 border-black pb-1" : "text-gray-300"
                )}
              >
                02. Shipping
              </button>
              <ChevronRight className="w-3 h-3 text-gray-200 shrink-0" />
              <button 
                onClick={() => step === 3 && setStep(3)}
                className={cn(
                  "text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap",
                  step === 3 ? "text-black border-b-2 border-black pb-1" : "text-gray-300"
                )}
              >
                03. Payment
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-black uppercase tracking-widest mb-8">Contact Information</h2>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-200 px-5 py-4 focus:outline-none focus:border-black transition-colors"
                      placeholder="e.g. user@example.com"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">First Name</label>
                       <input 
                        required
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full border border-gray-200 px-5 py-4 focus:outline-none focus:border-black"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Last Name</label>
                       <input 
                        required
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full border border-gray-200 px-5 py-4 focus:outline-none focus:border-black"
                       />
                    </div>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-black text-white py-5 text-xs font-black uppercase tracking-widest hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    Continue to Shipping
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-xl font-black uppercase tracking-widest mb-8">Shipping Address</h2>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Address line</label>
                    <input 
                      required
                      type="text" 
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full border border-gray-200 px-5 py-4 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">City</label>
                      <input 
                        required
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full border border-gray-200 px-5 py-4 focus:outline-none focus:border-black"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full border border-gray-200 px-5 py-4 focus:outline-none focus:border-black"
                        placeholder="+249..."
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button 
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 border border-black text-black py-5 text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                    >
                      Back
                    </button>
                    <button 
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-1 bg-black text-white py-5 text-xs font-black uppercase tracking-widest hover:scale-[1.01] transition-all"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-xl font-black uppercase tracking-widest mb-8">Payment Method</h2>
                  <div className="space-y-4">
                    {[
                      { id: 'cod', label: 'Cash on Delivery (Sudan Only)', icon: <Truck className="w-5 h-5" /> },
                      { id: 'card', label: 'Credit / Debit Card', icon: <CreditCard className="w-5 h-5" /> },
                      { id: 'mpesa', label: 'Mobile Money', icon: <CreditCard className="w-5 h-5" /> }
                    ].map((method) => (
                      <label 
                        key={method.id}
                        className={cn(
                          "flex items-center justify-between p-6 border cursor-pointer transition-all",
                          formData.paymentMethod === method.id ? "border-black bg-gray-50" : "border-gray-100 hover:border-gray-300"
                        )}
                      >
                        <div className="flex items-center space-x-4">
                          <input 
                            type="radio" 
                            name="paymentMethod" 
                            value={method.id}
                            checked={formData.paymentMethod === method.id}
                            onChange={handleInputChange}
                            className="w-4 h-4 accent-black"
                          />
                          <div className="flex items-center space-x-3">
                            {method.icon}
                            <span className="text-xs font-black uppercase tracking-widest">{method.label}</span>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                     <button 
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 border border-black text-black py-5 text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                    >
                      Back
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 bg-black text-white py-5 text-xs font-black uppercase tracking-widest hover:scale-[1.01] transition-all shadow-xl"
                    >
                      Complete Purchase
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:w-[400px] shrink-0">
             <div className="bg-white p-8 shadow-sm border border-gray-100 sticky top-24">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-8 pb-4 border-b border-gray-100">Order Summary</h3>
                <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}`} className="flex space-x-4">
                      <div className="w-16 h-20 bg-gray-100 shrink-0">
                        <img src={item.images[0]} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h4 className="text-[10px] font-black uppercase tracking-tight">{item.name}</h4>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.selectedSize} · Qty {item.quantity}</p>
                        <p className="text-xs font-black mt-1">{(item.price * item.quantity).toLocaleString()} SDG</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex justify-between items-center text-xs font-medium text-gray-500">
                    <span>Subtotal</span>
                    <span>{cartTotal.toLocaleString()} SDG</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-medium text-gray-500">
                    <span>Shipping</span>
                    <span className="text-black font-black">FREE</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 text-lg font-black border-t border-gray-50">
                    <span>Total</span>
                    <span className="text-2xl">{cartTotal.toLocaleString()} SDG</span>
                  </div>
                </div>

                <div className="mt-10 space-y-4">
                  <div className="flex items-center space-x-3 text-[10px] text-gray-400 font-bold">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    <span>SECURE TRANSACTION</span>
                  </div>
                  <div className="flex items-center space-x-3 text-[10px] text-gray-400 font-bold">
                    <Truck className="w-4 h-4 text-black" />
                    <span>FAST DELIVERY GUARANTEED</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
