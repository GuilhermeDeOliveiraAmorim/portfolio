import { Link } from "react-router-dom";
import ImgProject from "./img-project";
import StyleProject from "./Project.module.scss";

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
            <h3 className={StyleProject.h3}>{title}</h3>
            <p className={StyleProject.p}>{description}</p>
            <Link to={git_path} className={StyleProject.p}>
                Git Path
            </Link>
        </>
    );
}
