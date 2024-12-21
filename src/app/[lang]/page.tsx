import React, { Suspense } from 'react';
import Hero from '@/components/sections/Hero';
import ChatSection from '@/components/sections/ChatSection';
import { getDictionary } from '@/lib/dictionary';

interface PageProps {
  params: {
    lang: string;
  };
}

async function DictionaryProvider({ 
  lang, 
  children 
}: { 
  lang: string;
  children: (dictionary: any) => React.ReactNode;
}) {
  const dictionary = await getDictionary(lang);
  return children(dictionary);
}

export default function Page({ params }: PageProps) {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <DictionaryProvider lang={params.lang}>
          {(dictionary) => (
            <>
              <Hero lang={params.lang} dictionary={dictionary} />
              <ChatSection />
            </>
          )}
        </DictionaryProvider>
      </Suspense>
    </main>
  );
}
