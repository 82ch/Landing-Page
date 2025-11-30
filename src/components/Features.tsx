import { Terminal, FolderLock, UserX, Database, Bug, Sparkles, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: Terminal,
    title: 'Command Injection 탐지',
    description: '도구 호출에서 잠재적인 명령어 인젝션 패턴을 식별하고 차단합니다.',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: FolderLock,
    title: 'File System Exposure 탐지',
    description: '무단 파일 시스템 접근 시도를 모니터링하고 차단합니다.',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: UserX,
    title: 'PII Leak 탐지',
    description: '개인 식별 정보의 유출 가능성을 감지하여 데이터 프라이버시를 보호합니다.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Database,
    title: 'Data Exfiltration 탐지',
    description: '의심스러운 데이터 전송 패턴을 식별하여 정보 유출을 방지합니다.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Bug,
    title: 'Tools Poisoning 탐지 (LLM)',
    description: 'LLM 기반 시맨틱 분석으로 도구 명세 대비 실제 사용의 불일치를 감지합니다.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Sparkles,
    title: 'User Intent 분석',
    description: 'LLM이 도구를 호출하는 이유와 컨텍스트를 분석하여 의심스러운 의도를 탐지합니다.',
    color: 'bg-pink-100 text-pink-600'
  }
];

export function Features() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">보안 모듈</span>
            </div>
            <h2 className="text-gray-900 mb-4">
              보안 탐지 & 방어 메커니즘
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              5가지 탐지 엔진과 LLM 의도 분석을 통해 다양한 보안 위협을 실시간으로 식별하고 차단합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                    transitionDuration: '800ms'
                  }}
                >
                  <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
