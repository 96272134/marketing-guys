import React from 'react';

interface MarketingGuysLogoProps {
  className?: string;
  variant?: 'emblem' | 'horizontal' | 'stacked';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  inverted?: boolean;
  showTagline?: boolean;
}

export const MarketingGuysLogo: React.FC<MarketingGuysLogoProps> = ({
  className = '',
  variant = 'horizontal',
  size = 'md',
  inverted = false,
  showTagline = true,
}) => {
  const uid = inverted ? 'mg-dark-theme' : 'mg-light-theme';

  // Responsive height classes
  const heightClass = 
    size === 'xs' ? 'h-8' :
    size === 'sm' ? 'h-9 sm:h-10' :
    size === 'md' ? 'h-11 sm:h-12' :
    size === 'lg' ? 'h-16 sm:h-20' :
    size === 'xl' ? 'h-24 sm:h-28' :
    'h-full';

  // =========================================================================
  // EMBLEM ONLY (The pure 3D MG transparent logo from your shared image)
  // =========================================================================
  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center justify-center select-none bg-transparent ${className}`}>
        <svg
          viewBox="0 0 500 500"
          className={`${heightClass} w-auto max-w-full`}
          style={{ overflow: 'visible', background: 'transparent' }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* 3D Blue Gradients */}
            <linearGradient id={`${uid}-emb-blue-main`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0075FF" />
              <stop offset="50%" stopColor="#0052D4" />
              <stop offset="100%" stopColor="#00359E" />
            </linearGradient>

            <linearGradient id={`${uid}-emb-blue-light`} x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#2E8BFF" />
              <stop offset="100%" stopColor="#005BEA" />
            </linearGradient>

            <linearGradient id={`${uid}-emb-blue-dark`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#003EAC" />
              <stop offset="100%" stopColor="#001F66" />
            </linearGradient>

            <linearGradient id={`${uid}-emb-blue-shadow`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#001D5E" />
              <stop offset="100%" stopColor="#0047BA" />
            </linearGradient>

            {/* Silver Metallic 3D Gradients for G */}
            <linearGradient id={`${uid}-emb-silver-top`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#F8FAFC" />
              <stop offset="70%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>

            <linearGradient id={`${uid}-emb-silver-bevel`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>

            {/* Chart & Arrow Gradients */}
            <linearGradient id={`${uid}-emb-chart`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00B0FF" />
              <stop offset="100%" stopColor="#0052D4" />
            </linearGradient>

            <linearGradient id={`${uid}-emb-arrow`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#005BEA" />
              <stop offset="100%" stopColor="#00B0FF" />
            </linearGradient>

            <filter id={`${uid}-emb-shadow`} x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor={inverted ? "#000000" : "#0A255C"} floodOpacity={inverted ? "0.4" : "0.15"} />
            </filter>
          </defs>

          {/* Transparent 3D MG Monogram Group */}
          <g filter={`url(#${uid}-emb-shadow)`} transform="translate(10, 15)">
            {/* Letter M Body */}
            <path d="M 60 45 L 105 45 L 105 315 L 60 315 Z" fill={`url(#${uid}-emb-blue-dark)`} />
            <path d="M 60 45 L 195 200 L 195 315 L 105 315 L 105 45 Z" fill={`url(#${uid}-emb-blue-main)`} />
            <path d="M 195 200 L 380 25 L 415 62 L 275 315 L 195 315 Z" fill={`url(#${uid}-emb-blue-light)`} />
            <path d="M 195 200 L 250 255 L 195 315 Z" fill={`url(#${uid}-emb-blue-dark)`} />
            <path d="M 225 260 L 295 260 L 295 315 L 225 315 Z" fill={`url(#${uid}-emb-blue-shadow)`} />

            {/* Growth Bar Chart */}
            <rect x="68" y="255" width="18" height="60" rx="3" fill={`url(#${uid}-emb-chart)`} stroke="#FFFFFF" strokeWidth="2" />
            <rect x="94" y="220" width="18" height="95" rx="3" fill={`url(#${uid}-emb-chart)`} stroke="#FFFFFF" strokeWidth="2" />
            <rect x="120" y="188" width="18" height="127" rx="3" fill={`url(#${uid}-emb-chart)`} stroke="#FFFFFF" strokeWidth="2" />

            {/* Ascending Swoosh Arrow */}
            <path 
              d="M 42 295 C 42 295 56 342 150 340 C 205 338 250 300 276 256 L 260 256 L 286 232 L 286 266 L 272 258 C 250 296 206 332 148 332 C 56 332 42 295 42 295 Z" 
              fill={`url(#${uid}-emb-arrow)`} 
              stroke="#FFFFFF" 
              strokeWidth="1.5" 
            />
            <path d="M 260 244 L 287 228 L 285 260 L 272 254 Z" fill={`url(#${uid}-emb-blue-light)`} stroke="#FFFFFF" strokeWidth="1.5" />

            {/* Letter G - Metallic Silver Upper Arc */}
            <path 
              d="M 295 62 C 350 18 435 22 488 68 C 510 88 525 115 530 144 L 470 160 C 465 142 455 125 438 112 C 410 86 362 86 330 114 C 310 132 298 162 298 192 C 282 162 280 100 295 62 Z" 
              fill={`url(#${uid}-emb-silver-top)`} 
            />
            <path d="M 295 62 C 350 18 435 22 488 68 L 478 78 C 430 38 358 32 308 72 Z" fill="#FFFFFF" opacity="0.9" />
            <path 
              d="M 330 114 C 362 86 410 86 438 112 C 455 125 465 142 470 160 L 450 164 C 444 150 432 138 418 126 C 394 108 354 110 328 132 Z" 
              fill={`url(#${uid}-emb-silver-bevel)`} 
            />

            {/* Letter G - Royal Blue Lower Body & Hook */}
            <path 
              d="M 298 192 C 302 235 334 275 384 286 C 438 298 494 276 528 232 C 540 216 546 198 548 178 L 420 178 L 420 208 L 492 208 C 480 238 452 256 414 256 C 374 256 342 228 336 192 Z" 
              fill={`url(#${uid}-emb-blue-main)`} 
            />
            <path d="M 420 178 L 548 178 L 548 208 L 420 208 Z" fill={`url(#${uid}-emb-blue-light)`} />
            <path d="M 298 192 L 298 315 L 384 315 L 384 286 C 334 275 302 235 298 192 Z" fill={`url(#${uid}-emb-blue-dark)`} />
          </g>
        </svg>
      </div>
    );
  }

  // =========================================================================
  // STACKED LAYOUT (Exact 1:1 format of the reference image)
  // =========================================================================
  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center justify-center select-none bg-transparent ${className}`}>
        <svg
          viewBox="0 0 500 480"
          className={`${heightClass} w-auto max-w-full`}
          style={{ overflow: 'visible', background: 'transparent' }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`${uid}-stk-blue-main`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0075FF" />
              <stop offset="50%" stopColor="#0052D4" />
              <stop offset="100%" stopColor="#00359E" />
            </linearGradient>

            <linearGradient id={`${uid}-stk-blue-light`} x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#2E8BFF" />
              <stop offset="100%" stopColor="#005BEA" />
            </linearGradient>

            <linearGradient id={`${uid}-stk-blue-dark`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#003EAC" />
              <stop offset="100%" stopColor="#001F66" />
            </linearGradient>

            <linearGradient id={`${uid}-stk-silver-top`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#F8FAFC" />
              <stop offset="70%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>

            <linearGradient id={`${uid}-stk-silver-bevel`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>

            <linearGradient id={`${uid}-stk-chart`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00B0FF" />
              <stop offset="100%" stopColor="#0052D4" />
            </linearGradient>

            <linearGradient id={`${uid}-stk-arrow`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#005BEA" />
              <stop offset="100%" stopColor="#00B0FF" />
            </linearGradient>

            <filter id={`${uid}-stk-shadow`} x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor={inverted ? "#000000" : "#0A255C"} floodOpacity={inverted ? "0.35" : "0.14"} />
            </filter>
          </defs>

          {/* Emblem: MG Centered */}
          <g filter={`url(#${uid}-stk-shadow)`} transform="translate(15, 0)">
            <path d="M 50 40 L 90 40 L 90 270 L 50 270 Z" fill={`url(#${uid}-stk-blue-dark)`} />
            <path d="M 50 40 L 165 175 L 165 270 L 90 270 L 90 40 Z" fill={`url(#${uid}-stk-blue-main)`} />
            <path d="M 165 175 L 325 25 L 355 55 L 235 270 L 165 270 Z" fill={`url(#${uid}-stk-blue-light)`} />
            <path d="M 165 175 L 210 220 L 165 270 Z" fill={`url(#${uid}-stk-blue-dark)`} />
            <path d="M 190 225 L 250 225 L 250 270 L 190 270 Z" fill={`url(#${uid}-stk-blue-dark)`} />

            <rect x="58" y="218" width="16" height="52" rx="2.5" fill={`url(#${uid}-stk-chart)`} stroke="#FFFFFF" strokeWidth="1.8" />
            <rect x="80" y="190" width="16" height="80" rx="2.5" fill={`url(#${uid}-stk-chart)`} stroke="#FFFFFF" strokeWidth="1.8" />
            <rect x="102" y="162" width="16" height="108" rx="2.5" fill={`url(#${uid}-stk-chart)`} stroke="#FFFFFF" strokeWidth="1.8" />

            <path 
              d="M 36 252 C 36 252 48 292 128 290 C 174 288 214 256 236 218 L 222 218 L 244 198 L 244 226 L 232 220 C 214 252 176 284 126 284 C 48 284 36 252 36 252 Z" 
              fill={`url(#${uid}-stk-arrow)`} 
              stroke="#FFFFFF" 
              strokeWidth="1.4" 
            />
            <path d="M 222 208 L 245 194 L 243 222 L 232 216 Z" fill={`url(#${uid}-stk-blue-light)`} stroke="#FFFFFF" strokeWidth="1.4" />

            <path 
              d="M 252 55 C 298 18 368 22 412 60 C 432 78 444 100 448 125 L 398 138 C 394 124 386 110 372 98 C 348 76 308 76 280 100 C 264 116 254 142 254 168 C 240 142 238 88 252 55 Z" 
              fill={`url(#${uid}-stk-silver-top)`} 
            />
            <path d="M 252 55 C 298 18 368 22 412 60 L 404 68 C 364 34 302 28 260 64 Z" fill="#FFFFFF" opacity="0.9" />
            <path 
              d="M 280 100 C 308 76 348 76 372 98 C 386 110 394 124 398 138 L 382 142 C 376 130 366 120 354 110 C 334 94 300 96 278 116 Z" 
              fill={`url(#${uid}-stk-silver-bevel)`} 
            />

            <path 
              d="M 254 168 C 258 204 284 238 326 248 C 372 258 418 240 446 204 C 456 190 462 174 464 156 L 358 156 L 358 182 L 418 182 C 408 206 384 222 352 222 C 318 222 292 198 286 168 Z" 
              fill={`url(#${uid}-stk-blue-main)`} 
            />
            <path d="M 358 156 L 464 156 L 464 182 L 358 182 Z" fill={`url(#${uid}-stk-blue-light)`} />
            <path d="M 254 168 L 254 270 L 326 270 L 326 248 C 284 238 258 204 254 168 Z" fill={`url(#${uid}-stk-blue-dark)`} />
          </g>

          {/* Typography Underneath */}
          <text 
            x="250" 
            y="340" 
            textAnchor="middle" 
            fontFamily="'Plus Jakarta Sans', 'Outfit', system-ui, -apple-system, sans-serif" 
            fontSize="38" 
            fontWeight="900" 
            letterSpacing="4" 
            fill={inverted ? "#FFFFFF" : "#0B2556"}
          >
            MARKETING GUYS
          </text>

          {/* Divider with Center Dot */}
          <g transform="translate(0, 366)">
            <line x1="90" y1="0" x2="235" y2="0" stroke={inverted ? "#38BDF8" : "#0B3A75"} strokeWidth="2" strokeLinecap="round" opacity="0.85" />
            <circle cx="250" cy="0" r="4" fill={inverted ? "#38BDF8" : "#0B3A75"} />
            <line x1="265" y1="0" x2="410" y2="0" stroke={inverted ? "#38BDF8" : "#0B3A75"} strokeWidth="2" strokeLinecap="round" opacity="0.85" />
          </g>

          <text 
            x="250" 
            y="400" 
            textAnchor="middle" 
            fontFamily="'Plus Jakarta Sans', 'Outfit', system-ui, -apple-system, sans-serif" 
            fontSize="15" 
            fontWeight="800" 
            letterSpacing="3" 
            fill={inverted ? "#7DD3FC" : "#0B3A75"}
          >
            DIGITAL MARKETING SIMPLIFIED.
          </text>

          <text 
            x="250" 
            y="426" 
            textAnchor="middle" 
            fontFamily="'Plus Jakarta Sans', 'Outfit', system-ui, -apple-system, sans-serif" 
            fontSize="12.5" 
            fontWeight="700" 
            letterSpacing="4" 
            fill={inverted ? "#94A3B8" : "#475569"}
          >
            STRATEGY. GROWTH. RESULTS.
          </text>
        </svg>
      </div>
    );
  }

  // =========================================================================
  // HORIZONTAL HEADER LAYOUT (Clean, balanced, transparent background)
  // =========================================================================
  return (
    <div className={`inline-flex items-center select-none bg-transparent ${className}`}>
      <svg
        viewBox="0 0 540 140"
        className={`${heightClass} w-auto max-w-full drop-shadow-xs transition-transform duration-200`}
        style={{ overflow: 'visible', background: 'transparent' }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`${uid}-hz-blue-main`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0075FF" />
            <stop offset="50%" stopColor="#0052D4" />
            <stop offset="100%" stopColor="#00359E" />
          </linearGradient>

          <linearGradient id={`${uid}-hz-blue-light`} x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#2E8BFF" />
            <stop offset="100%" stopColor="#005BEA" />
          </linearGradient>

          <linearGradient id={`${uid}-hz-blue-dark`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#003EAC" />
            <stop offset="100%" stopColor="#001F66" />
          </linearGradient>

          <linearGradient id={`${uid}-hz-silver-top`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#F8FAFC" />
            <stop offset="70%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>

          <linearGradient id={`${uid}-hz-silver-bevel`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          <linearGradient id={`${uid}-hz-chart`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00B0FF" />
            <stop offset="100%" stopColor="#0052D4" />
          </linearGradient>

          <linearGradient id={`${uid}-hz-arrow`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#005BEA" />
            <stop offset="100%" stopColor="#00B0FF" />
          </linearGradient>

          <filter id={`${uid}-hz-shadow`} x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor={inverted ? "#000000" : "#0A255C"} floodOpacity={inverted ? "0.35" : "0.12"} />
          </filter>
        </defs>

        {/* ========== LEFT EMBLEM: SCALED 3D MONOGRAM ========== */}
        <g transform="translate(6, 4) scale(0.46)" filter={`url(#${uid}-hz-shadow)`}>
          <path d="M 50 40 L 90 40 L 90 270 L 50 270 Z" fill={`url(#${uid}-hz-blue-dark)`} />
          <path d="M 50 40 L 165 175 L 165 270 L 90 270 L 90 40 Z" fill={`url(#${uid}-hz-blue-main)`} />
          <path d="M 165 175 L 325 25 L 355 55 L 235 270 L 165 270 Z" fill={`url(#${uid}-hz-blue-light)`} />
          <path d="M 165 175 L 210 220 L 165 270 Z" fill={`url(#${uid}-hz-blue-dark)`} />
          <path d="M 190 225 L 250 225 L 250 270 L 190 270 Z" fill={`url(#${uid}-hz-blue-dark)`} />

          <rect x="58" y="218" width="16" height="52" rx="2.5" fill={`url(#${uid}-hz-chart)`} stroke="#FFFFFF" strokeWidth="1.8" />
          <rect x="80" y="190" width="16" height="80" rx="2.5" fill={`url(#${uid}-hz-chart)`} stroke="#FFFFFF" strokeWidth="1.8" />
          <rect x="102" y="162" width="16" height="108" rx="2.5" fill={`url(#${uid}-hz-chart)`} stroke="#FFFFFF" strokeWidth="1.8" />

          <path 
            d="M 36 252 C 36 252 48 292 128 290 C 174 288 214 256 236 218 L 222 218 L 244 198 L 244 226 L 232 220 C 214 252 176 284 126 284 C 48 284 36 252 36 252 Z" 
            fill={`url(#${uid}-hz-arrow)`} 
            stroke="#FFFFFF" 
            strokeWidth="1.4" 
          />
          <path d="M 222 208 L 245 194 L 243 222 L 232 216 Z" fill={`url(#${uid}-hz-blue-light)`} stroke="#FFFFFF" strokeWidth="1.4" />

          <path 
            d="M 252 55 C 298 18 368 22 412 60 C 432 78 444 100 448 125 L 398 138 C 394 124 386 110 372 98 C 348 76 308 76 280 100 C 264 116 254 142 254 168 C 240 142 238 88 252 55 Z" 
            fill={`url(#${uid}-hz-silver-top)`} 
          />
          <path d="M 252 55 C 298 18 368 22 412 60 L 404 68 C 364 34 302 28 260 64 Z" fill="#FFFFFF" opacity="0.9" />
          <path 
            d="M 280 100 C 308 76 348 76 372 98 C 386 110 394 124 398 138 L 382 142 C 376 130 366 120 354 110 C 334 94 300 96 278 116 Z" 
            fill={`url(#${uid}-hz-silver-bevel)`} 
          />

          <path 
            d="M 254 168 C 258 204 284 238 326 248 C 372 258 418 240 446 204 C 456 190 462 174 464 156 L 358 156 L 358 182 L 418 182 C 408 206 384 222 352 222 C 318 222 292 198 286 168 Z" 
            fill={`url(#${uid}-hz-blue-main)`} 
          />
          <path d="M 358 156 L 464 156 L 464 182 L 358 182 Z" fill={`url(#${uid}-hz-blue-light)`} />
          <path d="M 254 168 L 254 270 L 326 270 L 326 248 C 284 238 258 204 254 168 Z" fill={`url(#${uid}-hz-blue-dark)`} />
        </g>

        {/* ========== RIGHT TYPOGRAPHY LOCKUP ========== */}
        <g transform="translate(232, 16)">
          <text 
            x="0" 
            y="40" 
            fontFamily="'Plus Jakarta Sans', 'Outfit', system-ui, -apple-system, sans-serif" 
            fontSize="34" 
            fontWeight="900" 
            letterSpacing="2.5" 
            fill={inverted ? "#FFFFFF" : "#0B2556"}
          >
            MARKETING GUYS
          </text>

          {showTagline && (
            <>
              <g transform="translate(0, 58)">
                <line x1="0" y1="0" x2="120" y2="0" stroke={inverted ? "#38BDF8" : "#0B3A75"} strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
                <circle cx="130" cy="0" r="3" fill={inverted ? "#38BDF8" : "#0B3A75"} />
                <line x1="140" y1="0" x2="260" y2="0" stroke={inverted ? "#38BDF8" : "#0B3A75"} strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
              </g>

              <text 
                x="0" 
                y="84" 
                fontFamily="'Plus Jakarta Sans', 'Outfit', system-ui, -apple-system, sans-serif" 
                fontSize="13.5" 
                fontWeight="800" 
                letterSpacing="1.8" 
                fill={inverted ? "#7DD3FC" : "#0B3A75"}
              >
                DIGITAL MARKETING SIMPLIFIED.
              </text>

              <text 
                x="0" 
                y="106" 
                fontFamily="'Plus Jakarta Sans', 'Outfit', system-ui, -apple-system, sans-serif" 
                fontSize="11.5" 
                fontWeight="700" 
                letterSpacing="2.5" 
                fill={inverted ? "#94A3B8" : "#475569"}
              >
                STRATEGY. GROWTH. RESULTS.
              </text>
            </>
          )}
        </g>
      </svg>
    </div>
  );
};
