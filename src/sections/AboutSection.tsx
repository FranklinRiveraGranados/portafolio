export default function About() {
    return (
      <section id="sobremi" className="w-full bg-[#161719] text-white px-4 py-16 flex flex-col items-center">
        <div className="w-full max-w-5xl flex flex-col gap-6">
          <span className="text-[#2CB67D] text-sm md:text-base font-medium uppercase">Sobre mí</span>
          <span className="text-2xl md:text-4xl font-semibold">Franklin Rivera Granados</span>
  
          <div className="grid md:grid-cols-2 gap-10 text-[#cbcaca] text-[15px] font-light">
            <div className="space-y-4">
              <p>
                Desarrollador de software especializado en aplicaciones web Full Stack con tecnologías como React, Express, MongoDB, Node.js, etc.
              </p>
              <p>
                Soy bachiller en Ciencia de la Computación y estudio inglés desde enero de 2024.
              </p>
            </div>
  
            <div className="flex flex-col gap-4">
              <div className="bg-[#dbe0e409] border border-[#373839] rounded-lg p-5">
                <h3 className="text-base font-semibold mb-1">Ciencia de la Computación</h3>
                <p className="text-sm font-light text-[#cbcbcb]">Bachiller en la Universidad Nacional de Ingeniería</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
  