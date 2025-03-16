
import React from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';

interface ComfortMessageProps {
  message: string;
  visible: boolean;
  className?: string;
}

const ComfortMessage = ({ message, visible, className }: ComfortMessageProps) => {
  const { theme } = useTheme();
  
  return (
    <div 
      className={cn(
        "message-container transition-all duration-500 ease-in-out",
        visible ? "animate-fade-in opacity-100" : "opacity-0",
        theme === 'light' ? "bg-white/50 border border-gray-100/80 text-gray-800" : 
        theme === 'dark' ? "bg-gray-800/40 border border-gray-700/50 text-gray-100" :
        theme === 'calm' ? "bg-blue-50/50 border border-blue-100/50 text-gray-700" :
        theme === 'focused' ? "bg-gray-100/50 border border-gray-200/50 text-gray-800" :
        "bg-amber-50/50 border border-amber-100/50 text-gray-800",
        className
      )}
    >
      <p className="text-lg md:text-xl font-medium text-center max-w-md mx-auto">
        {message}
      </p>
    </div>
  );
};

export default ComfortMessage;
