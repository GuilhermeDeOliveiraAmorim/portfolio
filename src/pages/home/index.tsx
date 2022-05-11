import Bio from "components/bio";
import Skills from "components/skills";
import StyleHome from "./Home.module.scss";

export default function Home() {
    return (
        <div className={StyleHome.home}>
            <div className={StyleHome.home__item_l}>
                <Skills />
            </div>
            <div className={StyleHome.home__item_r}>
                <Bio />
            </div>
        </div>
    );
}
