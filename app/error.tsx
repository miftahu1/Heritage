'use client'

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AlertTriangle, ArrowRight } from 'lucide-react';

export default function Error() {
  return (
    <div className="bg-restaurant-cream">
      <Header />
      <main className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
        <div className="max-w-xl">
          <AlertTriangle className="mx-auto h-16 w-16 text-red-500 mb-4" />
          <h1 className="text-6xl font-bold text-restaurant-heritage-green font-playfair mb-4">500</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Server Error</h2>
          <p className="text-gray-600 mb-8">
            We're sorry, but something went wrong on our end. Please try again later.
          </p>
          <Link href="/" className="inline-flex items-center bg-restaurant-amber-500 text-restaurant-heritage-green px-8 py-4 rounded-full font-bold text-lg hover:bg-restaurant-amber-400 transition-colors shadow-lg transform hover:-translate-y-1 duration-300">
              <ArrowRight className="mr-2" />
              Go Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
