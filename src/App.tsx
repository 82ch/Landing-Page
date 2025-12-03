import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { TechStack } from './components/TechStack';
import { Benefits } from './components/Benefits';
import { Details } from './components/Details';
import { VideoShowcase } from './components/VideoShowcase';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function AppContent() {
  const { isTransitioning } = useLanguage();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <div
        className={`transition-all duration-500 ${
          isTransitioning
            ? 'opacity-0 scale-[0.98] blur-sm'
            : 'opacity-100 scale-100 blur-0'
        }`}
      >
        <Hero />
        <Features />
        <Benefits />
        <Details />
        <VideoShowcase />
        <HowItWorks />
        <TechStack />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
