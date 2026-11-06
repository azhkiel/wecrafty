import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getFaqData } from '../../data/faq.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { translations } from '../../data/translations.ts';

export const FAQ: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const faqList = getFaqData(lang);
  const [openId, setOpenId] = useState<string | null>(faqList[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-section bg-white py-20 md:py-24 border-b border-slate-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (4 cols): Heading & Prompt with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:sticky lg:top-24"
          >
            <p className="text-xs font-semibold tracking-wide text-[#0F6FD9] uppercase mb-2">
              {t.faq.kicker}
            </p>
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#17165E] tracking-tight leading-tight"
            >
              {t.faq.title}
            </h2>
            <p className="mt-4 text-base text-[#17165E]/80 leading-relaxed">
              {t.faq.description}
            </p>
            <p className="mt-6 text-sm text-[#17165E]/70">
              {t.faq.notAddressed}
            </p>
            <a
              href="#contact"
              className="mt-2 inline-flex items-center text-sm font-semibold text-[#0F6FD9] hover:text-[#0b54a5] cursor-pointer"
            >
              {t.faq.reachOut}
            </a>
          </motion.div>

          {/* Right Column (8 cols): Accessible Motion Accordion */}
          <div className="lg:col-span-8 divide-y divide-slate-200 border-t border-b border-slate-200">
            {faqList.map((item, index) => {
              const isOpen = openId === item.id;
              const triggerId = `faq-trigger-${item.id}`;
              const panelId = `faq-panel-${item.id}`;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                  className="py-4"
                >
                  <h3>
                    <button
                      id={triggerId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full py-2 flex items-center justify-between text-left text-base sm:text-lg font-bold text-[#17165E] hover:text-[#0F6FD9] transition-colors cursor-pointer group focus-visible:outline-2 focus-visible:outline-[#0F6FD9] rounded-xs"
                    >
                      <span className="pr-4">{item.question}</span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-slate-400 group-hover:text-[#0F6FD9] shrink-0"
                      >
                        <ChevronDown size={18} aria-hidden="true" />
                      </motion.div>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 pb-3">
                          <p className="text-sm sm:text-base text-[#17165E]/80 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
