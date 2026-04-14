import { useTranslation } from 'react-i18next';

export default function Trust() {
  const { t } = useTranslation();

  const stats = [
    { value: '500+', label: t('stat1_label') },
    { value: '12+', label: t('stat2_label') },
    { value: '1M+', label: t('stat3_label') },
    { value: '98%', label: t('stat4_label') },
  ];

  const clients = [
    t('client1'), t('client2'), t('client3'),
    t('client4'), t('client5'), t('client6'),
  ];

  return (
    <section id="trust" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">{t('trust_label')}</p>
          <blockquote className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed">
            {t('trust_quote')}
          </blockquote>
          <p className="text-sm text-gray-400 mt-6">{t('trust_sub')}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 rounded-lg overflow-hidden">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white px-8 py-10 text-center">
              <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">{stat.value}</div>
              <div className="text-xs text-gray-400 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {clients.map((type) => (
            <span key={type} className="border border-gray-200 text-gray-500 text-xs px-4 py-2 rounded-full">{type}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
