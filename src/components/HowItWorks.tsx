import { Cable, ScanSearch, ShieldAlert, MonitorStop, Workflow } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from '../hooks/useTranslation';

export function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslation();

  const steps = [
    {
      icon: Cable,
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
      color: 'bg-blue-600'
    },
    {
      icon: ScanSearch,
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
      color: 'bg-purple-600'
    },
    {
      icon: ShieldAlert,
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
      color: 'bg-orange-600'
    },
    {
      icon: MonitorStop,
      title: t.howItWorks.step4.title,
      description: t.howItWorks.step4.description,
      color: 'bg-green-600'
    }
  ];

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
              <span className="text-sm font-medium">{t.howItWorks.badge}</span>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.howItWorks.subtitle}
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
