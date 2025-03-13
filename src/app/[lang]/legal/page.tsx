import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getDictionary } from '@/lib/dictionary';

interface LegalPageProps {
  params: {
    lang: string;
  };
}

export default function LegalPage() {
  return (
    <div className="flex-grow">
      {/* Legal page content will go here */}
    </div>
  );
}
