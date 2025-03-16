
import React from 'react';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';

interface ComfortButtonProps {
  onClick: () => void;
  count: number;
  className?: string;
}

const ComfortButton = ({ onClick, count, className }: ComfortButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "btn-gentle animate-pulse-gentle text-white relative group",
        className
      )}
      aria-label="Get support message"
    >
      <div className="flex items-center gap-2">
        <Heart className="w-5 h-5" />
        <span>
          Gentle Reminder {count > 0 ? `(${count})` : ''}
        </span>
      </div>
      <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </button>
  );
};

export default ComfortButton;
