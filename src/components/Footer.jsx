import "../styles/Footer.css"
import { social } from "../constants"

export default function Footer(){

    return(
        <div className="container-footer">
            <div className="footer">
                <p>
                    Developed by Franklin Rivera
                </p>
                <div className="container-social">
                    {
                        social.map(s => {
                            return(
                                    <a href={s.link} key={s.name} target="_blank">
                                        <img src={s.icon} alt="" />
                                    </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}