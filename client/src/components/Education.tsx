import { NottinghamLogo, GadjahMadaLogo } from "./UniversityLogos";

export default function Education() {
  return (
    <section id="education" className="mb-12">
      <h2 className="section-title">Education</h2>
      
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="min-w-[60px] md:min-w-[80px]">
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-gray-100 rounded-md flex items-center justify-center p-2">
              <NottinghamLogo />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg">University of Nottingham</h3>
            <p className="text-secondary">Doctor of Philosophy - PhD, Genetics</p>
            <p className="text-secondary text-sm">Jan 2018 - Oct 2022</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="min-w-[60px] md:min-w-[80px]">
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-gray-100 rounded-md flex items-center justify-center p-2">
              <GadjahMadaLogo />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg">Universitas Gadjah Mada</h3>
            <p className="text-secondary">Master of Biotechnology - MBiotech, Biotechnology</p>
            <p className="text-secondary text-sm">Sep 2008 - May 2011</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="min-w-[60px] md:min-w-[80px]">
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-gray-100 rounded-md flex items-center justify-center p-2">
              <GadjahMadaLogo />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg">Universitas Gadjah Mada</h3>
            <p className="text-secondary">Bachelor of Science - BS, Animal Sciences</p>
            <p className="text-secondary text-sm">Aug 2004 - 2008</p>
          </div>
        </div>
      </div>
    </section>
  );
}