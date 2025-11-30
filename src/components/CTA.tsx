import { Github, Scale, GitFork, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function CTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-white mb-6">
            오픈소스로 함께 만드는<br />
            안전한 MCP 환경
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            GitHub에서 소스 코드를 확인하고, 설치하고, 기여하세요.<br />
            모든 코드는 MIT 라이선스로 자유롭게 사용할 수 있습니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 gap-2" asChild>
              <a href="https://github.com/82ch/MCP-Dandan" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub에서 보기
              </a>
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 gap-2" asChild>
              <a href="https://github.com/82ch/MCP-Dandan#quick-start" target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-5 h-5" />
                설치 가이드
              </a>
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <Scale className="w-5 h-5" />
              <span>MIT 라이선스</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <GitFork className="w-5 h-5" />
              <span>기여 환영</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <Github className="w-5 h-5" />
              <span>100% 오픈소스</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
