import { Menu, Github, Languages } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const { language, setLanguage, isTransitioning } = useLanguage();
  const t = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const headerHeight = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className={`flex items-center gap-2 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}>
            <img src="/dandan.png" alt="MCP-DANDAN" className="w-10 h-10" />
            <span className="text-gray-900 font-bold text-xl">MCP-Dandan</span>
          </div>

          <nav className={`hidden md:flex items-center gap-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}>
            <a
              href="#features"
              onClick={(e) => handleSmoothScroll(e, '#features')}
              className={`text-gray-600 hover:text-gray-900 transition-all hover:scale-105 ${
                isTransitioning ? 'opacity-50 blur-[1px]' : 'opacity-100 blur-0'
              }`}
            >
              {t.header.features}
            </a>
            <a
              href="#benefits"
              onClick={(e) => handleSmoothScroll(e, '#benefits')}
              className={`text-gray-600 hover:text-gray-900 transition-all hover:scale-105 ${
                isTransitioning ? 'opacity-50 blur-[1px]' : 'opacity-100 blur-0'
              }`}
            >
              {t.header.benefits}
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleSmoothScroll(e, '#how-it-works')}
              className={`text-gray-600 hover:text-gray-900 transition-all hover:scale-105 ${
                isTransitioning ? 'opacity-50 blur-[1px]' : 'opacity-100 blur-0'
              }`}
            >
              {t.header.howItWorks}
            </a>
            <a
              href="#info"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: 'smooth'
                });
              }}
              className={`text-gray-600 hover:text-gray-900 transition-all hover:scale-105 ${
                isTransitioning ? 'opacity-50 blur-[1px]' : 'opacity-100 blur-0'
              }`}
            >
              {t.header.docs}
            </a>
          </nav>

          <div className={`flex items-center gap-3 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
              className={`gap-2 relative overflow-hidden transition-all duration-300 ${
                isTransitioning
                  ? 'scale-95 bg-blue-100'
                  : 'hover:scale-105 hover:bg-blue-50'
              }`}
            >
              <Languages
                className={`w-4 h-4 transition-all duration-300 ${
                  isTransitioning ? 'rotate-180 scale-110' : 'rotate-0'
                }`}
              />
              <span className={`transition-all duration-300 font-medium ${
                isTransitioning
                  ? 'scale-90 opacity-50'
                  : 'scale-100 opacity-100'
              }`}>
                {language === 'ko' ? 'EN' : 'KO'}
              </span>
              {isTransitioning && (
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse" />
              )}
            </Button>
            <Button className="gap-2 hover:scale-105 transition-transform" asChild>
              <a href="https://github.com/82ch" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                82ch
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
