'use client'

import { useState, useEffect, useCallback, FC } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryCategory {
  category: string;
  images: GalleryImage[];
}

const galleryData: GalleryCategory[] = [
  {
    category: 'Ambience',
    images: [
      { src: '/Images/ambience/interior.jpg', alt: 'Elegant interior dining area of Heritage Jaysagar with warm lighting and traditional decor.' },
      { src: '/Images/ambience/interior2.jpg', alt: 'Heritage-inspired interior design showcasing intricate woodwork and comfortable seating.' },
      { src: '/Images/ambience/night-view.jpg', alt: 'Enchanting night view of the lakeside dining area with beautiful reflections on the water.' },
      { src: '/Images/hero/outdoor-seating.jpg', alt: 'Peaceful outdoor seating arrangement by the lake, surrounded by lush greenery.' },
    ]
  },
  {
    category: 'Signature Dishes',
    images: [
      { src: '/Images/food/biriyani.jpg', alt: 'Aromatic and flavorful Signature Chicken Biryani served in a traditional pot.' },
      { src: '/Images/food/kadhai-chicken.jpg', alt: 'Spicy and succulent Kadhai Chicken presented in a rustic bowl.' },
      { src: '/Images/food/meat.jpg', alt: 'Rich and hearty Special Meat Curry, a house specialty.' },
      { src: '/Images/food/pick-me-up_starter.jpg', alt: 'A vibrant and assorted platter of delicious starters, perfect for sharing.' },
    ]
  },
  {
    category: 'Lakeside Views',
    images: [
      { src: '/Images/hero/lakeside-view.jpg', alt: 'Serene and panoramic view of Jaysagar lake from the restaurant.' },
      { src: '/Images/hero/outdoor-seating.jpg', alt: 'Comfortable outdoor dining setup offering picturesque views of the sunset over the lake.' },
    ]
  }
];

const SectionHeader: FC = () => (
    <div className="text-center mb-12">
        <h2 id="gallery-heading" className="font-playfair text-4xl md:text-5xl text-emerald-900 mb-4">Experience Our Ambience</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">Discover the perfect blend of heritage elegance and natural beauty at our lakeside restaurant.</p>
    </div>
);

const CategoryFilter: FC<{ categories: string[]; current: string; onFilter: (category: string) => void }> = ({ categories, current, onFilter }) => (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
            <button
                key={category}
                onClick={() => onFilter(category)}
                className={`px-6 py-2 rounded-full transition-all text-sm md:text-base ${current === category ? 'bg-emerald-800 text-white' : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'}`}>
                {category}
            </button>
        ))}
    </div>
);

const GalleryGrid: FC<{ images: GalleryImage[]; onImageClick: (src: string) => void }> = ({ images, onImageClick }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden rounded-xl" onClick={() => onImageClick(image.src)}>
                <div className="aspect-square relative overflow-hidden">
                    <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full"><span className="text-emerald-800 font-medium">View</span></div>
                </div>
            </div>
        ))}
    </div>
);

const Lightbox: FC<{ imageSrc: string; images: GalleryImage[]; onClose: () => void; onNext: () => void; onPrev: () => void }> = ({ imageSrc, images, onClose, onNext, onPrev }) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [onClose, onNext, onPrev]);

    const currentIndex = images.findIndex(img => img.src === imageSrc);

    return (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" role="dialog" aria-modal="true">
            <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-amber-300 transition-colors" aria-label="Close gallery"><X size={32} /></button>
            <div className="relative w-full max-w-4xl h-[80vh]">
                <Image src={imageSrc} alt={images[currentIndex]?.alt || 'Enlarged gallery view'} fill className="object-contain" sizes="100vw" />
            </div>
            <button onClick={onPrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-300 transition-colors p-2" aria-label="Previous image"><ChevronLeft size={48} /></button>
            <button onClick={onNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-300 transition-colors p-2" aria-label="Next image"><ChevronRight size={48} /></button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">{currentIndex + 1} / {images.length}</div>
        </div>
    );
};

const SocialCTA: FC = () => (
    <div className="mt-16 text-center">
        <p className="text-gray-600 mb-6">Share your moments with us on social media!</p>
        <a href="https://www.instagram.com/heritagejaysagar.official/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium hover:opacity-90 transition-opacity text-sm md:text-base">
            <span className="mr-2 text-lg">📸</span>
            Tag us on Instagram #HeritageJaysagar
        </a>
    </div>
);


export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentCategory, setCurrentCategory] = useState('Ambience');

    const currentImages = galleryData.find(cat => cat.category === currentCategory)?.images || [];

    const handleNext = useCallback(() => {
        if (!selectedImage) return;
        const currentIndex = currentImages.findIndex(img => img.src === selectedImage);
        const nextIndex = (currentIndex + 1) % currentImages.length;
        setSelectedImage(currentImages[nextIndex].src);
    }, [selectedImage, currentImages]);

    const handlePrev = useCallback(() => {
        if (!selectedImage) return;
        const currentIndex = currentImages.findIndex(img => img.src === selectedImage);
        const prevIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        setSelectedImage(currentImages[prevIndex].src);
    }, [selectedImage, currentImages]);

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <SectionHeader />
                <CategoryFilter
                    categories={galleryData.map(c => c.category)}
                    current={currentCategory}
                    onFilter={setCurrentCategory}
                />
                <GalleryGrid images={currentImages} onImageClick={setSelectedImage} />
                <div className="text-center mt-8 text-gray-600">
                    <p>{currentImages.length} photos in {currentCategory}</p>
                </div>
                <SocialCTA />
            </div>

            {selectedImage && (
                <Lightbox
                    imageSrc={selectedImage}
                    images={currentImages}
                    onClose={() => setSelectedImage(null)}
                    onNext={handleNext}
                    onPrev={handlePrev}
                />
            )}
        </section>
    );
}
