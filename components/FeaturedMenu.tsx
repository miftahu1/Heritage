import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { FC } from 'react';

const featuredItemsData = [
  {
    category: 'Signature Dishes',
    items: [
      { name: 'Chicken Biryani', description: 'Aromatic basmati rice with tender chicken and spices', price: '₹450' },
      { name: 'Paneer Butter Masala', description: 'Cottage cheese in rich tomato-cream gravy', price: '₹380' },
      { name: 'Dal Makhani', description: 'Slow-cooked black lentils with butter and cream', price: '₹320' },
    ],
  },
  {
    category: 'Heritage Specials',
    items: [
      { name: 'Kasturi Paneer', description: 'Paneer infused with special herbs and spices', price: '₹420' },
      { name: 'Nizami Paneer', description: 'Royal Mughlai style paneer preparation', price: '₹410' },
      { name: 'Panchratna Dal', description: 'Five-lentil delicacy with traditional spices', price: '₹350' },
    ],
  },
  {
    category: 'Lakeside Favorites',
    items: [
      { name: 'Honey Chilli Paneer Dry', description: 'Crispy paneer with sweet-spicy glaze', price: '₹360' },
      { name: 'Chicken Momos', description: 'Steamed dumplings with chicken filling', price: '₹280' },
      { name: 'Veg Pakora', description: 'Seasonal vegetables in chickpea batter', price: '₹220' },
    ],
  },
];

const diningExperiencesData = [
  'Private Dining Rooms for intimate gatherings',
  'Lakeside Terrace with sunset views',
  'Family-friendly environment with kids menu',
  'Romantic evenings with candlelight dining',
  'Business lunches in our quiet zones',
  'Weekend brunch with live music',
];

const SectionHeader: FC<{ title: string; description: string; linkText: string; linkHref: string }> = ({ title, description, linkText, linkHref }) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
    <div>
      <h2 id="menu-heading" className="font-playfair text-4xl md:text-5xl text-emerald-900 mb-4">{title}</h2>
      <p className="text-gray-600 max-w-2xl text-base md:text-lg">{description}</p>
    </div>
    <Link href={linkHref} className="group flex items-center text-emerald-700 font-medium mt-4 md:mt-0 whitespace-nowrap">
      {linkText}
      <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
);

const MenuItem: FC<{ name: string; description: string; price: string }> = ({ name, description, price }) => (
  <div className="group hover:bg-white p-4 rounded-xl transition-colors">
    <div className="flex justify-between items-start mb-2">
      <h4 className="font-medium text-emerald-900 group-hover:text-emerald-700 pr-4">{name}</h4>
      <span className="font-playfair text-lg text-amber-600 whitespace-nowrap">{price}</span>
    </div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const MenuSection: FC<{ category: string; items: { name: string; description: string; price: string }[] }> = ({ category, items }) => (
  <div className="bg-amber-50 rounded-2xl p-6">
    <h3 className="font-playfair text-2xl text-emerald-800 mb-6 pb-4 border-b border-amber-200">{category}</h3>
    <div className="space-y-6">
      {items.map((item) => (
        <MenuItem key={item.name} {...item} />
      ))}
    </div>
  </div>
);

const DiningExperiences = () => (
    <div className="grid md:grid-cols-2 gap-8 items-center mt-16">
        <div>
            <h3 className="font-playfair text-3xl text-emerald-900 mb-6">Dining Experiences</h3>
            <ul className="space-y-4">
                {diningExperiencesData.map((experience) => (
                    <li key={experience} className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                        <span>{experience}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="relative h-80 rounded-2xl overflow-hidden">
            <Image
                src="/Images/ambience/dining-ambience.jpg"
                alt="Elegant and cozy dining ambience at Heritage Jaysagar with warm lighting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
    </div>
);


export default function FeaturedMenu() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Culinary Heritage"
          description="Each dish tells a story of tradition, crafted with locally sourced ingredients and served with the warmth of Assamese hospitality."
          linkText="View Full Menu"
          linkHref="/menu"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItemsData.map((section) => (
            <MenuSection key={section.category} {...section} />
          ))}
        </div>

        <DiningExperiences />
      </div>
    </section>
  )
}
