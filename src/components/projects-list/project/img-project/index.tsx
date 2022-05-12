import StyleImgProject from "./ImgProject.module.scss";

interface Props {
    imgProject: string;
}

export default function ImgProject(props: Props) {
    const { imgProject } = props;

    const backgroundImageProject = {
        backgroundImage: `url(${imgProject})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    };

    return (
        <div
            style={backgroundImageProject}
            className={StyleImgProject.imgProject}
        />
    );
}
