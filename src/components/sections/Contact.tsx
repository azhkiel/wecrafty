import React, { useState } from 'react';
import { ArrowUpRight, MessageSquare, Mail, Instagram, Send } from 'lucide-react';
import { siteConfig } from '../../config/site.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { translations } from '../../data/translations.ts';

export const Contact: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const defaultService = lang === 'id' ? 'Website Profil Perusahaan' : 'Company Profile Website';
  const [businessName, setBusinessName] = useState('');
  const [serviceType, setServiceType] = useState(defaultService);

  const serviceOptions = lang === 'id' ? [
    { value: 'Website Profil Perusahaan', label: 'Website Profil Perusahaan (Layanan Utama)' },
    { value: 'Landing Page', label: 'Landing Page' },
    { value: 'Website Bisnis & Informasi', label: 'Website Bisnis & Informasi' },
    { value: 'Pengembangan Web Khusus', label: 'Pengembangan Web Khusus' },
    { value: 'Pemeliharaan & Dukungan Web', label: 'Pemeliharaan & Dukungan Web' },
    { value: 'Desain UI/UX', label: 'Desain UI/UX' },
  ] : [
    { value: 'Company Profile Website', label: 'Company Profile Website (Primary)' },
    { value: 'Landing Page', label: 'Landing Page' },
    { value: 'Business Website', label: 'Business Website' },
    { value: 'Custom Web Development', label: 'Custom Web Development' },
    { value: 'Website Maintenance', label: 'Website Maintenance' },
    { value: 'UI/UX Design', label: 'UI/UX Design' },
  ];

  // Generate dynamic inquiry URL with brief message
  const getDynamicWhatsAppHref = () => {
    const message = t.contact.whatsappPrefill(serviceType, businessName.trim());
    return `https://wa.me/${siteConfig.contacts.whatsapp.number}?text=${encodeURIComponent(message)}`;
  };

  const getDynamicEmailHref = () => {
    const subject = encodeURIComponent(t.contact.emailSubject(serviceType, businessName.trim()));
    const body = encodeURIComponent(t.contact.emailBody(serviceType, businessName.trim()));
    return `mailto:${siteConfig.contacts.email.address}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-section bg-[#17165E] text-white py-16 md:py-20 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (7 cols): Heading & Prompt Action */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-semibold tracking-wide text-[#1685F7] uppercase mb-2">
              {t.contact.kicker}
            </span>

            <h2
              id="contact-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
            >
              {t.contact.title}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
              {t.contact.description}
            </p>

            {/* Primary Action Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={getDynamicWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0F6FD9] hover:bg-[#0d61be] active:bg-[#0b54a5] rounded-md transition-colors cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>{t.contact.primaryButton}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>

            {/* Secondary Direct Channels as Text Links */}
            <div className="mt-8 pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-6 text-sm">
              <span className="text-xs uppercase tracking-wider text-white/50">
                {t.contact.directChannels}
              </span>

              {siteConfig.contacts.whatsapp.number && (
                <a
                  href={getDynamicWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 hover:text-white transition-colors inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#1685F7]"
                >
                  <MessageSquare size={15} className="text-[#36C99A]" aria-hidden="true" />
                  <span>WhatsApp ({siteConfig.contacts.whatsapp.display})</span>
                </a>
              )}

              {siteConfig.contacts.email.address && (
                <a
                  href={getDynamicEmailHref()}
                  className="text-white/85 hover:text-white transition-colors inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#1685F7]"
                >
                  <Mail size={15} className="text-[#1685F7]" aria-hidden="true" />
                  <span>Email ({siteConfig.contacts.email.address})</span>
                </a>
              )}

              {siteConfig.contacts.instagram && siteConfig.contacts.instagram.handle && (
                <a
                  href={siteConfig.contacts.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 hover:text-white transition-colors inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#1685F7]"
                >
                  <Instagram size={15} className="text-[#8739E8]" aria-hidden="true" />
                  <span>Instagram ({siteConfig.contacts.instagram.handle})</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column (5 cols): Lightweight Inquiry Pre-filler Box */}
          <div className="lg:col-span-5 bg-[#1a1969] border border-white/15 rounded-lg p-6 sm:p-7 shadow-xs">
            <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
              <Send size={15} className="text-[#1685F7]" aria-hidden="true" />
              <span>{t.contact.quickBriefTitle}</span>
            </h3>
            <p className="text-xs text-white/70 mb-5 leading-normal">
              {t.contact.quickBriefSubtitle}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(getDynamicWhatsAppHref(), '_blank');
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="service-type-select" className="block text-xs font-medium text-white/80 mb-1.5">
                  {t.contact.serviceLabel}
                </label>
                <select
                  id="service-type-select"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-[#131252] border border-white/20 rounded-md px-3 py-2 text-sm text-white focus-visible:outline-2 focus-visible:outline-[#1685F7]"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="business-name-input" className="block text-xs font-medium text-white/80 mb-1.5">
                  {t.contact.businessNameLabel}
                </label>
                <input
                  id="business-name-input"
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder={t.contact.businessNamePlaceholder}
                  className="w-full bg-[#131252] border border-white/20 rounded-md px-3 py-2 text-sm text-white placeholder:text-white/40 focus-visible:outline-2 focus-visible:outline-[#1685F7]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0F6FD9] hover:bg-[#0d61be] rounded-md transition-colors cursor-pointer"
                >
                  <span>{t.contact.openWhatsApp}</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </button>

                <a
                  href={getDynamicEmailHref()}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-md transition-colors cursor-pointer text-center"
                >
                  <span>{t.contact.openEmail}</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
