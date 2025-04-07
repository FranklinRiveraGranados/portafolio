// src/sections/Skills.tsx
import { skills } from '../constants';

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full bg-[#161719] text-white px-4 py-16 flex flex-col items-center">
      <span className="text-[#2CB67D] text-sm md:text-base font-medium uppercase">Skills</span>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8 w-full max-w-5xl">
        {skills.map((s, i) => (
          <div
            key={i}
            className="flex justify-center items-center text-center py-3 px-2 bg-[#dbe0e409] border border-[#373839] rounded-lg text-[#dedcdc] text-sm font-light"
          >
            <p>{s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
