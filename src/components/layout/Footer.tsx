import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo.tsx';
import { siteConfig } from '../../config/site.ts';
import { getServicesData } from '../../data/services.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { translations } from '../../data/translations.ts';

export const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const services = getServicesData(lang);
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.faq, href: '#faq' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.getElementById(href.replace('#', ''));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#17165E] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <BrandLogo variant="inverted" />
            <p className="mt-4 text-base font-medium text-white/95">
              {t.footer.tagline}
            </p>
            <p className="mt-2 text-sm text-white/70 max-w-sm leading-relaxed">
              {t.footer.description}
            </p>

            <div className="mt-6 pt-6 border-t border-white/10 w-full max-w-sm">
              <span className="text-xs uppercase tracking-wider text-white/50 block mb-2">
                {t.footer.specializationLabel}
              </span>
              <p className="text-sm text-white/90 font-medium">
                {t.footer.specializationValue}
              </p>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-4">
              {t.footer.navHeading}
            </h3>
            <ul className="space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="text-white/75 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[#1685F7]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links (3 cols) */}
          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-4">
              {t.footer.servicesHeading}
            </h3>
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, '#services')}
                    className="text-white/75 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#1685F7]"
                  >
                    <span>{service.title}</span>
                    {service.isPrimary && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1685F7]" aria-label="Primary service" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct Channels (2 cols) */}
          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-4">
              {t.footer.contactHeading}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={siteConfig.contacts.whatsapp.getHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 hover:text-white transition-colors inline-flex items-center gap-1 group focus-visible:outline-2 focus-visible:outline-[#1685F7]"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contacts.email.getHref()}
                  className="text-white/75 hover:text-white transition-colors inline-flex items-center gap-1 group focus-visible:outline-2 focus-visible:outline-[#1685F7]"
                >
                  <span>Email</span>
                  <ArrowUpRight size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </a>
              </li>
              {siteConfig.contacts.instagram && siteConfig.contacts.instagram.handle && (
                <li>
                  <a
                    href={siteConfig.contacts.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/75 hover:text-white transition-colors inline-flex items-center gap-1 group focus-visible:outline-2 focus-visible:outline-[#1685F7]"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {currentYear} Wecrafty. {t.footer.allRightsReserved}</p>
          <div className="flex items-center gap-6">
            <span>{t.footer.subtitle}</span>
            <span aria-hidden="true">·</span>
            <a
              href="#hero"
              onClick={(e) => handleSmoothScroll(e, '#hero')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.backToTop}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
