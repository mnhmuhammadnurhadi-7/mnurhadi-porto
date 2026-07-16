import { createContext, useState, useContext, useEffect } from 'react';
import type { FC, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    console.log('Loaded theme from storage:', saved);
    if (saved) setTheme(saved as Theme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    console.log('Toggling theme to:', newTheme);
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  };

  console.log('Current theme:', theme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`min-h-screen ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
