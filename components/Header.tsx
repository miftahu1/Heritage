'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, MapPin, Phone } from 'lucide-react'
import dynamic from 'next/dynamic'

const MobileMenu = dynamic(() => import('./MobileMenu'))

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Menu', href: '/menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#reservations' },
];

const NavItem = ({ item, onClick }: { item: typeof navItems[0], onClick: () => void }) => {
    const isInternalLink = item.href.startsWith('/');
    const commonClasses = "font-medium text-emerald-800 hover:text-emerald-600 transition-colors relative group py-2";

    const content = (
        <>
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
        </>
    )

    if (isInternalLink) {
        return (
            <Link href={item.href} className={commonClasses} onClick={onClick}>
                {content}
            </Link>
        )
    }

    return (
        <button onClick={onClick} className={commonClasses}>
            {content}
        </button>
    )
}

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.querySelector(sectionId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsMenuOpen(false);
    }

    const handleMobileLinkClick = (href: string) => {
        if (href.startsWith('/')) {
            setIsMenuOpen(false);
        } else {
            scrollToSection(href);
        }
    };


    const headerClasses = `sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'}`;

    return (
        <header className={headerClasses}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <Link href="/" className="flex items-center space-x-3">
                        <Image src='/Images/logo.png' alt="Heritage Jaysagar" width={48} height={48} className="rounded-full border border-black" />
                        <div>
                            <h1 className="font-playfair text-2xl font-bold text-emerald-900">Heritage Jaysagar</h1>
                            <p className="text-xs text-emerald-700 flex items-center">
                                <MapPin size={10} className="mr-1" />
                                Joysagar, Sivasagar, Assam
                            </p>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
                        {navItems.map((item) => (
                            <NavItem key={item.name} item={item} onClick={() => !item.href.startsWith('/') && scrollToSection(item.href)} />
                        ))}
                        <a
                            href="https://wa.me/919864020240"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-emerald-800 text-amber-50 px-5 py-2.5 rounded-full flex items-center space-x-2 hover:bg-emerald-700 transition-colors"
                        >
                            <Phone size={16} />
                            <span>WhatsApp Order</span>
                        </a>
                    </nav>

                    <button
                        className="md:hidden text-emerald-800"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {isMenuOpen && <MobileMenu onLinkClick={handleMobileLinkClick} />}
            </div>
        </header>
    )
}
