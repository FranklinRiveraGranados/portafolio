import "../styles/About.css"

export default function About(){

    return(
        <div className="container-about item" id="sobremi">
            <span className="about-title">Sobre mí</span>
            <span className="about-subtitle">Franklin Rivera Granados</span>

            <div className="desc-prof">
                <div>
                    <p>
                    Desarrollador de software especializado en aplicaciones web Full Stack con tecnologías como React, Express, MongoDB, Node.js, etc.
                    </p>
                    <p>
                        Soy bachiller en Ciencia de la Computación y estudio inglés desde enero de 2024.
                    </p>
                </div>
                <div className="profession">
                    <div>
                        <h3>Ciencia de la Computación</h3>
                        <p>Bachiller en la Universidad Nacional de Ingeniería</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}