
import React from 'react';
import ComfortButton from '@/components/ComfortButton';
import ComfortMessage from '@/components/ComfortMessage';
import { useComfortMessages } from '@/hooks/useComfortMessages';

const Index = () => {
  const { currentMessage, messageVisible, clickCount, getNextMessage } = useComfortMessages();

  return (
    <div className="min-h-screen gradient-background flex flex-col items-center justify-center p-6">
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          A Gentle Click Towards Strength
        </h1>
        <p className="text-gray-600 max-w-md mx-auto">
          When temptation strikes, click for a reminder of your strength and purpose.
        </p>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-xl mx-auto">
        <ComfortMessage 
          message={currentMessage} 
          visible={messageVisible}
          className="mb-12" 
        />
        
        <ComfortButton 
          onClick={getNextMessage} 
          count={clickCount} 
        />
        
        {clickCount > 0 && (
          <p className="mt-8 text-sm text-gray-500 text-center">
            You've sought encouragement {clickCount} {clickCount === 1 ? 'time' : 'times'}. 
            Each click is a step toward your goals.
          </p>
        )}
      </main>
      
      <footer className="mt-auto pt-12 pb-6 text-center text-gray-500 text-sm">
        <p>A safe space for your journey</p>
      </footer>
    </div>
  );
};

export default Index;
