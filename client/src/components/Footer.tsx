export default function Footer() {
  return (
    <footer className="border-t border-accent py-6 text-center text-sm text-secondary">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <p>© 2023 Mifta Rachman, Ph.D. Last updated: September 2023</p>
        <p className="mt-2">
          <a href="#" className="academic-link">Curriculum Vitae</a> | 
          <a href="#" className="academic-link ml-2">Google Scholar</a> | 
          <a href="#" className="academic-link ml-2">ResearchGate</a> | 
          <a href="#" className="academic-link ml-2">ORCID</a>
        </p>
      </div>
    </footer>
  );
}
