import { experiences } from "../constants";

export default function Experience() {

  return (
    <section id="experiencia" className="w-full bg-[#161719] text-white px-4 md:px-10 py-16 flex flex-col items-center font-sans">
      <span className="text-[#2CB67D] text-sm md:text-base font-semibold uppercase tracking-wide">
        Experiencia Laboral
      </span>

      <div className="w-full max-w-5xl mt-12 flex flex-col gap-12 relative">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-10">
            {/* Línea vertical timeline */}
            <div className="absolute top-0 left-3 h-full w-0.5 bg-[#2CB67D]/30"></div>

            {/* Punto de inicio */}
            <span className="absolute left-0 top-1.5 w-4 h-4 bg-[#2CB67D] rounded-full border-2 border-[#161719]" />

            <div className="flex items-center gap-4 mb-2">
              <img src={exp.icon} alt={`Logo de ${exp.empresa}`} className="w-8 h-8 rounded-full" />
              <div className="flex flex-wrap items-center gap-1 text-lg font-bold">
                <span>{exp.rol}</span>
                <span className="text-gray-400">-</span>
                <span className="text-[#2CB67D] font-semibold">{exp.empresa}</span>
              </div>
            </div>

            <div className="ml-2 pl-4 border-l-2 border-[#373839] text-[15px] text-gray-300">
              <div className="text-gray-400 font-semibold mb-3">{exp.fecha}</div>
              <ul className="list-disc list-inside space-y-2">
                {exp.tareas.map((tarea, j) => (
                  <li key={j}>{tarea}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
