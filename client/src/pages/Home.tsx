import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Abstract from "@/components/Abstract";
import Education from "@/components/Education";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Teaching from "@/components/Teaching";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-background text-primary font-serif">
      <Header />
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-6 lg:px-10 py-8">
        <Abstract />
        <Education />
        
        <div className="md:flex md:gap-8">
          {/* Left column (Research and Publications) */}
          <div className="md:w-3/5">
            <Research />
            <Publications />
          </div>
          
          {/* Right column (Teaching, Awards, Contact) */}
          <div className="md:w-2/5">
            <Teaching />
            <Awards />
            <Contact />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
