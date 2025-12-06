import { MessageCircle, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from '../hooks/useTranslation';

export function Footer() {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className={`transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <div className="flex items-center gap-2 mb-4">
              <img src="/dandan.png" alt="MCP-DANDAN" className="w-10 h-10" />
              <span className="text-white font-bold text-xl">MCP-Dandan</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/82ch/MCP-Dandan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 hover:scale-110 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://github.com/82ch/MCP-Dandan/issues" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 hover:scale-110 transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <h3 className="text-white mb-4">{t.footer.project}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t.footer.features}</a></li>
              <li><a href="https://github.com/82ch/MCP-Dandan/releases" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t.footer.guide}</a></li>
              <li><a href="https://github.com/82ch/MCP-Dandan#detection-engines" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t.footer.engines}</a></li>
              <li><a href="https://github.com/82ch/MCP-Dandan/releases" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t.footer.releases}</a></li>
              <li><a href="https://github.com/82ch/MCP-Dandan#project-structure" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t.footer.structure}</a></li>
            </ul>
          </div>

          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <h3 className="text-white mb-4">{t.footer.techStack}</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-400">Python 3.8+</span></li>
              <li><span className="text-gray-400">Electron 33+</span></li>
              <li><span className="text-gray-400">React 18</span></li>
              <li><span className="text-gray-400">Mistral API</span></li>
            </ul>
          </div>

          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <h3 className="text-white mb-4">{t.footer.resources}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Github className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="https://github.com/82ch/MCP-Dandan" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  {t.footer.github}
                </a>
              </li>
              <li>
                <a href="https://github.com/82ch/MCP-Dandan/issues" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  {t.footer.issues}
                </a>
              </li>
              <li>
                <a href="https://github.com/82ch/MCP-Dandan#desktop-ui-features" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  {t.footer.desktopUI}
                </a>
              </li>
              <li>
                <a href="https://github.com/82ch/MCP-Dandan#overview" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  {t.footer.docs}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              {t.footer.copyright}
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/82ch/MCP-Dandan/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                {t.footer.mitLicense}
              </a>
              <a href="https://github.com/82ch/MCP-Dandan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://github.com/82ch/MCP-Dandan/issues" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Issues
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
