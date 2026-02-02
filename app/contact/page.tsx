import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactPageClient from '@/components/ContactPageClient';

export const metadata: Metadata = {
    title: 'Contact Us | Heritage Jaysagar',
    description: 'Get in touch with Heritage Jaysagar. Contact us via WhatsApp for reservations and inquiries.',
    openGraph: {
        title: 'Contact Us | Heritage Jaysagar',
        description: 'Get in touch with Heritage Jaysagar. Contact us via WhatsApp for reservations and inquiries.',
        url: 'https://heritagejaysagar.com/contact',
        images: [
            {
                url: 'https://heritagejaysagar.com/Images/ambience/interior.jpg',
                width: 1200,
                height: 630,
                alt: 'Interior of Heritage Jaysagar restaurant',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Us | Heritage Jaysagar',
        description: 'Get in touch with Heritage Jaysagar. Contact us via WhatsApp for reservations and inquiries.',
        images: ['https://heritagejaysagar.com/Images/ambience/interior.jpg'],
    },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactPageClient />
      <Footer />
    </>
  );
}
