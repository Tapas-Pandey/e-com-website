export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  benefits: string[];
  ingredients: string[];
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Royal Saffron Face Oil",
    description: "Luxurious face oil infused with pure Rajasthani saffron and almond oil for radiant skin. This traditional formula has been used by Rajasthani royalty for centuries.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Skincare",
    featured: true,
    benefits: ["Brightens complexion", "Reduces dark spots", "Hydrates deeply", "Improves skin texture"],
    ingredients: ["Saffron extract", "Sweet almond oil", "Sandalwood oil", "Rose essential oil", "Vitamin E"],
    stock: 25
  },
  {
    id: 2,
    name: "Desert Bloom Hair Oil",
    description: "Traditional Rajasthani hair oil blend with amla, bhringraj and jasmine to nourish scalp and promote hair growth. Made using ancient royal recipes.",
    price: 899,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Hair Care",
    featured: true,
    benefits: ["Prevents hair fall", "Promotes growth", "Adds shine", "Soothes scalp"],
    ingredients: ["Amla extract", "Bhringraj", "Jasmine oil", "Coconut oil", "Sesame oil"],
    stock: 30
  },
  {
    id: 3,
    name: "Tulsi-Neem Purifying Face Wash",
    description: "Gentle yet effective face cleanser combining the purifying properties of tulsi and neem. Perfect for oily and acne-prone skin types.",
    price: 549,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Skincare",
    featured: false,
    benefits: ["Controls excess oil", "Prevents acne", "Removes impurities", "Soothes inflammation"],
    ingredients: ["Tulsi extract", "Neem extract", "Aloe vera", "Glycerin", "Rose water"],
    stock: 45
  },
  {
    id: 4,
    name: "Kesar-Haldi Ubtan",
    description: "Traditional Rajasthani face and body scrub made with saffron, turmeric, and gram flour. Reveals glowing skin and improves complexion with regular use.",
    price: 699,
    image: "https://images.unsplash.com/photo-1608248544299-a7c5df2c7b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Skincare",
    featured: true,
    benefits: ["Exfoliates gently", "Brightens skin", "Removes tan", "Improves texture"],
    ingredients: ["Gram flour", "Turmeric", "Saffron", "Sandalwood powder", "Rose petals"],
    stock: 20
  },
  {
    id: 5,
    name: "Ashwagandha Wellness Tablets",
    description: "Pure herbal supplement made from premium Rajasthani ashwagandha to boost immunity, reduce stress and improve overall wellbeing.",
    price: 799,
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Wellness",
    featured: false,
    benefits: ["Reduces stress", "Boosts immunity", "Improves sleep", "Enhances vitality"],
    ingredients: ["Ashwagandha root extract", "Black pepper extract"],
    stock: 50
  },
  {
    id: 6,
    name: "Rose-Saffron Gulkand",
    description: "Delicious and nutritious rose petal preserve with saffron. A traditional Rajasthani delicacy that aids digestion and cools the body.",
    price: 449,
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Food",
    featured: false,
    benefits: ["Aids digestion", "Cools body", "Relieves stress", "Natural sweetener"],
    ingredients: ["Rose petals", "Sugar", "Saffron", "Cardamom"],
    stock: 35
  },
  {
    id: 7,
    name: "Aloe-Kumkumadi Moisturizer",
    description: "Lightweight yet deeply nourishing moisturizer combining the hydrating properties of aloe vera with the brightening effects of kumkumadi oil.",
    price: 899,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Skincare",
    featured: false,
    benefits: ["Hydrates deeply", "Brightens complexion", "Non-greasy", "Suitable for all skin types"],
    ingredients: ["Aloe vera gel", "Kumkumadi oil", "Shea butter", "Vitamin E", "Rose water"],
    stock: 40
  },
  {
    id: 8,
    name: "Triphala Digestive Wellness",
    description: "Traditional Ayurvedic formula for digestive health made from three fruits: amla, bibhitaki, and haritaki. Supports gut health and detoxification.",
    price: 599,
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Wellness",
    featured: false,
    benefits: ["Improves digestion", "Detoxifies body", "Regulates bowel movements", "Boosts metabolism"],
    ingredients: ["Amla", "Bibhitaki", "Haritaki"],
    stock: 55
  }
];

export const categories = [
  "All",
  "Skincare",
  "Hair Care",
  "Wellness",
  "Food"
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All") return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};