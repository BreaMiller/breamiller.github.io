import React, { useRef, useEffect } from 'react';

const WorldMap = ({ 
  dots = [], 
  lineColor = "#ec4899" 
}) => {
  const svgRef = useRef(null);

  // Simple world map SVG path (simplified continents)
  const worldMapPath = `
    M 158 206 C 158 206 159 204 162 205 C 165 206 168 208 171 207 C 174 206 177 204 180 205 C 183 206 186 208 189 207 C 192 206 195 204 198 205 C 201 206 204 208 207 207 C 210 206 213 204 216 205 C 219 206 222 208 225 207 C 228 206 231 204 234 205 C 237 206 240 208 243 207 C 246 206 249 204 252 205 C 255 206 258 208 261 207 C 264 206 267 204 270 205 C 273 206 276 208 279 207 C 282 206 285 204 288 205 C 291 206 294 208 297 207 C 300 206 303 204 306 205 C 309 206 312 208 315 207 C 318 206 321 204 324 205 C 327 206 330 208 333 207 C 336 206 339 204 342 205 C 345 206 348 208 351 207 C 354 206 357 204 360 205 C 363 206 366 208 369 207 C 372 206 375 204 378 205 C 381 206 384 208 387 207 C 390 206 393 204 396 205 C 399 206 402 208 405 207 C 408 206 411 204 414 205 C 417 206 420 208 423 207 C 426 206 429 204 432 205 C 435 206 438 208 441 207 C 444 206 447 204 450 205 C 453 206 456 208 459 207 C 462 206 465 204 468 205 C 471 206 474 208 477 207 C 480 206 483 204 486 205 C 489 206 492 208 495 207 C 498 206 501 204 504 205 C 507 206 510 208 513 207 C 516 206 519 204 522 205 C 525 206 528 208 531 207 C 534 206 537 204 540 205 C 543 206 546 208 549 207 C 552 206 555 204 558 205 C 561 206 564 208 567 207 C 570 206 573 204 576 205 C 579 206 582 208 585 207 C 588 206 591 204 594 205 C 597 206 600 208 603 207 C 606 206 609 204 612 205 C 615 206 618 208 621 207 C 624 206 627 204 630 205 C 633 206 636 208 639 207
  `;

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] bg-gradient-to-br from-gray-900 to-black rounded-lg relative overflow-hidden">
      {/* World Map Background */}
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0"
      >
        {/* Grid pattern */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(236, 72, 153, 0.1)" strokeWidth="0.5"/>
          </pattern>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Grid background */}
        <rect width="100%" height="100%" fill="url(#grid)" opacity="0.3" />
        
        {/* Simplified world continents as dots */}
        {Array.from({ length: 200 }, (_, i) => {
          const x = (i % 40) * 20 + Math.random() * 10;
          const y = Math.floor(i / 40) * 20 + Math.random() * 10;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="0.8"
              fill="rgba(255, 255, 255, 0.2)"
              opacity={Math.random() * 0.5 + 0.2}
            />
          );
        })}

        {/* Connection lines */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="2"
                style={{
                  animation: `drawPath 2s ease-out ${i * 0.5}s forwards`,
                  strokeDasharray: '1000',
                  strokeDashoffset: '1000'
                }}
              />
            </g>
          );
        })}

        {/* Connection points */}
        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="3"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="3"
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="3"
                  to="12"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="3"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="3"
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="3"
                  to="12"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        ))}
      </svg>

      <style jsx>{`
        @keyframes drawPath {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default WorldMap;