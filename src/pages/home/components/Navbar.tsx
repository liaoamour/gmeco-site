import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/feature/LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white border-b border-gray-100 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://static.readdy.ai/image/9cca7f6eb99c5438046f40e6a718ae79/2767b3354aa00c67f7b99292ae8c558c.png"
            alt="GM Eco Global Logo"
            className="h-9 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {[
            { label: t('nav_products'), id: 'products' },
            { label: t('nav_why_us'), id: 'advantages' },
            { label: t('nav_contact'), id: 'contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <LanguageSwitcher scrolled={scrolled} />
          <button
            onClick={() => scrollTo('contact')}
            className="bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-gray-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            {t('nav_request_quote')}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher scrolled={scrolled} />
          <button
            className="flex items-center justify-center w-8 h-8 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`${menuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl ${scrolled ? 'text-gray-800' : 'text-white'}`}></i>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {[
            { label: t('nav_products'), id: 'products' },
            { label: t('nav_why_us'), id: 'advantages' },
            { label: t('nav_contact'), id: 'contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 text-left cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-gray-700 transition-colors cursor-pointer whitespace-nowrap w-full"
          >
            {t('nav_request_quote')}
          </button>
        </div>
      )}
    </header>
  );
}
