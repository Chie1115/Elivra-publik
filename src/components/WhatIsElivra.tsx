export default function WhatIsElivra() {
  return (
    <section id="vad-ar-elivra" className="py-12 md:py-20">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-[oklch(0.58_0.09_220)]">
              Vad är Elivra?
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Elivra är en trygg följeslagare i vardagen – för dig som bor själv, för dig som ibland glömmer, eller för dig som bara vill ha någon som lyssnar.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              Hon finns där dygnet runt, pratar lugnt, påminner när det behövs och ger både användare och anhöriga en större trygghet.
            </p>
            <p className="text-base leading-relaxed">
              <strong>Enkel att använda, helt på svenska och utvecklad med stor omtanke om din integritet.</strong>
            </p>
          </div>
          <div>
            <img
              src="/assets/testimonial_3.jpg"
              alt="Par som använder Elivra tillsammans"
              className=" shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
