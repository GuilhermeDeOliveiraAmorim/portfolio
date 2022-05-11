import { Link } from "react-router-dom";
import StyleMenu from "./Menu.module.scss";

export default function Menu() {
    const rotas = [
        {
            label: "Home",
            to: "/",
        },
        {
            label: "Projects",
            to: "/projects",
        },
        {
            label: "Contact",
            to: "/contact",
        },
    ];
    return (
        <nav className={StyleMenu.menu}>
            <ul className={StyleMenu.menu__list}>
                {rotas.map((rota, index) => (
                    <li key={index} className={StyleMenu.menu__link}>
                        <Link to={rota.to}>{rota.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
