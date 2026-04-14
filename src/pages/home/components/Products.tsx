import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Products() {
  const { t } = useTranslation();
  const [activeDetail, setActiveDetail] = useState<string | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      id: 'slippers',
      title: t('product_slippers_title'),
      subtitle: t('product_slippers_subtitle'),
      image: 'https://readdy.ai/api/search-image?query=hotel%20disposable%20slippers%20neatly%20arranged%20on%20white%20background%2C%20multiple%20pairs%20in%20different%20colors%20white%20beige%20gray%2C%20clean%20product%20photography%2C%20minimalist%20style%2C%20professional%20commercial%20shot%2C%20soft%20lighting&width=600&height=480&seq=product-slippers-001&orientation=landscape',
      features: [t('product_slippers_f1'), t('product_slippers_f2'), t('product_slippers_f3'), t('product_slippers_f4'), t('product_slippers_f5'), t('product_slippers_f6')],
      buttonLabel: t('product_slippers_btn'),
      buttonStyle: 'primary' as const,
      detail: {
        sizes: t('product_slippers_sizes'),
        materials: t('product_slippers_materials'),
        colors: t('product_slippers_colors'),
        moq: t('product_slippers_moq'),
        leadTime: t('product_slippers_lead'),
        customization: t('product_slippers_custom'),
      },
    },
    {
      id: 'towels',
      title: t('product_towels_title'),
      subtitle: t('product_towels_subtitle'),
      image: 'https://readdy.ai/api/search-image?query=neatly%20folded%20white%20hotel%20towels%20and%20bed%20linen%20stack%20on%20clean%20white%20surface%2C%20professional%20product%20photography%2C%20crisp%20clean%20fabric%20texture%2C%20minimalist%20hospitality%20style%2C%20soft%20natural%20light&width=600&height=480&seq=product-towels-001&orientation=landscape',
      features: [t('product_towels_f1'), t('product_towels_f2'), t('product_towels_f3'), t('product_towels_f4'), t('product_towels_f5')],
      buttonLabel: t('product_towels_btn'),
      buttonStyle: 'secondary' as const,
      moreInfo: [t('product_towels_info1'), t('product_towels_info2'), t('product_towels_info3')],
      detail: {},
    },
    {
      id: 'pet',
      title: t('product_pet_title'),
      subtitle: t('product_pet_subtitle'),
      image: 'https://readdy.ai/api/search-image?query=hotel%20pet%20amenities%20set%20including%20pet%20bowl%20mat%20bed%20wooden%20sign%20on%20clean%20white%20background%2C%20professional%20product%20photography%2C%20minimalist%20style%2C%20warm%20neutral%20tones%2C%20commercial%20photography&width=600&height=480&seq=product-pet-001&orientation=landscape',
      features: [t('product_pet_f1'), t('product_pet_f2'), t('product_pet_f3'), t('product_pet_f4')],
      buttonLabel: t('product_pet_btn'),
      buttonStyle: 'secondary' as const,
      moreInfo: [t('product_pet_info1'), t('product_pet_info2')],
      detail: {},
    },
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">{t('products_label')}</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">
            {t('products_title1')}<br />
            <span className="font-semibold">{t('products_title2')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-100 rounded-lg overflow-hidden hover:border-gray-200 transition-all duration-300 group">
              <div className="relative overflow-hidden bg-gray-50 h-64">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-sm text-gray-500 mb-5 leading-relaxed">{product.subtitle}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-check-line text-gray-400 text-xs"></i>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {(product.moreInfo?.length || Object.values(product.detail).some(Boolean)) && (
                  <button
                    onClick={() => setActiveDetail(activeDetail === product.id ? null : product.id)}
                    className="text-xs text-gray-400 hover:text-gray-700 flex items-center gap-1 mb-5 cursor-pointer transition-colors"
                  >
                    <i className={`ri-${activeDetail === product.id ? 'subtract' : 'add'}-line`}></i>
                    {activeDetail === product.id ? t('detail_hide') : t('detail_more')}
                  </button>
                )}

                {activeDetail === product.id && (
                  <div className="bg-gray-50 rounded-md p-4 mb-5 text-xs text-gray-600 space-y-2">
                    {product.moreInfo?.map((line) => (
                      <p key={line} className="leading-relaxed text-gray-600">{line}</p>
                    ))}
                    {product.detail.sizes && <div><span className="font-semibold text-gray-700">{t('detail_sizes')}: </span>{product.detail.sizes}</div>}
                    {product.detail.materials && <div><span className="font-semibold text-gray-700">{t('detail_materials')}: </span>{product.detail.materials}</div>}
                    {product.detail.colors && <div><span className="font-semibold text-gray-700">{t('detail_colors')}: </span>{product.detail.colors}</div>}
                    {product.detail.moq && <div><span className="font-semibold text-gray-700">{t('detail_moq')}: </span>{product.detail.moq}</div>}
                    {product.detail.leadTime && <div><span className="font-semibold text-gray-700">{t('detail_lead')}: </span>{product.detail.leadTime}</div>}
                    {product.detail.customization && <div><span className="font-semibold text-gray-700">{t('detail_custom')}: </span>{product.detail.customization}</div>}
                  </div>
                )}

                <button
                  onClick={scrollToContact}
                  className={`w-full py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    product.buttonStyle === 'primary'
                      ? 'bg-gray-900 text-white hover:bg-gray-700'
                      : 'border border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900'
                  }`}
                >
                  {product.buttonLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
