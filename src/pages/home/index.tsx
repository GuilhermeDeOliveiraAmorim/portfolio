import Button from "components/menu/button";
import Credentials from "components/perfil/credentials";
import Photo from "components/perfil/photo";
import Skills from "components/perfil/skills";
import StyleHome from "./Home.module.scss";
import { faLinkedin, faGithubSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import Commits from "components/perfil/commits";

export default function Home() {
    return (
        <div className={StyleHome.home}>
            <div className={StyleHome.perfil}>
                <Photo />
                <Credentials />
                <Skills />
                <Commits />
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