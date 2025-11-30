import { Monitor, MessageSquare, History, Lightbulb } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const benefits = [
  {
    icon: Monitor,
    title: 'Electron 데스크톱 UI',
    description: '직관적인 대시보드로 실시간 위협 탐지 현황을 시각화합니다.'
  },
  {
    icon: MessageSquare,
    title: '튜토리얼 지원',
    description: '처음 사용하는 사용자를 위한 단계별 가이드로 빠르게 시작할 수 있습니다.'
  },
  {
    icon: History,
    title: '차단 이력 관리',
    description: '모든 보안 이벤트를 데이터베이스에 저장하고 검색 가능한 이력으로 관리합니다.'
  },
  {
    icon: Lightbulb,
    title: 'LLM 기반 스마트 탐지',
    description: 'Mistral API를 활용한 Tools Poisoning 엔진으로 지능형 위협을 정확하게 식별합니다.'
  }
];

export function Benefits() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-gray-900 mb-6">
              MCP-Dandan의<br />
              핵심 기능
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              강력한 보안 엔진과 직관적인 Electron UI를 결합하여
              MCP 환경의 완벽한 모니터링과 보호를 제공합니다.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className={`flex gap-4 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${(index + 2) * 150}ms` : '0ms'
                    }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-10 blur-2xl"></div>
            <img
              src="/dashboard2.png"
              alt="MCP-DANDAN 위협 탐지"
              className="relative rounded-2xl shadow-xl w-full border border-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
