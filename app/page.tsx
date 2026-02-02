import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import FeaturedMenu from '@/components/FeaturedMenu';
import FeaturedFood from '@/components/FeaturedFood';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Reservations from '@/components/Reservations';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Heritage Joysagar | Lakeside Dining in Sivasagar, Assam',
    description: 'Experience authentic Assamese cuisine and warm hospitality at Heritage Jaysagar, a premier lakeside restaurant in Sivasagar, Assam. Book your table today!',
    openGraph: {
        title: 'Heritage Jaysagar | Lakeside Dining in Sivasagar, Assam',
        description: 'Experience authentic Assamese cuisine and warm hospitality at Heritage Jaysagar, a premier lakeside restaurant in Sivasagar, Assam. Book your table today!',
        url: 'https://heritagejaysagar.com',
        images: [
            {
                url: 'https://heritagejaysagar.com/Images/hero/lakeside-view.jpg',
                width: 1200,
                height: 630,
                alt: 'Lakeside view of Heritage Jaysagar restaurant',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Heritage Jaysagar | Lakeside Dining in Sivasagar, Assam',
        description: 'Experience authentic Assamese cuisine and warm hospitality at Heritage Jaysagar, a premier lakeside restaurant in Sivasagar, Assam. Book your table today!',
        images: ['https://heritagejaysagar.com/Images/hero/lakeside-view.jpg'],
    },
};

export default function HeritageJoysagarPage() {
  return (
    <>
      <Header />
      <main className="bg-repeat font-sans text-gray-800" style={{ backgroundImage: "url('/Images/background.png')" }}>
        <section id="home" aria-labelledby="hero-heading">
          <Hero />
        </section>

        <section id="highlights" aria-labelledby="highlights-heading">
          <Highlights />
        </section>

        <section id="menu" aria-labelledby="menu-heading">
          <FeaturedMenu />
          <FeaturedFood />
        </section>

        <section id="gallery" aria-labelledby="gallery-heading">
          <Gallery />
        </section>

        <section id="testimonials" aria-labelledby="testimonials-heading">
          <Testimonials />
        </section>

        <section id="reservations" aria-labelledby="reservations-heading">
          <Reservations />
        </section>
      </main>
      <Footer />
    </>
  );
}
