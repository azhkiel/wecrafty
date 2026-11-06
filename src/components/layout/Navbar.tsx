import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo.tsx';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { translations } from '../../data/translations.ts';

export const Navbar: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const navItems = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.faq, href: '#faq' },
  ];

  // Active section tracking via IntersectionObserver with cleanup
  useEffect(() => {
    const sectionIds = ['hero', 'services', 'why-us', 'portfolio', 'process', 'about', 'faq', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const best = visibleEntries.reduce((prev, curr) =>
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );
          if (best.target.id) {
            setActiveSection(best.target.id);
          }
        }
      },
      {
        rootMargin: '-80px 0px -40% 0px',
        threshold: [0.1, 0.3, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  // Keyboard navigation & body scroll locking for mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      toggleButtonRef.current?.focus();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6 sm:gap-8">
        {/* Zone 1: Brand Wordmark / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="shrink-0 focus-visible:outline-2 focus-visible:outline-[#0F6FD9] rounded-sm"
          aria-label="Wecrafty Home"
        >
          <BrandLogo />
        </a>

        {/* Zone 2: Primary Nav Links */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition-colors whitespace-nowrap cursor-pointer py-1 ${
                  isActive
                    ? 'text-[#0F6FD9] font-semibold border-b-2 border-[#0F6FD9]'
                    : 'text-[#17165E]/80 hover:text-[#17165E]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Language Toggle, Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Bilingual Language Switcher (ID / EN) */}
          <div
            className="flex items-center text-xs font-semibold border border-slate-200 rounded-md p-0.5 bg-slate-50"
            role="group"
            aria-label={t.nav.langToggleAria}
          >
            <button
              type="button"
              onClick={() => setLang('id')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                lang === 'id'
                  ? 'bg-white text-[#0F6FD9] font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              aria-label="Ubah ke Bahasa Indonesia"
              aria-pressed={lang === 'id'}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                lang === 'en'
                  ? 'bg-white text-[#0F6FD9] font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              aria-label="Switch to English"
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>

          {/* Primary CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-sm font-medium text-white bg-[#0F6FD9] hover:bg-[#0d61be] active:bg-[#0b54a5] rounded-md transition-colors cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F6FD9]"
          >
            {t.nav.contactCta}
          </a>

          {/* Accessible Mobile Menu Toggle */}
          <button
            ref={toggleButtonRef}
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 text-[#17165E] rounded-md hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6FD9] cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="animate-hero-1 md:hidden fixed inset-x-0 top-16 bottom-0 bg-white border-t border-slate-200 z-40 flex flex-col justify-between p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div>
            {/* Mobile Language Switcher Row */}
            <div className="flex items-center justify-between pb-4 mb-3 border-b border-slate-100">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <Globe size={14} className="text-[#0F6FD9]" />
                <span>Bahasa / Language</span>
              </span>
              <div className="flex items-center text-xs font-semibold border border-slate-200 rounded-md p-0.5 bg-slate-50">
                <button
                  type="button"
                  onClick={() => setLang('id')}
                  className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                    lang === 'id' ? 'bg-white text-[#0F6FD9] font-bold shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Indonesia (ID)
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                    lang === 'en' ? 'bg-white text-[#0F6FD9] font-bold shadow-xs' : 'text-slate-600'
                  }`}
                >
                  English (EN)
                </button>
              </div>
            </div>

            <nav className="flex flex-col gap-1.5 pt-1" aria-label="Mobile Menu Links">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between py-3 px-4 text-base font-medium rounded-md transition-colors min-h-[44px] cursor-pointer ${
                      isActive
                        ? 'bg-[#F6F8FC] text-[#0F6FD9] font-bold'
                        : 'text-[#17165E] hover:bg-slate-50'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F6FD9]" aria-hidden="true" />
                    )}
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-200 pb-8 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center justify-center w-full min-h-[44px] px-5 py-3 text-base font-medium text-white bg-[#0F6FD9] hover:bg-[#0d61be] rounded-md transition-colors cursor-pointer text-center"
            >
              {t.nav.contactCta}
            </a>
            <p className="text-xs text-center text-[#17165E]/60 pt-2">
              Your Website, Our Craft.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
