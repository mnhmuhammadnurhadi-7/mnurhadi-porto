import { Settings, Database, Workflow, Code, Cpu, Layers, GitBranch, Zap } from 'lucide-react';

interface FloatingIconsProps {
  opacity?: number;
  iconSize?: number;
}

export default function FloatingIcons({ 
  opacity = 1.0,
  iconSize = 32 
}: FloatingIconsProps) {
  const icons = [
    { Icon: Settings, size: iconSize },
    { Icon: Database, size: iconSize * 1.3 },
    { Icon: Workflow, size: iconSize * 1.1 },
    { Icon: Code, size: iconSize * 0.9 },
    { Icon: Cpu, size: iconSize * 1.2 },
    { Icon: Layers, size: iconSize * 1.0 },
    { Icon: GitBranch, size: iconSize * 1.1 },
    { Icon: Zap, size: iconSize * 0.85 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
      {icons.map((icon, index) => {
        const colors = [
          'text-blue-400',
          'text-purple-400', 
          'text-emerald-400',
          'text-cyan-400',
          'text-pink-400',
          'text-orange-400',
          'text-yellow-400',
          'text-indigo-400',
        ];
        const colorClass = colors[index % colors.length];
        
        // Generate random positions avoiding center area
        const randomTop = Math.random() * 80 + 10; // 10-90%
        const randomLeft = Math.random() > 0.5 
          ? Math.random() * 30 + 5 // Left side: 5-35%
          : Math.random() * 30 + 65; // Right side: 65-95%
        const randomDelay = Math.random() * 4;
        
        return (
          <div
            key={index}
            className="absolute animate-float-icon"
            style={{
              top: `${randomTop}%`,
              left: `${randomLeft}%`,
              opacity: opacity * (0.8 + Math.random() * 0.4),
              animationDelay: `${randomDelay}s`,
              filter: 'drop-shadow(0 0 8px currentColor)',
            }}
          >
            <icon.Icon 
              size={icon.size} 
              className={colorClass}
              strokeWidth={2}
            />
          </div>
        );
      })}
    </div>
  );
}
