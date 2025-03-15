import ContactForm from "@/components/sections/ContactForm";
import Image from 'next/image';
export default function CookiePolicyPage() {
  return (
    <>
      <div className="flex-grow">
        <section className="relative min-h-screen flex flex-col justify-start overflow-hidden z-[1]">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full bg-[#F6F2F0]">
            <Image
              src="/hero-bg.png"
              alt="Background pattern"
              fill
              className="object-cover w-full opacity-[0.25]"
              priority
            />                 
          </div>

          <div className="absolute inset-0 bg-transparent z-[2]" />

          {/* Impressum Heading */}
          <div className="container relative z-[3] mx-auto px-4">
            <h1 className="font-nunito font-semibold text-[53px] leading-[120%] text-[#05313E] mt-[171px] ml-[116px] w-[527px]">
              Impressum
            </h1>
          </div>
        </section>
      </div>
      <ContactForm />
    </>
  );
}
