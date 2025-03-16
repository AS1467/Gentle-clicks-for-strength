
import { useState, useCallback } from 'react';

const messages = [
  "You are stronger than your cravings. I believe in you.",
  "Each moment of resistance builds your strength. Keep going.",
  "Remember why you started. That reason still matters.",
  "This feeling is temporary, but your accomplishment will last.",
  "You've overcome challenges before. This is just another one you'll conquer.",
  "Focus on how good you'll feel about yourself in an hour if you stay strong now.",
  "Your future self is already thanking you for this moment of strength.",
  "Breathe deeply. You are capable of making healthy choices.",
  "Every 'no' to temptation is a 'yes' to your wellbeing.",
  "Small choices become habits. This choice matters.",
  "You define your path forward with each decision. Choose well.",
  "You are not alone in this struggle. Many have succeeded, and you will too.",
  "Progress isn't always perfect. Just keep moving forward.",
  "The discomfort of discipline weighs ounces; the burden of regret weighs tons.",
  "You are rewriting your story with each positive choice.",
  "What you're feeling will pass. Your determination can remain.",
  "You are building a new you with each moment of strength.",
  "Trust yourself. You know what's truly good for you.",
  "Take a moment to feel proud of choosing what's best for you.",
  "Remember: you are not depriving yourself - you are choosing freedom.",
  "You've got this. Now go be your best self."
];

export const useComfortMessages = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(-1);
  const [messageVisible, setMessageVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const getNextMessage = useCallback(() => {
    // First hide the current message
    setMessageVisible(false);
    
    // Wait for fade out animation
    setTimeout(() => {
      // Get next message index, cycling through the array
      const nextIndex = currentMessageIndex >= messages.length - 1 
        ? 0 
        : currentMessageIndex + 1;
      
      setCurrentMessageIndex(nextIndex);
      setClickCount(prev => prev + 1);
      
      // Show the new message
      setMessageVisible(true);
    }, 300);
  }, [currentMessageIndex]);

  const currentMessage = currentMessageIndex >= 0 ? messages[currentMessageIndex] : "";

  return {
    currentMessage,
    messageVisible,
    clickCount,
    getNextMessage
  };
};
