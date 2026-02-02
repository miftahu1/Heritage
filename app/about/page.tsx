
import Image from 'next/image';
import { Metadata } from 'next';
import { ChefHat, Leaf, Lightbulb, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'About Us | Heritage Jaysagar',
    description: 'Learn about the story, values, and team behind Heritage Jaysagar, a premier lakeside dining destination in Sivasagar, Assam.',
    openGraph: {
        title: 'About Us | Heritage Jaysagar',
        description: 'Learn about the story, values, and team behind Heritage Jaysagar, a premier lakeside dining destination in Sivasagar, Assam.',
        url: 'https://heritage-jaysagar.com/about',
        images: [
            {
                url: 'https://heritage-jaysagar.com/Images/ambience/interior-modern.jpg',
                width: 1200,
                height: 630,
                alt: 'Modern and elegant interior of Heritage Jaysagar restaurant',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Us | Heritage Jaysagar',
        description: 'Learn about the story, values, and team behind Heritage Jaysagar, a premier lakeside dining destination in Sivasagar, Assam.',
        images: ['https://heritage-jaysagar.com/Images/ambience/interior-modern.jpg'],
    },
};


const Page = () => {
    return (
        <div className="bg-restaurant-cream">
            <Header />
            <HeroSection />
            <OurStory />
            <OurValues />
            <MeetTheTeam />
            <JoinUs />
            <Footer />
        </div>
    );
};


const HeroSection = () => (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white text-center px-4">
        <div className="absolute inset-0 z-0">
            <Image
                src="/Images/ambience/interior-modern.jpg"
                alt="Modern and elegant interior of Heritage Jaysagar restaurant"
                fill
                className="object-cover"
                priority
                sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-10" />
        </div>
        <div className="relative z-20 animate-fade-in max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
                A Legacy of Taste, <br /> A Future of Hospitality
            </h1>
            <p className="text-lg md:text-xl text-amber-50 leading-relaxed">
                Discover the story behind Heritage Jaysagar, where authentic Assamese flavors meet contemporary elegance on the serene banks of Joysagar.
            </p>
        </div>
    </section>
);


const OurStory = () => (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="animate-slide-up">
                    <h2 className="font-playfair text-3xl md:text-4xl text-restaurant-heritage-green mb-6">Our Story: The Birth of a Culinary Dream</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            Founded in 2010, Heritage Jaysagar began as a humble vision: to create a dining experience that paid homage to the rich culinary traditions of Assam while offering a tranquil escape from the everyday. Nestled by the historic Joysagar lake, our location was chosen to reflect the timeless beauty and serenity that our cuisine embodies.
                        </p>
                        <p>
                            Our founder, driven by a passion for authentic flavors and warm hospitality, envisioned a place where families, friends, and travelers could gather to enjoy meals that are both comforting and sophisticated. Over the years, we have grown from a small lakeside eatery into a celebrated culinary destination, known for our commitment to quality, heritage, and innovation.
                        </p>
                        <p>
                            Every dish at Heritage Jaysagar tells a story—a story of our land, our people, and our unwavering dedication to the art of food.
                        </p>
                    </div>
                </div>
                <div className="relative h-80 md:h-full rounded-2xl overflow-hidden shadow-restaurant-elegant animate-fade-in">
                    <Image
                        src="/Images/ambience/exterior-day.jpg"
                        alt="Exterior view of Heritage Jaysagar on a bright day"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
        </div>
    </section>
);

const OurValues = () => {
    const values = [
        {
            icon: ChefHat,
            title: 'Culinary Excellence',
            description: "We are dedicated to the art of Assamese cooking, using authentic recipes and the finest local ingredients to deliver an unparalleled dining experience.",
        },
        {
            icon: Leaf,
            title: 'Sustainability & Freshness',
            description: "We prioritize sourcing our ingredients from local farmers and markets, ensuring freshness while supporting our community and minimizing our environmental footprint.",
        },
        {
            icon: Users,
            title: 'Warm Hospitality',
            description: "We believe in treating every guest like family. Our team is committed to providing a warm, welcoming, and attentive service from the moment you arrive.",
        },
        {
            icon: Lightbulb,
            title: 'Continuous Innovation',
            description: "While rooted in tradition, we constantly seek to innovate and elevate our offerings, blending timeless flavors with modern culinary techniques.",
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-restaurant-cream">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="font-playfair text-3xl md:text-4xl text-restaurant-heritage-green mb-4">Our Core Values</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The principles that guide every dish we serve and every guest we welcome.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-restaurant-card text-center flex flex-col items-center hover:shadow-restaurant-elegant transition-shadow duration-300 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="bg-restaurant-amber-100 p-4 rounded-full mb-5">
                                <value.icon className="text-restaurant-heritage-gold" size={32} />
                            </div>
                            <h3 className="font-playfair text-xl text-restaurant-heritage-green font-bold mb-3">{value.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed flex-grow">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const MeetTheTeam = () => {
    const teamMembers = [
        {
            name: "Bikash Sonowal",
            role: "Head Chef",
            image: "/Images/team/chef.jpg",
            bio: "With over 15 years of experience in traditional Assamese kitchens, Chef Bikash is the heart and soul of our culinary creations. His passion for authentic flavors is unmatched."
        },
        {
            name: "Rajiv Hazarika",
            role: "Restaurant Manager",
            image: "/Images/team/manager.jpg",
            bio: "Rajiv ensures that every guest experiences the warmth and hospitality that Heritage Jaysagar is known for. His attention to detail is second to none."
        },
        {
            name: "Rakesh Gogoi",
            role: "Service Lead",
            image: "/Images/team/service.jpg",
            bio: "Rakesh leads our service team with a smile, ensuring a seamless and enjoyable dining experience for all our patrons. He is a true master of his craft."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="font-playfair text-3xl md:text-4xl text-restaurant-heritage-green mb-4">Meet the Artisans</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The dedicated individuals who bring the Heritage Jaysagar experience to life.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                            <div className="relative w-48 h-48 mx-auto mb-5 rounded-full overflow-hidden shadow-lg border-4 border-restaurant-amber-200">
                                <Image src={member.image} alt={member.name} fill className="object-cover" sizes="192px" />
                            </div>
                            <h3 className="font-playfair text-2xl text-restaurant-heritage-green font-bold">{member.name}</h3>
                            <p className="text-restaurant-heritage-gold font-semibold mb-2">{member.role}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const JoinUs = () => (
    <section className="bg-restaurant-heritage-green text-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                <div>
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-2">Our Story & Philosophy</h2>
                    <p className="text-amber-100 text-lg max-w-2xl">
                        Experience the confluence of heritage and hospitality, where authentic Assamese flavors meet timeless traditions.
                    </p>
                </div>
                <div className="mt-4 md:mt-0">
                    <Link href="/menu" 
                        className="inline-flex items-center bg-restaurant-amber-500 text-restaurant-heritage-green px-8 py-4 rounded-full font-bold text-lg hover:bg-restaurant-amber-400 transition-colors shadow-lg transform hover:-translate-y-1 duration-300">
                        👉 Explore Our Menu
                    </Link>
                </div>
            </div>
        </div>
    </section>
);

export default Page;
