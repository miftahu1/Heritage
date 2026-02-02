import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuPageClient from '@/components/MenuPageClient';

export const metadata: Metadata = {
    title: 'Our Menu | Heritage Jaysagar',
    description: 'Explore the exquisite flavors of Heritage Jaysagar. Our menu features a wide range of authentic Assamese and Indian dishes.',
    openGraph: {
        title: 'Our Menu | Heritage Jaysagar',
        description: 'Explore the exquisite flavors of Heritage Jaysagar. Our menu features a wide range of authentic Assamese and Indian dishes.',
        url: 'https://heritagejaysagar.com/menu',
        images: [
            {
                url: 'https://heritagejaysagar.com/Images/food/pick-me-up_starter.jpg',
                width: 1200,
                height: 630,
                alt: 'A delicious starter dish from the Heritage Jaysagar menu',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Menu | Heritage Jaysagar',
        description: 'Explore the exquisite flavors of Heritage Jaysagar. Our menu features a wide range of authentic Assamese and Indian dishes.',
        images: ['https://heritagejaysagar.com/Images/food/pick-me-up_starter.jpg'],
    },
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <MenuPageClient />
      <Footer />
    </>
  );
}
