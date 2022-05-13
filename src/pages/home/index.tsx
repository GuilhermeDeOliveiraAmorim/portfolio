import Credentials from "components/perfil/credentials";
import Photo from "components/perfil/photo";
import StyleHome from "./Home.module.scss";

export default function Home() {
    return (
        <div className={StyleHome.home}>
            <div className={StyleHome.perfil}>
                <Photo />
                <Credentials />
            </div>
            <div className={StyleHome.menu}>
                
            </div>
            <div className={StyleHome.content}>
                
            </div>
        </div>
    )
}