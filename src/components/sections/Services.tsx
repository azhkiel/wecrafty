import React from 'react';
import { Building2, Rocket, Briefcase, Code, ShieldCheck, Layout, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { getServicesData, ServiceItem } from '../../data/services.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { translations } from '../../data/translations.ts';

const iconMap = {
  Building2,
  Rocket,
  Briefcase,
  Code,
  ShieldCheck,
  Layout,
};

export const Services: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const services = getServicesData(lang);

  const featuredService = services.find((s) => s.isPrimary);
  const secondaryServices = services.filter((s) => !s.isPrimary);

  const renderIcon = (iconName: ServiceItem['iconName']) => {
    const IconComponent = iconMap[iconName] || Building2;
    return <IconComponent size={22} strokeWidth={1.75} className="text-[#0F6FD9]" aria-hidden="true" />;
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-section bg-[#F6F8FC] py-20 md:py-24 border-b border-slate-200/80"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Context Header (4 cols) with motion */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:sticky lg:top-24"
          >
            <p className="text-xs font-semibold tracking-wide text-[#0F6FD9] uppercase mb-2">
              {t.services.kicker}
            </p>
            <h2
              id="services-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#17165E] tracking-tight leading-tight"
            >
              {t.services.title}
            </h2>
            <p className="mt-4 text-base text-[#17165E]/80 leading-relaxed">
              {t.services.description}
            </p>

            <div className="mt-8 pt-6 border-t border-slate-200 hidden lg:block">
              <p className="text-xs text-[#17165E]/65 leading-normal">
                {t.services.note}
              </p>
              <div className="mt-4">
                <a
                  href="#contact"
                  className="text-xs font-semibold text-[#0F6FD9] hover:text-[#0b54a5] inline-flex items-center gap-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0F6FD9]"
                >
                  {t.services.requestConsultation}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Uneven Grid (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Primary Featured Service Card with Motion */}
            {featuredService && (
              <motion.div
                key={featuredService.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(23, 22, 94, 0.08)' }}
                transition={{ duration: 0.25 }}
                className="bg-white border-2 border-[#0F6FD9]/30 rounded-lg p-6 sm:p-8 shadow-xs hover:border-[#0F6FD9] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#F6F8FC] rounded-md border border-slate-200">
                      {renderIcon(featuredService.iconName)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#0F6FD9] uppercase tracking-wider block">
                        {t.services.primaryBadge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#17165E]">
                        {featuredService.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-base text-[#17165E]/85 leading-relaxed">
                  {featuredService.description}
                </p>

                {featuredService.deliverables && (
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#17165E]/70 mb-3">
                      {t.services.keyInclusions}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[#17165E]/85">
                      {featuredService.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-[#0F6FD9] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            )}

            {/* Secondary Services Grid with staggered cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {secondaryServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  whileHover={{ y: -3, boxShadow: '0 8px 20px -4px rgba(23, 22, 94, 0.06)' }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className={`bg-white border border-slate-200 rounded-lg p-5 sm:p-6 shadow-xs hover:border-[#1685F7] transition-colors flex flex-col justify-between ${
                    index === 0 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-[#F6F8FC] rounded-md border border-slate-200">
                        {renderIcon(service.iconName)}
                      </div>
                      <h3 className="text-lg font-bold text-[#17165E]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#17165E]/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {service.deliverables && (
                    <ul className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-[#17165E]/75">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#1685F7]" aria-hidden="true" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
