import { Product, Review } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Classic Heavyweight Tee",
    price: 45,
    category: "T-shirts",
    description: "Our signature heavyweight cotton tee. Boxy fit, dropped shoulders, and a premium feel that lasts. Made from 100% organic cotton (300 GSM).",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isBestSeller: true,
    stockCount: 12
  },
  {
    id: "p2",
    name: "Urban Oversized Hoodie",
    price: 85,
    category: "Hoodies",
    description: "The ultimate urban essential. Double-lined hood, kangaroo pocket, and a structured fit that holds its shape. Brushed fleece interior for maximum comfort.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513188732907-5f732b83dca8?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    stockCount: 5
  },
  {
    id: "p3",
    name: "Modern Linen Shirt",
    price: 65,
    category: "Shirts",
    description: "Breathable, premium linen-blend shirt for the modern minimalist. Perfect for summer evenings or layered over a white tee.",
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c717658?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["S", "M", "L", "XL"],
    stockCount: 8
  },
  {
    id: "p4",
    name: "Slim Fit Cargo Trousers",
    price: 95,
    category: "Trousers",
    description: "Versatile cargo trousers with a tailored touch. Multiple pockets without the bulk. Made from stretch-cotton twill.",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["30", "32", "34", "36"],
    isBestSeller: true,
    stockCount: 15
  },
  {
    id: "p5",
    name: "Minimalist Leather Belt",
    price: 35,
    category: "Accessories",
    description: "Genuine full-grain leather belt with a brushed silver buckle. A timeless piece for any outfit.",
    images: [
      "https://images.unsplash.com/photo-1554992251-184043b2776c?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["S", "M", "L"],
    stockCount: 20
  },
  {
    id: "p6",
    name: "Graphic Streetwear Tee",
    price: 40,
    category: "T-shirts",
    description: "Limited edition graphic print tee. Bold typography on our medium-weight cotton base.",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    stockCount: 3
  },
  {
    id: "p7",
    name: "Relaxed Fit Chinos",
    price: 75,
    category: "Trousers",
    description: "Comfort meets style. Our relaxed fit chinos are the perfect alternative to denim.",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa804b868cca?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["30", "32", "34", "36"],
    stockCount: 10
  },
  {
    id: "p8",
    name: "Essential Cap",
    price: 25,
    category: "Accessories",
    description: "Unstructured 6-panel cap with embroidered logo. Adjustable strap for a perfect fit.",
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["One Size"],
    isBestSeller: true,
    stockCount: 25
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    userName: "Marcus J.",
    rating: 5,
    comment: "The quality of the heavyweight tee is insane. Fits perfectly.",
    date: "2024-03-15"
  },
  {
    id: "r2",
    userName: "Andre K.",
    rating: 4,
    comment: "Hoodie is super warm and structured. Best I've found in this price range.",
    date: "2024-03-10"
  },
  {
    id: "r3",
    userName: "Leo T.",
    rating: 5,
    comment: "M. KALU never misses. Minimalist aesthetic on point.",
    date: "2024-03-05"
  }
];
