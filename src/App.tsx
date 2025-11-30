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

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
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
  );
}
