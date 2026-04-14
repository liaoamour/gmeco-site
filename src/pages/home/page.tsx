import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Advantages from './components/Advantages';
import Trust from './components/Trust';
import Contact from './components/Contact';
import Footer from './components/Footer';

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://example.com';

const schemaData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GM Eco Global',
    url: SITE_URL,
    logo: `${SITE_URL}/vite.svg`,
    description:
      'B2B supplier of cost-effective hotel slippers, towels, linens, and pet-friendly amenities for hotels across Europe.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'French', 'German', 'Spanish', 'Italian', 'Dutch', 'Portuguese'],
    },
    areaServed: 'Europe',
    sameAs: [],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GM Eco Global',
    url: SITE_URL,
    description:
      'Cost-effective hospitality supplies for hotels — hotel slippers, towels, linens, and pet-friendly amenities. Custom branding, low MOQ, fast sampling.',
    inLanguage: ['en', 'fr', 'de', 'es', 'it', 'nl', 'pt'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Hotel Slippers',
    description:
      'Comfortable and practical hotel slippers with customization options. Non-woven, cotton, and eco-friendly options available. Custom logo, MOQ 1,000 pairs.',
    brand: { '@type': 'Brand', name: 'GM Eco Global' },
    category: 'Hospitality Supplies',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
      seller: { '@type': 'Organization', name: 'GM Eco Global' },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the minimum order quantity for hotel slippers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The minimum order quantity (MOQ) for hotel slippers is 1,000 pairs per model.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer custom branding on hotel supplies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer full OEM support including logo embroidery, printing, and custom packaging on hotel slippers and other hospitality supplies.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to receive samples?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most sample requests are processed within 3–5 business days.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you ship to Europe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide reliable logistics to Europe and beyond, handling customs documentation and freight coordination.',
        },
      },
    ],
  },
];

export default function HomePage() {
  useEffect(() => {
    const existingScripts = document.querySelectorAll('script[data-schema="home"]');
    existingScripts.forEach((s) => s.remove());

    schemaData.forEach((schema, idx) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema', 'home');
      script.setAttribute('data-schema-idx', String(idx));
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll('script[data-schema="home"]').forEach((s) => s.remove());
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Advantages />
      <Trust />
      <Contact />
      <Footer />
    </main>
  );
}
