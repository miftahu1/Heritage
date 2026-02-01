import {
  Accessibility,
  Coffee,
  UtensilsCrossed,
  Trees,
  ShieldCheck,
  Heart,
} from 'lucide-react';
import type { FC, ElementType } from 'react';

const highlightsData = [
  {
    icon: Accessibility,
    title: 'Fully Accessible',
    description: 'Wheelchair-friendly parking, entrance, seating, and restrooms.',
  },
  {
    icon: Coffee,
    title: 'Premium Coffee & Tea',
    description: 'Artisanal coffee and wide selection of fine teas.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Diverse Menu',
    description: 'Vegetarian, vegan, organic dishes & all-you-can-eat options.',
  },
  {
    icon: Trees,
    title: 'Lakeside Serenity',
    description: 'Peaceful outdoor seating with scenic lake views.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety First',
    description: 'Contactless delivery and hygienic dining protocols.',
  },
  {
    icon: Heart,
    title: 'Inclusive Environment',
    description: 'Family, LGBTQ+, and pet-friendly in our outdoor areas.',
  },
];

const statsData = [
    { value: '4.7★', label: 'Google Rating' },
    { value: '6K+', label: 'Reviews' },
    { value: '24/7', label: 'Free Parking Available' },
];

interface HighlightCardProps {
  icon: ElementType;
  title: string;
  description: string;
}

const HighlightCard: FC<HighlightCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
      <Icon className="text-emerald-700" size={28} />
    </div>
    <h3 className="font-playfair text-2xl text-emerald-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StatItem: FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold mb-2">{value}</div>
      <p className="text-emerald-200 text-sm md:text-base">{label}</p>
    </div>
);

const StatsBar = () => (
    <div className="mt-16 bg-gradient-to-r from-emerald-800 to-emerald-900 rounded-3xl p-8 md:p-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
    </div>
);

export default function Highlights() {
  return (
    <section className="py-16 md:py-24 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="highlights-heading" className="font-playfair text-4xl md:text-5xl text-emerald-900 mb-4">
            The Heritage Jaysagar Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Where every detail is crafted to provide a memorable dining experience in the serene surroundings of Joysagar Lake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightsData.map((highlight) => (
            <HighlightCard key={highlight.title} {...highlight} />
          ))}
        </div>

        <StatsBar />

      </div>
    </section>
  )
}
