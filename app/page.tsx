import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import FeaturedMenu from '@/components/FeaturedMenu';
import FeaturedFood from '@/components/FeaturedFood';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Reservations from '@/components/Reservations';
import Footer from '@/components/Footer';

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
