import { Monitor } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from '../hooks/useTranslation';

export function Details() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslation();
  const platforms = [
    { name: t.details.windows, image: '/platform-windows.png' },
    { name: t.details.mac, image: '/platform-macos.png' },
    { name: t.details.linux, image: '/platform-linux.png' }
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
                      alt={`${platform.name} ${t.details.support}`}
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
              <span className="text-sm font-medium">{t.details.badge}</span>
            </div>
            <h2 className="text-gray-900 mb-6" style={{ whiteSpace: 'pre-line' }}>
              {t.details.title}
            </h2>
            <p className="text-gray-600 text-lg mb-8" style={{ whiteSpace: 'pre-line' }}>
              {t.details.description}
            </p>

            <div className="space-y-4">
              {[
                { title: t.details.feature1.title, desc: t.details.feature1.description },
                { title: t.details.feature2.title, desc: t.details.feature2.description },
                { title: t.details.feature3.title, desc: t.details.feature3.description }
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
