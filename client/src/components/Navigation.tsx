import { useEffect, useState } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("abstract");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["abstract", "research", "publications", "teaching", "awards", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 70;
      const offsetPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="sticky top-0 bg-white border-b border-accent z-10 print-hide">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <ul className="flex flex-wrap justify-center md:justify-start py-3 gap-x-6 text-sm">
          <li>
            <a 
              href="#abstract" 
              onClick={scrollToSection("abstract")}
              className={`hover:underline ${activeSection === "abstract" ? "text-blue-600 font-bold" : "text-blue-600"}`}
            >
              Abstract
            </a>
          </li>
          <li>
            <a 
              href="#research" 
              onClick={scrollToSection("research")}
              className={`hover:underline ${activeSection === "research" ? "text-blue-600 font-bold" : "text-blue-600"}`}
            >
              Research
            </a>
          </li>
          <li>
            <a 
              href="#publications" 
              onClick={scrollToSection("publications")}
              className={`hover:underline ${activeSection === "publications" ? "text-blue-600 font-bold" : "text-blue-600"}`}
            >
              Publications
            </a>
          </li>
          <li>
            <a 
              href="#teaching" 
              onClick={scrollToSection("teaching")}
              className={`hover:underline ${activeSection === "teaching" ? "text-blue-600 font-bold" : "text-blue-600"}`}
            >
              Teaching
            </a>
          </li>
          <li>
            <a 
              href="#awards" 
              onClick={scrollToSection("awards")}
              className={`hover:underline ${activeSection === "awards" ? "text-blue-600 font-bold" : "text-blue-600"}`}
            >
              Awards
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={scrollToSection("contact")}
              className={`hover:underline ${activeSection === "contact" ? "text-link font-bold" : "text-link"}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
