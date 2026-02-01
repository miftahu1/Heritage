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
  title: 'Heritage Jaysagar | Premium Lakeside Dining in Sivasagar, Assam',
  description: 'Experience serene lakeside dining at Heritage Jaysagar. Authentic Assamese cuisine in a heritage-inspired setting with scenic views.',
  keywords: ['Heritage Jaysagar', 'Sivasagar restaurant', 'lakeside dining', 'Assamese cuisine', 'fine dining Assam'],
  openGraph: {
    title: 'Heritage Jaysagar | Premium Lakeside Dining',
    description: 'Experience serene lakeside dining at Heritage Jaysagar. Authentic Assamese cuisine with scenic views.',
    url: 'https://your-production-url.com', // Replace with your actual URL
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/Images/og-image.jpg', // Add a suitable Open Graph image
        width: 1200,
        height: 630,
        alt: 'Lakeside view of Heritage Jaysagar',
      },
    ],
  },
  metadataBase: new URL('https://your-production-url.com'), // Replace with your actual URL
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
