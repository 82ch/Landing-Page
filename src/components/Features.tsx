import { Terminal, FolderLock, UserX, Database, Bug, Sparkles, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from '../hooks/useTranslation';

export function Features() {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslation();

  const features = [
    {
      icon: Terminal,
      title: t.features.commandInjection.title,
      description: t.features.commandInjection.description,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: FolderLock,
      title: t.features.fileSystem.title,
      description: t.features.fileSystem.description,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: UserX,
      title: t.features.piiLeak.title,
      description: t.features.piiLeak.description,
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Database,
      title: t.features.dataExfiltration.title,
      description: t.features.dataExfiltration.description,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Bug,
      title: t.features.toolsPoisoning.title,
      description: t.features.toolsPoisoning.description,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Sparkles,
      title: t.features.userIntent.title,
      description: t.features.userIntent.description,
      color: 'bg-pink-100 text-pink-600'
    }
  ];

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
              <span className="text-sm font-medium">{t.features.badge}</span>
            </div>
            <h2 className="text-gray-900 mb-4">
              {t.features.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.features.subtitle}
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
