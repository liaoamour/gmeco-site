import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <img src="https://static.readdy.ai/image/9cca7f6eb99c5438046f40e6a718ae79/2767b3354aa00c67f7b99292ae8c558c.png" alt="GM Eco Global" className="h-8 w-auto object-contain mb-4 brightness-0 invert" />
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">{t('footer_desc')}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4">{t('footer_products')}</h4>
            <ul className="space-y-2">
              {[t('product_slippers_title'), t('product_towels_title'), t('product_pet_title')].map((item) => (
                <li key={item}>
                  <button onClick={() => scrollTo('products')} className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">{item}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4">{t('footer_contact')}</h4>
            <ul className="space-y-3">
              <li><a href="mailto:louis@gmecoglobal.com" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"><i className="ri-mail-line text-gray-600"></i>louis@gmecoglobal.com</a></li>
              <li><a href="https://wa.me/33767838801" target="_blank" rel="nofollow noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"><i className="ri-whatsapp-line text-gray-600"></i>+33 7 67 83 88 01</a></li>
              <li><a href="https://www.gmecoglobal.com" target="_blank" rel="nofollow noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"><i className="ri-global-line text-gray-600"></i>www.gmecoglobal.com</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">{t('footer_copy')}</p>
          <p className="text-xs text-gray-600">{t('footer_tagline')}</p>
        </div>
      </div>
    </footer>
  );
}
