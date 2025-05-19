export default function Footer() {
  return (
    <footer className="border-t border-accent py-6 text-center text-sm text-secondary">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <p>© 2025 Mifta Rachman. Last updated: May 2025</p>
        <p className="mt-2">
          <a
            href="https://scholar.google.com/citations?user=sGkie4YAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="academic-link ml-2"
          >
            Google Scholar
          </a>{" "}
          |
          <a
            href="https://www.linkedin.com/in/miftarachman/"
            target="_blank"
            rel="noopener noreferrer"
            className="academic-link ml-2"
          >
            LinkedIn
          </a>{" "}
          |
          <a
            href="https://www.researchgate.net/profile/Mifta-Rachman"
            target="_blank"
            rel="noopener noreferrer"
            className="academic-link ml-2"
          >
            ResearchGate
          </a>{" "}
          |
          <a
            href="https://orcid.org/0000-0002-5577-798X"
            target="_blank"
            rel="noopener noreferrer"
            className="academic-link ml-2"
          >
            ORCID
          </a>{" "}
          |
          <a
            href="https://acadstaff.ugm.ac.id/mrachman"
            target="_blank"
            rel="noopener noreferrer"
            className="academic-link ml-2"
          >
            UGM Staff Profile
          </a>
        </p>
        <p className="mt-4">
          <span className="text-xs">
            Co-authors: Tety Hartatik, Slamet Diah Volkandari, Olivier Hanotte,
            Almas Gheyas, Jacqueline Smith, Oladeji Bamidele
          </span>
        </p>
      </div>
    </footer>
  );
}
