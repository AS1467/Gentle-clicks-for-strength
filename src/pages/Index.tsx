
import React from 'react';
import ComfortButton from '@/components/ComfortButton';
import ComfortMessage from '@/components/ComfortMessage';
import ThemeSelector from '@/components/ThemeSelector';
import { useComfortMessages } from '@/hooks/useComfortMessages';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';

const Index = () => {
  const { currentMessage, messageVisible, clickCount, getNextMessage } = useComfortMessages();
  const { theme } = useTheme();
  
  return (
    <div className={cn(
      "min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-500",
      `gradient-${theme}`
    )}>
      <header className="mb-8 md:mb-12 text-center max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
          A Gentle Click Towards Strength
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          When temptation strikes, click for a reminder of your strength and purpose.
        </p>
        <ThemeSelector className="mt-4" />
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-xl mx-auto">
        <ComfortMessage 
          message={currentMessage} 
          visible={messageVisible}
          className="mb-10 md:mb-12" 
        />
        
        <ComfortButton 
          onClick={getNextMessage} 
          count={clickCount} 
        />
        
        {clickCount > 0 && (
          <p className="mt-6 text-sm text-muted-foreground text-center">
            You've sought encouragement {clickCount} {clickCount === 1 ? 'time' : 'times'}. 
            Each click is a step toward your goals.
          </p>
        )}
      </main>
      
      <footer className="mt-auto pt-10 pb-6 text-center text-xs text-muted-foreground">
        <p>A safe space for your journey</p>
      </footer>
    </div>
  );
};

export default Index;
