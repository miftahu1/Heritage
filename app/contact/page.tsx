'use client'

import { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const ContactPage: NextPage = () => {
  const whatsappNumber = '919864020240';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <>
      <Head>
        <title>Contact Us - Heritage Jaysagar</title>
        <meta name="description" content="Get in touch with Heritage Jaysagar. Contact us via WhatsApp for reservations and inquiries."/>
        <meta property="og:title" content="Contact Us - Heritage Jaysagar" />
        <meta property="og:description" content="Get in touch with Heritage Jaysagar. Contact us via WhatsApp for reservations and inquiries."/>
        <meta property="og:url" content="https://heritage-jaysagar.com/contact" />
        <meta property="og:image" content="https://heritage-jaysagar.com/Images/ambience/interior.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Heritage Jaysagar" />
        <meta name="twitter:description" content="Get in touch with Heritage Jaysagar. Contact us via WhatsApp for reservations and inquiries."/>
        <meta name="twitter:image" content="https://heritage-jaysagar.com/Images/ambience/interior.jpg" />
      </Head>
      <Header />

      <div className="bg-restaurant-cream">
        <main className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
          <div className="max-w-xl">
            <MessageCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-restaurant-heritage-green mb-4">Contact Us</h1>
            <p className="text-gray-600 mb-8">
              Have a question or want to make a reservation? We're here to help! For the quickest response, please chat with us on WhatsApp.
            </p>
            <Link 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors shadow-lg transform hover:-translate-y-1 duration-300">
                <ArrowRight className="mr-2" />
                Chat on WhatsApp
            </Link>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
