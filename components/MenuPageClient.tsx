'use client'

import { useState } from 'react';
import { ChevronRight, Leaf, Star, Search } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tags?: string[];
}

const menuItems: { [category: string]: MenuItem[] } = {
  starters: [
    { name: 'Paneer Tikka', description: 'Grilled cottage cheese cubes marinated in spiced yogurt', price: '₹250', tags: ['Vegetarian', 'Chef’s Special'] },
    { name: 'Vegetable Samosa', description: 'Crispy pastry filled with spiced potatoes and peas', price: '₹150', tags: ['Vegetarian'] },
    { name: 'Hara Bhara Kebab', description: 'Pan-fried patties of spinach, peas, and potatoes', price: '₹180', tags: ['Vegetarian'] },
  ],
  mainCourses: [
    { name: 'Dal Makhani', description: 'Creamy black lentils slow-cooked with spices', price: '₹350', tags: ['Vegetarian'] },
    { name: 'Shahi Paneer', description: 'Cottage cheese in a rich, creamy tomato-based gravy', price: '₹380', tags: ['Vegetarian'] },
    { name: 'Malai Kofta', description: 'Vegetable and paneer dumplings in a creamy cashew nut gravy', price: '₹400', tags: ['Vegetarian'] },
    { name: 'Kadai Chicken', description: 'Spicy chicken curry with bell peppers and onions', price: '₹450', tags: ['Chef’s Special'] },
  ],
  desserts: [
    { name: 'Gulab Jamun', description: 'Soft, spongy balls made of milk solids, soaked in sugar syrup', price: '₹120' },
    { name: 'Ras Malai', description: 'Cottage cheese dumplings soaked in sweetened, thickened milk', price: '₹150' },
    { name: 'Gajar Ka Halwa', description: 'A sweet pudding made from grated carrots, milk, and sugar', price: '₹130' },
  ],
};

export default function MenuPageClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const filteredMenuItems = Object.entries(menuItems).reduce((acc, [category, items]) => {
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredItems.length > 0) {
      acc[category] = filteredItems;
    }
    return acc;
  }, {} as { [category: string]: MenuItem[] });

  return (
    <div className="bg-repeat font-sans text-restaurant-heritage-earth" style={{ backgroundImage: "url('/Images/background.png')" }}>
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Images/food/pick-me-up_starter.jpg')" }}>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white p-4 md:p-8">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-amber-50 animate-fade-in">Discover Our Menu</h1>
            <p className="mt-2 md:mt-4 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A culinary journey through authentic flavors, crafted with passion.
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="mb-12 flex justify-end">
          <div className="relative">
            {isSearchVisible ? (
              <div className="relative"> 
                <input
                  type="text"
                  placeholder="Search for your favorite dish..."
                  className="w-full p-4 pl-12 text-lg border-2 border-amber-400 rounded-full bg-white/90 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onBlur={() => setIsSearchVisible(false)}
                  autoFocus
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-amber-500" />
              </div>
            ) : (
              <button 
                onClick={() => setIsSearchVisible(true)} 
                className="flex items-center p-2 rounded-full hover:bg-amber-100"
              >
                <Search className="w-8 h-8 text-amber-500" />
                <span className="ml-2 text-lg text-amber-500">Search</span>
              </button>
            )}
          </div>
        </div>

        {Object.entries(filteredMenuItems).map(([category, items]) => (
          <section key={category} className="mb-16 last:mb-0 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-8 text-emerald-800 border-b-2 border-amber-400 pb-3 flex items-center">
              <ChevronRight className="w-8 h-8 mr-2 text-amber-500" />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-amber-100/50 p-6 transform hover:scale-105 transition-transform duration-300 flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-playfair font-bold text-stone-800">{item.name}</h3>
                    <p className="text-gray-600 mt-2 mb-4">{item.description}</p>
                    {item.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map(tag => (
                          <span key={tag} className={`px-3 py-1 text-xs rounded-full flex items-center ${tag === 'Vegetarian' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                            {tag === 'Vegetarian' ? <Leaf size={12} className="mr-1.5" /> : <Star size={12} className="mr-1.5" />}
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-2xl font-bold mt-auto text-amber-700 self-end">{item.price}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
