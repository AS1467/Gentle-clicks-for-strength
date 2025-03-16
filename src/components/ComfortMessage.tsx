
import React from 'react';
import { cn } from '@/lib/utils';

interface ComfortMessageProps {
  message: string;
  visible: boolean;
  className?: string;
}

const ComfortMessage = ({ message, visible, className }: ComfortMessageProps) => {
  return (
    <div 
      className={cn(
        "message-container transition-all duration-500 ease-in-out",
        visible ? "animate-fade-in opacity-100" : "opacity-0",
        className
      )}
    >
      <p className="text-lg md:text-xl font-medium text-center max-w-md mx-auto text-gray-700">
        {message}
      </p>
    </div>
  );
};

export default ComfortMessage;
