import { Metadata } from 'next';
import { Nunito, Nunito_Sans } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { locales, Locale } from '@/config/i18n';
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
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang) as Dictionary;

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={`${nunito.variable} ${nunitoSans.variable} flex flex-col min-h-screen`} suppressHydrationWarning>
        <div className="flex-grow">
          <Header lang={params.lang} dictionary={dictionary} />
          <main className="min-h-[calc(100vh-200px)]">{children}</main>
        </div>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
