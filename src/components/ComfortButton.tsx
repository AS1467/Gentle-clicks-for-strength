
import React from 'react';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface ComfortButtonProps {
  onClick: () => void;
  count: number;
  className?: string;
}

const ComfortButton = ({ onClick, count, className }: ComfortButtonProps) => {
  const { theme } = useTheme();
  
  return (
    <button
      onClick={onClick}
      className={cn(
        "btn-gentle relative group animate-scale",
        `btn-${theme}`,
        className
      )}
      aria-label="Get support message"
    >
      <div className="flex items-center gap-2 z-10 relative">
        <Heart className="w-5 h-5" />
        <span className="font-medium tracking-tight">
          Gentle Reminder {count > 0 ? `(${count})` : ''}
        </span>
      </div>
      
      {/* Highlight effect on hover */}
      <div 
        className={cn(
          "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          theme === 'light' ? "bg-white/20" : 
          theme === 'dark' ? "bg-white/10" :
          theme === 'calm' ? "bg-blue-100/30" :
          theme === 'focused' ? "bg-white/10" :
          "bg-yellow-100/30"
        )}
      />
      
      {/* Click ripple effect */}
      <div className="absolute inset-0 rounded-full pointer-events-none overflow-hidden">
        <span className="ripple absolute bg-white/20 rounded-full transform scale-0 opacity-50" />
      </div>
    </button>
  );
};

export default ComfortButton;
