import projects from "data/projects.json";
import Project from "./project";
import StyleProjectsList from "./ProjectsList.module.scss";

export default function ProjectsList() {
    return (
        <div className={StyleProjectsList.projects_list}>
            {projects.map((project) => (
                <Project
                    id={project.id}
                    git_path={project.git_path}
                    description={project.description}
                    photo={project.photo}
                    title={project.title}
                />
            ))}
        </div>
    );
}
