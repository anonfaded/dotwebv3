import { Suspense } from 'react';
import { getDictionary } from '@/lib/dictionary';
import Hero from '@/components/sections/Hero';
import AIWidget from '@/components/sections/AIWidget';

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero lang={lang} dictionary={dictionary} />
      <AIWidget />
      {/* Other sections will be added here */}
    </Suspense>
  );
}
