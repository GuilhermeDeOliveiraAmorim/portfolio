import StyleHome from "./Home.module.scss";

export default function Home() {
    return (
        <div className={StyleHome.home}>
            <div className={StyleHome.perfil}>
                PERFIL
            </div>
            <div className={StyleHome.menu}>
                MENU
            </div>
            <div className={StyleHome.content}>
                CONTENT
            </div>
        </div>
    )
}