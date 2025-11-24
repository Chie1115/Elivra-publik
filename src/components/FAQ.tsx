export default function FAQ() {
  return (
    <section id="trygghet" className="py-20 bg-primary">
      <div className="container">
        <h2 className="text-4xl font-semibold text-white text-center mb-12">
          FAQ
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              Fungerar det utan smartphone?
            </h3>
            <p className="text-white/90">
              Ja, det behövs endast wifi och en högtalare kan kopplas in via enheten.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              Kan flera anhöriga vara med?
            </h3>
            <p className="text-white/90">
              Ja, alla kan ladda ner appen.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              Hur mycket är det?
            </h3>
            <p className="text-white/90">
              Månadsvis, vi har inga bindningstider.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
