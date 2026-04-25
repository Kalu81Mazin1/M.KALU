import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-widest">M. KALU</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Modern essentials for the urban man. Quality, minimalism, and confidence in every stitch.
            </p>
            <div className="flex space-x-5">
              <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-400" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-gray-400" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-400" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold mb-6">Shop</h3>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><Link to="/shop?category=T-shirts" className="hover:text-white transition-colors">T-shirts</Link></li>
              <li><Link to="/shop?category=Hoodies" className="hover:text-white transition-colors">Hoodies</Link></li>
              <li><Link to="/shop?category=Trousers" className="hover:text-white transition-colors">Trousers</Link></li>
              <li><Link to="/shop?category=Accessories" className="hover:text-white transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold mb-6">Support</h3>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Return Policy</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>santiagomazen81@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+249 924812110</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>Khartoum, Sudan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>© 2024 M. KALU. All rights reserved.</p>
          <div className="flex space-x-8">
            <span className="cursor-pointer hover:text-white">SDG - Sudanese Pound</span>
            <div className="flex items-center space-x-2">
              <span className="w-8 h-5 bg-gray-800 rounded-sm"></span>
              <span className="w-8 h-5 bg-gray-800 rounded-sm"></span>
              <span className="w-8 h-5 bg-gray-800 rounded-sm"></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
