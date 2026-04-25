import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { Product } from '../types';

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const categories = ['T-shirts', 'Hoodies', 'Shirts', 'Trousers', 'Accessories'];

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        if (categoryFilter) {
          setFilteredProducts(data.filter((p: Product) => p.category === categoryFilter));
        } else {
          setFilteredProducts(data);
        }
      });
  }, [categoryFilter]);

  return (
    <div className="pt-24 min-h-screen pb-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-6 md:space-y-0 text-center md:text-left">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-2 uppercase">
              {categoryFilter ? categoryFilter : 'All Products'}
            </h1>
            <p className="text-xs text-gray-500 font-bold tracking-widest uppercase">{filteredProducts.length} Results</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest border border-gray-200 px-5 py-3 hover:border-black transition-colors">
                <span>Filter By</span>
                <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                 <button 
                  onClick={() => setSearchParams({})}
                  className="w-full text-left px-5 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 border-b border-gray-50"
                >
                  All Categories
                </button>
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSearchParams({ category: cat })}
                    className="w-full text-left px-5 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 border-b border-gray-50 last:border-0"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <button className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest border border-gray-200 px-5 py-3 hover:border-black transition-colors md:hidden">
              <SlidersHorizontal className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Categories Bar (Desktop) */}
        <div className="hidden md:flex flex-wrap gap-3 mb-12">
          <button 
            onClick={() => setSearchParams({})}
            className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${!categoryFilter ? 'bg-black text-white' : 'bg-gray-100 text-gray-400 hover:text-black'}`}
          >
            All Products
          </button>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setSearchParams({ category: cat })}
              className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${categoryFilter === cat ? 'bg-black text-white' : 'bg-gray-100 text-gray-400 hover:text-black'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 md:gap-x-8">
          {filteredProducts.map((product) => (
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
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                   <button className="w-full bg-white text-black py-3 text-[10px] font-black uppercase tracking-wider shadow-lg active:scale-95 transition-transform">Quick View</button>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{product.category}</p>
                <h3 className="text-sm font-bold uppercase tracking-tight">{product.name}</h3>
                <p className="text-lg font-black">{product.price.toLocaleString()} SDG</p>
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-40 text-center">
            <h3 className="text-2xl font-black mb-4">NO PRODUCTS FOUND.</h3>
            <button 
              onClick={() => setSearchParams({})}
              className="text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
