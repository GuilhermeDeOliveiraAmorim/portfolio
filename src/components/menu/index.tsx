import StyleMenu from './Menu.module.scss';

export default function Menu() {
    return (
        <nav className={StyleMenu.nav}>
            <ul className={StyleMenu.nav__ul}>
                <li className={StyleMenu.nav__li}>
                    Home
                </li>
                <li className={StyleMenu.nav__li}>
                    Projects
                </li>
                <li className={StyleMenu.nav__li}>
                    Contact
                </li>
            </ul>
        </nav>
    );
}