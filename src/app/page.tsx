import Hero from '@/components/sections/Hero';
import AutomationSection from '@/components/sections/SalesAutomationSection';
import ScalableSection from '@/components/sections/PrivacySection';
import CalculatorSection from '@/components/sections/CalculatorSection';
import Footer from '@/components/layout/Footer';
import { getDictionary } from '@/lib/dictionary';

export default async function Home() {
  const dictionary = await getDictionary('en');

  return (
    <div className="flex flex-col w-full">
      <Hero 
        lang="en" 
        dictionary={{
          hero: {
            title: dictionary.hero.title,
            description: dictionary.hero.description
          },
          navigation: {
            start: dictionary.navigation.start,
            learn: dictionary.navigation.learn
          }
        }} 
      />
      <AutomationSection />
      <ScalableSection />
      <CalculatorSection />
      <Footer lang="en" />
    </div>
  );
}
