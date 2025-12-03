import { Monitor, MessageSquare, History, Lightbulb } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from '../hooks/useTranslation';

export function Benefits() {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslation();

  const benefits = [
    {
      icon: Monitor,
      title: t.benefits.electron.title,
      description: t.benefits.electron.description
    },
    {
      icon: MessageSquare,
      title: t.benefits.tutorial.title,
      description: t.benefits.tutorial.description
    },
    {
      icon: History,
      title: t.benefits.history.title,
      description: t.benefits.history.description
    },
    {
      icon: Lightbulb,
      title: t.benefits.llm.title,
      description: t.benefits.llm.description
    }
  ];

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
            <h2 className="text-gray-900 mb-6" style={{ whiteSpace: 'pre-line' }}>
              {t.benefits.title}
            </h2>
            <p className="text-gray-600 text-lg mb-8" style={{ whiteSpace: 'pre-line' }}>
              {t.benefits.description}
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
              alt={t.benefits.imageAlt}
              className="relative rounded-2xl shadow-xl w-full border border-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
