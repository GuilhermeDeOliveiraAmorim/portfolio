import Button from "components/menu/button";
import Credentials from "components/perfil/credentials";
import Photo from "components/perfil/photo";
import Skills from "components/perfil/skills";
import StyleHome from "./Home.module.scss";
import { faLinkedin, faGithubSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { faUser, faBriefcase, faGraduationCap, faCertificate } from '@fortawesome/free-solid-svg-icons'
import Commits from "components/perfil/commits";
import Content from "components/content";

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
                <div>
                    <Button icon={faUser} />
                    <Button icon={faBriefcase} />
                    <Button icon={faGraduationCap} />
                    <Button icon={faCertificate} />
                </div>
                <div>
                    <Button icon={faLinkedin} />
                    <Button icon={faGithubSquare} />
                    <Button icon={faWhatsappSquare} />
                </div>
            </div>
            <div className={StyleHome.content}>
                <Content />
            </div>
        </div>
    )
}