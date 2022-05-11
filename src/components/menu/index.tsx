import { Link } from "react-router-dom";
import StyleMenu from "./Menu.module.scss";

export default function Menu() {
  return (
    <nav className={StyleMenu.nav}>
      <ul className={StyleMenu.nav__ul}>
        <li className={StyleMenu.nav__li}>
          <Link to="/">Home</Link>
        </li>
        <li className={StyleMenu.nav__li}>
          <Link to="/projects" >Projects</Link>
        </li>
        <li className={StyleMenu.nav__li}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
