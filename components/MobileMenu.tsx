'use client'

import Link from 'next/link'
import { Phone } from 'lucide-react'

interface NavItem {
    name: string;
    href: string;
}

interface MobileMenuProps {
    navItems: NavItem[];
    onLinkClick: (href: string) => void;
}

const NavItem = ({ item, onClick }: { item: NavItem, onClick: () => void }) => {
    const isInternalLink = item.href.startsWith('/');
    const commonClasses = "font-medium text-emerald-800 hover:text-emerald-600 transition-colors relative group py-2";
    const mobileClasses = "py-2 border-b border-amber-100 text-left";

    const content = (
        <>
            {item.name}
        </>
    )

    if (isInternalLink) {
        return (
            <Link href={item.href} className={`${commonClasses} ${mobileClasses}`} onClick={onClick}>
                {content}
            </Link>
        )
    }

    return (
        <button onClick={onClick} className={`${commonClasses} ${mobileClasses}`}>
            {content}
        </button>
    )
}

export default function MobileMenu({ navItems, onLinkClick }: MobileMenuProps) {
    return (
        <nav className="md:hidden pb-4 bg-white/95 backdrop-blur-md" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-3 px-4">
                {navItems.map((item) => (
                    <NavItem key={item.name} item={item} onClick={() => onLinkClick(item.href)} />
                ))}
                <a
                    href="https://wa.me/919864020240"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-800 text-amber-50 px-6 py-3 rounded-full flex items-center justify-center space-x-2 mt-2"
                >
                    <Phone size={16} />
                    <span>Order on WhatsApp</span>
                </a>
            </div>
        </nav>
    );
}
