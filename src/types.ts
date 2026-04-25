export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'T-shirts' | 'Hoodies' | 'Shirts' | 'Trousers' | 'Accessories';
  description: string;
  images: string[];
  sizes: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  stockCount: number;
}

export interface CartItem extends Product {
  selectedSize: string;
  quantity: number;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}
