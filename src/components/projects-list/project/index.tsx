import { Link } from "react-router-dom";
import ImgProject from "./img-project";
import StyleProject from "./Project.module.scss";
import { VscLinkExternal } from "react-icons/vsc";

interface Props {
    id: string,
    title: string,
    description: string,
    photo: string,
    git_path: string
}

export default function Project(props: Props) {

    const { title, description, photo, git_path } = props;

    return (
        <>
            <ImgProject imgProject={photo} />
            <h3 className={StyleProject.card__h3}>{title}</h3>
            <p className={StyleProject.card__p}>{description}</p>
            <Link to={git_path} className={StyleProject.card__a}>
                 Git Path <VscLinkExternal />
            </Link>
        </>
    );
}
