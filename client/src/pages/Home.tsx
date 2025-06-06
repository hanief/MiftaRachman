import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Abstract from "@/components/Abstract";
import Education from "@/components/Education";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Teaching from "@/components/Teaching";
import Metrics from "@/components/Metrics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100 text-primary font-serif min-h-screen py-4 sm:py-8 px-3 sm:px-5">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-gray-200 shadow-lg rounded-sm overflow-hidden mx-auto">
          <Header />
          <Navigation />

          <main className="px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
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
                <Metrics />
                <Contact />
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}
