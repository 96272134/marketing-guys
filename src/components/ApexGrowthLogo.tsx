import React from 'react';

interface ApexGrowthLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  inverted?: boolean;
  showTagline?: boolean;
}

export const ApexGrowthLogo: React.FC<ApexGrowthLogoProps> = ({
  className = '',
  size = 'md',
  inverted = false,
  showTagline = true,
}) => {
  const iconSize = size === 'sm' ? 'w-8 h-8 rounded-lg' : size === 'lg' ? 'w-12 h-12 rounded-xl' : 'w-9 h-9 sm:w-10 sm:h-10 rounded-xl';
  const barWidth = size === 'sm' ? 'w-1.5' : 'w-2 sm:w-2.5';
  const titleSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg sm:text-xl';
  const subtitleSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs' : 'text-[10px] sm:text-[11px]';

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Blue Rounded Square with 3 Ascending White Growth Bars (exact icon from screenshot) */}
      <div className={`${iconSize} bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 flex items-end justify-center gap-1 p-2 shadow-md shadow-blue-500/20 shrink-0`}>
        <div className={`${barWidth} bg-white rounded-full h-[40%] transition-all`} />
        <div className={`${barWidth} bg-white rounded-full h-[70%] transition-all`} />
        <div className={`${barWidth} bg-white rounded-full h-[100%] transition-all`} />
      </div>

      {/* Brand Typography Lockup */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`${titleSize} font-extrabold tracking-tight ${inverted ? 'text-white' : 'text-slate-900'}`}>
            ApexGrowth
          </span>
          <span className="w-2 h-2 rounded-full bg-blue-500 inline-block shrink-0" />
        </div>
        {showTagline && (
          <span className={`${subtitleSize} font-bold tracking-wider uppercase mt-0.5 leading-tight ${inverted ? 'text-slate-400' : 'text-slate-400'}`}>
            GROW YOUR BUSINESS DIGITALLY
          </span>
        )}
      </div>
    </div>
  );
};
