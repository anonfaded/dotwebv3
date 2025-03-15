import ContactForm from "@/components/sections/ContactForm";
import Image from 'next/image';
export default function CookiePolicyPage() {
  return (
    <>
      <div className="flex-grow">


        <section className="relative min-h-screen  flex flex-col justify-start overflow-hidden z-[1]">
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
        </section>



      </div>
      <ContactForm />
    </>
  );
}
