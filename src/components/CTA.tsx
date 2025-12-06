import { Github, Scale, GitFork, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from '../hooks/useTranslation';

export function CTA() {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-white mb-6" style={{ whiteSpace: 'pre-line' }}>
            {t.cta.title}
          </h2>
          <p className="text-blue-100 text-lg mb-8" style={{ whiteSpace: 'pre-line' }}>
            {t.cta.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 gap-2" asChild>
              <a href="https://github.com/82ch/MCP-Dandan" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                {t.cta.github}
              </a>
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 gap-2" asChild>
              <a href="https://github.com/82ch/MCP-Dandan/releases" target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-5 h-5" />
                {t.cta.guide}
              </a>
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <Scale className="w-5 h-5" />
              <span>{t.cta.license}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <GitFork className="w-5 h-5" />
              <span>{t.cta.contribute}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <Github className="w-5 h-5" />
              <span>{t.cta.opensource}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
