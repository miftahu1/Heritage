import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Heritage Joysagar | Premium Lakeside Dining in Sivasagar, Assam',
  description: 'Experience serene lakeside dining at Heritage Joysagar. Authentic Assamese cuisine in a heritage-inspired setting with scenic views.',
  keywords: ['Heritage Joysagar', 'Sivasagar restaurant', 'lakeside dining', 'Assamese cuisine', 'fine dining Assam'],
  openGraph: {
    title: 'Heritage Joysagar | Premium Lakeside Dining',
    description: 'Experience serene lakeside dining at Heritage Joysagar. Authentic Assamese cuisine with scenic views.',
    url: 'https://heritagejaysagar.com',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/Images/og-image.jpg', // Add a suitable Open Graph image
        width: 1200,
        height: 630,
        alt: 'Lakeside view of Heritage Joysagar',
      },
    ],
  },
  metadataBase: new URL('https://heritagejaysagar.com'),
  alternates: {
    canonical: 'https://heritagejaysagar.com',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RestaurantRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} restaurant-theme`}>
      <body className={`font-sans min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
