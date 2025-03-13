import { Metadata } from 'next';
// import { Nunito, Nunito_Sans } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { locales } from '@/config/i18n';
import { getDictionary } from '@/lib/dictionary';
import '@/app/globals.css';

// const nunito = Nunito({
//   subsets: ['latin'],
//   variable: '--font-nunito',
// });

// const nunitoSans = Nunito_Sans({
//   subsets: ['latin'],
//   variable: '--font-nunito-sans',
// });

export const metadata: Metadata = {
  title: 'DotWeb - Smart Automation Solutions',
  description: 'Workflows Built for Reduced Overhead and Better Results',
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// interface Dictionary {
//   navigation: {
//     start: string;
//     learn: string;
//   };
//   hero: {
//     title: string;
//     subtitle: string;
//   };
//   features: {
//     title: string;
//     automation: string;
//     workflow: string;
//     integration: string;
//   };
// }

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

export default async function RootLayout({ children, params: { lang } }: RootLayoutProps) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="min-h-screen flex flex-col">
      <Header lang={lang} dictionary={dictionary} />
      <div className="flex-grow">
        {children}
      </div>
      <Footer lang={lang} />
    </main>
  );
}
