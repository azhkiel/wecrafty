import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ArrowRight, MessageSquare, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandLogo } from '../ui/BrandLogo.tsx';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { translations } from '../../data/translations.ts';
import { siteConfig } from '../../config/site.ts';

// Section to nav item mapping to ensure active indicator never blinks or disappears
const sectionToNavId: Record<string, string> = {
  hero: 'hero',
  services: 'services',
  'why-us': 'services',
  portfolio: 'portfolio',
  process: 'portfolio',
  about: 'about',
  faq: 'faq',
  contact: 'faq',
};

export const Navbar: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const isClickScrollingRef = useRef<boolean>(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { id: 'hero', label: t.nav.home, href: '#hero' },
    { id: 'services', label: t.nav.services, href: '#services' },
    { id: 'portfolio', label: t.nav.portfolio, href: '#portfolio' },
    { id: 'about', label: t.nav.about, href: '#about' },
    { id: 'faq', label: t.nav.faq, href: '#faq' },
  ];

  // Scroll detection & robust scroll-spy with click-scroll suppression
  useEffect(() => {
    const handleScroll = () => {
      // 1. Header scroll visual elevation
      setIsScrolled(window.scrollY > 15);

      // 2. Suppress scroll-spy rapid jump if user clicked a link
      if (isClickScrollingRef.current) return;

      // 3. Scroll spy calculation
      const scrollPos = window.scrollY + 120;
      const sectionOrder = ['contact', 'faq', 'about', 'process', 'portfolio', 'why-us', 'services', 'hero'];

      for (const id of sectionOrder) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            const mapped = sectionToNavId[id] || 'hero';
            setActiveSection(mapped);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
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

    // Suppress scroll-spy jumping during smooth animation
    isClickScrollingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);

    const mapped = sectionToNavId[targetId] || targetId;
    setActiveSection(mapped);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 700);

    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      toggleButtonRef.current?.focus();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-colors duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Brand Wordmark / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="shrink-0 focus-visible:outline-2 focus-visible:outline-[#0F6FD9] rounded-md transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          aria-label="Wecrafty Home"
        >
          <BrandLogo />
        </a>

        {/* Zone 2: Primary Nav Links (Floating Segmented Island on Desktop) */}
        <nav
          className="hidden md:flex items-center gap-1 p-1 bg-slate-100/90 border border-slate-200/80 rounded-full"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-[#0F6FD9]'
                    : 'text-[#17165E]/75 hover:text-[#17165E]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-xs"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Language Switcher, Primary Action & Mobile Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Segmented Bilingual Switcher (ID / EN) */}
          <div
            className="flex items-center p-0.5 bg-slate-100/90 border border-slate-200/80 rounded-full text-[11px] font-bold"
            role="group"
            aria-label={t.nav.langToggleAria}
          >
            <span className="pl-2 pr-1 text-slate-400 hidden sm:inline-block" aria-hidden="true">
              <Globe size={12} />
            </span>
            <button
              type="button"
              onClick={() => setLang('id')}
              className={`relative px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
                lang === 'id' ? 'text-[#0F6FD9] font-bold' : 'text-slate-500 hover:text-slate-800'
              }`}
              aria-label="Ubah ke Bahasa Indonesia"
              aria-pressed={lang === 'id'}
            >
              {lang === 'id' && (
                <motion.span
                  layoutId="lang-active-pill"
                  className="absolute inset-0 bg-white rounded-full shadow-xs"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
              <span className="relative z-10">ID</span>
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`relative px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
                lang === 'en' ? 'text-[#0F6FD9] font-bold' : 'text-slate-500 hover:text-slate-800'
              }`}
              aria-label="Switch to English"
              aria-pressed={lang === 'en'}
            >
              {lang === 'en' && (
                <motion.span
                  layoutId="lang-active-pill"
                  className="absolute inset-0 bg-white rounded-full shadow-xs"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
              <span className="relative z-10">EN</span>
            </button>
          </div>

          {/* Primary CTA Button */}
          <motion.a
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs font-semibold text-white bg-[#0F6FD9] hover:bg-[#0d61be] active:bg-[#0b54a5] rounded-full transition-all cursor-pointer shadow-xs hover:shadow-[0_6px_16px_-3px_rgba(15,111,217,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F6FD9] group"
          >
            <span>{t.nav.contactCta}</span>
            <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </motion.a>

          {/* Morphing Mobile Menu Toggle */}
          <button
            ref={toggleButtonRef}
            type="button"
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-slate-100/90 hover:bg-slate-200/80 border border-slate-200/70 transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6FD9] cursor-pointer"
            aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="text-[#17165E]"
                  >
                    <X size={20} aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -45, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="text-[#17165E]"
                  >
                    <Menu size={20} aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white/98 backdrop-blur-xl border-t border-slate-200/80 flex flex-col justify-between overflow-y-auto p-5 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Menu Navigasi Mobile"
          >
            <div className="space-y-4">
              {/* Mobile Language Switcher Row */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                  <Globe size={13} className="text-[#0F6FD9]" />
                  <span>Bahasa / Language</span>
                </span>
                <div className="flex items-center p-0.5 bg-slate-100 border border-slate-200/80 rounded-full text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setLang('id')}
                    className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                      lang === 'id' ? 'bg-white text-[#0F6FD9] font-bold shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    ID
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang('en')}
                    className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                      lang === 'en' ? 'bg-white text-[#0F6FD9] font-bold shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* Navigation Items */}
              <nav className="flex flex-col gap-1" aria-label="Mobile Navigation Links">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`group flex items-center justify-between p-3.5 rounded-xl transition-colors min-h-[48px] cursor-pointer ${
                        isActive
                          ? 'bg-[#0F6FD9]/10 text-[#0F6FD9] font-bold'
                          : 'text-[#17165E] hover:bg-slate-50 font-medium'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className={`text-xs font-mono ${isActive ? 'text-[#0F6FD9]' : 'text-slate-400'}`}>
                          0{index + 1}
                        </span>
                        <span className="text-base sm:text-lg tracking-tight">{item.label}</span>
                      </div>
                      <ArrowRight
                        size={16}
                        className={`transition-transform duration-200 ${
                          isActive
                            ? 'text-[#0F6FD9] translate-x-0.5'
                            : 'text-slate-300 group-hover:text-slate-600 group-hover:translate-x-0.5'
                        }`}
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Drawer Quick Direct Actions */}
            <div className="pt-4 border-t border-slate-200/80 space-y-2.5 pb-4">
              {/* Primary Consultation CTA */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 text-sm font-semibold text-white bg-[#0F6FD9] hover:bg-[#0d61be] active:bg-[#0b54a5] rounded-xl shadow-xs transition-colors cursor-pointer min-h-[44px]"
              >
                <span>{t.nav.contactCta}</span>
                <ArrowRight size={15} aria-hidden="true" />
              </a>

              {/* Direct WhatsApp Quick Chat */}
              <a
                href={siteConfig.contacts.whatsapp.getHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-[#17165E] bg-slate-50 hover:bg-slate-100 border border-slate-200/90 rounded-xl transition-colors cursor-pointer min-h-[40px]"
              >
                <MessageSquare size={14} className="text-emerald-600 shrink-0" aria-hidden="true" />
                <span>WhatsApp: {siteConfig.contacts.whatsapp.display}</span>
              </a>

              {/* Direct Email Link */}
              <a
                href={siteConfig.contacts.email.getHref()}
                className="flex items-center justify-center gap-2 w-full py-2 px-4 text-xs font-medium text-slate-500 hover:text-[#17165E] transition-colors cursor-pointer"
              >
                <Mail size={12} className="shrink-0" aria-hidden="true" />
                <span className="truncate">{siteConfig.contacts.email.address}</span>
              </a>

              <p className="text-[11px] text-center text-[#17165E]/50 font-mono pt-1">
                Your Website, Our Craft.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};


