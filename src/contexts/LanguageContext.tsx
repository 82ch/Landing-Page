import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'ko';
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    if (lang === language) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setLanguage(lang);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 200);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
