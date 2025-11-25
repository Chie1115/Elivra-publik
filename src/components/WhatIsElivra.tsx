export default function WhatIsElivra() {
  return (
    <section id="vad-ar-elivra" className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-semibold text-primary mb-6">
              Vad är Elivra?
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Elivra är en vän i vardagen – för den som bor själv eller behöver lite extra stöd.
            </p>
            <p className="mb-4 text-base leading-relaxed">
              Hon för samtal dygnet runt, tränar minnet och skapar trygghet för både användare och anhöriga.
            </p>
            <p className="text-base leading-relaxed">
              <strong>Enkelt, på svenska, anpassat för äldre och helt svenskutvecklad – för din integritet och trygghet.</strong>
            </p>
          </div>
          <div>
            <img
              src="/assets/testimonial_3.jpg"
              alt="Par som använder Elivra tillsammans"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
