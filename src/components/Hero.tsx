import { Shield, Github, BookOpen, Star, Scale } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from '../hooks/useTranslation';

export function Hero() {
  const [stars, setStars] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslation();

  useEffect(() => {
    fetch('https://api.github.com/repos/82ch/82ch')
      .then(res => res.json())
      .then(data => {
        if (data.stargazers_count !== undefined) {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {
        // API 호출 실패 시 (private repo 등) 아무것도 하지 않음
      });
  }, []);

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className={`space-y-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4" />
              <span className="text-sm">{t.hero.badge}</span>
            </div>

            <h1 className="text-gray-900" style={{ whiteSpace: 'pre-line' }}>
              {t.hero.title}
            </h1>

            <p className="text-gray-600 text-lg" style={{ whiteSpace: 'pre-line' }}>
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 hover:scale-105 transition-transform" asChild>
                <a href="https://github.com/82ch/MCP-Dandan" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  {t.hero.github}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 hover:scale-105 transition-transform" asChild>
                <a href="https://github.com/82ch/MCP-Dandan#quick-start" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-5 h-5" />
                  {t.hero.guide}
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              {stars !== null && (
                <>
                  <div className={`transition-all duration-700 delay-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <div className="text-gray-900 flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      {stars}
                    </div>
                    <div className="text-gray-600 text-sm">{t.hero.stars}</div>
                  </div>
                  <div className={`w-px h-12 bg-gray-200 transition-all duration-500 delay-600 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </>
              )}
              <div className={`transition-all duration-700 delay-${stars !== null ? '700' : '500'} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="text-gray-900 flex items-center gap-1">
                  <Scale className="w-5 h-5 text-blue-600" />
                  MIT
                </div>
                <div className="text-gray-600 text-sm">{t.hero.license}</div>
              </div>
              <div className={`w-px h-12 bg-gray-200 transition-all duration-500 delay-${stars !== null ? '800' : '600'} ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}></div>
              <div className={`transition-all duration-700 delay-${stars !== null ? '900' : '700'} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="text-gray-900">5</div>
                <div className="text-gray-600 text-sm">{t.hero.engines}</div>
              </div>
              <div className={`w-px h-12 bg-gray-200 transition-all duration-500 delay-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}></div>
              <div className={`transition-all duration-700 delay-${stars !== null ? '[1100ms]' : '[800ms]'} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="text-gray-900" style={{ whiteSpace: 'pre-line' }}>{t.hero.monitoring}</div>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-3xl"></div>
            <img
              src="/dashboard.png"
              alt={t.hero.dashboardAlt}
              className="relative rounded-2xl shadow-2xl w-full border border-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
