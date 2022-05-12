import Skill from "./skill";
import StyleSkills from "./Skills.module.scss";

interface Props {
    hue: number;
    saturation: number;
}

export default function Skills(props: Props) {
    const { hue, saturation } = props;
    const skills = [
        { type: "HTML", level: 99 },
        { type: "CSS", level: 98 },
        { type: "JavaScript", level: 87 },
        { type: "jQuery", level: 92 },
        { type: "BootStrap", level: 90 },
        { type: "Photoshop", level: 100 },
        { type: "Angular.js", level: 16 },
        { type: "React.js", level: 25 },
        { type: "PHP", level: 36 },
        { type: "Ruby", level: 11 },
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
