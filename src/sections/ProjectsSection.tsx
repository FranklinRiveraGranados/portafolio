import { projects } from '../constants';

export default function ProjectsSection() {
  return (
    <section className="w-full bg-[#161719] text-white px-4 py-16 flex flex-col items-center" id='proyectos'>
      <span className="text-[#2CB67D] text-sm md:text-base font-medium uppercase">Proyectos</span>
      <span className="text-2xl md:text-4xl font-semibold mt-2 text-center">Mis proyectos destacados</span>

      <div className="w-full max-w-5xl mt-12 flex flex-col gap-16">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`grid gap-10 md:grid-cols-2 border-b border-[#272829] pb-12 ${
                !isEven ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Text */}
              <div className="flex flex-col gap-4 md:max-w-md">
                <span className="text-[#2CB67D] text-sm font-medium uppercase">{project.rol}</span>
                <span className="text-white text-2xl font-semibold">{project.name}</span>
                <p className="text-[#c0bdbd] text-[15px] font-light">{project.description}</p>

                <div className="flex flex-wrap gap-4 px-4 py-2 mt-2 rounded-full bg-[#1c1d1d] border border-[#28292a] w-fit">
                  {project.tech.map((tech, i) => (
                    <div key={i} className="text-xs text-[#c0bdbd] font-light">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="w-full">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
