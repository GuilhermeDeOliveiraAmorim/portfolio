import StyleSkill from "./Skill.module.scss";

interface Props {
    type: string;
    level: number;
    index: number;
    hue: number;
    saturation: number;
}

export default function Skill(props: Props) {
    const { level, type, index, hue, saturation } = props;
    return (
        <div className={StyleSkill.skills}>
            <li
                key={type}
                style={{
                    width: `${level}%`,
                    backgroundColor: `hsl(${hue}, ${saturation}%, ${
                        100 / (index + 3.5)
                    }%)`,
                }}
            >
                <p>
                    {type}
                </p>
            </li>
        </div>
    );
}
