import StyleSkill from "./Skill.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    icon: any;
    percentage: number;
}

export default function Skill(props: Props) {
    const { icon, percentage } = props;
    return (
        <div className={StyleSkill.skill}>
            <div className={StyleSkill.icon_box}>
                <FontAwesomeIcon icon={icon} className={StyleSkill.icon} />
            </div>
            <div className={StyleSkill.percentage}>
                {percentage}%
            </div>
        </div>
    )
}