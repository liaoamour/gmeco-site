import { useTranslation } from 'react-i18next';

export default function Advantages() {
  const { t } = useTranslation();

  const advantages = [
    { icon: 'ri-price-tag-3-line', title: t('adv1_title'), desc: t('adv1_desc') },
    { icon: 'ri-brush-line', title: t('adv2_title'), desc: t('adv2_desc') },
    { icon: 'ri-hotel-line', title: t('adv3_title'), desc: t('adv3_desc') },
    { icon: 'ri-time-line', title: t('adv4_title'), desc: t('adv4_desc') },
    { icon: 'ri-ship-line', title: t('adv5_title'), desc: t('adv5_desc') },
  ];

  return (
    <section id="advantages" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">{t('adv_label')}</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900">
              {t('adv_title1')}<br />
              <span className="font-semibold">{t('adv_title2')}</span>
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed">{t('adv_desc')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {advantages.map((adv, i) => (
            <div key={adv.title} className="bg-white rounded-lg p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 group">
              <div className="text-xs font-semibold text-gray-300 mb-4 tracking-widest">0{i + 1}</div>
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <i className={`${adv.icon} text-2xl text-gray-700 group-hover:text-gray-900 transition-colors`}></i>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug">{adv.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
