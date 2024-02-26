import "../styles/Section.css"
import { technologies } from "../constants"
import file from "../assets/icons/file.svg"

export default function Section(){

    const handleDownloadPdf = () => {
    
        const pdfUrl = 'cv.pdf'

    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl
    downloadLink.download = 'cv-franklin-rivera-granados.pdf'
    downloadLink.click()
    }

    return(
        <div className="container-section">
            <div>
                Franklin Rivera
            </div>
            <div>
                Software Developer
            </div>
            <span>Full Stack React & Express</span>
            <div className="button" onClick={handleDownloadPdf}>
                <img src={file} alt="" /> Descargar CV
            </div>

            <div className="container-tech">
                {
                    technologies.map(techn => {
                        return(
  
                                <img src={techn.icon} alt="" key={techn.name}/>
 
                        )
                    })
                }
            </div>
        </div>
    )
}