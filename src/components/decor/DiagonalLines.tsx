interface DiagonalLinesProps {
  opacity?: number;
  strokeWidth?: number;
}

export default function DiagonalLines({ 
  opacity = 0.3,
  strokeWidth = 0.75 
}: DiagonalLinesProps) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
      style={{ opacity }}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="line-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      
      {/* Diagonal line 1 - top left to middle */}
      <line
        x1="0"
        y1="0"
        x2="30%"
        y2="40%"
        stroke="url(#line-gradient)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      
      {/* Diagonal line 2 - middle to bottom right */}
      <line
        x1="70%"
        y1="60%"
        x2="100%"
        y2="100%"
        stroke="url(#line-gradient)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      
      {/* Diagonal line 3 - shorter accent line */}
      <line
        x1="20%"
        y1="80%"
        x2="35%"
        y2="95%"
        stroke="url(#line-gradient)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeOpacity="0.5"
      />
      
      {/* Diagonal line 4 - top right to middle */}
      <line
        x1="100%"
        y1="0"
        x2="75%"
        y2="25%"
        stroke="url(#line-gradient-2)"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
      />
      
      {/* Diagonal line 5 - middle left to bottom */}
      <line
        x1="10%"
        y1="50%"
        x2="25%"
        y2="85%"
        stroke="url(#line-gradient)"
        strokeWidth={strokeWidth * 0.9}
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
      
      {/* Diagonal line 6 - cross accent */}
      <line
        x1="60%"
        y1="20%"
        x2="85%"
        y2="45%"
        stroke="url(#line-gradient-2)"
        strokeWidth={strokeWidth * 0.7}
        strokeLinecap="round"
        strokeOpacity="0.6"
      />
      
      {/* Geometric triangle */}
      <polygon
        points="85,15 95,35 75,35"
        fill="none"
        stroke="url(#line-gradient)"
        strokeWidth={strokeWidth * 0.8}
        opacity="0.4"
      />
      
      {/* Geometric square */}
      <rect
        x="15"
        y="70"
        width="20"
        height="20"
        fill="none"
        stroke="url(#line-gradient-2)"
        strokeWidth={strokeWidth * 0.6}
        opacity="0.3"
        transform="rotate(15 25 80)"
      />
      
      {/* Small circle */}
      <circle
        cx="80"
        cy="75"
        r="8"
        fill="none"
        stroke="url(#line-gradient)"
        strokeWidth={strokeWidth * 0.7}
        opacity="0.35"
      />
    </svg>
  );
}
