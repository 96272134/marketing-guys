import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1024" height="1024" fill="none">
  <defs>
    <!-- 3D Blue Facet Main -->
    <linearGradient id="blue-main" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0070F3" />
      <stop offset="40%" stop-color="#0055E6" />
      <stop offset="100%" stop-color="#00359E" />
    </linearGradient>

    <!-- 3D Blue Light / Top Face -->
    <linearGradient id="blue-light" x1="0%" y1="0%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="30%" stop-color="#0080FF" />
      <stop offset="100%" stop-color="#0055E6" />
    </linearGradient>

    <!-- 3D Blue Dark Shadow -->
    <linearGradient id="blue-dark" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#003EAC" />
      <stop offset="100%" stop-color="#00184D" />
    </linearGradient>

    <!-- 3D Blue Middle Shadow Facet -->
    <linearGradient id="blue-mid-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#002E8A" />
      <stop offset="100%" stop-color="#001440" />
    </linearGradient>

    <!-- Metallic Chrome Silver 3D Gradient for G Ribbon -->
    <linearGradient id="silver-chrome" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="25%" stop-color="#F8FAFC" />
      <stop offset="60%" stop-color="#E2E8F0" />
      <stop offset="90%" stop-color="#94A3B8" />
      <stop offset="100%" stop-color="#64748B" />
    </linearGradient>

    <!-- Silver Inner Bevel Shading -->
    <linearGradient id="silver-bevel" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="45%" stop-color="#CBD5E1" />
      <stop offset="100%" stop-color="#475569" />
    </linearGradient>

    <!-- Bar Chart Gradient -->
    <linearGradient id="chart-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#00C8FF" />
      <stop offset="100%" stop-color="#0055E6" />
    </linearGradient>

    <!-- Ascending Swoosh Arrow Gradient -->
    <linearGradient id="arrow-grad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0055E6" />
      <stop offset="50%" stop-color="#0090FF" />
      <stop offset="100%" stop-color="#00D2FF" />
    </linearGradient>

    <filter id="soft-shadow" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0052D4" flood-opacity="0.28" />
    </filter>
  </defs>

  <g transform="translate(6, 6)" filter="url(#soft-shadow)">
    <!-- === LETTER M: 3D Blue Geometry === -->
    <!-- Left Column Under-Shadow -->
    <path d="M 90 140 L 135 140 L 135 375 L 90 375 Z" fill="url(#blue-dark)" />
    
    <!-- Left Arm of M -->
    <path d="M 90 140 L 195 275 L 195 375 L 135 375 L 135 140 Z" fill="url(#blue-main)" />

    <!-- Right Ascending Arrow Stroke of M -->
    <path d="M 195 275 L 340 130 L 375 165 L 255 375 L 195 375 Z" fill="url(#blue-light)" />
    
    <!-- Center Valley Shadow -->
    <path d="M 195 275 L 235 320 L 195 375 Z" fill="url(#blue-mid-shadow)" />
    
    <!-- Base block -->
    <path d="M 230 320 L 275 320 L 275 375 L 230 375 Z" fill="url(#blue-dark)" />

    <!-- === GROWTH BAR CHART === -->
    <rect x="98" y="325" width="16" height="50" rx="2.5" fill="url(#chart-grad)" stroke="#FFFFFF" stroke-width="2" />
    <rect x="120" y="295" width="16" height="80" rx="2.5" fill="url(#chart-grad)" stroke="#FFFFFF" stroke-width="2" />
    <rect x="142" y="265" width="16" height="110" rx="2.5" fill="url(#chart-grad)" stroke="#FFFFFF" stroke-width="2" />

    <!-- === ASCENDING SWOOSH CURVE & ARROWHEAD === -->
    <path 
      d="M 75 365 C 75 365 88 410 160 405 C 205 402 240 370 262 332 L 248 332 L 272 308 L 272 342 L 258 334 C 238 368 198 398 152 398 C 85 398 75 365 75 365 Z" 
      fill="url(#arrow-grad)" 
      stroke="#FFFFFF" 
      stroke-width="1.8" 
    />
    <path d="M 248 322 L 272 308 L 270 336 L 258 330 Z" fill="url(#blue-light)" stroke="#FFFFFF" stroke-width="1.8" />

    <!-- === LETTER G: Silver Chrome Ribbon & Royal Blue Body === -->
    <!-- G - Silver Metallic Upper Arc -->
    <path 
      d="M 255 165 C 300 125 375 128 420 170 C 440 188 452 212 456 238 L 406 250 C 402 236 394 222 380 210 C 356 188 316 188 288 212 C 272 228 262 254 262 280 C 248 254 246 200 255 165 Z" 
      fill="url(#silver-chrome)" 
    />
    <!-- G - Silver Specular Top Edge -->
    <path d="M 255 165 C 300 125 375 128 420 170 L 412 178 C 372 144 310 138 268 174 Z" fill="#FFFFFF" opacity="0.95" />
    
    <!-- G - Inner Silver Bevel -->
    <path 
      d="M 288 212 C 316 188 356 188 380 210 C 394 222 402 236 406 250 L 390 254 C 384 242 374 232 362 222 C 342 206 308 208 286 228 Z" 
      fill="url(#silver-bevel)" 
    />

    <!-- G - Inner Blue Loop -->
    <path 
      d="M 292 235 C 312 215 342 215 362 232 C 372 242 378 252 382 265 L 368 268 C 364 258 358 250 350 242 C 336 230 312 230 298 245 Z" 
      fill="url(#blue-main)" 
    />

    <!-- G - Royal Blue Lower Body & Crossbar -->
    <path 
      d="M 262 280 C 266 316 292 350 334 360 C 380 370 426 352 454 316 C 464 302 470 286 472 268 L 366 268 L 366 294 L 426 294 C 416 318 392 334 360 334 C 326 334 300 310 294 280 Z" 
      fill="url(#blue-main)" 
    />
    <path d="M 366 268 L 472 268 L 472 294 L 366 294 Z" fill="url(#blue-light)" />
    
    <path d="M 262 280 L 262 375 L 334 375 L 334 360 C 292 350 266 316 262 280 Z" fill="url(#blue-dark)" />

    <!-- G - Bottom Tail Swoosh -->
    <path 
      d="M 300 380 C 350 390 405 378 448 350 C 465 338 478 322 485 305 L 475 305 C 466 320 454 332 438 342 C 398 365 348 374 300 380 Z" 
      fill="url(#blue-light)" 
    />
  </g>
</svg>`;

async function generate() {
  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // 1. Write SVG files to public
  fs.writeFileSync(path.join(publicDir, 'mg-logo.svg'), svgContent);
  fs.writeFileSync(path.join(publicDir, 'logo.svg'), svgContent);

  // 2. Render high resolution PNG with transparency
  const svgBuffer = Buffer.from(svgContent);
  
  await sharp(svgBuffer)
    .resize(1024, 1024)
    .png()
    .toFile(path.join(publicDir, 'mg-logo.png'));

  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'logo.png'));

  console.log('Successfully generated public/mg-logo.png, public/mg-logo.svg, public/logo.png, and public/logo.svg with 100% transparent background!');
}

generate().catch(err => {
  console.error('Error generating logo files:', err);
  process.exit(1);
});
