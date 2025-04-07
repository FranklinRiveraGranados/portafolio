import { technologies } from '../constants';
import file from '../assets/icons/file.svg';

export default function HeroSection() {
  const handleDownloadPdf = () => {
    const pdfUrl = 'cv.pdf';
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = 'cv-franklin-rivera-granados.pdf';
    downloadLink.click();
  };

  return (
    <section className="bg-[#1c1d1e] py-20 px-4 flex flex-col items-center gap-4 text-white text-center">
      <div className="text-4xl md:text-6xl font-medium">Franklin Rivera</div>
      <div className="text-3xl md:text-5xl font-normal text-[#2CB67D]">Software Developer</div>
      <span className="text-sm md:text-base text-gray-400 mt-2">Desarrollador Backend/Frontend & DevOps</span>

      <button
        onClick={handleDownloadPdf}
        className="mt-4 bg-[#293548] px-6 py-3 rounded-lg text-sm md:text-base font-light flex items-center gap-2 hover:opacity-80 transition"
      >
        <img src={file} alt="cv" className="h-5" />
        Descargar CV
      </button>

      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {technologies.map((techn) => (
          <img src={techn.icon} alt={techn.name} key={techn.name} className="h-6" />
        ))}
      </div>
    </section>
  );
}
