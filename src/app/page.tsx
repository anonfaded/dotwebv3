import Hero from '@/components/sections/Hero';
import AutomationSection from '@/components/sections/AutomationSection';
import ScalableSection from '@/components/sections/ScalableSection';
import CalculatorSection from '@/components/sections/CalculatorSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AutomationSection />
      <ScalableSection />
      <CalculatorSection />
      <Footer lang="en" />
    </div>
  );
}
