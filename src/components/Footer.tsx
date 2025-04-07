import { social } from '../constants';

export default function Footer() {
  return (
    <footer className="border-t border-[#202020] w-full flex justify-center items-center bg-[#161719] px-4 py-10">
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-[#c7c5c580] text-center md:text-left">
          Desarrollado por Franklin Rivera Granados
        </p>
        <div className="flex gap-6">
          {social.map((s, i) => (
            <a
              key={s.name}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:shadow-[0px_0px_10px_5px_rgba(255,255,255,0.1)]"
            >
              <img
                src={s.icon}
                alt={s.name}
                className={`h-[25px] grayscale hover:grayscale-0 transition ${
                  i === 1 ? 'opacity-30 hover:shadow-[0px_0px_10px_5px_rgba(255,255,255,0.3)]' : ''
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
