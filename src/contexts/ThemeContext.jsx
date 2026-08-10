import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

/**
 * O app é dark-only por design. Este provider mantém apenas o controle de
 * tamanho de fonte (acessibilidade). O tema escuro é garantido pelo CSS
 * (`color-scheme: dark` + fundo base), sem alternância clara/escura.
 */
export function ThemeProvider({ children }) {
  const [fontSize, setFontSize] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('fontSize') || 'normal';
    }
    return 'normal';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'text-sm-base', 'text-base-base', 'text-lg-base');
    root.classList.add('dark');
    const sizeMap = { small: 'text-sm-base', normal: 'text-base-base', large: 'text-lg-base' };
    root.classList.add(sizeMap[fontSize] || 'text-base-base');
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  return (
    <ThemeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
