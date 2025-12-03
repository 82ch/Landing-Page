import { Layers } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from '../hooks/useTranslation';

export function TechStack() {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslation();

  const techCategories = [
    {
      category: t.techStack.backend,
      color: 'bg-blue-100 text-blue-700',
      technologies: [
        { name: t.techStack.python, description: t.techStack.pythonDesc },
        { name: t.techStack.blocking, description: t.techStack.blockingDesc },
        { name: t.techStack.websocket, description: t.techStack.websocketDesc },
      ]
    },
    {
      category: t.techStack.frontend,
      color: 'bg-purple-100 text-purple-700',
      technologies: [
        { name: t.techStack.electron, description: t.techStack.electronDesc },
        { name: t.techStack.react, description: t.techStack.reactDesc },
        { name: t.techStack.typescript, description: t.techStack.typescriptDesc },
      ]
    },
    {
      category: t.techStack.detection,
      color: 'bg-green-100 text-green-700',
      technologies: [
        { name: t.techStack.mistral, description: t.techStack.mistralDesc },
        { name: t.techStack.yara, description: t.techStack.yaraDesc },
        { name: t.techStack.sequence, description: t.techStack.sequenceDesc },
      ]
    },
    {
      category: t.techStack.infrastructure,
      color: 'bg-orange-100 text-orange-700',
      technologies: [
        { name: t.techStack.sqlite, description: t.techStack.sqliteDesc },
        { name: t.techStack.pyinstaller, description: t.techStack.pyinstallerDesc },
        { name: t.techStack.crossplatform, description: t.techStack.crossplatformDesc },
      ]
    }
  ];

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
              <span className="text-sm font-medium">{t.techStack.badge}</span>
            </div>
            <h2 className="text-gray-900 mb-4" style={{ whiteSpace: 'pre-line' }}>
              {t.techStack.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.techStack.subtitle}
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
