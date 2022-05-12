import ProjectsList from 'components/projects-list';
import StyleProjects from './Projects.module.scss';

export default function Projects() {
    return (
        <div className={StyleProjects.projects}>
            <ProjectsList />
        </div>
    )
}