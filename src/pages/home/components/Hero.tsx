import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://static.readdy.ai/image/9cca7f6eb99c5438046f40e6a718ae79/553ee76e8af2f4a87daf08d9b39fc858.png"
          alt="Hotel hospitality supplies"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>
            <span className="text-white/90 text-xs font-medium tracking-wide uppercase">{t('hero_badge')}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
            {t('hero_title_line1')}<br />
            <span className="font-semibold">{t('hero_title_line2')}</span><br />
            {t('hero_title_line3')}
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-4 font-light">
            {t('hero_subtitle')}
          </p>

          <p className="text-sm text-white/60 mb-10 tracking-wide">
            {t('hero_tags')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="bg-white text-gray-900 text-sm font-semibold px-8 py-3.5 rounded-md hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              {t('hero_btn_samples')}
            </button>
            <button
              onClick={() => scrollTo('products')}
              className="border border-white/50 text-white text-sm font-medium px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap"
            >
              {t('hero_btn_pricing')}
            </button>
          </div>

          <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/15">
            {[
              { value: '500+', label: t('hero_stat_clients') },
              { value: 'MOQ 1000', label: t('hero_stat_moq') },
              { value: '20–30', label: t('hero_stat_lead') },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-semibold text-white">{stat.value}</div>
                <div className="text-xs text-white/55 mt-0.5 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs tracking-widest uppercase">{t('hero_scroll')}</span>
        <i className="ri-arrow-down-line text-white/40 text-lg"></i>
      </div>
    </section>
  );
}
