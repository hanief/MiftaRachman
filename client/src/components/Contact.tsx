export default function Contact() {
  return (
    <section id="contact" className="mb-8">
      <h2 className="section-title">Contact Information</h2>

      <div className="space-y-2">
        <p>
          <span className="font-bold">Email:</span>{" "}
          <a href="mailto:mrachman@ugm.ac.id">mrachman@ugm.ac.id</a>
        </p>
        <p>
          <span className="font-bold">Office:</span> Faculty of Animal Science
        </p>
        <p>
          <span className="font-bold">Institution:</span> Gadjah Mada University
        </p>
        <p>
          <span className="font-bold">Address:</span> Jalan Fauna No.3,
          Bulaksumur, Yogyakarta 55281, Indonesia
        </p>
      </div>

      <div className="mt-6">
        <h3 className="subsection-title">Research Interests</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            genetics
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            genomics
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            livestock
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            bioinformatics
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            animal breeding
          </span>
        </div>
      </div>
    </section>
  );
}
