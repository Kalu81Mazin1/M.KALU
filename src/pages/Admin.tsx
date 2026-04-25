import { useState, useEffect } from 'react';
import { Product } from '../types';
import { Plus, Edit3, Trash2, Save, X, RefreshCw } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Admin() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      fetchProducts();
    }
  }, [isAuthenticated]);

  const fetchProducts = () => {
    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts);
  };

  const handleSave = async (updatedProducts: Product[]) => {
    setIsSaving(true);
    try {
      await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProducts)
      });
      setProducts(updatedProducts);
      setIsEditing(null);
    } catch (error) {
      alert('Failed to save');
    }
    setIsSaving(false);
  };

  const handleUpdatePrice = (id: string, newPrice: number) => {
    const updated = products.map(p => p.id === id ? { ...p, price: newPrice } : p);
    handleSave(updated);
  };

  const handleToggleBestSeller = (id: string) => {
    const updated = products.map(p => p.id === id ? { ...p, isBestSeller: !p.isBestSeller } : p);
    handleSave(updated);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-40 flex items-center justify-center p-4 bg-gray-50">
        <div className="max-w-md w-full bg-white p-10 border border-gray-100 shadow-xl">
          <h1 className="text-2xl font-black uppercase tracking-widest mb-8 text-center">Owner Access</h1>
          <form onSubmit={(e) => { e.preventDefault(); if(password === 'mkalu2024') setIsAuthenticated(true); else alert('Wrong password'); }}>
             <div className="space-y-4">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full border border-gray-200 px-5 py-4 font-bold focus:outline-none focus:border-black"
                />
                <button 
                  type="submit"
                  className="w-full bg-black text-white font-black uppercase tracking-widest py-4 text-xs"
                >
                  Enter Dashboard
                </button>
             </div>
             <p className="mt-6 text-[10px] text-gray-400 text-center uppercase tracking-widest font-bold">Hint: mkalu2024</p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tighter mb-2">Inventory Management</h1>
            <p className="text-xs text-gray-500 font-bold tracking-widest">Update your prices and stock levels instantly.</p>
          </div>
          <button 
             onClick={fetchProducts}
             className="mt-4 md:mt-0 flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest bg-white border border-gray-200 px-6 py-3 hover:border-black transition-all"
          >
            <RefreshCw className={cn("w-3 h-3", isSaving && "animate-spin")} />
            <span>Sync Live</span>
          </button>
        </div>

        <div className="bg-white border border-gray-100 shadow-sm overflow-x-auto overflow-y-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                <th className="px-8 py-6">Product</th>
                <th className="px-8 py-6 text-right">Price (SDG)</th>
                <th className="px-8 py-6 text-right">Stock</th>
                <th className="px-8 py-6 text-center">Featured</th>
                <th className="px-8 py-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {products.map((p) => (
                <tr key={p.id} className="group hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-16 bg-gray-100 shrink-0">
                        <img src={p.images[0]} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-black uppercase tracking-tight">{p.name}</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{p.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    {isEditing === p.id ? (
                      <input 
                        type="number"
                        defaultValue={p.price}
                        onBlur={(e) => handleUpdatePrice(p.id, parseInt(e.target.value))}
                        className="w-24 border border-black px-2 py-1 text-right font-black"
                        autoFocus
                      />
                    ) : (
                      <span className="font-black text-lg">{p.price.toLocaleString()}</span>
                    )}
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className={cn(
                      "text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full",
                      p.stockCount < 5 ? "bg-red-50 text-red-500" : "bg-green-50 text-green-600"
                    )}>
                      {p.stockCount} in stock
                    </span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <button 
                      onClick={() => handleToggleBestSeller(p.id)}
                      className={cn(
                        "text-[10px] font-black uppercase tracking-widest px-4 py-1.5 border transition-all",
                        p.isBestSeller ? "bg-yellow-500 text-white border-yellow-500" : "border-gray-200 text-gray-300 hover:border-black hover:text-black"
                      )}
                    >
                      {p.isBestSeller ? 'Best Seller' : 'Promote'}
                    </button>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button 
                      onClick={() => setIsEditing(p.id === isEditing ? null : p.id)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-black"
                    >
                      <Edit3 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-6 bg-black text-white flex items-center justify-between">
           <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em]">All changes are saved to products.json instantly.</p>
           </div>
           <button className="text-[10px] font-black uppercase tracking-[0.2em] underline">Manual Backup</button>
        </div>
      </div>
    </div>
  );
}
