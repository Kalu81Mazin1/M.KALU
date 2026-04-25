import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase italic">BORN IN KHARTOUM.</h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium tracking-tight leading-relaxed">
              M. KALU was founded on a simple principle: to bring modern, high-quality, and minimalist fashion to the contemporary Sudanese man. 
              We believe that clothing is more than just fabric—it's a statement of confidence and identity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228ef2?auto=format&fit=crop&q=80&w=800" 
                alt="Process" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-8">
              <h2 className="text-3xl font-black tracking-tighter uppercase">THE CRAFT.</h2>
              <p className="text-gray-600 font-medium leading-relaxed">
                Every piece in our collection is carefully sourced and designed with focus on the perfect fit. 
                We use premium heavyweight cotton and sustainable blends that withstand the test of time and style.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                   <div className="w-1.5 h-1.5 bg-black rounded-full" />
                   <span className="text-xs font-black uppercase tracking-widest">Premium Quality Materials</span>
                </div>
                <div className="flex items-center space-x-4">
                   <div className="w-1.5 h-1.5 bg-black rounded-full" />
                   <span className="text-xs font-black uppercase tracking-widest">Ethically Manufactured</span>
                </div>
                <div className="flex items-center space-x-4">
                   <div className="w-1.5 h-1.5 bg-black rounded-full" />
                   <span className="text-xs font-black uppercase tracking-widest">Designed for Confidence</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black text-white p-12 md:p-20 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">"QUALITY IS NOT AN ACT, <br />IT IS A HABIT."</h2>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-[0.2em]">— The M. KALU Philosophy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
