import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'default' | 'inverted' | 'hero';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'default',
  showTagline = false,
}) => {
  const logoCandidates = [
    '/images/wecrafty-logo.png',
    '/images/logo.png',
    '/logo.png',
  ];
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);
  const [allFailed, setAllFailed] = useState(false);

  // Inverted is used when logo is placed on dark navy background
  const textColor = variant === 'inverted' ? 'text-white' : 'text-[#17165E]';
  const subtextColor = variant === 'inverted' ? 'text-white/70' : 'text-[#17165E]/70';

  const handleImageError = () => {
    if (currentCandidateIndex < logoCandidates.length - 1) {
      setCurrentCandidateIndex(prev => prev + 1);
    } else {
      setAllFailed(true);
    }
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {!allFailed ? (
        <div
          className={`flex items-center justify-center ${
            variant === 'inverted'
              ? 'p-1.5 bg-white rounded-md shadow-xs'
              : ''
          }`}
        >
          <img
            src={logoCandidates[currentCandidateIndex]}
            alt="Wecrafty — Your Website, Our Craft"
            className={
              variant === 'hero'
                ? 'h-36 sm:h-44 w-auto max-w-[280px] object-contain drop-shadow-xs'
                : variant === 'inverted'
                ? 'h-9 md:h-10 w-auto object-contain'
                : 'h-10 md:h-11 w-auto object-contain'
            }
            onError={handleImageError}
            loading="eager"
          />
        </div>
      ) : (
        /* Neutral box fallback when logo image is absent */
        <div
          className={`flex items-center gap-2.5 px-3 py-1.5 rounded-md border ${
            variant === 'inverted'
              ? 'bg-[#17165E]/80 border-white/20'
              : 'bg-[#F6F8FC] border-slate-200'
          }`}
          title="Place official logo at public/images/wecrafty-logo.png"
        >
          <div className="flex gap-1 items-center" aria-hidden="true">
            <span className="w-2.5 h-2.5 bg-[#1685F7] rounded-xs" />
            <span className="w-2.5 h-2.5 bg-[#8739E8] rounded-xs" />
          </div>
          <span className={`font-display font-bold text-base md:text-lg tracking-tight ${textColor}`}>
            Wecrafty
          </span>
        </div>
      )}

      {showTagline && (
        <span
          className={`hidden sm:inline-block text-xs font-medium pl-3 border-l ${
            variant === 'inverted' ? 'border-white/20' : 'border-slate-200'
          } ${subtextColor}`}
        >
          Your Website, Our Craft.
        </span>
      )}
    </div>
  );
};
