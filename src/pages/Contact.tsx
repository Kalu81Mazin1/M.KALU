import { Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-4 block">Get in Touch</span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Support & Inquiries.</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest mb-2">Email Us</h3>
                    <p className="text-gray-500 font-bold">santiagomazen81@gmail.com</p>
                    <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">Expected response: 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest mb-2">Call Us</h3>
                    <p className="text-gray-500 font-bold">+249 924812110</p>
                    <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">Sat - Thu: 9 AM - 6 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest mb-2">Visit Us</h3>
                    <p className="text-gray-500 font-bold">Khartoum, Sudan</p>
                    <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">Main Showroom</p>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-gray-100 italic font-medium text-gray-400">
                "We are here to ensure your experience with M. KALU is as flawless as our style."
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 p-8 md:p-12">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Your Name</label>
                  <input type="text" className="w-full bg-white border border-transparent px-5 py-4 focus:outline-none focus:border-black transition-colors" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                  <input type="email" className="w-full bg-white border border-transparent px-5 py-4 focus:outline-none focus:border-black transition-colors" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Message</label>
                  <textarea rows={5} className="w-full bg-white border border-transparent px-5 py-4 focus:outline-none focus:border-black transition-colors resize-none" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full bg-black text-white py-5 text-xs font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
