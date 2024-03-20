import "../styles/Projects.css"
import { projects } from "../constants"

export default function Projects(){

    return(
        <div className="container-projects">
            <span className="projects-title">Proyectos</span>
            <span className="projects-subtitle">Mis proyectos destacados</span>
                <div>
                {
                    projects.map((project, index) => {
                        return(
                                <div key={index}>
                                {
                                    index % 2 === 0 ?
                                    <div className="project">
                                        <div className="project-left div1">
                                            <span className="projects-title">{project.rol}</span>
                                            <span className="projects-subtitle">{project.name}</span>
                                            <p>{project.description}</p>

                                            <div className="project-tech">
                                                {
                                                    project.tech.map((p, i) => {
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
                                            <img src={project.image} alt=""/>
                                        </div>
                                    </div>
                                    :
                                    <div className="project">
                                        <div className="project-right">
                                            <img src={project.image} alt=""/>
                                        </div>
                                        <div className="project-left">
                                            <span className="projects-title">{project.rol}</span>
                                            <span className="projects-subtitle">{project.name}</span>
                                            <p>{project.description}</p>

                                            <div className="project-tech">
                                                {
                                                    project.tech.map((p, i) => {
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
                                }
                                </div>
                        )
                    })
                }
                </div>
        </div>
    )
}