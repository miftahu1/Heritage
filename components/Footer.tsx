'use client'

import { useState, useEffect, FC, FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    MapPin, Phone, Mail, Clock, Facebook, Instagram, ExternalLink,
    Accessibility, Car, Utensils, Users, Coffee, Leaf, Heart, ArrowUp
} from 'lucide-react';

// --- DATA ---
const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Full Menu', href: '/menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Reservations', href: '#reservations' },
];
const diningOptions = ['Breakfast', 'Brunch', 'Lunch', 'Dinner', 'Dessert', 'Catering'];
const amenities = [
    { icon: Accessibility, text: 'Wheelchair Accessible' },
    { icon: Car, text: 'Free Parking' },
    { icon: Utensils, text: 'Outdoor Seating' },
    { icon: Users, text: 'Family Friendly' },
    { icon: Coffee, text: 'Great Coffee' },
    { icon: Leaf, text: 'Vegetarian Options' },
];
const socialLinks = [
    { platform: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/JaysagarHeritageOfficial/', color: 'hover:bg-blue-600' },
    { platform: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/heritagejaysagar.official/', color: 'hover:bg-pink-600' },
    { platform: 'Swiggy', icon: ExternalLink, url: 'https://www.swiggy.com/city/sivasagar/heritage-jaysagar-joysagar-sivasagar-rest248458', color: 'hover:bg-orange-500' },
];

// --- REUSABLE COMPONENTS ---

const TopSection: FC = () => (
    <div className="border-b border-emerald-800">
        <div className="container mx-auto px-4 py-6 md:py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
                <div className="text-center md:text-left">
                    <h3 className="font-playfair text-2xl mb-1">Experience Heritage Dining</h3>
                    <p className="text-amber-100">Reserve your table for an unforgettable culinary journey.</p>
                </div>
                <a href="#reservations" className="bg-amber-500 text-emerald-900 px-8 py-3 rounded-full font-bold hover:bg-amber-400 transition-colors flex items-center gap-2 whitespace-nowrap">
                    <Phone size={20} />
                    <span>Reserve a Table</span>
                </a>
            </div>
        </div>
    </div>
);

const BrandAndAmenities: FC = () => (
    <div>
        <div className="flex items-center gap-3 mb-6">
            <Image src='/Images/logo.png' alt="Heritage Jaysagar Logo" width={48} height={48} className="rounded-full border-2 border-amber-300" />
            <div>
                <h2 className="font-playfair text-2xl text-white">Heritage Jaysagar</h2>
                <p className="text-sm text-amber-100">AUTHENTIC DINING SINCE 2010</p>
            </div>
        </div>
        <p className="text-amber-100 mb-6 text-sm">A serene lakeside destination offering authentic Assamese cuisine in a heritage-inspired setting. Where every meal is a celebration of tradition and taste.</p>
        <div className="space-y-3">
            {amenities.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                    <Icon className="text-amber-400" size={18} />
                    <span className="text-sm text-amber-100">{text}</span>
                </div>
            ))}
        </div>
    </div>
);

const LinksAndOptions: FC = () => (
    <div>
        <h3 className="font-playfair text-xl text-white mb-6 pb-3 border-b border-emerald-800">Quick Links</h3>
        <ul className="space-y-3">
            {quickLinks.map(({ name, href }) => (
                <li key={name}>
                    <Link href={href} className="text-amber-100 hover:text-amber-300 transition-colors flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                        <span>{name}</span>
                    </Link>
                </li>
            ))}
        </ul>
        <h4 className="font-playfair text-lg text-white mt-8 mb-4">Dining Options</h4>
        <div className="flex flex-wrap gap-2">
            {diningOptions.map((option) => <span key={option} className="px-3 py-1 bg-emerald-800 text-amber-100 rounded-full text-xs font-medium">{option}</span>)}
        </div>
    </div>
);

const ContactInfo: FC = () => (
    <div>
        <h3 className="font-playfair text-xl text-white mb-6 pb-3 border-b border-emerald-800">Contact Us</h3>
        <address className="space-y-4 not-italic text-sm">
            <div className="flex items-start gap-4">
                <MapPin className="text-amber-400 mt-1 flex-shrink-0" size={20} />
                <div>
                    <p className="font-bold text-white">Location</p>
                    <p className="text-amber-100">Joysagar–Nazira Road, Sivasagar, Assam 785665</p>
                    <a href="https://www.google.com/maps/place/Heritage+Jaysagar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-amber-300 hover:text-amber-400 mt-1">
                        View on Google Maps <ExternalLink size={14} className="ml-1" />
                    </a>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <Phone className="text-amber-400 mt-1" size={20} />
                <div><p className="font-bold text-white">Phone</p><a href="tel:+919864020240" className="text-amber-100 hover:text-amber-300">+91 98640 20240</a></div>
            </div>
            <div className="flex items-start gap-4">
                <Mail className="text-amber-400 mt-1" size={20} />
                <div><p className="font-bold text-white">Email</p><a href="mailto:info@heritagejaysagar.com" className="text-amber-100 hover:text-amber-300">info@heritagejaysagar.com</a></div>
            </div>
            <div className="flex items-start gap-4">
                <Clock className="text-amber-400 mt-1" size={20} />
                <div><p className="font-bold text-white">Hours</p><p className="text-amber-100">Mon - Sun: 8:00 AM - 11:00 PM</p></div>
            </div>
        </address>
    </div>
);

const NewsletterAndSocial: FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubscribe = (e: FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setStatus('submitting');
        setTimeout(() => {
            setStatus('success');
            setEmail('');
            setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
    };

    return (
        <div>
            <h3 className="font-playfair text-xl text-white mb-6 pb-3 border-b border-emerald-800">Stay Connected</h3>
            <div className="mb-8">
                <p className="text-amber-100 mb-4 text-sm">Subscribe to our newsletter for updates, special offers, and events.</p>
                <form onSubmit={handleSubscribe} className="space-y-2">
                    <div className="relative">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" className="w-full px-4 py-2.5 bg-emerald-800 border border-emerald-700 rounded-lg text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm" required />
                        <button type="submit" disabled={status !== 'idle'} className="absolute right-1.5 top-1.5 bg-amber-500 text-emerald-900 px-3 py-1 rounded-md hover:bg-amber-400 transition-colors text-sm font-bold disabled:bg-amber-300">Subscribe</button>
                    </div>
                    {status === 'success' && <p className="text-green-400 text-sm">Thank you for subscribing!</p>}
                </form>
            </div>
            <div>
                <p className="text-amber-100 mb-4 font-medium">Follow Us</p>
                <div className="flex space-x-3">
                    {socialLinks.map(({ platform, icon: Icon, url, color }) => (
                        <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${color}`} aria-label={`Follow us on ${platform}`}><Icon size={20} /></a>
                    ))}
                </div>
            </div>
        </div>
    );
};

const BottomBar: FC = () => (
    <div className="border-t border-emerald-800">
        <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-amber-200 text-xs md:text-sm text-center md:text-left">&copy; {new Date().getFullYear()} Heritage Jaysagar. All rights reserved.</p>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-amber-200">
                    {/* <Link href="/privacy" className="hover:text-amber-300 transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-amber-300 transition-colors">Terms of Service</Link> */}
                    <a href="https://miftadev.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">Developed by ~Mifta</a>
                </div>
            </div>
        </div>
    </div>
);

const BackToTopButton: FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <button onClick={scrollToTop} className={`fixed bottom-6 right-6 w-12 h-12 bg-amber-500 text-emerald-900 rounded-full flex-col items-center justify-center shadow-lg hover:bg-amber-400 transition-all duration-300 z-50 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} hidden md:flex`} aria-label="Back to top">
            <ArrowUp size={24} />
        </button>
    );
};


// --- MAIN COMPONENT ---
export default function Footer() {
    return (
        <footer className="bg-emerald-900 text-amber-50">
            <TopSection />
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <BrandAndAmenities />
                    <LinksAndOptions />
                    <ContactInfo />
                    <NewsletterAndSocial />
                </div>
            </div>
            <BottomBar />
            <BackToTopButton />
        </footer>
    );
}
