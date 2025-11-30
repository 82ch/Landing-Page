import { Monitor } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Details() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();
  const platforms = [
    { name: 'Windows', image: '/platform-windows.png' },
    { name: 'macOS', image: '/platform-macos.png' },
    { name: 'Linux', image: '/platform-linux.png' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative h-64 perspective-1000">
            {platforms.map((platform, index) => {
              const offset = (index - currentIndex + 3) % 3;
              return (
                <div
                  key={platform.name}
                  className="absolute inset-0 transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform: `
                      translateY(${offset * 15}px)
                      translateX(${offset * 20}px)
                      scale(${1 - offset * 0.1})
                      rotateY(${offset * -5}deg)
                    `,
                    zIndex: 10 - offset,
                    opacity: offset === 0 ? 1 : 0.4 + (2 - offset) * 0.2,
                  }}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="h-full bg-white rounded-xl border border-gray-200 shadow-xl p-4 flex items-center justify-center">
                    <img
                      src={platform.image}
                      alt={`${platform.name} 지원`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className={`mt-2 text-center px-3 py-1 rounded-lg ${
                    offset === 0
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  } transition-colors`}>
                    <p className="text-sm font-semibold">{platform.name}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
              <Monitor className="w-4 h-4" />
              <span className="text-sm font-medium">Cross-Platform</span>
            </div>
            <h2 className="text-gray-900 mb-6">
              모든 플랫폼에서<br />
              동일한 경험을
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Windows, macOS, Linux 모두에서 완벽하게 작동합니다.
              Electron 기반으로 구축되어 어떤 운영체제에서도 동일한 사용자 경험을 제공합니다.
            </p>

            <div className="space-y-4">
              {[
                { title: '100% 크로스 플랫폼 호환', desc: '모든 운영체제에서 동일한 기능과 성능을 보장합니다.' },
                { title: '일관된 사용자 경험', desc: 'Electron 기반으로 어떤 플랫폼에서도 동일한 UI/UX를 제공합니다.' },
                { title: '간편한 설치 및 업데이트', desc: '각 플랫폼에 최적화된 설치 패키지를 제공합니다.' }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${(index + 2) * 150}ms` : '0ms'
                  }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
