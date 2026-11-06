import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { translations } from '../../data/translations.ts';

export const Process: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [activeStep, setActiveStep] = useState<string>("01");

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="scroll-section bg-white py-20 md:py-24 border-b border-slate-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14"
        >
          <p className="text-xs font-semibold tracking-wide text-[#0F6FD9] uppercase mb-2">
            {t.process.kicker}
          </p>
          <h2
            id="process-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#17165E] tracking-tight leading-tight"
          >
            {t.process.title}
          </h2>
          <p className="mt-4 text-base text-[#17165E]/80 leading-relaxed">
            {t.process.description}
          </p>
        </motion.div>

        {/* Timeline: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div
            className="hidden lg:block absolute top-8 left-8 right-8 h-px bg-slate-200 -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {t.process.steps.map((step, index) => {
              const isActive = activeStep === step.number;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.3, delay: index * 0.07 }}
                  onMouseEnter={() => setActiveStep(step.number)}
                  tabIndex={0}
                  onFocus={() => setActiveStep(step.number)}
                  className={`group relative flex flex-col items-start pt-3 border-l-2 lg:border-l-0 lg:border-t-2 pl-4 lg:pl-0 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0F6FD9] rounded-xs ${
                    isActive
                      ? 'border-[#0F6FD9]'
                      : 'border-[#1685F7]/30 lg:border-slate-200 hover:border-[#0F6FD9]'
                  }`}
                >
                  {/* Motion Active Indicator on Desktop */}
                  {isActive && (
                    <motion.div
                      layoutId="process-indicator"
                      className="hidden lg:block absolute -top-[2px] left-0 right-0 h-[2px] bg-[#0F6FD9]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}

                  {/* Step Number in Display Font with Motion */}
                  <motion.span
                    animate={{ scale: isActive ? 1.05 : 1 }}
                    transition={{ duration: 0.15 }}
                    className={`font-display font-bold text-3xl sm:text-4xl tabular-nums mb-3 block transition-colors duration-150 ${
                      isActive ? 'text-[#0F6FD9]' : 'text-[#0F6FD9]/80 group-hover:text-[#0F6FD9]'
                    }`}
                  >
                    {step.number}
                  </motion.span>

                  <h3
                    className={`text-lg sm:text-xl font-bold mb-2 transition-colors duration-150 ${
                      isActive ? 'text-[#0F6FD9]' : 'text-[#17165E] group-hover:text-[#0F6FD9]'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#17165E]/80 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
