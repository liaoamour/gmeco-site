import { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/maqamnwk', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              {t('contact_label')}
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              {t('contact_title1')}
              <br />
              <span className="font-semibold">{t('contact_title2')}</span>
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-10">
              {t('contact_desc')}
            </p>

            <div className="space-y-5 mb-10">
              <a
                href="mailto:louis@gmecoglobal.com"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-md group-hover:border-gray-400 transition-colors">
                  <i className="ri-mail-line text-gray-600 text-base"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">
                    {t('contact_email_label')}
                  </div>
                  <div className="text-sm font-medium text-gray-800 group-hover:text-gray-600 transition-colors">
                    louis@gmecoglobal.com
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/33767838801"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-md group-hover:border-gray-400 transition-colors">
                  <i className="ri-whatsapp-line text-gray-600 text-base"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">
                    {t('contact_phone_label')}
                  </div>
                  <div className="text-sm font-medium text-gray-800 group-hover:text-gray-600 transition-colors">
                    +33 7 67 83 88 01
                  </div>
                </div>
              </a>

              <a
                href="https://www.gmecoglobal.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-md group-hover:border-gray-400 transition-colors">
                  <i className="ri-global-line text-gray-600 text-base"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">
                    {t('contact_web_label')}
                  </div>
                  <div className="text-sm font-medium text-gray-800 group-hover:text-gray-600 transition-colors">
                    www.gmecoglobal.com
                  </div>
                </div>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:louis@gmecoglobal.com?subject=Quote Request"
                className="flex items-center justify-center gap-2 bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-gray-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-mail-send-line"></i>
                {t('contact_btn_quote')}
              </a>

              <a
                href="https://wa.me/33767838801"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 text-sm font-medium px-6 py-3 rounded-md hover:border-gray-500 hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-whatsapp-line"></i>
                {t('contact_btn_wa')}
              </a>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-lg p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-14 h-14 flex items-center justify-center bg-green-50 rounded-full mb-4">
                  <i className="ri-check-line text-green-500 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('form_success_title')}
                </h3>
                <p className="text-sm text-gray-500">
                  {t('form_success_desc')}
                </p>
              </div>
            ) : (
              <form id="quote-request-form" onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="_subject" value="New GM Eco Global inquiry" />

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {t('form_title')}
                  </h3>
                  <p className="text-xs text-gray-400">{t('form_sub')}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      {t('form_name')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Smith"
                      className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      {t('form_email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@hotel.com"
                      className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">
                    {t('form_company')}
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Grand Hotel Paris"
                    className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">
                    {t('form_product')}
                  </label>
                  <select
                    name="product"
                    className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-gray-400 transition-colors bg-white cursor-pointer"
                    defaultValue=""
                  >
                    <option value="">{t('form_product_placeholder')}</option>
                    <option value="Hotel Slippers">{t('product_slippers_title')}</option>
                    <option value="Towels & Linen">{t('product_towels_title')}</option>
                    <option value="Pet-Friendly Supplies">{t('product_pet_title')}</option>
                    <option value="Multiple Products">Multiple Products</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">
                    {t('form_message')} *
                    <span className="text-gray-300 font-normal ml-1">
                      {t('form_message_hint')}
                    </span>
                  </label>
                  <textarea
                    name="message"
                    required
                    maxLength={500}
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gray-900 text-white text-sm font-medium py-3 rounded-md hover:bg-gray-700 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60"
                >
                  {loading ? t('form_sending') : t('form_submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
