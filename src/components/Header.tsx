import { Menu, Github } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

export function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-all hover:scale-105">
              탐지 엔진
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-all hover:scale-105">
              핵심 기능
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-all hover:scale-105">
              작동 원리
            </a>
            <a href="https://github.com/82ch/MCP-Dandan#readme" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-all hover:scale-105">
              문서
            </a>
          </nav>

          <div className={`flex items-center gap-4 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
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
