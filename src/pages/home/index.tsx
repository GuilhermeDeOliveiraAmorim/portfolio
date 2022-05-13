import Button from "components/menu/button";
import Credentials from "components/perfil/credentials";
import Photo from "components/perfil/photo";
import Skills from "components/perfil/skills";
import StyleHome from "./Home.module.scss";
import { faLinkedin, faGithubSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
    return (
        <div className={StyleHome.home}>
            <div className={StyleHome.perfil}>
                <Photo />
                <Credentials />
                <Skills />
            </div>
            <div className={StyleHome.menu}>
                <Button icon={faLinkedin} />
                <Button icon={faGithubSquare} />
                <Button icon={faWhatsappSquare} />
            </div>
            <div className={StyleHome.content}>
                
            </div>
        </div>
    )
}