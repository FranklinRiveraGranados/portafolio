import "../styles/Experience.css"
import { company } from "../constants"

export default function Experience(){
    return(
        <div className="container-experience item" id="experiencia">
            <span className="experience-title">Experiencia Laboral</span>
            <div className="experience">
                <div className="experience-header">
                    {/*<div className="circle"></div>*/}
                    <img src={company[0].icon} />
                    <div className="rol-company">
                        <span>Programador Frontend</span>
                        <span> - </span>
                        <span>CTIC</span>
                    </div>
                </div>
                <div className="experience-section">
                    <div className="time">Junio 2022 - Diciembre 2023</div>
                    <li>
                        Lideré el desarrollo frontend de las páginas web, 
                        aplicando buenas prácticas de programación. {/* para lograr un código limpio y mantenible*/}
                    </li>
                    <li>
                        Integré eficientemente las páginas web con APIs, permitiendo la visualización de datos. {/*en tiempo real de datos, descarga de datos y generación de
                        gráficos históricos.*/}
                    </li>
                    <li>
                        Trabajé en estrecha colaboración con equipos multidisciplinarios.{/* para garantizar la alineación de los desarrollos con los objetivos y la visión
                        del proyecto.*/}
                    </li>
                </div>
            </div>
        </div>
    )
}