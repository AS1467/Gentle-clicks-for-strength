
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, Cloud } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ThemeSelectorProps {
  className?: string;
}

const ThemeSelector = ({ className }: ThemeSelectorProps) => {
  const { theme, setTheme } = useTheme();
  
  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'calm', icon: Cloud, label: 'Calm' },
  ];
  
  return (
    <div className={cn("flex items-center justify-center gap-2 my-3", className)}>
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value as any)}
          className={cn(
            "theme-toggle relative group",
            theme === value 
              ? "bg-primary/10 text-primary" 
              : "text-muted-foreground hover:text-foreground hover:bg-background/80"
          )}
          aria-label={`Switch to ${label} theme`}
          title={label}
        >
          <Icon className="w-5 h-5" />
          <span className="sr-only">{label}</span>
          
          {/* Active indicator dot */}
          {theme === value && (
            <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
          )}
          
          {/* Tooltip */}
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-sm border border-border">
            {label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector;
