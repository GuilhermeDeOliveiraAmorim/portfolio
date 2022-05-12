import Skill from "./skill";
import StyleSkills from "./Skills.module.scss";

interface Props {
    hue: number;
    saturation: number;
}

export default function Skills(props: Props) {
    const { hue, saturation } = props;
    const skills = [
        { type: "PHP", level: 65 },
        { type: "Java", level: 60 },
        { type: "Python", level: 30 },
        { type: "Node", level: 20 },
        { type: "SCSS", level: 70 },
        { type: "JavaScript", level: 60 },
        { type: "React", level: 50 },
        { type: "TypeScript", level: 40 },
    ];
    return (
        <div className={StyleSkills.skills}>
            <div>Foto</div>
            {skills.map((skill, index) => (
                <Skill type={skill.type} level={skill.level} index={index} hue={hue} saturation={saturation} />
            ))}
        </div>
    );
}
