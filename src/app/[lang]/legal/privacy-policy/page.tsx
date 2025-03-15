import ContactForm from "@/components/sections/ContactForm";
import Image from 'next/image';

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="flex-grow">
        <section className="relative min-h-screen flex flex-col justify-start overflow-hidden z-[1] pb-12 md:pb-20">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full bg-[#F6F2F0]">
            <Image
              src="/hero-bg.png"
              alt="Background pattern"
              fill
              className="object-cover w-full opacity-[0.15]"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-transparent z-[2]" />

          {/* Content Container */}
          <div className="container relative z-[3] mx-auto px-4 md:px-6">
            <div className="max-w-[1207px] mx-4 md:ml-[60px] lg:ml-[116px]">
              {/* Heading - with responsive sizing */}
              <h1 className="font-nunito font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[53px] leading-tight md:leading-[110%] text-[#0b0b0b] mt-[130px] sm:mt-[140px] md:mt-[150px] lg:mt-[171px]">
                Privacy Policy
              </h1>

              {/* Content Section - with responsive spacing */}
              <div className="font-nunito font-light text-base md:text-[18px] leading-relaxed md:leading-[140%] text-[#0b0b0b] mt-6 sm:mt-8 md:mt-[55px] space-y-6 md:space-y-8">
                <p className="mb-6 md:mb-8">{`Dotweb Agency ist ein Online-Angebot der ELK Media LLC.`}</p>

                <div className="mb-6 md:mb-8">
                  <h2 className="font-semibold leading-none mb-0">Anschrift:</h2>
                  <p className="whitespace-pre-line leading-relaxed md:leading-[140%] mt-0">{`ELK Media LLC
30 N Gould St Ste R
Sheridan, WY 82801
USA

E-Mail: info@immoiq.ch
Webseite: www.immoiq.ch`}</p>
                </div>

                <div className="mb-6 md:mb-8">
                  <h2 className="font-semibold leading-none mb-0">Handelsregister:</h2>
                  <p className="leading-relaxed md:leading-[140%] mt-0">ELK Media LLC ist eingetragen im Bundesstaat Wyoming, USA.</p>
                </div>

                <div className="mb-6 md:mb-8">
                  <h2 className="font-semibold leading-none mb-0">Vertretungsberechtigte:</h2>
                  <p className="leading-relaxed md:leading-[140%] mt-0">Die vertretungsberechtigten Personen sind durch die ELK Media LLC offiziell benannt.</p>
                </div>

                <div className="mb-6 md:mb-8">
                  <h2 className="font-semibold leading-none mb-0">Haftungsausschluss:</h2>
                  <p className="leading-relaxed md:leading-[140%] mt-0">{`Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen verantwortlich, jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.`}</p>
                </div>

                <div className="mb-6 md:mb-8">
                  <h2 className="font-semibold leading-none mb-0">Verbraucherstreitbeilegung:</h2>
                  <p className="leading-relaxed md:leading-[140%] mt-0">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                </div>

                <div className="mb-6 md:mb-8">
                  <h2 className="font-semibold leading-none mb-0">Hinweis:</h2>
                  <p className="leading-relaxed md:leading-[140%] mt-0">Für Anfragen zur Nutzung und Verwaltung persönlicher Daten oder zur Löschung solcher Daten können Sie uns über die oben angegebene E-Mail-Adresse kontaktieren.</p>
                </div>

                <div className="mb-6 md:mb-8">
                  <h2 className="font-semibold leading-none mb-0">Urheberrecht:</h2>
                  <p className="leading-relaxed md:leading-[140%] mt-0">{`Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.`}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ContactForm />
    </>
  );
}