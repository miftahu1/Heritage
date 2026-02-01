import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import FeaturedMenu from '@/components/FeaturedMenu'
import FeaturedFood from '@/components/FeaturedFood'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import ReservationCTA from '@/components/ReservationCTA'
import Footer from '@/components/Footer'

export default function HeritageJoysagarPage() {
  return (
    <>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="highlights">
        <Highlights />
      </section>
      <section id="menu">
        <FeaturedMenu />
        <FeaturedFood />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="reservations">
        <ReservationCTA />
      </section>
      <Footer />
    </>
  )
}