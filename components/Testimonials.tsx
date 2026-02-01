'use client'

import { useState, useEffect, useCallback, FC } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

// --- DATA ---
const testimonialsData = [
  { id: 1, name: 'Priya Sharma', location: 'Delhi', rating: 5, comment: 'The lakeside view and exquisite Assamese cuisine made our anniversary unforgettable. The Paneer Butter Masala was divine!', date: '2 weeks ago', initials: 'PS' },
  { id: 2, name: 'Rajesh Kumar', location: 'Guwahati', rating: 5, comment: 'As a local, this is the best heritage dining in Assam. The Chicken Biryani is perfection.', date: '1 month ago', initials: 'RK' },
  { id: 3, name: 'Ananya Das', location: 'Kolkata', rating: 5, comment: 'Perfect for family gatherings. The kids loved the open space, and the staff went above and beyond.', date: '3 weeks ago', initials: 'AD' },
  { id: 4, name: 'Michael Chen', location: 'Singapore', rating: 4, comment: 'Found this gem! The ambience is serene, and the honey chilli paneer was incredible.', date: '2 months ago', initials: 'MC' },
  { id: 5, name: 'Sunita Patel', location: 'Mumbai', rating: 5, comment: 'The heritage feel is authentic, and the food quality is exceptional. Must try the Dal Makhani!', date: '1 week ago', initials: 'SP' },
  { id: 6, name: 'Amit Verma', location: 'Sivasagar', rating: 5, comment: 'Our go-to place for special occasions. The service is impeccable, and the lakeside seating is magical.', date: '3 days ago', initials: 'AV' }
];

const statsData = [
  { value: '4.7', label: 'Overall Rating', stars: 5 },
  { value: '6,000+', label: 'Google Reviews' },
  { value: '94%', label: 'Would Return' },
  { value: '4.9', label: 'Service Rating' },
];

const filterButtons = [ { label: 'All Reviews', filter: 'all' }, { label: '5-Star', filter: '5-star' }, { label: '4-Star & Above', filter: '4-star' } ];

// --- REUSABLE COMPONENTS ---
const SectionHeader: FC = () => (
    <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4"><Quote className="text-emerald-700" size={28} /></div>
        <h2 id="testimonials-heading" className="font-playfair text-4xl md:text-5xl text-emerald-900 mb-4">What Our Guests Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">Join thousands of satisfied guests who have experienced the Heritage Jaysagar difference.</p>
    </div>
);

const RatingFilter: FC<{ active: string; onFilter: (filter: string) => void }> = ({ active, onFilter }) => (
    <div className="flex flex-wrap justify-center gap-3 mt-8">
        {filterButtons.map(({ label, filter }) => (
            <button key={filter} onClick={() => onFilter(filter)} className={`px-5 py-2.5 rounded-full transition-all text-sm font-medium ${active === filter ? 'bg-emerald-800 text-white' : 'bg-white text-emerald-800 border border-emerald-200 hover:bg-emerald-50'}`}>
                {label}
            </button>
        ))}
    </div>
);

const StarRating: FC<{ rating: number; size?: number; className?: string }> = ({ rating, size = 16, className = '' }) => (
    <div className={`flex ${className}`}>{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={size} className={i < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'} />)}</div>
);

const StatsBar: FC = () => (
    <div className="bg-white rounded-2xl p-6 shadow-md mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map(({ value, label, stars }) => (
                <div key={label} className="text-center">
                    <div className="text-3xl font-bold text-emerald-900">{value}</div>
                    {stars && <StarRating rating={stars} className="justify-center my-1" />}
                    <p className="text-sm text-gray-600">{label}</p>
                </div>
            ))}
        </div>
    </div>
);

const TestimonialCard: FC<typeof testimonialsData[0]> = ({ name, location, rating, comment, date, initials }) => (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center font-medium text-emerald-900 text-lg`}>{initials}</div>
                <div>
                    <h4 className="font-medium text-emerald-900">{name}</h4>
                    <div className="flex items-center text-sm text-gray-500"><MapPin size={12} className="mr-1" />{location}</div>
                </div>
            </div>
            <StarRating rating={rating} />
        </div>
        <p className="text-gray-600 mb-4 italic flex-grow">"{comment}"</p>
        <div className="text-sm text-gray-400 mt-auto">{date}</div>
    </div>
);

const Carousel: FC<{ items: typeof testimonialsData; itemsPerSlide: number }> = ({ items, itemsPerSlide }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = Math.ceil(items.length / itemsPerSlide);

    const nextSlide = useCallback(() => setCurrentIndex((prev) => (prev + 1) % totalSlides), [totalSlides]);
    const prevSlide = useCallback(() => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides), [totalSlides]);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000); // Autoplay every 5 seconds
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className="relative">
            <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-amber-50 transition-colors" aria-label="Previous testimonial"><ChevronLeft className="text-emerald-700" /></button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-amber-50 transition-colors" aria-label="Next testimonial"><ChevronRight className="text-emerald-700" /></button>
            <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                        <div key={slideIndex} className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-1">
                            {items.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map(item => <TestimonialCard key={item.id} {...item} />)}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center space-x-2 mt-8">
                {Array.from({ length: totalSlides }).map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? 'bg-emerald-600 w-6' : 'bg-emerald-200'}`} aria-label={`Go to slide ${index + 1}`}></button>)}
            </div>
        </div>
    );
};

const GoogleReviewsCTA: FC = () => (
    <div className="mt-16 text-center">
        <p className="text-gray-600 mb-6">Read more reviews from our guests on Google</p>
        <a href="https://www.google.com/maps/place/Heritage+Jaysagar/@26.9552713,94.6225636,17z" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-3 bg-white border border-emerald-200 text-emerald-800 px-6 py-3 rounded-full hover:bg-emerald-50 transition-colors font-medium">
            <StarRating rating={5} size={18} />
            <span className="ml-1 font-bold">4.7</span>
            <span>View on Google Maps</span>
            <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
        </a>
    </div>
);

// --- MAIN COMPONENT ---
export default function Testimonials() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const filteredTestimonials = testimonialsData.filter(t => {
        if (activeFilter === 'all') return true;
        if (activeFilter === '5-star') return t.rating === 5;
        if (activeFilter === '4-star') return t.rating >= 4;
        return true;
    });

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50">
            <div className="container mx-auto px-4">
                <SectionHeader />
                <RatingFilter active={activeFilter} onFilter={setActiveFilter} />
                <StatsBar />
                <Carousel items={filteredTestimonials} itemsPerSlide={isMobile ? 1 : 2} />
                <GoogleReviewsCTA />
            </div>
        </section>
    )
}