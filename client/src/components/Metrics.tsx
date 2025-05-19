export default function Metrics() {
  return (
    <section id="metrics" className="mb-12">
      <h2 className="section-title">Academic Metrics & Recognition</h2>

      <div className="mb-8">
        <h3 className="subsection-title">Citation Metrics</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="border p-4 rounded">
            <div className="font-bold text-lg">50</div>
            <p className="text-secondary text-sm">Total Citations</p>
          </div>
          <div className="border p-4 rounded">
            <div className="font-bold text-lg">30</div>
            <p className="text-secondary text-sm">Citations since 2020</p>
          </div>
          <div className="border p-4 rounded">
            <div className="font-bold text-lg">3</div>
            <p className="text-secondary text-sm">h-index</p>
          </div>
          <div className="border p-4 rounded">
            <div className="font-bold text-lg">1</div>
            <p className="text-secondary text-sm">i10-index</p>
          </div>
        </div>
        <p className="text-sm italic">Source: Google Scholar, May 2025</p>
      </div>

      <h3 className="subsection-title">Research Collaborations</h3>

      <ul className="space-y-4">
        <li>
          <div className="font-bold">
            Centre for Tropical Livestock Genetics and Health (CTLGH)
          </div>
          <p className="text-secondary text-sm">
            Research collaboration on genomic analysis of indigenous livestock
            breeds and their adaptation to environmental stressors.
          </p>
        </li>
        <li>
          <div className="font-bold">University of Nottingham</div>
          <p className="text-secondary text-sm">
            International collaboration with Prof. Olivier Hanotte on livestock
            genomics and adaptation genetics.
          </p>
        </li>
        <li>
          <div className="font-bold">
            International Livestock Research Institute (ILRI)
          </div>
          <p className="text-secondary text-sm">
            Collaboration on conservation genetics of indigenous livestock
            breeds in developing countries.
          </p>
        </li>
      </ul>
    </section>
  );
}
