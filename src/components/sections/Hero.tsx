import React from 'react';
import { ArrowRight, Code2, Globe } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { BrandLogo } from '../ui/BrandLogo.tsx';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { translations } from '../../data/translations.ts';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const Hero: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="scroll-section bg-white pt-24 pb-20 md:pt-32 md:pb-28 border-b border-slate-100 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (58% / 7 cols) - Left-aligned text with staggered motion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small plain text label */}
            <motion.p
              variants={itemVariants}
              className="text-xs md:text-sm font-semibold tracking-wide text-[#0F6FD9] mb-4"
            >
              {t.hero.kicker}
            </motion.p>

            {/* H1 - Primary Display Headline */}
            <motion.h1
              variants={itemVariants}
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#17165E] leading-[1.12] tracking-tight text-balance"
            >
              {t.hero.title}
            </motion.h1>

            {/* Subtext description */}
            <motion.p
              variants={itemVariants}
              className="mt-5 text-base sm:text-lg text-[#17165E]/85 leading-relaxed max-w-xl"
            >
              {t.hero.description}
            </motion.p>

            {/* Actions: Solid Primary + Text-Link Secondary with spring physics */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5 w-full sm:w-auto"
            >
              <motion.a
                whileHover={{ y: -2, boxShadow: '0 8px 18px -4px rgba(15, 111, 217, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#0F6FD9] hover:bg-[#0d61be] active:bg-[#0b54a5] rounded-md transition-colors cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F6FD9]"
              >
                {t.hero.primaryCta}
              </motion.a>

              <motion.a
                whileHover={{ x: 2 }}
                transition={{ duration: 0.15 }}
                href="#portfolio"
                onClick={(e) => handleScrollTo(e, 'portfolio')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F6FD9] hover:text-[#0b54a5] transition-colors cursor-pointer group py-2"
              >
                <span>{t.hero.secondaryCta}</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </motion.a>
            </motion.div>

            {/* Small Line Below */}
            <motion.p
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-slate-200/80 text-xs sm:text-sm text-[#17165E]/70 font-medium"
            >
              {t.hero.tagline}
            </motion.p>
          </motion.div>

          {/* Right Column (42% / 5 cols) - Flat Minimalist Browser Window with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Intentional static pixel squares */}
              {/* Ambient micro-float on one square */}
              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-3 -right-2 w-3.5 h-3.5 bg-[#1685F7] rounded-xs shadow-xs hidden sm:block z-10"
                aria-hidden="true"
              />
              <span
                className="absolute top-10 -left-3 w-3 h-3 bg-[#8739E8] rounded-xs shadow-xs hidden sm:block z-10"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-16 -right-3 w-2.5 h-2.5 bg-[#36C99A] rounded-xs shadow-xs hidden sm:block z-10"
                aria-hidden="true"
              />
              <span
                className="absolute -bottom-2 left-12 w-3 h-3 bg-[#FFB13B] rounded-xs shadow-xs hidden sm:block z-10"
                aria-hidden="true"
              />
              <span
                className="absolute top-1/2 -right-4 w-2 h-2 bg-[#1685F7] rounded-xs hidden sm:block z-10"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-8 left-4 w-2.5 h-2.5 bg-[#8739E8] rounded-xs hidden sm:block z-10"
                aria-hidden="true"
              />

              {/* Flat Minimalist CSS Browser Window */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="border border-slate-200 bg-[#F6F8FC] rounded-lg shadow-sm overflow-hidden transition-colors duration-200 hover:border-slate-300"
              >
                {/* Browser Window Header */}
                <div className="bg-white border-b border-slate-200 px-4 py-2.5 flex items-center gap-3">
                  {/* Window Controls */}
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>

                  {/* Browser Address Bar */}
                  <div className="flex-1 bg-slate-100/80 rounded-md px-3 py-1 flex items-center justify-between text-[11px] text-[#17165E]/70 font-mono">
                    <span className="flex items-center gap-1.5 truncate">
                      <Globe size={11} className="text-slate-400" aria-hidden="true" />
                      <span>wecrafty.digital</span>
                    </span>
                    <span className="text-[10px] text-emerald-600 font-sans font-medium">SSL</span>
                  </div>
                </div>

                {/* Browser Canvas Content Area */}
                <div className="p-6 sm:p-8 bg-white flex flex-col items-center justify-center min-h-[300px]">
                  {/* Prominent Official Logo Container */}
                  <motion.div
                    whileHover={{ scale: 1.015 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 sm:p-6 bg-[#F6F8FC] border border-slate-200/90 rounded-md w-full flex flex-col items-center justify-center transition-colors duration-200 hover:border-[#1685F7]/40"
                  >
                    <BrandLogo variant="hero" />
                    <p className="mt-3 text-xs text-[#17165E]/70 font-mono text-center">
                      {t.hero.browserCode}
                    </p>
                  </motion.div>

                  {/* Flat Architectural Wireframe Lines below logo */}
                  <div className="w-full mt-5 space-y-2.5" aria-hidden="true">
                    <div className="h-2 bg-slate-100 rounded-sm w-3/4" />
                    <div className="h-2 bg-slate-100 rounded-sm w-full" />
                    <div className="h-2 bg-slate-100 rounded-sm w-5/6" />
                  </div>

                  {/* Micro Specs strip */}
                  <div className="w-full mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#17165E]/60">
                    <span className="flex items-center gap-1 font-mono">
                      <Code2 size={12} className="text-[#0F6FD9]" />
                      <span>{t.hero.specsClean}</span>
                    </span>
                    <span className="font-mono">{t.hero.specsSpa}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
