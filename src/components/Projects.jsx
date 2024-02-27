import "../styles/Projects.css"
import { projects } from "../constants"

export default function Projects(){

    return(
        <div className="container-projects">
            <span className="projects-title">Proyectos</span>
            <span className="projects-subtitle">Mis proyectos destacados</span>

            <div>
            <div className="project">
                <div className="project-left div1">
                    <span className="projects-title">FullStack</span>
                    <span className="projects-subtitle">Resume ia</span>
                    <p>
                        Resume ia es una aplicación para resumir a texto un video de Youtube solo enviando el link y además de permite copiar el resumen.
                    </p>

                    <div className="project-tech">
                        {
                            projects[0].tech.map((p, i) => {
                                return(
                                    <div key={i}>
                                        {p}
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
                <div className="project-right div2">
                    <img src={projects[0].image} alt=""/>
                </div>
            </div>
            <div className="project">
                <div className="project-right">
                    <img src={projects[1].image} alt=""/>
                </div>
                <div className="project-left">
                    <span className="projects-title">Frontend</span>
                    <span className="projects-subtitle">Smart Campus</span>
                    <p>
                    Smart Campus es una aplicación que engloba proyectos como Calidad del Aire, Smart Parking, Control de Aforo, etc.
                    Esto permite la gestión y optimización de recursos en el campus de la UNI.
                    </p>

                    <div className="project-tech">
                        {
                            projects[1].tech.map((p, i) => {
                                return(
                                    <div key={i}>
                                        {p}
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
            <div className="project">
                <div className="project-left div1">
                    <span className="projects-title">Backend</span>
                    <span className="projects-subtitle">CRUD</span>
                    <p>
                        CRUD es una aplicación que permite registrar, eliminar, actualizar y editar datos de usuarios y notas.
                    </p>

                    <div className="project-tech">
                        {
                            projects[2].tech.map((p, i) => {
                                return(
                                    <div key={i}>
                                        {p}
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
                <div className="project-right div2">
                    <img src={projects[2].image} alt=""/>
                </div>
            </div>
            </div>
        </div>
    )
}