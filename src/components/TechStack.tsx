import { Layers } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const techCategories = [
  {
    category: 'Backend',
    color: 'bg-blue-100 text-blue-700',
    technologies: [
      { name: 'Python 3.8+', description: 'MCP Proxy 서버 구현' },
      { name: 'Event Blocking', description: '위협 차단 및 제어' },
      { name: 'WebSocket', description: 'Electron UI 실시간 통신' },
    ]
  },
  {
    category: 'Frontend',
    color: 'bg-purple-100 text-purple-700',
    technologies: [
      { name: 'Electron', description: '데스크톱 애플리케이션' },
      { name: 'React', description: 'UI 컴포넌트 라이브러리' },
      { name: 'TypeScript', description: '타입 안전성 보장' },
    ]
  },
  {
    category: 'Detection Engines',
    color: 'bg-green-100 text-green-700',
    technologies: [
      { name: 'Mistral API', description: 'LLM 기반 Tool Poisoning 탐지' },
      { name: 'YARA Rule', description: '정규식 기반 위협 탐지' },
      { name: 'Sequence Analysis', description: '컨텍스트 기반 보안 검사' },
    ]
  },
  {
    category: 'Infrastructure',
    color: 'bg-orange-100 text-orange-700',
    technologies: [
      { name: 'SQLite', description: '이벤트 로그 데이터베이스' },
      { name: 'PyInstaller', description: '실행 파일 패키징' },
      { name: 'Cross-Platform', description: 'Windows, macOS, Linux 지원' },
    ]
  }
];

export function TechStack() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <Layers className="w-4 h-4" />
              <span className="text-sm font-medium">기술 스택</span>
            </div>
            <h2 className="text-gray-900 mb-4">
              최신 기술로 구축된<br />
              강력한 보안 프레임워크
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              검증된 오픈소스 기술과 최신 AI 모델을 결합하여 안정적이고 확장 가능한 시스템을 제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCategories.map((category, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `${idx * 150}ms` : '0ms'
                }}
              >
                <div className={`inline-block ${category.color} px-3 py-1 rounded-full text-sm font-medium mb-4`}>
                  {category.category}
                </div>
                <div className="space-y-4">
                  {category.technologies.map((tech, techIdx) => (
                    <div key={techIdx}>
                      <div className="font-semibold text-gray-900 mb-1">{tech.name}</div>
                      <div className="text-sm text-gray-600">{tech.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
