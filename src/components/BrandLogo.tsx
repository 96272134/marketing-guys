import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  inverted?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  inverted = false,
}) => {
  const iconDimensions = 
    size === 'sm' ? 'w-12 h-12' :               // Small size ke liye (48px)
    size === 'lg' ? 'w-24 h-24' :               // Large size ke liye (96px)
    size === 'xl' ? 'w-28 h-28' :               // Extra large size ke liye (112px)
    'w-16 h-16 sm:w-20 sm:h-20';                // Default size (Mobile par 64px, badi screen par 80px)

  const titleSize = 
    size === 'sm' ? 'text-base' :
    size === 'lg' ? 'text-2xl' :
    size === 'xl' ? 'text-3xl' :
    'text-lg sm:text-xl';

  const subtitleSize = 
    size === 'sm' ? 'text-[8.5px]' :
    size === 'lg' ? 'text-xs' :
    size === 'xl' ? 'text-sm' :
    'text-[10px] sm:text-[10.5px]';

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none bg-transparent shrink-0 flex-shrink-0 ${className}`}>
      
      {/* Aapka Naya MG Logo */}
      <img 
        src="/mg-logo.png" 
        alt="MG Logo" 
        className={`${iconDimensions} object-contain shrink-0`}
      />

      {/* Brand Text (Aap isko apne hisaab se change kar sakte hain) */}
      {showText && (
        <div className="flex flex-col text-left justify-center shrink-0">
          <div className="flex items-center leading-none">
            <span className={`${titleSize} font-extrabold tracking-tight ${inverted ? 'text-white' : 'text-slate-900'}`}>
              MarketingGuys
            </span>
          </div>
          <span className={`${subtitleSize} font-bold tracking-wider uppercase mt-1 leading-tight ${inverted ? 'text-slate-400' : 'text-slate-500'}`}>
            GROW YOUR BUSINESS DIGITALLY
          </span>
        </div>
      )}
    </div>
  );
};