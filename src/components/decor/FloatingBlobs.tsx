interface FloatingBlobsProps {
  opacity?: number;
}

export default function FloatingBlobs({ opacity = 0.35 }: FloatingBlobsProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Top right blob - cyan */}
      <div
        className="absolute top-10 right-10 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl animate-float-slow"
        style={{ opacity }}
      />
      
      {/* Bottom right blob - emerald */}
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-float-slower"
        style={{ 
          opacity,
          animationDelay: '2s',
        }}
      />
      
      {/* Top left blob - purple */}
      <div
        className="absolute top-20 left-20 w-72 h-72 bg-purple-500/25 rounded-full blur-3xl animate-float-slow"
        style={{ 
          opacity: opacity * 0.8,
          animationDelay: '4s',
        }}
      />
      
      {/* Middle blob - blue */}
      <div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/25 rounded-full blur-3xl animate-float-slower"
        style={{ 
          opacity: opacity * 0.7,
          animationDelay: '1s',
        }}
      />
    </div>
  );
}
