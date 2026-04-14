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
          
          {/* 左侧信息 */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              {t('contact_label')}
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              {t('contact_title1')}<br />
              <span className="font-semibold">{t('contact_title2')}</span>
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-10">
              {t('contact_desc')}
            </p>

            <div className="space-y-5 mb-10">
              <a href="mailto:louis@gmecoglobal.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-md">
                  <i className="ri-mail-line text-gray-600"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-400">{t('contact_email_label')}</div>
                  <div className="text-sm font-medium text-gray-800">
                    louis@gmecoglobal.com
                  </div>
                </div>
              </a>

              <a href="https://wa.me/33767838801" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-md">
                  <i className="ri-whatsapp-line text-gray-600"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-400">{t('contact_phone_label')}</div>
                  <div className="text-sm font-medium text-gray-800">
                    +33 7 67 83 88 01
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* 表单 */}
          <div className="bg-white border border-gray-100 rounded-lg p-8">
            {submitted ? (
              <div className="text-center py-10">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('form_success_title')}
                </h3>
                <p className="text-sm text-gray-500">
                  {t('form_success_desc')}
                </p>
              </div>
            ) : (
              <form id="quote-request-form" onSubmit={handleSubmit} className="space-y-5">

                {/* 可选隐藏字段 */}
                <input type="hidden" name="_subject" value="New GM Eco Global inquiry" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="name" required placeholder="Your Name" className="border p-2 rounded" />
                  <input type="email" name="email" required placeholder="Email" className="border p-2 rounded" />
                </div>

                <input type="text" name="company" placeholder="Company" className="border p-2 rounded w-full" />

                <select name="product" className="border p-2 rounded w-full">
                  <option value="">Select Product</option>
                  <option value="Slippers">Slippers</option>
                  <option value="Towels">Towels</option>
                  <option value="Pet Supplies">Pet Supplies</option>
                </select>

                <textarea name="message" required placeholder="Message" className="border p-2 rounded w-full" />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-white py-2 rounded"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
