import StyleSkills from "./Skills.module.scss";
import Commits from "./commits";

export default function Skills() {
    return (
        <div className={StyleSkills.skills}>
            <Commits />
        </div>
    )
}