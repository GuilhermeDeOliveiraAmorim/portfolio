import StyleSkills from "./Skills.module.scss";
import Skill from "./skill";
import { faPython, faFigma, faJs, faJava, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';

export default function Skills() {
    return (
        <div className={StyleSkills.skills}>
            <Skill icon={faPython} percentage={75} />
            <Skill icon={faFigma} percentage={75} />
            <Skill icon={faJs} percentage={75} />
            <Skill icon={faJava} percentage={75} />
            <Skill icon={faPhp} percentage={75} />
            <Skill icon={faReact} percentage={75} />
        </div>
    )
}