'use client'

// Helper function for smooth scrolling
const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
        const headerOffset = 80; // Match header offset for consistent scrolling
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

export default function HeroActions() {
    return (
        <div className="flex flex-wrap gap-4">
            <button
                onClick={() => scrollToSection('#reservations')}
                className="bg-amber-500 text-emerald-900 px-8 py-4 rounded-full font-medium hover:bg-amber-400 transition-colors"
            >
                Reserve Your Table
            </button>
            <button
                onClick={() => scrollToSection('#gallery')}
                className="bg-transparent border-2 border-amber-200 text-amber-100 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
                View Gallery
            </button>
        </div>
    );
}
