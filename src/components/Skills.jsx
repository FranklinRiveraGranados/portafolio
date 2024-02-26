import "../styles/Skills.css"
import { skills } from "../constants"

export default function Skills(){
    return(
        <div className="container-skills item" id="skills">
            <span className="skills-title">Skills</span>
            <div className="skills">
                {
                    skills.map((s, i) => {
                        return(
                            <div key={i}>
                                <p>{s}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}