import { Metadata } from 'next';
import { Nunito, Nunito_Sans } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { locales } from '@/config/i18n';
import { getDictionary } from '@/lib/dictionary';
import '@/app/globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
});

export const metadata: Metadata = {
  title: 'DotWeb - Smart Automation Solutions',
  description: 'Workflows Built for Reduced Overhead and Better Results',
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface Dictionary {
  navigation: {
    start: string;
    learn: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  features: {
    title: string;
    automation: string;
    workflow: string;
    integration: string;
  };
}

export default async function LocaleLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dictionary = await getDictionary(lang) as Dictionary;

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${nunito.variable} ${nunitoSans.variable}`} suppressHydrationWarning>
        <Header lang={lang} dictionary={dictionary} />
        <main className="min-h-screen">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
