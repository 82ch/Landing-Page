import { Cable, ScanSearch, ShieldAlert, MonitorStop, Workflow } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    icon: Cable,
    title: '1. MCP 프록시 설정',
    description: '프록시를 통해 MCP Host와 MCP Server 간의 모든 통신을 모니터링 합니다.',
    color: 'bg-blue-600'
  },
  {
    icon: ScanSearch,
    title: '2. 다중 엔진 분석',
    description: '5개의 탐지 엔진이 동시에 작동하여 각종 보안 위협 패턴을 실시간으로 검사합니다.',
    color: 'bg-purple-600'
  },
  {
    icon: ShieldAlert,
    title: '3. 위협 탐지 & 알림',
    description: 'Electron UI 대시보드에서 탐지된 위협을 시각화하고 즉시 알림을 표시합니다.',
    color: 'bg-orange-600'
  },
  {
    icon: MonitorStop,
    title: '4. 차단 & 기록',
    description: '사용자가 차단 여부를 결정하고, 모든 이벤트를 데이터베이스에 기록합니다.',
    color: 'bg-green-600'
  }
];

export function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
              <Workflow className="w-4 h-4" />
              <span className="text-sm font-medium">작동 방식</span>
            </div>
            <h2 className="text-gray-900 mb-4">
              작동 원리
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              4단계의 간단하고 효과적인 프로세스로 MCP 환경을 보호합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-800 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
                  }}
                >
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-gray-900 mb-2 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center text-sm">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 -translate-y-1/2 z-10">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
