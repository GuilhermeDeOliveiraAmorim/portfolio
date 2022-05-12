import { Link } from "react-router-dom";
import ImgProject from "./img-project";

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
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={git_path} >
                Git Path
            </Link>
        </>
    );
}
